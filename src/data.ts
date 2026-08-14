/* ── NEXUS plan seed data ─────────────────────────────────────────── */

export type Track = {
  id: string;
  name: string;
  color: string;
  tag: string;
  tasks: string[];
};

export const TRACKS: Track[] = [
  {
    id: "build",
    name: "Deep Work — System Build",
    color: "#2fd6b5",
    tag: "4h block",
    tasks: [
      "ATLAS: finish scheduler heartbeat + node registry",
      "ATLAS: write integration tests for job retry logic",
      "FORGE: design wire protocol spec (v0.1 doc)",
      "VECTOR: implement HNSW index prototype",
      "PULSE: ship WebSocket ingestion endpoint",
      "LEDGER: double-entry posting engine, property tests",
      "ORBIT: YAML pipeline parser with schema validation",
      "SENTINEL: feature extraction pipeline for metrics",
      "CIPHER: ratchet key-exchange implementation",
      "BAZAAR: ranking service A/B harness",
    ],
  },
  {
    id: "cp",
    name: "Competitive Programming",
    color: "#ff5c7a",
    tag: "90 min",
    tasks: [
      "Solve 1 CF problem rated 1500–1600 (45 min cap)",
      "Upsolve problem C from last Div.2 contest",
      "Learn: DSU with path compression + 3 drills",
      "Solve 1 CF problem rated 1600–1700",
      "Virtual contest: Div.2 round, 2h, no editorials",
      "Learn: segment tree lazy propagation + 3 drills",
      "Solve 2 CF problems rated 1700",
      "Learn: shortest paths (Dijkstra/Bellman) + 4 drills",
      "Live contest — full effort, then upsolve all misses",
      "Learn: DP on trees + 4 graded drills",
    ],
  },
  {
    id: "math",
    name: "Math Spine",
    color: "#b48cff",
    tag: "60 min",
    tasks: [
      "Linear Algebra L7 — Eigenvalues & eigenvectors",
      "Problem set: characteristic polynomials (8 problems)",
      "Probability L4 — Conditional probability drill",
      "Discrete: graph coloring proofs (3 exercises)",
      "Number Theory: modular inverses problem set",
      "Statistics L5 — MLE derivation by hand",
      "Linear Algebra L8 — Diagonalization + 6 problems",
      "Probability: Bayes' theorem mixed drill (10)",
    ],
  },
  {
    id: "income",
    name: "Income Engine",
    color: "#6fdd8b",
    tag: "2h block",
    tasks: [
      "Freelance: 2h client sprint (ticket board)",
      "Send 3 tailored Upwork proposals",
      "Publish 'How I built ATLAS' article — leads funnel",
      "Freelance: ship milestone 2 deliverable",
      "Pitch retainer to client #2 (draft terms first)",
      "Raise public rate card + update profile",
      "Freelance: 2h client sprint + invoice",
      "Apply to 2 remote junior listings (warm-up reps)",
    ],
  },
  {
    id: "apply",
    name: "Application Craft",
    color: "#5fb0ff",
    tag: "45 min",
    tasks: [
      "Rewrite resume bullets 1–3 with metrics",
      "Write STAR story doc: 'hardest bug' (Google screen)",
      "Build company dossier #1 — Jane Street",
      "System design rep: design a rate limiter (30 min)",
      "Write STAR story doc: 'disagreement' (Amazon LP)",
      "Build company dossier #2 — HRT",
      "Mock behavioral: record 2 answers, self-review",
      "Cold outreach: 5 engineers at target companies",
    ],
  },
  {
    id: "reset",
    name: "Health & Reset",
    color: "#ffb224",
    tag: "daily",
    tasks: [
      "45-min workout (push day)",
      "Sleep by 00:30 — phone out of room",
      "20-min walk, no input (podcasts off)",
      "45-min workout (pull day)",
      "Deep stretch + wrist protocol",
      "Sunday: full review + next-week plan",
    ],
  },
];

export const HABITS = [
  { id: "cf", label: "1 CF problem before noon", trace: "Jane Street / HRT screens", color: "#ff5c7a" },
  { id: "math", label: "20-min math drill", trace: "Quant phone screens", color: "#b48cff" },
  { id: "deep", label: "One ≥90-min deep-work session", trace: "Google / Meta onsites", color: "#2fd6b5" },
];

export type Project = {
  id: string;
  name: string;
  desc: string;
  traces: string[];
  color: string;
  deadline: string;
  deadlineISO: string;
  details: string[];
};

