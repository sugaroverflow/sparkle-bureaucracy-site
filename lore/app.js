const experiments = [
  {
    id: "verification-queue",
    title: "Verification Queue",
    status: "flagship",
    domain: "X Digital ID",
    summary:
      "A live simulation of identity proofing, refusal, exception handling, and appeal.",
    question:
      "Can a public-service verification ritual become more legible, humane, and contestable without hiding classification and exclusion?",
    collaborators:
      "Good Things Foundation, LOTI, Open Rights Group, Ada Lovelace, Citizens Advice-style frontline evidence.",
    method:
      "Run fake-document cases through baseline and Sparkle Bureaucracy queues, then compare comprehension, dignity, trust, and appeal clarity.",
    evidence:
      "Decision receipts, false reject notes, time in queue states, participant comprehension, practitioner critique.",
    risk:
      "Identity harms are easy to trivialise. Use synthetic cases only and avoid real documents, biometrics, immigration, benefits, or financial data.",
    next:
      "Turn this into a dated 90-minute test plan and ask faculty what practitioner involvement would make it credible.",
    links: [
      ["Experiment log", "./experiments.md"],
      ["Research sprint", "./experiment-research-sprint.md"],
      ["Feedback brief", "./faculty-feedback-brief.md"]
    ]
  },
  {
    id: "data-centre-customs",
    title: "Data Centre Customs",
    status: "warm",
    domain: "X Data Centre",
    summary:
      "A planning-room ritual for AI infrastructure: power, water, grid pressure, local benefit, and consent.",
    question:
      "What would let communities understand, contest, and benefit from AI infrastructure before it becomes invisible?",
    collaborators:
      "LOTI, ODI, Centre for Public Data, Connected by Data, climate and infrastructure groups.",
    method:
      "Host a mock consultation for a fictional London AI compute campus, using maps, benefit claims, objections, and public receipts.",
    evidence:
      "Before and after comprehension, objections that survive, benefit priorities, trust ratings, missing evidence.",
    risk:
      "Can slide into fake consultation or corporate greenwash if no infrastructure practitioner or community critic is present.",
    next:
      "Keep as a strong second flagship and use it when talking to public-data or infrastructure collaborators.",
    links: [
      ["Research sprint", "./experiment-research-sprint.md"],
      ["Prior art", "./prior-art.md"],
      ["Engagement log", "./engagement-log.md"]
    ]
  },
  {
    id: "consultation-customs",
    title: "Consultation Customs",
    status: "warm",
    domain: "Synthetic public voice",
    summary:
      "A protocol for consultations when comments may be AI-assisted, duplicated, paid, or synthetic.",
    question:
      "How should public voice be interpreted when authenticity, volume, affectedness, and substance come apart?",
    collaborators:
      "mySociety, Demos, Involve, Democratic Society, Connected by Data, Ada Lovelace.",
    method:
      "Run a bounded shadow consultation with genuine, AI-assisted, duplicated, and adversarial test submissions.",
    evidence:
      "Reviewer confidence, false positives, false negatives, themes preserved, decision trace, participant trust.",
    risk:
      "The experiment must not punish accessibility, translation, neurodivergent support, or legitimate AI-assisted writing.",
    next:
      "Draft a Public Voice Ledger template and ask faculty whether this is too adversarial for the first run.",
    links: [
      ["Experiment log", "./experiments.md"],
      ["Research sprint", "./experiment-research-sprint.md"],
      ["Prior art", "./prior-art.md"]
    ]
  },
  {
    id: "agent-lab-clerk",
    title: "Agent-Assisted Lab Clerk",
    status: "infrastructure",
    domain: "Diary operations",
    summary:
      "A human-approved note triage workflow for turning field notes into diary drafts and experiment updates.",
    question:
      "Can an agent improve public learning without flattening voice, inventing links, or publishing private material?",
    collaborators:
      "Faculty reviewers, Claw-style agent builders, Newspeak House peers, diary maintainers.",
    method:
      "Classify notes, draft weekly entries, preserve source links, and require human approval before public publication.",
    evidence:
      "Notes classified, diary entries drafted, useful prior-art leads found, rejected suggestions, time saved.",
    risk:
      "Too meta if treated as the whole prototype. It should operate the lab, not replace the civic-facing experiment.",
    next:
      "Use it for ten days and keep a visible log of what it got wrong.",
    links: [
      ["Technical notes", "./technical-notes.md"],
      ["Weekly entry", "./weekly/2026-06-19.md"],
      ["Faculty feedback", "./faculty-feedback.md"]
    ]
  },
  {
    id: "hybrid-delegation",
    title: "Hybrid Delegation Assembly",
    status: "warm",
    domain: "Liquid democracy",
    summary:
      "A bounded community decision using paper ballots, digital delegation, revocation, and public tallying.",
    question:
      "How do paper and digital rituals affect perceived legitimacy, participation, and trust in delegated decisions?",
    collaborators:
      "Newspeak House community, democratic participation practitioners, civic technologists.",
    method:
      "Run a low-stakes assembly where participants can vote directly, delegate, revoke, and inspect the count.",
    evidence:
      "Turnout, delegation patterns, objections, trust ratings, audit notes, paper versus digital confidence.",
    risk:
      "Voting experiments create legitimacy expectations even when the decision is bounded and low stakes.",
    next:
      "Keep warm for a community decision after the first flagship experiment is scheduled.",
    links: [
      ["Experiment log", "./experiments.md"],
      ["Research sprint", "./experiment-research-sprint.md"],
      ["Submission diary", "./submission-diary.md"]
    ]
  }
];

