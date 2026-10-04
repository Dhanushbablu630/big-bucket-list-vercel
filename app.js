// India trips are grouped by destination so repeat itineraries appear as package options.
// International trips remain saved for a later release, per the owner's request.
import { trips } from "./trip-data.mjs";

const tallyBase = (window.BIG_BUCKET_LIST_TALLY_URL || "").trim();
const tallySlot = document.querySelector("#tally-slot");
const tripGrid = document.querySelector("#trip-grid");
const indiaTrips = trips;
const tallyReady = /^https:\/\/tally\.so\/(?:r|embed)\/[\w-]+(?:[?#].*)?$/i.test(tallyBase);

function loadTallyEmbeds() {
  if (window.Tally?.loadEmbeds) return window.Tally.loadEmbeds();
  let script = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
  if (script) {
    script.addEventListener("load", () => window.Tally?.loadEmbeds(), { once: true });
    return;
  }
  script = document.createElement("script");
  script.src = "https://tally.so/widgets/embed.js";
  script.async = true;
  script.addEventListener("load", () => window.Tally?.loadEmbeds(), { once: true });
  document.body.append(script);
}

function renderTrips() {
  tripGrid.innerHTML = indiaTrips.map((trip, index) => `
    <article class="trip-card">
      <div class="trip-image" data-slideshow>
        <img src="assets/${trip.images[0]}" alt="${trip.alt}" loading="lazy">
        ${trip.images.length > 1 ? `<button class="slide-control slide-prev" type="button" aria-label="Previous ${trip.name} photo">‹</button><button class="slide-control slide-next" type="button" aria-label="Next ${trip.name} photo">›</button><span class="slide-count" aria-live="polite">1 / ${trip.images.length}</span>` : ""}
        <span class="trip-tag">${trip.tag}</span><span class="trip-number">${String(index + 1).padStart(2, "0")}</span>
      </div>
      <div class="trip-body"><p class="trip-kicker">${trip.mood}</p><h3>${trip.name}</h3><p>${trip.blurb}</p>
        <div class="trip-meta"><span>✳ ${trip.detail}</span><span>◷ ${trip.session}</span></div>
        ${trip.packages?.length ? `<div class="trip-options"><b>Trip options</b><ul>${trip.packages.map(item => `<li>${item}</li>`).join("")}</ul></div>` : ""}
        ${trip.templeDetails?.length ? `<details class="trip-extra"><summary>Temple details</summary><ul>${trip.templeDetails.map(item => `<li>${item}</li>`).join("")}</ul>${trip.officialSource ? `<a class="source-link" href="${trip.officialSource}" target="_blank" rel="noreferrer">${trip.sourceLabel} ↗</a>` : ""}</details>` : ""}
        ${trip.nearby ? `<details class="trip-extra"><summary>Nearby places & route notes</summary><p>${trip.nearby}</p></details>` : ""}
        <a class="text-link trip-details-link" href="trips/${trip.slug}/">View ${trip.name} trip details <span>↗</span></a>
        <button class="text-link enquire-trip" type="button">Ask about this trip <span>↗</span></button>
      </div>
    </article>`).join("");
}

function mountTally() {
  if (!tallyReady) return;
  const url = new URL(tallyBase);
  url.pathname = url.pathname.replace(/^\/r\//, "/embed/");
  url.searchParams.set("hideTitle", "1");
  url.searchParams.set("alignLeft", "1");
  url.searchParams.set("dynamicHeight", "1");
  const iframe = document.createElement("iframe");
  iframe.title = "Big Bucket List trip enquiry form";
  iframe.loading = "eager";
  iframe.allow = "payment";
  iframe.setAttribute("data-tally-src", url.toString());
  tallySlot.replaceChildren(iframe);
  loadTallyEmbeds();
}

renderTrips();
tripGrid.addEventListener("click", (event) => {
  const control = event.target.closest(".slide-control");
  if (control) {
    const card = control.closest(".trip-card");
    const trip = indiaTrips[Array.from(tripGrid.children).indexOf(card)];
    const img = card.querySelector(".trip-image img");
    let index = Number(card.dataset.slideIndex || 0);
    index = (index + (control.classList.contains("slide-next") ? 1 : -1) + trip.images.length) % trip.images.length;
    card.dataset.slideIndex = String(index);
    img.src = `assets/${trip.images[index]}`;
    card.querySelector(".slide-count").textContent = `${index + 1} / ${trip.images.length}`;
    return;
  }
  if (event.target.closest(".enquire-trip")) document.querySelector("#enquire").scrollIntoView({ behavior: "smooth" });
});

// Advance each gallery gently; interaction or keyboard focus pauses that card's autoplay.
tripGrid.querySelectorAll(".trip-card").forEach((card) => {
  const index = Array.from(tripGrid.children).indexOf(card);
  const trip = indiaTrips[index];
  if (trip.images.length < 2) return;
  let timer;
  const advance = () => {
    const current = Number(card.dataset.slideIndex || 0);
    const next = (current + 1) % trip.images.length;
    card.dataset.slideIndex = String(next);
    card.querySelector(".trip-image img").src = `assets/${trip.images[next]}`;
    card.querySelector(".slide-count").textContent = `${next + 1} / ${trip.images.length}`;
  };
  const start = () => { clearInterval(timer); timer = setInterval(advance, 5000); };
  const stop = () => clearInterval(timer);
  card.addEventListener("mouseenter", stop);
  card.addEventListener("mouseleave", start);
  card.addEventListener("focusin", stop);
  card.addEventListener("focusout", start);
  start();
});

document.querySelector("#year").textContent = new Date().getFullYear();
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
mountTally();