export const PROJECTS: Project[] = [
  {
    id: "atlas", name: "ATLAS", desc: "Distributed task scheduler with leader election and exactly-once dispatch.",
    traces: ["Google", "Microsoft"], color: "#2fd6b5", deadline: "Q2 Y1 · Dec 15, 2026", deadlineISO: "2026-12-15",
    details: ["Raft-style leader election across 3 nodes with split-brain tests", "Exactly-once dispatch proven by a chaos-harness replay suite", "Public write-up: 'Designing ATLAS' + system design diagram set"],
  },
  {
    id: "pulse", name: "PULSE", desc: "Realtime analytics dashboard ingesting 50k events/sec over WebSockets.",
    traces: ["Meta", "Netflix"], color: "#5fb0ff", deadline: "Q3 Y1 · Mar 20, 2027", deadlineISO: "2027-03-20",
    details: ["Backpressure + windowed aggregation at 50k events/sec (load test report)", "Sub-100ms fan-out to 1k connected clients", "Recorded demo: spike injection → live chart recovery"],
  },
  {
    id: "forge", name: "FORGE", desc: "Type-safe RPC framework with codegen and schema evolution.",
    traces: ["Stripe", "Cloudflare"], color: "#ffb224", deadline: "Q4 Y1 · Jun 10, 2027", deadlineISO: "2027-06-10",
    details: ["Codegen CLI: schema → typed client/server stubs in TS + Go", "Breaking-change detector with migration suggestions", "Published to npm with 3 sample services"],
  },
  {
    id: "vector", name: "VECTOR", desc: "Vector search engine — HNSW index, filtering, hybrid ranking.",
    traces: ["OpenAI", "Anthropic"], color: "#b48cff", deadline: "Q6 Y2 · Dec 01, 2027", deadlineISO: "2027-12-01",
    details: ["HNSW from scratch — recall@10 ≥ 0.95 at 1M vectors (benchmark published)", "Pre-filtering without recall collapse + hybrid BM25 fusion", "Technical post: 'HNSW parameters that actually matter'"],
  },
  {
    id: "ledger", name: "LEDGER", desc: "Double-entry payments API with idempotency and audit trails.",
    traces: ["Stripe", "HRT"], color: "#6fdd8b", deadline: "Q7 Y2 · Mar 15, 2028", deadlineISO: "2028-03-15",
    details: ["Zero-drift invariant enforced at the DB layer (property tests)", "Idempotency keys + full double-entry audit log", "Failure-mode doc: 12 ways it breaks and how it doesn't"],
  },
  {
    id: "sentinel", name: "SENTINEL", desc: "Anomaly detection service over time-series infra metrics.",
    traces: ["Amazon", "Datadog"], color: "#ff7849", deadline: "Q9 Y3 · Sep 30, 2028", deadlineISO: "2028-09-30",
    details: ["Seasonal decomposition + z-score ensemble over 10k series", "Alert routing with suppression and dedupe", "Backtest report on public telemetry dataset"],
  },
  {
    id: "orbit", name: "ORBIT", desc: "CI/CD pipeline runner — DAG scheduling, caching, artifacts.",
    traces: ["GitHub", "GitLab"], color: "#45c8e8", deadline: "Q11 Y3 · Mar 01, 2029", deadlineISO: "2029-03-01",
    details: ["DAG scheduler with content-addressed cache (hit-rate report)", "Self-hosted runner pool with spot-instance reclaim handling", "Used by 2 real repos for 30 consecutive days"],
  },
  {
    id: "cipher", name: "CIPHER", desc: "E2E-encrypted chat with double-ratchet and sealed sender.",
    traces: ["Signal", "Meta"], color: "#ff5c7a", deadline: "Q13 Y4 · Sep 15, 2029", deadlineISO: "2029-09-15",
    details: ["Double-ratchet + X3DH implemented against a test vector suite", "Sealed-sender metadata minimization", "Security review write-up: threats, limits, what's out of scope"],
  },
  {
    id: "bazaar", name: "BAZAAR", desc: "Marketplace backend with search ranking and fraud signals.",
    traces: ["Amazon", "Uber"], color: "#9db4ff", deadline: "Q14 Y4 · Dec 01, 2029", deadlineISO: "2029-12-01",
    details: ["Learning-to-rank search with offline NDCG evals", "Realtime fraud scoring (velocity + graph signals)", "Scale write-up: 1M listings, p99 < 80ms"],
  },
];

/* ── daily plan system ────────────────────────────────────────────── */
export type Cat = { id: string; label: string; color: string; icon: string };

export const CATS: Cat[] = [
  { id: "Engineering", label: "Engineering", color: "#ffb224", icon: "cube" },
  { id: "Math", label: "Math", color: "#b48cff", icon: "sigma" },
  { id: "CP", label: "CP", color: "#ff5c7a", icon: "code" },
  { id: "Income", label: "Income", color: "#6fdd8b", icon: "dollar" },
  { id: "Application", label: "Application", color: "#45c8e8", icon: "briefcase" },
  { id: "Admin", label: "Admin", color: "#8e9cc0", icon: "list" },
];

/* weekday → which skills the day addresses (0 = Sunday) */
export const WEEK_SETS: string[][] = [
  ["Admin"],
  ["Engineering", "CP"],
  ["Math", "Engineering"],
  ["CP", "Income"],
  ["Engineering", "Math"],
  ["CP", "Application"],
  ["Engineering", "Income"],
];

export type BankTask = { id: string; cat: string; title: string; detail: string };

