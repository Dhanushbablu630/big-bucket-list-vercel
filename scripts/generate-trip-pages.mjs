import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { trips } from "../trip-data.mjs";

const tripsRoot = fileURLToPath(new URL("../trips/", import.meta.url));
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
}[char]));
const formatList = (items = []) => items.map((item) => `<li>${escapeHtml(item)}</li>`).join("\n          ");

for (const trip of trips) {
  const folder = `${tripsRoot}${trip.slug}`;
  await mkdir(folder, { recursive: true });
  const title = `${trip.name} Trips from Hyderabad | Big Bucket List`;
  const description = `Explore ${trip.name} trips from Hyderabad with Big Bucket List. ${trip.blurb} View package options and ask for current itinerary details.`.slice(0, 160).trimEnd();
  const images = trip.images.map((image, index) => `
          <figure><img src="../../assets/${escapeHtml(image)}" alt="${escapeHtml(trip.alt)}${trip.images.length > 1 ? ` — view ${index + 1}` : ""}"${index ? " loading=\"lazy\"" : ""}></figure>`).join("");
  const packages = trip.packages?.length ? `
      <section class="trip-page-section" aria-labelledby="packages-title">
        <p class="eyebrow">PACKAGE OPTIONS</p><h2 id="packages-title">Choose the trip that fits you</h2>
        <ul class="trip-page-list">${formatList(trip.packages)}</ul>
      </section>` : "";
  const templeDetails = trip.templeDetails?.length ? `
      <section class="trip-page-section" aria-labelledby="temples-title">
        <p class="eyebrow">PILGRIMAGE DETAILS</p><h2 id="temples-title">Temples on this journey</h2>
        <ul class="trip-page-list">${formatList(trip.templeDetails)}</ul>
        ${trip.officialSource ? `<p><a href="${escapeHtml(trip.officialSource)}" target="_blank" rel="noreferrer">${escapeHtml(trip.sourceLabel)} ↗</a></p>` : ""}
      </section>` : "";
  const nearby = trip.nearby ? `
      <section class="trip-page-section trip-route-note" aria-labelledby="route-title">
        <p class="eyebrow">ROUTE NOTES</p><h2 id="route-title">Nearby places and extensions</h2><p>${escapeHtml(trip.nearby)}</p>
      </section>` : "";
  const html = `<!doctype html>
<html lang="en-IN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${escapeHtml(description)}">
  <meta name="robots" content="index,follow">
  <meta name="theme-color" content="#f4f0e8">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Big Bucket List">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:locale" content="en_IN">
  <meta name="twitter:card" content="summary">
  <link rel="icon" type="image/png" href="../../assets/big-bucket-list-logo.png">
  <title>${escapeHtml(title)}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../../styles.css">
</head>
<body>
  <header class="site-header">
    <a class="brand" href="../../index.html" aria-label="Big Bucket List home"><img class="brand-logo" src="../../assets/big-bucket-list-logo.png" alt=""><span class="brand-copy"><span class="brand-name">BIG BUCKET LIST</span><small>TRAVEL · EXPLORE · BELONG</small></span></a>
    <nav class="main-nav trip-page-nav" aria-label="Main navigation"><a href="../../index.html#trips">All trips</a><a href="../../index.html#how">How we travel</a><a href="../../index.html#enquire">Enquire</a></nav>
    <a class="nav-cta" href="../../index.html#enquire">Ask about this trip <span>↗</span></a>
  </header>
  <main class="trip-landing section-wrap">
    <nav class="trip-breadcrumb" aria-label="Breadcrumb"><a href="../../index.html">Home</a><span aria-hidden="true">/</span><a href="../../index.html#trips">India trips</a><span aria-hidden="true">/</span><span aria-current="page">${escapeHtml(trip.name)}</span></nav>
    <section class="trip-page-hero">
      <div class="trip-page-copy"><p class="eyebrow">${escapeHtml(trip.tag)}</p><h1>${escapeHtml(trip.name)}</h1><p class="trip-page-lede">${escapeHtml(trip.blurb)}</p><p class="trip-page-origin">Small-group journeys from Hyderabad · ${escapeHtml(trip.session)}</p><a class="button button-dark" href="../../index.html#enquire">Ask about this trip <span>↗</span></a></div>
      <div class="trip-page-gallery">${images}</div>
    </section>
    <div class="trip-page-content">
      <section class="trip-page-section"><p class="eyebrow">THE JOURNEY</p><h2>${escapeHtml(trip.detail)}</h2><p>${escapeHtml(trip.blurb)} The trip page outlines destination options; ask Big Bucket List for the latest itinerary and inclusions before you travel.</p></section>
      ${packages}${templeDetails}${nearby}
      <section class="trip-faq"><h2>Planning this ${escapeHtml(trip.name)} trip</h2><details><summary>How do I get the latest itinerary?</summary><p>Send an enquiry using the form. Big Bucket List can share the current itinerary and session information for the package you select.</p></details><details><summary>Can I ask about a different package or trip session?</summary><p>Yes. Select the closest package in the enquiry form and explain what you have in mind; the team can confirm the available options.</p></details></section>
      <div class="trip-page-cta"><p>Have a destination in mind?</p><h2>Let’s shape the plan around your trip.</h2><a class="button button-yellow" href="../../index.html#enquire">Send a trip enquiry <span>↗</span></a></div>
    </div>
  </main>
  <footer class="site-footer"><a class="brand footer-brand" href="../../index.html"><img class="brand-logo" src="../../assets/big-bucket-list-logo.png" alt=""><span class="brand-copy"><span class="brand-name">BIG BUCKET LIST</span><small>TRAVEL · EXPLORE · BELONG</small></span></a><p class="footer-message">“Choose the destination. We’ll take care of the plan.”</p><div class="footer-contact" aria-label="Contact Big Bucket List"><a href="mailto:bigbucketlisth@gmail.com">bigbucketlisth@gmail.com</a><a href="tel:+918125576370">+91 81255 76370</a><a href="https://www.instagram.com/bigbucketlist.hyd/" target="_blank" rel="noreferrer">@bigbucketlist.hyd ↗</a></div><span class="footer-copyright">© Big Bucket List</span></footer>
</body>
</html>
`;
  await writeFile(`${folder}/index.html`, html, "utf8");
}

console.log(`Generated ${trips.length} static trip pages in ${tripsRoot}`);
