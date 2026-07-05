export type StateSavings = {
  state: string;
  pilot?: boolean;
  medianHome: string;
  typicalDues: string;
  years1to2: string;
  atScale: string;
  totalAtScale: string;
  fiveYearLock: string;
};

export const stateSavings: StateSavings[] = [
  {
    state: "Colorado",
    pilot: true,
    medianHome: "$575,000",
    typicalDues: "~$3,450/yr (~$288/mo)",
    years1to2: "$175 – $310",
    atScale: "+$95 – $175",
    totalAtScale: "$270 – $485",
    fiveYearLock: "$550 – $850",
  },
  {
    state: "Texas",
    medianHome: "$334,000",
    typicalDues: "~$2,000/yr (~$167/mo)",
    years1to2: "$100 – $180",
    atScale: "+$55 – $100",
    totalAtScale: "$155 – $280",
    fiveYearLock: "$320 – $500",
  },
  {
    state: "Florida",
    medianHome: "$417,000",
    typicalDues: "~$3,125/yr (~$260/mo)",
    years1to2: "$160 – $285",
    atScale: "+$110 – $200",
    totalAtScale: "$270 – $485",
    fiveYearLock: "$500 – $780",
  },
  {
    state: "New York",
    medianHome: "$596,000",
    typicalDues: "~$3,575/yr (~$298/mo)",
    years1to2: "$180 – $320",
    atScale: "+$100 – $180",
    totalAtScale: "$280 – $500",
    fiveYearLock: "$570 – $880",
  },
];

export const momentumSteps = [
  {
    episode: "Episode 1",
    title: "The Download",
    action:
      "Attend one Transparency Week session or watch the recording; download the Two-Line Assessment Template.",
    whyLowFriction:
      "No commitment beyond an email address; the value (the template) is delivered immediately and works with or without Commonsure.",
    leadsTo: "An invitation to a free 20-minute \u201cread your own reserve study\u201d session.",
  },
  {
    episode: "Episode 2",
    title: "The Read",
    action: "Book the free reserve-study reading session with a Commonsure representative.",
    whyLowFriction:
      "The board brings a document it already has; Commonsure brings a framework, not a pitch.",
    leadsTo:
      "A documented, board-specific list of where the community's fee burden and value are out of balance — the first personalized proof point.",
  },
  {
    episode: "Episode 3",
    title: "The Baseline",
    action:
      "Commission the pre-MSA board consulting engagement to build the documented 12-month operating baseline required before any savings figure can be discussed.",
    whyLowFriction:
      "It is scoped, priced, and time-boxed — a known cost for a known deliverable, not an open-ended retainer.",
    leadsTo: "A board decision point with real numbers instead of estimates.",
  },
  {
    episode: "Episode 4",
    title: "The Sprint",
    action:
      "Begin the 90-day correction sprint — books audited, reserve study aligned, compliance restored — executed by the licensed consortium partner and quality-assured by Commonsure.",
    whyLowFriction:
      "It has a fixed 90-day clock and a public quality bar (an 85 percent or higher correction QA score) before anything is marketed to homeowners.",
    leadsTo:
      "A board that has watched its own books get cleaner in real time, which is the single strongest trust signal before a five-year commitment.",
  },
  {
    episode: "Episode 5",
    title: "The Certainty Letter",
    action:
      "Sign the Five-Year Certainty management-services agreement; homeowners receive a plain-language \u201cCertainty Letter\u201d explaining exactly what is locked and exactly what will still move.",
    whyLowFriction:
      "By this point the board has experienced four prior steps of the platform delivering exactly what it said it would.",
    leadsTo: "The homeowner-facing advocacy behaviors of the Board Advisory Circle.",
  },
];

export const whatYouGet = [
  {
    title: "Price certainty",
    description: "A known management fee schedule for five years.",
  },
  {
    title: "Cost reduction",
    description: "Lower total HOA spend through portfolio vendor RFPs, insurance pooling, and reserve optimization.",
  },
  {
    title: "Governance repair",
    description: "Auditable books and compliant meetings — the platform provides QA on a 90-day correction sprint.",
  },
  {
    title: "Capital planning",
    description: "A reserve study and funding plan in year one, so fewer surprise assessments later.",
  },
];