export const TASK_BANK: BankTask[] = [
  /* Engineering */
  { id: "eng-1", cat: "Engineering", title: "ATLAS — design the leader-election module", detail: "Open a design doc: node states, election timeout bounds, log replication sketch. Decide how a partitioned minority behaves. Write the 3 failure scenarios you must survive, then translate each into a test name you'll implement later." },
  { id: "eng-2", cat: "Engineering", title: "ATLAS — implement exactly-once dispatch core", detail: "Build the dispatch loop with an idempotency ledger keyed by (task_id, attempt). Add a replay harness: kill the worker mid-dispatch, restart, assert the task ran exactly once. Commit with the harness output pasted in the PR description." },
  { id: "eng-3", cat: "Engineering", title: "Load-test the current project build", detail: "Spin up the load generator against your running service. Push until p99 breaks 200ms, record the curve, and identify the first bottleneck (DB? event loop? GC?). Write a 10-line note: what broke, at what RPS, and the fix you'll ship." },
  { id: "eng-4", cat: "Engineering", title: "Write one section of the project write-up", detail: "Pick the hardest design decision in your current project. Write 400–600 words: the constraint, two rejected alternatives with reasons, and the trade-off you accepted. This becomes interview story #1 for the tracing company." },
  { id: "eng-5", cat: "Engineering", title: "Refactor + test the riskiest module", detail: "Identify the module you'd be afraid to change. Add characterization tests around its current behavior first (no refactoring yet), then refactor in small commits keeping tests green. Goal: you can now change it without fear." },
  { id: "eng-6", cat: "Engineering", title: "Deploy to production and watch it live", detail: "Ship the current build behind a real URL. Watch logs and metrics for 30 minutes under real traffic (even your own). Fix the first error you see, no matter how small — a live system with zero known errors is the standard." },

  /* Math */
  { id: "math-1", cat: "Math", title: "Probability — expectation drills (12 problems)", detail: "Work 12 expectation problems without a calculator. For each: state the random variable and its distribution before touching algebra. Afterward, tag each problem with the trick it used (linearity, indicator, symmetry) in your problem index." },
  { id: "math-2", cat: "Math", title: "Linear algebra — one lecture + full problem set", detail: "Watch the scheduled lecture at 1.5×, taking notes only on definitions and theorems. Then do the entire problem set closed-book. Every wrong answer gets re-derived from the definition — not re-watched." },
  { id: "math-3", cat: "Math", title: "Discrete math — proof-writing session", detail: "Take 3 statements from the current topic and write complete proofs: claim, setup, step-by-step, QED. Read each one aloud as if defending it in an interview panel. If a step needs 'obviously', it's not finished." },
  { id: "math-4", cat: "Math", title: "Math → code bridge exercise", detail: "Pick one theorem or structure from this week's subject and implement it (e.g., Gaussian elimination, Markov chain simulator, FFT). 100 lines max, with a randomized test against a brute-force reference." },
  { id: "math-5", cat: "Math", title: "Review + spaced repetition pass", detail: "Resurface 10 problems you solved 1–2 weeks ago. Re-solve them from scratch under 15 minutes each. Anything you can't reproduce is scheduled again tomorrow — update the repetition sheet." },

  /* CP */
  { id: "cp-1", cat: "CP", title: "Solve 3 Div.2 C problems — topic: greedy", detail: "Pick 3 unsolved C-rated greedies from the topic list. Strict 40 minutes each, then stop. For every unsolved one, read the editorial, close it, and implement it yourself. Log pattern + failure reason in your CP notebook." },
  { id: "cp-2", cat: "CP", title: "Virtual contest — full Div.2 round", detail: "Run a virtual round at real contest time-box (2h, no pauses). Simulate full conditions: one submission per problem mindset, penalty awareness. Afterward, upsolve at least one problem above your solved ceiling before sleeping." },
  { id: "cp-3", cat: "CP", title: "Upsolve the last real contest completely", detail: "Every problem you didn't solve in the last rated contest gets solved today, including one above your rating. Write a 3-line summary per problem: the key observation, the implementation pitfall, the tag." },
  { id: "cp-4", cat: "CP", title: "Topic drill — graphs (BFS/DFS variants)", detail: "Do 5 graph problems in sequence, identifying the variant before coding (multi-source, 0/1 BFS, topological, bipartite…). Timed: 30 min each. After, add one template snippet per variant to your library with a usage note." },
  { id: "cp-5", cat: "CP", title: "LeetCode grind — company-tagged medium set", detail: "Complete 4 medium problems tagged for your current dossier company. Two under 20 minutes each (interview pace), two untimed for pattern depth. Note which company's OA style each resembles." },

  /* Income */
  { id: "inc-1", cat: "Income", title: "Send 5 tailored freelance proposals", detail: "Find 5 postings matching your current stack. Each proposal: 2 sentences proving you read the brief, one relevant link (your project), and a concrete first-step offer. Track all 5 in your pipeline sheet with follow-up dates." },
  { id: "inc-2", cat: "Income", title: "Ship one billable deliverable milestone", detail: "Advance the active client work to the next named milestone. Definition of done: the client can see and react to it today. Send the update message with a demo link, not a promise." },
  { id: "inc-3", cat: "Income", title: "Raise one rate lever", detail: "Execute one concrete move: invoice a client with the new rate, publish a rate card, pitch a retainer to your best past client, or list a fixed-price productized service. Small, real, sent — not planned." },
  { id: "inc-4", cat: "Income", title: "Update the money runway sheet", detail: "Log this month's actual income and expenses against the Asyut baseline ($230–375 survival). Recompute months-of-runway at current burn and the delta to the $600–900 buffer target. Write one line: the single highest-leverage income action for next week." },

  /* Application */
  { id: "app-1", cat: "Application", title: "Build one company dossier end-to-end", detail: "Pick the next company in the queue. Fill: pipeline stages, recent interview reports, OA format, what passes and what fails, and the 2 projects of yours that map to their stack. Done = the checklist items ticked only where genuinely verified." },
  { id: "app-2", cat: "Application", title: "Write 2 STAR stories from your projects", detail: "Take the two hardest bugs/design calls from your shipped work. Write Situation–Task–Action–Result in ≤120 words each, with a metric in the Result. Read them aloud twice — they must sound spoken, not written." },
  { id: "app-3", cat: "Application", title: "Mock interview round — 45 minutes", detail: "Run a full timed round: 10 min behavioral, 30 min one medium algorithm (speak while coding), 5 min questions for the interviewer. Record yourself. Grade on clarity, not correctness — list the 2 verbal tics to kill." },
  { id: "app-4", cat: "Application", title: "Resume pass — one bullet rewritten per project", detail: "For each shipped project, rewrite its resume bullet in the form: 'Built X (tech) achieving Y (number) by doing Z (hard part).' Cut every adjective. Then check each bullet against a target company's job requirements line by line." },

  /* Admin */
  { id: "adm-1", cat: "Admin", title: "Sunday review — close the week", detail: "Run the Sunday Review checklist: tasks cleared vs. missed, streaks intact or broken, money logged, one adjustment for next week's plan. Takes 30 minutes. Write the single sentence that summarizes the week honestly." },
  { id: "adm-2", cat: "Admin", title: "Back up + tidy the system", detail: "Export a NEXUS backup, push notes to git, clear the downloads folder, and file anything loose into its home. Then read tomorrow's skill set here so Monday-you starts in 30 seconds, not 10 minutes." },
  { id: "adm-3", cat: "Admin", title: "Plan next week's blocking tasks", detail: "For each track, name the single next blocking task and pre-write its done-criteria. Put them where Monday-you will see them first. 20 minutes max — this is scheduling, not solving." },
];

