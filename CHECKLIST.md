# Open items

Everything here is visible as a red draft note when the site is opened from
`localhost` or with `?draft=1`. None of it appears on the published site.

When an item is resolved: tick it, delete the matching `data-draft` attribute
from the HTML, and leave the line in place. Nothing gets deleted from this file.

## Blocking nothing, but worth doing

- [x] **CV file wired up.** `assets/cv/andhika-hafizh-albana-cv.pdf` is in place
      and every Download CV action points at it with `download`. Two things
      still need a decision before you publish:
      - The CV lists SankaSpot and omits PurePlate, BINUSMAYA and Authentix,
        so it disagrees with the Projects section of the site.
      - It carries a phone number and home area, which become public and
        scrapable the moment the site is live.
      To fix either, replace the file keeping the same filename. No code change.

- [x] **MAN 3 Bogor years derived.** The timeline now reads 2021 to 2024.
      This is calculated, not quoted: you went straight from MAN 3 Bogor to
      BINUS, the CV puts BINUS at July 2024, and Indonesian senior secondary
      runs three years. Correct it if either assumption is wrong.

- [x] **Agile Explorer resolved.** You supplied the certificate, so the card
      now shows the real image and the real issue date, 30 September 2026.
      The verify link was also corrected: the original link was Credly's
      private earner form, which is why it could not be confirmed earlier.
      It now uses the public /badges/ URL printed on the certificate, and
      that page was checked and names you as the earner.

- [x] **LinkedIn Learning link added.** Built from the certificate ID you gave,
      using LinkedIn Learning's standard certificate URL format. LinkedIn blocks
      automated fetching, so this one was NOT confirmed during the build, unlike
      the three Credly badges. Open it once yourself.

## Project evidence

- [ ] **Timeless Cuisine diagrams.** All six are linked to their original images
      in the repository rather than shown inline, because the build could not
      download from GitHub's attachment host. To embed them, save each into
      `assets/img/timeless/` and swap the link for an `img` tag.

- [ ] **Higher-resolution project screens.** The screens on the site were
      extracted from the portfolio PDF: roughly 450x940 px for phone screens and
      1062x668 px for the Timeless screen. Sharp enough at current display size.
      Figma exports would be needed if any of them is ever shown larger.

- [ ] **PurePlate method mismatch.** The site says usability testing, which you
      confirmed is correct. The repository README still says A/B testing. Update
      the README so the two agree.

- [ ] **BINUSMAYA team size.** Not recorded anywhere supplied, so the page says
      "Team academic project" without a number.

- [ ] **BINUSMAYA privacy.** The two screens used on the site were checked and
      are clean: they show your own first name and a `(USERNAME)` placeholder.
      The separate `Figma preview.png` in that repository does show a lecturer's
      name, so it must be cropped before any screen from it is published here.

- [ ] **Authentix live demo.** Enabling GitHub Pages on the Authentix repository
      would give that case study a working demo link at
      `https://dhikastack.github.io/Authentix/`.

## Copy decisions to revisit

- [ ] **Role cards in Connect.** The three sub-labels ("or UX Researcher",
      "Analysis & modelling", "End-to-end product") were written during the build
      and are easy to change.

- [ ] **Positioning.** The hero says "UI/UX Designer and Systems Analyst" while
      the Connect section lists UI/UX Designer, Systems Analyst and Product
      Designer. Intentional, but worth a second look before applying anywhere.

- [ ] **GPA on a public page.** 3.54 is shown in the About section. Confirm it
      matches your latest academic record, or remove the tile.

## Before publishing, every time

- [ ] Open the published URL and click every navigation item and project link.
- [ ] Confirm no red draft notes appear (they should not: they need localhost or
      `?draft=1`).
- [ ] Confirm the Download CV buttons either work or are still clearly inert.
