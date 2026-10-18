# dhikastack.github.io

Personal portfolio of Andhika Hafizh Albana. A static site: plain HTML, CSS and
JavaScript, with no build step and no dependencies to install.

Live at <https://dhikastack.github.io/>

## Structure

```
.
├── index.html                      Home, About, Projects, Credentials, Connect
├── projects/
│   ├── timeless-cuisine.html       Systems analysis case study
│   ├── kfcku-redesign.html
│   ├── pureplate.html
│   ├── binusmaya-redesign.html
│   └── authentix.html
├── assets/
│   ├── css/style.css               The whole stylesheet
│   ├── js/main.js                  Mobile nav, project filter, scroll reveal
│   ├── fonts/                      Self-hosted OFL fonts
│   ├── img/                        Portrait, certificates, project screens
│   └── cv/                         Downloadable CV
├── robots.txt                      Crawl rules
├── .nojekyll                       Serve files as they are, no Jekyll pass
└── README.md
```

## Previewing locally

Opening `index.html` in a browser works. To see it the way GitHub Pages serves
it, run a small server from this folder:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000/>.

## Cache versioning

`index.html` and the project pages request the stylesheet, the script and the
CV with a `?v=` query, for example `assets/css/style.css?v=3`. GitHub Pages
caches each file independently, so without this a returning visitor can receive
new markup alongside a previous stylesheet. Raise the number whenever one of
those files changes, in every page that links to it.

## Fonts

Shrikhand, Shantell Sans and Inter, all under the SIL Open Font License,
self-hosted in `assets/fonts/`. Nothing is fetched from Google Fonts at
runtime, so the site makes no third-party requests and works offline.

## Content rules this site was built under

- Nothing is stated that the source material does not support. No invented
  research findings, metrics, participant counts or outcomes.
- Team projects say they are team projects, and each role describes only the
  part that was actually handled.
- Every project links to its real evidence: the repository, the Figma file, or
  the specific files that hold the work.
- KFCku and BINUSMAYA carry non-affiliation notices.