export type Quarter = {
  id: number;
  label: string;
  range: string;
  theme: string;
  deliverables: string[];
  milestone: string;
};

export const QUARTERS: Quarter[] = [
  { id: 1, label: "Y1 · Q1", range: "Jul – Sep 2026", theme: "Foundation sprint", deliverables: ["Daily system online 60/66 days", "CF 1400 → 1550", "ATLAS v0.1 (single-node scheduler)", "Linear Algebra 50%"], milestone: "First shipped artifact + stable routine" },
  { id: 2, label: "Y1 · Q2", range: "Oct – Dec 2026", theme: "Depth", deliverables: ["CF 1550 → 1700, first live contests", "ATLAS distributed mode (raft-lite)", "FORGE spec + v0.1", "Probability 50%"], milestone: "100 days unbroken queue" },
  { id: 3, label: "Y1 · Q3", range: "Jan – Mar 2027", theme: "Proof of work", deliverables: ["PULSE v0.1 realtime ingest", "CF 1700 → 1800", "First $150/mo freelance", "Discrete Math complete"], milestone: "Buffer crosses $200" },
  { id: 4, label: "Y1 · Q4", range: "Apr – Jun 2027", theme: "The Cliff prep", deliverables: ["VECTOR prototype", "CF specialist (graphs + DP)", "Freelance $250–350/mo", "Resume v2 + 2 dossiers"], milestone: "⚠ Cliff: May 2027 — buffer ≥ $600" },
  { id: 5, label: "Y2 · Q1", range: "Jul – Sep 2027", theme: "Remote breakthrough", deliverables: ["Remote junior job signed (Sep target)", "LEDGER v0.1", "CF 1800+", "Statistics 50%"], milestone: "First stable paycheck" },
  { id: 6, label: "Y2 · Q2", range: "Oct – Dec 2027", theme: "Stabilize", deliverables: ["Remote job probation passed", "ORBIT v0.1", "CF 1850", "Negotiation #1 executed"], milestone: "Income floor secured" },
  { id: 7, label: "Y2 · Q3", range: "Jan – Mar 2028", theme: "Portfolio thickens", deliverables: ["SENTINEL v0.1", "CF 1900 — Candidate Master", "System design reps ×20", "8 company dossiers"], milestone: "CM title on profile" },
  { id: 8, label: "Y2 · Q4", range: "Apr – Jun 2028", theme: "Rate climb", deliverables: ["Negotiation #2 (+30%)", "CIPHER v0.1", "Math spine 80%", "First referral conversation"], milestone: "Rate card doubled from Y1" },
  { id: 9, label: "Y3 · Q1", range: "Jul – Sep 2028", theme: "Specialist", deliverables: ["BAZAAR v0.1 — 9/9 shipped", "CF 1950", "Deep-dive: distributed systems paper club", "12 dossiers"], milestone: "All 9 projects live with write-ups" },
  { id: 10, label: "Y3 · Q2", range: "Oct – Dec 2028", theme: "Interview engine v1", deliverables: ["CF 2000 🎯", "60 mock screens logged", "STAR doc: 12 stories", "16 dossiers"], milestone: "Target rating reached" },
  { id: 11, label: "Y3 · Q3", range: "Jan – Mar 2029", theme: "Warm-ups", deliverables: ["Apply to tier-3 targets (warm-up reps)", "3 real interview loops", "Post-mortem system live", "Negotiation #3"], milestone: "First real onsites" },
  { id: 12, label: "Y3 · Q4", range: "Apr – Jun 2029", theme: "Calibration", deliverables: ["Tier-2 applications open", "6 loops completed", "Weak-area drill protocol", "Referral pipeline warm"], milestone: "Offer or near-miss data in hand" },
  { id: 13, label: "Y4 · Q1", range: "Jul – Sep 2029", theme: "The push begins", deliverables: ["Tier-1 batch #1 (8 companies)", "Daily mock interviews", "CF 2050+ maintenance", "All 25 dossiers current"], milestone: "First tier-1 loops" },
  { id: 14, label: "Y4 · Q2", range: "Oct – Dec 2029", theme: "Full fire", deliverables: ["Tier-1 batch #2 (8 companies)", "Negotiation reps with mentor", "Competing-offer strategy doc", "Buffer ≥ $900"], milestone: "First tier-1 final rounds" },
  { id: 15, label: "Y4 · Q3", range: "Jan – Mar 2030", theme: "Conversion", deliverables: ["Tier-1 batch #3 (9 companies)", "Offer negotiation live", "Backup tier-2 re-runs", "Story doc final polish"], milestone: "Offers on the table" },
  { id: 16, label: "Y4 · Q4", range: "Apr – Jun 2030", theme: "Signature", deliverables: ["Final loop sprint", "Sign the giant — Jun 2030", "Transition plan from remote job", "NEXUS v2 drafted"], milestone: "🏁 HIRED. Arc complete." },
];

