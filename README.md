# dhikastack.github.io

Personal portfolio of Andhika Hafizh Albana. A static site: plain HTML, CSS and
JavaScript, no build step, no dependencies to install.

Live URL once GitHub Pages is enabled: <https://dhikastack.github.io/>

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
│   ├── js/draft-overlay.js         Development-only notes (see below)
│   ├── fonts/                      Self-hosted OFL fonts
│   ├── img/                        Portrait and project screens
│   └── cv/                         Empty until a web-safe CV is added
├── .nojekyll                       Tells GitHub Pages to serve files as they are
├── CHECKLIST.md                    Unresolved items, kept honest
└── README.md
```

## Previewing locally

No server is strictly required; opening `index.html` in a browser works. To see
it the way GitHub Pages serves it, run a tiny server from this folder:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000/>.

## Draft notes

Unresolved items live in `data-draft` attributes inside the HTML. They are
rendered only when the page is opened from `localhost`, `127.0.0.1`, or with
`?draft=1` in the URL. They never appear on the published site.

When you resolve one, delete its `data-draft` attribute and tick the matching
line in `CHECKLIST.md`. Do not delete checklist lines.

## Fonts

Shrikhand, Shantell Sans and Inter, all SIL Open Font License, self-hosted in
`assets/fonts/`. Nothing is fetched from Google Fonts at runtime, so the site
works offline and makes no third-party requests.

## Content rules this site was built under

- Nothing is stated that the source material does not support. No invented
  research findings, metrics, participant counts or outcomes.
- Team projects say they are team projects, and each role describes only the
  part that was actually handled.
- Every project links to its real evidence: the repository, the Figma file, or
  the specific files that hold the work.
- KFCku and BINUSMAYA carry non-affiliation notices.
