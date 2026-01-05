/* =================================================
   CONFIG
================================================ */
const API_KEY = ""; // <-- ADD YOUR PEXELS API KEY HERE

/* =================================================
   APP STATE
================================================ */
let route = "photos"; // current section (photos / videos)
let query = ""; // search text
let page = 1; // pagination
let loading = false; // prevent duplicate requests
const loader = document.getElementById("loader");

/* =================================================
   NAVIGATION (SPA)
================================================ */
function navigate(r, el) {
  route = r;
  page = 1;
  document.getElementById("view").innerHTML = "";
  document
    .querySelectorAll(".nav-link")
    .forEach((n) => n.classList.remove("active"));
  el.classList.add("active");
}

/* =================================================
   SEARCH START
================================================ */
function startSearch() {
  query = document.getElementById("query").value.trim();
  if (!query) return;

  page = 1;
  document.getElementById("view").innerHTML = "";
  loadMore();
}

/* =================================================
   LOAD DATA (INFINITE SCROLL)
================================================ */
function loadMore() {
  if (loading || !query) return;
  loading = true;
  loader.classList.remove("d-none");

  const url =
    route === "photos"
      ? `https://api.pexels.com/v1/search?query=${query}&page=${page}&per_page=15`
      : `https://api.pexels.com/videos/search?query=${query}&page=${page}&per_page=8`;

  fetch(url, { headers: { Authorization: API_KEY } })
    .then((r) => r.json())
    .then((data) => {
      route === "photos"
        ? renderPhotos(data.photos)
        : renderVideos(data.videos);
      page++;
      loading = false;
      loader.classList.add("d-none");
    });
}

/* =================================================
   FORCE DOWNLOAD (NO OPEN IN TAB)
================================================ */
async function forceDownload(url, filename) {
  const res = await fetch(url);
  const blob = await res.blob();
  const blobUrl = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = blobUrl;
  a.download = filename;
  document.body.appendChild(a);
  a.click();

  a.remove();
  URL.revokeObjectURL(blobUrl);
}

/* =================================================
   RENDER PHOTOS (HD / 2K / 4K)
================================================ */
function renderPhotos(items) {
  const view = document.getElementById("view");

  items.forEach((p, i) => {
    view.innerHTML += `
<div class="col-md-4 col-sm-6">
  <div class="card p-2 shadow-sm">
    <img src="${p.src.medium}" class="img-fluid">

    <div class="dropdown mt-2">
      <button class="btn btn-download btn-sm dropdown-toggle w-100" data-bs-toggle="dropdown">
        Download Image
      </button>
      <ul class="dropdown-menu w-100">
        <li><button class="dropdown-item" onclick="forceDownload('${p.src.original}','image-${i}-4k.jpg')">Original / 4K+</button></li>
        <li><button class="dropdown-item" onclick="forceDownload('${p.src.large2x}','image-${i}-2k.jpg')">2K</button></li>
        <li><button class="dropdown-item" onclick="forceDownload('${p.src.large}','image-${i}-hd.jpg')">HD</button></li>
      </ul>
    </div>
  </div>
</div>`;
  });
}

/* =================================================
   RENDER VIDEOS (HD / 2K / 4K)
================================================ */
function renderVideos(items) {
  const view = document.getElementById("view");

  items.forEach((v, i) => {
    // sort by highest resolution
    const files = v.video_files.sort(
      (a, b) => b.width * b.height - a.width * a.height
    );
    const preview = files[files.length - 1];

    let buttons = "";
    files.forEach((f) => {
      let label = "SD";
      if (f.width >= 3840) label = "4K";
      else if (f.width >= 2560) label = "2K";
      else if (f.width >= 1920) label = "HD";

      buttons += `
  <li>
    <button class="dropdown-item"
      onclick="forceDownload('${f.link}','video-${i}-${label}.mp4')">
      ${label} (${f.width}x${f.height})
    </button>
  </li>`;
    });

    view.innerHTML += `
<div class="col-md-6">
  <div class="card p-2 shadow-sm">
    <video controls>
      <source src="${preview.link}" type="video/mp4">
    </video>

    <div class="dropdown mt-2">
      <button class="btn btn-download btn-sm dropdown-toggle w-100" data-bs-toggle="dropdown">
        Download Video
      </button>
      <ul class="dropdown-menu w-100">
        ${buttons}
      </ul>
    </div>
  </div>
</div>`;
  });
}

/* =================================================
   INFINITE SCROLL LISTENER
================================================ */
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300) {
    loadMore();
  }
});