export const OBJECTIVES = [
  { id: "cf2000", label: "CF ≥ 2000", detail: "Opens every door incl. HRT", color: "#ff5c7a" },
  { id: "projects", label: "9 projects shipped", detail: "Named-company tracing", color: "#2fd6b5" },
  { id: "math", label: "Math spine complete", detail: "Quant-screen proof", color: "#b48cff" },
  { id: "dossiers", label: "25 company dossiers", detail: "Pipeline intelligence", color: "#45c8e8" },
  { id: "remote", label: "Remote job stable", detail: "Income floor since 2027", color: "#6fdd8b" },
];

export const CP_TOPICS = [
  "Implementation", "Prefix sums", "Two pointers", "Binary search", "Bitmasks",
  "Greedy", "DP basics", "DP advanced", "DFS/BFS", "DSU", "Segment tree",
  "Shortest paths", "Trees & LCA", "Number theory", "Combinatorics", "Game theory",
];

export type MathSubject = {
  id: string;
  name: string;
  lectures: number;
  problems: number;
  traces: string[];
  color: string;
};

export const MATH_SUBJECTS: MathSubject[] = [
  { id: "linalg", name: "Linear Algebra", lectures: 16, problems: 64, traces: ["HRT", "Jane Street"], color: "#b48cff" },
  { id: "prob", name: "Probability", lectures: 14, problems: 70, traces: ["Every quant screen"], color: "#ff5c7a" },
  { id: "stats", name: "Statistics & MLE", lectures: 10, problems: 40, traces: ["Meta DS rounds", "Netflix"], color: "#5fb0ff" },
  { id: "discrete", name: "Discrete Math", lectures: 12, problems: 48, traces: ["Google", "Microsoft"], color: "#2fd6b5" },
  { id: "numtheory", name: "Number Theory", lectures: 8, problems: 40, traces: ["HRT", "Citadel"], color: "#ffb224" },
  { id: "optim", name: "Optimization", lectures: 8, problems: 24, traces: ["DeepMind", "OpenAI"], color: "#6fdd8b" },
];

export type Company = {
  id: string;
  name: string;
  tier: "Quant / HFT" | "Big Tech" | "AI Labs" | "Infra / Fintech";
  role: string;
  color: string;
  pipeline: string[];
  passes: string;
  fails: string;
  build: string;
  checklist: string[];
};

const QUANT_CHECK = ["CF ≥ 1900", "Math spine: Probability 100%", "Brainteaser rep log ≥ 30", "LEDGER shipped", "Resume quant-tailored"];
const TECH_CHECK = ["CF ≥ 1700", "2 traced projects shipped", "System design reps ≥ 10", "STAR story doc complete", "Referral secured"];
const AI_CHECK = ["CF ≥ 1800", "VECTOR shipped + write-up", "Math: Optimization 100%", "ML paper notes ≥ 12", "Open-source contribution"];
const INFRA_CHECK = ["CF ≥ 1700", "1 infra project shipped", "System design reps ≥ 8", "Public write-up ×2", "Resume infra-tailored"];

