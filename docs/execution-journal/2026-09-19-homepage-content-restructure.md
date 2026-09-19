## 2026-09-19T12:31:00Z - Homepage content restructure

### Goal

Make the homepage explain the network sooner, turn the two-question signup into one coherent module, give completed projects visual evidence, and replace overlapping cadence/experiment sections with a focused near-term programme.

### Changes

- Moved the full civic-tech and AI-gap network definition into the hero's Mission field.
- Reduced “Why this, why now” to the four-line problem statement by removing the three-register explainer and the now-duplicated audience copy.
- Combined the two questions and email signup in one responsive split module with a visible form label and left-aligned signup content.
- Rebuilt “What this has produced” as a compact horizontal photo strip using five documentary images from the prototype-submission asset set.
- Replaced “How this runs” and the six-item experiment grid with one four-item “Coming soon” section.
- Added corpus-backed descriptions for the Agents for Good Hackathon, Liquid Mandate Assembly, Digital Twins Agent Representation, and Hear from AI Experts.
- Kept an Express Interest action on every upcoming item. Each action records an Umami `express-interest` event with the item slug and stores the filed state in local storage.
- Tightened the smallest hero type breakpoint so “Bureaucracy” remains intact at 390px.

### Decisions

- Used a horizontally scrolling, snap-aligned project strip instead of another equal card grid. This keeps each project narrower, makes room for photography, and signals that the body of work extends beyond the first viewport.
- Kept interest filing intentionally lightweight: anonymous analytics for demand and local storage for immediate interface feedback.
- Treated the dates supplied for October and November 2026 as authoritative. The two experiments without dates are labelled “Date forming.”

### Tradeoffs

- The project cards retain the existing evidence copy, so card heights vary slightly with title and description length.
- Interest filing is a demand signal, not a registration flow; it does not collect contact details or create a durable attendee record.
- Documentary JPEGs were kept as static public assets rather than adding an image pipeline or a new dependency.

### Risks

- Umami must be present in production for interest clicks to reach analytics; the helper intentionally no-ops when the tracker is unavailable.
- A horizontal project strip can be less discoverable than a full grid, although the partially visible next card and native scrollbar provide cues.
- Event dates and copy will need updating as programme details become firm.

### Verification

- `npm run type-check` passed.
- `npm run lint` passed.
- `npm run build` passed. The build emitted only existing browser-data age notices and the local Node 25/Vercel Node 24 runtime notice.
- Browser-checked at 1440×1000 and 390×844.
- Confirmed the signup composition, photo strip, two-column and single-column Coming Soon layouts, and mobile hero wrapping.
- Confirmed an Express Interest click changes the label to “Interest filed · stamped” and creates the expected local-storage key.

### Demo Impact

The page now tells a cleaner story: mission and audience first, two practical entry questions plus signup, evidence of what has already been made, then four concrete ways to join what happens next.

### Customer-Facing Context

The new project photos make the work read as lived, public activity rather than a list of concepts. The upcoming programme distinguishes dated events from experiments still being scheduled, while interest analytics give the organiser a bounded signal without implying that a click is a confirmed registration.

### Next Recommended Step

Deploy a preview, review the five image crops on real iOS and Android devices, and confirm that Umami exposes the `item` property for the four `express-interest` events before using the counts to prioritise dates.
