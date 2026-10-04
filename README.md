# Big Bucket List

A responsive static travel website for Big Bucket List, with India trip collections, destination photo slideshows, package options, temple notes and an embedded Tally enquiry form.

The homepage and 15 destination pages target trip discovery queries such as Coorg trips from Hyderabad and Char Dham Yatra packages. Each destination page has a distinct title and description, crawlable page content, photos, package details and an enquiry path. These improvements help search engines understand the site, but cannot guarantee ranking or indexing.

## Run locally

Open `index.html` in a browser, or run a static server from this folder:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy

The site has no build step. Import the Git repository into Vercel with the project root set to this folder and leave the framework preset as **Other**. Vercel can serve `index.html` and the assets directly.

Destination pages are generated from `trip-data.mjs` by running `node scripts/generate-trip-pages.mjs`. The generated pages are committed under `trips/` so they can be crawled as regular HTML. Run the generator after changing trip data.

Once a production domain is assigned, add that domain to each page's canonical and social URL metadata, generate an absolute-URL `sitemap.xml`, and submit the sitemap in Google Search Console. A domain is needed for correct canonical URLs and sitemap entries.

## Tally

The website embeds `https://tally.so/r/dWB1Xy` from `site-config.js`. The form collects traveller details, destination, trip package and preferred session. Tally submissions remain managed in Tally and its connected Google Sheet. The embed uses Tally's dynamic-height option.

The Tally editor contains a two-column layout intended for wider screens. The public form must be published from Tally before its current live version reflects those editor changes. On narrow screens, Tally columns stack vertically.

## Trips and media

The site currently displays 15 India destination collections. Repeated itineraries are grouped under destination names with package variations. International trip listings are paused for this site version. Images are stored in `assets/`; many are supplied destination photos and some existing generic hero images are AI-generated illustrations.

Temple descriptions link to official tourism or shrine-board references where available. Trip packages are summaries; confirm exact routes and inclusions for each enquiry.

## Contact

- Email: bigbucketlisth@gmail.com
- Instagram: [@bigbucketlist.hyd](https://www.instagram.com/bigbucketlist.hyd/)
- Phone: +91 81255 76370