export const COMPANIES: Company[] = [
  { id: "jane", name: "Jane Street", tier: "Quant / HFT", role: "Software Engineer, Trading", color: "#ff5c7a", pipeline: ["Puzzle screener", "3× technical phones", "2-day onsite (probability + coding)"], passes: "Fast, exact mental math. Honest 'I don't know'. Clean code under pressure.", fails: "Guessing without sizing the error. Slow ramp on brainteasers.", build: "LEDGER + probability mastery", checklist: QUANT_CHECK },
  { id: "hrt", name: "Hudson River Trading", tier: "Quant / HFT", role: "Software Engineer", color: "#ff5c7a", pipeline: ["HackerRank OA", "Technical phone ×2", "Onsite: algo + C++/systems"], passes: "CF-style speed with zero bugs. Systems intuition (latency, memory).", fails: "Correct-but-slow. Ignoring constant factors.", build: "CF 2000 + FORGE", checklist: QUANT_CHECK },
  { id: "citadel", name: "Citadel / CTC", tier: "Quant / HFT", role: "Software Engineer — Core Tech", color: "#ff5c7a", pipeline: ["OA + resume screen", "Phone ×2–3", "Superday: coding, systems, quant"], passes: "Breadth — algo + low-level + probability in one day.", fails: "One strong area, one dead area.", build: "ATLAS + math spine", checklist: QUANT_CHECK },
  { id: "twosigma", name: "Two Sigma", tier: "Quant / HFT", role: "Software Engineer", color: "#ff5c7a", pipeline: ["OA", "Phone: algo + Java/Python depth", "Onsite ×4"], passes: "Production-quality code in interviews. Data intuition.", fails: "Competitive-style hacks without engineering care.", build: "PULSE + statistics", checklist: QUANT_CHECK },
  { id: "deshaw", name: "D. E. Shaw", tier: "Quant / HFT", role: "Software Developer — Systematic", color: "#ff5c7a", pipeline: ["OA + puzzles", "Phone ×2", "Onsite: algo + design + probability"], passes: "Rigorous proofs of correctness. Probability fluency.", fails: "Hand-waving complexity analysis.", build: "VECTOR + number theory", checklist: QUANT_CHECK },
  { id: "optiver", name: "Optiver", tier: "Quant / HFT", role: "Software Engineer — Trading", color: "#ff5c7a", pipeline: ["80-question math test (5 min sections)", "Technical interviews", "Onsite Amsterdam/Chicago"], passes: "Flawless arithmetic speed. Market-microstructure curiosity.", fails: "Failing the math gate. Zero trading-domain interest.", build: "math drills + LEDGER", checklist: QUANT_CHECK },
  { id: "google", name: "Google", tier: "Big Tech", role: "Software Engineer, Infrastructure", color: "#5fb0ff", pipeline: ["Recruiter screen", "Phone ×1–2 (LC medium-hard)", "Onsite ×4–5: coding, system design, googliness"], passes: "Optimal + follow-up fluent. Structured communication.", fails: "Brute-force-only. Rambling without structure.", build: "ATLAS (scheduling story)", checklist: TECH_CHECK },
  { id: "meta", name: "Meta", tier: "Big Tech", role: "Software Engineer, Ads Infra", color: "#5fb0ff", pipeline: ["Phone ×1", "Onsite: 2 coding (speed matters), 1 design, 1 behavioral"], passes: "Two mediums in 40 min, bug-free. Design at scale.", fails: "Slow but correct. Thin behavioral stories.", build: "PULSE (50k ev/s story)", checklist: TECH_CHECK },
  { id: "amazon", name: "Amazon", tier: "Big Tech", role: "SDE II — AWS", color: "#5fb0ff", pipeline: ["OA", "Phone ×1", "Loop ×5: LP-heavy + coding + design"], passes: "Every answer lands an LP. Ownership stories with data.", fails: "LP-unprepared — Amazon is 40% LP.", build: "BAZAAR + STAR doc", checklist: TECH_CHECK },
  { id: "microsoft", name: "Microsoft", tier: "Big Tech", role: "SDE II — Azure", color: "#5fb0ff", pipeline: ["OA or recruiter", "Phone ×1", "Onsite ×4–5 (asy appropriate)"], passes: "Breadth + collaboration signals. Clean incremental code.", fails: "Solo-cowboy vibes. Untested assumptions.", build: "ATLAS + ORBIT", checklist: TECH_CHECK },
  { id: "apple", name: "Apple", tier: "Big Tech", role: "Software Engineer — Cloud Services", color: "#5fb0ff", pipeline: ["Recruiter", "Phone ×1–2", "Team-matching onsite ×5"], passes: "Depth in one domain + craft obsession. Team-fit.", fails: "Generic generalist. No craft story.", build: "CIPHER (craft story)", checklist: TECH_CHECK },
  { id: "netflix", name: "Netflix", tier: "Big Tech", role: "Senior SWE — Platform", color: "#5fb0ff", pipeline: ["Recruiter + hiring manager", "Technical phone ×2", "Onsite: practical, senior-bar"], passes: "Senior judgment: tradeoffs, operational maturity.", fails: "Junior-scope answers. No ops war stories.", build: "SENTINEL (ops story)", checklist: TECH_CHECK },
  { id: "openai", name: "OpenAI", tier: "AI Labs", role: "Software Engineer, Infra", color: "#b48cff", pipeline: ["Recruiter", "Coding phone", "Onsite ×4: systems-heavy + ML-adjacent"], passes: "Systems at ML scale: GPUs, scheduling, throughput.", fails: "Web-dev-scale thinking only.", build: "VECTOR + ATLAS", checklist: AI_CHECK },
  { id: "anthropic", name: "Anthropic", tier: "AI Labs", role: "Software Engineer", color: "#b48cff", pipeline: ["Recruiter", "Take-home or phone", "Onsite ×4: coding + values"], passes: "Thoughtful safety-aware reasoning. Deep systems skill.", fails: "Misaligned-vibes answers. Shallow depth.", build: "VECTOR + write-up", checklist: AI_CHECK },
  { id: "deepmind", name: "DeepMind", tier: "AI Labs", role: "Software Engineer — Research Infra", color: "#b48cff", pipeline: ["OA", "Phone ×2", "Onsite ×4–5 (algo + research infra)"], passes: "Hard algo + research-engineering empathy.", fails: "Algo-only, no research context.", build: "optimization + PULSE", checklist: AI_CHECK },
  { id: "stripe", name: "Stripe", tier: "Infra / Fintech", role: "Software Engineer — Payments", color: "#6fdd8b", pipeline: ["Recruiter", "Phone: practical coding", "Onsite ×4: API design, debugging, integration"], passes: "API empathy. Correctness under adversarial inputs.", fails: "Ignoring edge cases. Sloppy API surfaces.", build: "LEDGER (traced directly)", checklist: INFRA_CHECK },
  { id: "cloudflare", name: "Cloudflare", tier: "Infra / Fintech", role: "Systems Engineer — Workers", color: "#6fdd8b", pipeline: ["Recruiter", "Phone ×1–2", "Onsite ×4: systems + networking"], passes: "Networking depth. Rust/C++ systems instincts.", fails: "App-layer-only worldview.", build: "FORGE + ORBIT", checklist: INFRA_CHECK },
  { id: "databricks", name: "Databricks", tier: "Infra / Fintech", role: "Software Engineer — Engine", color: "#6fdd8b", pipeline: ["OA", "Phone ×1", "Onsite ×4: distributed systems + coding"], passes: "Distributed-systems reasoning with concrete protocols.", fails: "Buzzword raft/kafka answers without depth.", build: "ATLAS (traced directly)", checklist: INFRA_CHECK },
  { id: "snowflake", name: "Snowflake", tier: "Infra / Fintech", role: "Software Engineer — Core", color: "#6fdd8b", pipeline: ["OA", "Phone ×2", "Onsite ×5"], passes: "Storage/query-engine depth. Strong coding bar.", fails: "Weak concurrency answers.", build: "VECTOR + ATLAS", checklist: INFRA_CHECK },
  { id: "palantir", name: "Palantir", tier: "Infra / Fintech", role: "Software Engineer — Platform", color: "#6fdd8b", pipeline: ["Take-home", "Phone", "Onsite: decomposition + execution"], passes: "Decomposing messy problems fast. Shipping instinct.", fails: "Needing clean specs to move.", build: "BAZAAR + ORBIT", checklist: INFRA_CHECK },
  { id: "spacex", name: "SpaceX", tier: "Infra / Fintech", role: "Software Engineer — Flight", color: "#6fdd8b", pipeline: ["Recruiter", "Phone ×1–2", "Onsite: systems + mission-fit"], passes: "First-principles reasoning. Mission conviction.", fails: "Lifestyle-first answers. Fragile designs.", build: "SENTINEL + ATLAS", checklist: INFRA_CHECK },
  { id: "uber", name: "Uber", tier: "Infra / Fintech", role: "SDE II — Marketplace", color: "#6fdd8b", pipeline: ["OA", "Phone ×1", "Onsite ×4: coding + system design heavy"], passes: "Design interviews with real scale math.", fails: "Hand-wavy capacity estimates.", build: "BAZAAR (traced directly)", checklist: INFRA_CHECK },
  { id: "datadog", name: "Datadog", tier: "Infra / Fintech", role: "Software Engineer — Agent", color: "#6fdd8b", pipeline: ["Recruiter", "Phone ×2", "Onsite ×4"], passes: "High-throughput pipeline thinking. Go/C depth.", fails: "No observability intuition.", build: "SENTINEL (traced directly)", checklist: INFRA_CHECK },
  { id: "github", name: "GitHub", tier: "Infra / Fintech", role: "Software Engineer — Actions", color: "#6fdd8b", pipeline: ["Recruiter", "Phone ×1", "Onsite ×4 + values"], passes: "Developer-empathy + distributed CI depth.", fails: "No open-source footprint.", build: "ORBIT (traced directly)", checklist: INFRA_CHECK },
  { id: "shopify", name: "Shopify", tier: "Infra / Fintech", role: "Senior Developer — Core", color: "#6fdd8b", pipeline: ["Recruiter", "Technical interview", "Founder-grade onsite"], passes: "Autonomy, written communication, commerce scale.", fails: "Waiting for direction. Poor async writing.", build: "BAZAAR + write-ups", checklist: INFRA_CHECK },
];