const state = {
  filter: "all",
  query: "",
  selected: "verification-queue"
};

const list = document.querySelector("#experiment-list");
const detail = document.querySelector("#experiment-detail");
const search = document.querySelector("#experiment-search");
const filters = Array.from(document.querySelectorAll(".filter-button"));
const noteForm = document.querySelector("#note-form");
const noteText = document.querySelector("#note-text");
const noteType = document.querySelector("#note-type");
const noteList = document.querySelector("#note-list");
const clearNotes = document.querySelector("#clear-notes");

function normalise(value) {
  return value.toLowerCase().trim();
}

function matchingExperiments() {
  const query = normalise(state.query);

  return experiments.filter((experiment) => {
    const matchesFilter =
      state.filter === "all" || experiment.status === state.filter;
    const haystack = normalise(
      [
        experiment.title,
        experiment.status,
        experiment.domain,
        experiment.summary,
        experiment.question,
        experiment.collaborators
      ].join(" ")
    );

    return matchesFilter && (!query || haystack.includes(query));
  });
}

function statusLabel(status) {
  if (status === "flagship") return "Flagship";
  if (status === "infrastructure") return "Infrastructure";
  return "Warm";
}

function renderCards() {
  const matches = matchingExperiments();

  if (!matches.some((experiment) => experiment.id === state.selected)) {
    state.selected = matches[0]?.id || experiments[0].id;
  }

  list.innerHTML = matches
    .map(
      (experiment) => `
        <button
          class="experiment-card ${experiment.id === state.selected ? "is-selected" : ""}"
          type="button"
          data-id="${experiment.id}"
        >
          <span class="card-top">
            <span class="pill ${experiment.status}">${statusLabel(experiment.status)}</span>
            <span>${experiment.domain}</span>
          </span>
          <h3>${experiment.title}</h3>
          <p>${experiment.summary}</p>
        </button>
      `
    )
    .join("");

  if (matches.length === 0) {
    list.innerHTML = `<p class="empty-note">No experiments match that search.</p>`;
  }

  renderDetail();
}

function renderDetail() {
  const experiment =
    experiments.find((candidate) => candidate.id === state.selected) ||
    experiments[0];

  detail.innerHTML = `
    <div class="detail-top">
      <span class="pill ${experiment.status}">${statusLabel(experiment.status)}</span>
      <span>${experiment.domain}</span>
    </div>
    <h3>${experiment.title}</h3>
    <p>${experiment.question}</p>
    <ul class="detail-list">
      <li>
        <strong>Likely collaborators</strong>
        <span>${experiment.collaborators}</span>
      </li>
      <li>
        <strong>Smallest credible method</strong>
        <span>${experiment.method}</span>
      </li>
      <li>
        <strong>Evidence to collect</strong>
        <span>${experiment.evidence}</span>
      </li>
      <li>
        <strong>Main risk</strong>
        <span>${experiment.risk}</span>
      </li>
      <li>
        <strong>Next action</strong>
        <span>${experiment.next}</span>
      </li>
    </ul>
    <div class="doc-links">
      ${experiment.links
        .map(([label, href]) => `<a href="${href}">${label}</a>`)
        .join("")}
    </div>
  `;
}

function selectExperiment(id) {
  state.selected = id;
  renderCards();
}

function storedNotes() {
  try {
    return JSON.parse(localStorage.getItem("sparkle-lab-notes") || "[]");
  } catch {
    return [];
  }
}

function saveNotes(notes) {
  localStorage.setItem("sparkle-lab-notes", JSON.stringify(notes));
}

function renderNotes() {
  const notes = storedNotes();

  if (notes.length === 0) {
    noteList.innerHTML =
      '<li class="empty-note">No private notes in this browser yet.</li>';
    return;
  }

  noteList.innerHTML = notes
    .map(
      (note) => `
        <li>
          <strong>${note.type}</strong>
          <span>${note.text}</span>
        </li>
      `
    )
    .join("");
}

list.addEventListener("click", (event) => {
  const card = event.target.closest(".experiment-card");
  if (!card) return;
  selectExperiment(card.dataset.id);
});

search.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderCards();
});

filters.forEach((button) => {
  button.addEventListener("click", () => {
    state.filter = button.dataset.filter;
    filters.forEach((candidate) =>
      candidate.classList.toggle("is-active", candidate === button)
    );
    renderCards();
  });
});

noteForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = noteText.value.trim();
  if (!text) {
    noteText.focus();
    return;
  }

  const notes = storedNotes();
  notes.unshift({
    type: noteType.value,
    text
  });

  saveNotes(notes.slice(0, 8));
  noteText.value = "";
  renderNotes();
});

clearNotes.addEventListener("click", () => {
  localStorage.removeItem("sparkle-lab-notes");
  renderNotes();
});

renderCards();
renderNotes();
