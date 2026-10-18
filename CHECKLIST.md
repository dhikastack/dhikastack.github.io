# Open items

Everything here is visible as a red draft note when the site is opened from
`localhost` or with `?draft=1`. None of it appears on the published site.

When an item is resolved: tick it, delete the matching `data-draft` attribute
from the HTML, and leave the line in place. Nothing gets deleted from this file.

## Blocking nothing, but worth doing

- [x] **CV file wired up and replaced.** `assets/cv/andhika-hafizh-albana-cv.pdf`
      now holds the updated CV you supplied on 18 October 2026, under the same
      filename, so every Download CV action still points at it. Both earlier
      concerns are resolved in that file: the phone number and home area are
      gone, and SankaSpot has been replaced by PurePlate. The CV still lists
      three projects while the site shows five, which is normal and not a
      conflict. The site copy was realigned to this CV in the same change.

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
      the README so the two agree. Note that the updated CV does not mention
      usability testing for PurePlate either; its three bullets stop at
      wireframes and prototypes. Usability testing was kept on the page because
      you confirmed it directly, but say the word and it comes off.

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

- [ ] **Positioning.** The hero still says "UI/UX Designer and Systems Analyst",
      while your stated career path and the Connect cards are UI/UX design and
      research, system analysis, and product design. The updated CV summary now
      leads with Product Design. The hero was left as it is because you set that
      wording deliberately and did not ask to change it, but CV and hero now
      emphasise different things. Decide which one should lead.

- [x] **GPA on a public page.** 3.54 is shown in the About section and matches
      the updated CV, which states a cumulative GPA of 3.54 / 4.00.

- [ ] **Draft notes still in the published HTML.** The `data-draft` attributes
      are invisible on the live site but readable in view-source. You chose to
      leave them for the next correction round. One of them refers to a phone
      number in the CV, which no longer applies now that the CV has been
      replaced, so that note is stale as well as visible.

- [ ] **A/B testing in the skills list.** The updated CV lists A/B Testing as a
      hard skill. No project on the site documents an A/B test, so nothing was
      added to the site for it. Worth either evidencing or leaving off the CV.

## Before publishing, every time

- [ ] Open the published URL and click every navigation item and project link.
- [ ] Confirm no red draft notes appear (they should not: they need localhost or
      `?draft=1`).
- [ ] Confirm the Download CV buttons either work or are still clearly inert.