export const TIER_COLORS: Record<Company["tier"], string> = {
  "Quant / HFT": "#ff5c7a",
  "Big Tech": "#5fb0ff",
  "AI Labs": "#b48cff",
  "Infra / Fintech": "#6fdd8b",
};

/* income: 48 months from start (Jul 2026). Values: [monthIncome, cumulativeNote?] */
export const INCOME_MONTHS: { m: string; v: number }[] = (() => {
  const names = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const out: { m: string; v: number }[] = [];
  for (let i = 0; i < 48; i++) {
    const mi = (6 + i) % 12; // starts July
    let v = 0;
    if (i < 8) v = 0;
    else if (i < 14) v = 150; // early freelance
    else if (i < 22) v = 300;
    else if (i < 26) v = 900; // remote job starts Sep 2027 (i=14? no—i=14 is Sep'27)
    out.push({ m: `${names[mi]} ${2026 + Math.floor((6 + i) / 12)}`, v: 0 });
  }
  // hand-tuned realistic curve — exactly 48 values, one per month:
  const vals = [
    0,0,0,0,0,0,0,0,            // Jul'26–Feb'27: pure build
    120,150,150,180,            // Mar–Jun'27: first freelance
    0,0,0,900,                  // ⚠ cliff May–Jul'27 → remote offer lands
    1400,1400,1400,1500,        // remote junior ramp
    1500,1500,1600,1800,        // negotiation #1
    1800,1800,2000,2200,        // negotiation #2
    2200,2400,2600,2800,        // rate climbs
    3000,3200,3400,3600,        // senior freelance hybrid
    3800,4000,4200,4500,        // negotiation #3 + consulting
    4800,5200,6000,6500,        // pre-giant + tier-1 loop season
    7500,8000,9000,9500,        // 🏁 giant offer window Jun'30
  ];
  return vals.slice(0, 48).map((v, i) => ({ m: out[i].m, v }));
})();

export const EXPENSES = [
  { item: "Rent (Asyut, shared)", low: 80, high: 120 },
  { item: "Food & groceries", low: 90, high: 150 },
  { item: "Internet + phone", low: 15, high: 25 },
  { item: "Transport", low: 10, high: 20 },
  { item: "Contingency", low: 35, high: 60 },
];

export const NEGOTIATIONS = [
  {
    id: "n1",
    title: "Freelance retainer raise",
    when: "Q3 · Y1 (Mar 2027)",
    from: "$15/hr",
    to: "$25/hr",
    color: "#6fdd8b",
    triggers: ["3 consecutive on-time milestones", "Written client testimonial", "ATLAS write-up published"],
  },
  {
    id: "n2",
    title: "Remote job bump",
    when: "Q2 · Y2 (Dec 2027)",
    from: "$900/mo",
    to: "$1,400/mo",
    color: "#5fb0ff",
    triggers: ["Probation passed clean", "One shipped improvement with metrics", "Competing offer or strong BATNA doc"],
  },
  {
    id: "n3",
    title: "Rate card v2",
    when: "Q4 · Y2 (Jun 2028)",
    from: "$25/hr",
    to: "$40/hr",
    color: "#ffb224",
    triggers: ["CM title on CF", "9/9 projects shipped", "Inbound leads ≥ 2/month"],
  },
  {
    id: "n4",
    title: "Consulting tier",
    when: "Q2 · Y3 (Dec 2028)",
    from: "$40/hr",
    to: "$65/hr + retainer",
    color: "#b48cff",
    triggers: ["CF 2000 reached", "Niche positioning page live", "2 referrals from past clients"],
  },
];

export const PARSED_PREVIEW = [
  { track: "Deep Work", task: "ATLAS: leader-election module design doc", priority: "High" },
  { track: "CP", task: "CF virtual round — Div.2 #934 (full upsolve)", priority: "High" },
  { track: "Math", task: "Probability L5 — expectation drills (12)", priority: "Medium" },
  { track: "Income", task: "Invoice client #1 + chase net-15", priority: "High" },
  { track: "Application", task: "Dossier #3 — Citadel: pipeline + recent OAs", priority: "Medium" },
  { track: "Admin", task: "Backup plan doc to Notion + git", priority: "Low" },
];

export const SUNDAY_REVIEW = [
  "Log week: queue completion % per track",
  "CF delta: rating, problems, upsolves",
  "Money: income, saved, buffer updated",
  "Move 1 unfinished task to Monday",
  "Set the 3 non-negotiables for next week",
];
