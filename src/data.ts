/* ════════════════════════════════════════════════════════════════════
   NEXUS — CANONICAL DATA
   Sourced from the hiring-only master plan (Jul 1, 2026 → Jun 2030),
   the Y1Q1 12-hour master plan (latest revision), the hiring-readiness
   research, and the income stream catalog. Every entry traces to a
   named target company's verified hiring requirement.
   ════════════════════════════════════════════════════════════════════ */

/* ── daily tracks (Y1Q1 — the 12-hour engine) ─────────────────────── */
export type Track = {
  id: string;
  name: string;
  tag: string;
  color: string;
  tasks: string[];
};

export const TRACKS: Track[] = [
  {
    id: "build",
    name: "Python / CS61A",
    tag: "3.5h/day",
    color: "#ffb224",
    tasks: [
      "MIT 6.100L Lectures 1–12 + finger exercises · Helsinki MOOC Parts 1–4 (every exercise)",
      "MIT 6.100L Lectures 13–26 — recursion, OOP, Big-O · Problem Sets 1–5",
      "CS61A Weeks 1–7: higher-order functions, environment model, data abstraction — Project 1 (Hog) + Project 2 (Cats)",
      "CS61A Weeks 8–9: Scheme intro — first Scheme expressions · Calculator interpreter (tokenize → parse → eval → apply)",
      "Scheme interpreter: scheme_read (tokenizer/parser) + scheme_eval (variables, lookups) + special forms (define, lambda, if, cond)",
      "scheme_apply (REPL) + Tail-Call Optimization (trampoline) — pass the autograder, publish the Frame-model README",
    ],
  },
  {
    id: "logic",
    name: "Logic Sandbox · HtDP",
    tag: "2h/day",
    color: "#45c8e8",
    tasks: [
      "HtDP Prologue–Ch.6: master the 6-step Design Recipe for basic data types and enumerations",
      "Arbitrarily large data: map recursive data definitions directly to recursive function structures",
      "Abstraction: build higher-order functions from structurally identical recursive patterns",
      "Intertwined data: trees and mutual recursion",
    ],
  },
  {
    id: "math",
    name: "Discrete Math · Rosen",
    tag: "1.5h/day",
    color: "#b48cff",
    tasks: [
      "Rosen 1.1–1.6: propositional logic, equivalences, rules of inference",
      "Rosen 1.7–2.3: direct & contradiction proofs, sets, functions",
      "Rosen 2.4–5.3: sequences, matrices, mathematical & strong induction",
      "Rosen 3.1–3.3 + 6.1–6.3: algorithm complexity, Big-O limits, permutations & combinations",
      "Rosen 4.1–4.3 + 6.4–6.5: modular arithmetic, primes, GCD, generalized combinations",
      "Rosen 9–11: relations, equivalence, graph models, connectivity, trees",
    ],
  },
  {
    id: "cpt",
    name: "CP Theory",
    tag: "1.5h/day",
    color: "#5fb0ff",
    tasks: [
      "Competitive Programmer's Handbook Ch.1–4: intro, complexity, sorting",
      "CPH Ch.5: greedy algorithms",
      "CPH Ch.7: dynamic programming intro",
      "CPH Ch.11–12: graph basics and traversal",
    ],
  },
  {
    id: "cpx",
    name: "CP Execution",
    tag: "1.5h/day",
    color: "#ff5c7a",
    tasks: [
      "Codeforces live: 20 problems solved — Div.4 A level",
      "42 cumulative · USACO Bronze: complete search & simulation",
      "64 cumulative · greedy drills under time",
      "86 cumulative · USACO Bronze complete",
      "107 cumulative · CPH Ch.7 DP problems",
      "128 cumulative · USACO Silver graph traversal",
      "158 cumulative · 2 live rated CF rounds",
      "210 cumulative · CF 900+ verified on profile",
    ],
  },
  {
    id: "tools",
    name: "Tools / Projects",
    tag: "1.5h/day",
    color: "#6fdd8b",
    tasks: [
      "WSL2 Linux setup + Git terminal workflow + pdb debugger",
      "mypy type hints + pytest on all Python code",
      "python-dsa: linked lists, stacks, queues, BSTs, hash tables — tested, pushed to GitHub",
      "cf-tracker CLI: Codeforces API + JSON persistence — pushed to GitHub",
      "Code reviews on 5 open-source Python functions (correctness, efficiency, edge cases) — RLHF prep",
      "GitHub cleanup: pin + document + fully test all repos · RLHF applications sent to Scale AI & Outlier",
    ],
  },
];

/* ── micro-habits (each traces to a named requirement) ─────────────── */
export const HABITS = [
  { id: "archaeology", label: "Code Archaeology — 15 min", trace: "1 source file/day: Redis · Linux · LLVM · ClickHouse → every project deep-dive", color: "#45c8e8" },
  { id: "godbolt", label: "Godbolt / Assembly Empathy", trace: "every C/C++ function → Citadel · HRT · DRW hardware-empathy questions", color: "#ffb224" },
  { id: "zetamac", label: "Zetamac — 15 min", trace: "mental math → Jane Street · Optiver · SIG screens", color: "#ff5c7a" },
];

/* ── the 9 core projects ───────────────────────────────────────────── */
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
    id: "scheme", name: "SCHEME INTERPRETER", desc: "Interpreter in C — closures, tail-call optimization, mark-sweep GC.",
    traces: ["Apple LLVM/Swift", "Modular", "Google V8"], color: "#b48cff",
    deadline: "Y1·Q3 · Mar 31, 2027", deadlineISO: "2027-03-31",
    details: ["Closures + TCO + mark-sweep GC, all in C", "Tokenizer → parser → evaluator pipeline, tested", "Public write-up: GC design + the eval pattern"],
  },
  {
    id: "heap", name: "HEAP ALLOCATOR", desc: "Arena + slab allocator in C, then the C++ RAII rewrite.",
    traces: ["Apple Core OS", "NVIDIA", "ClickHouse", "Citadel"], color: "#2fd6b5",
    deadline: "Y2·Q2 · Dec 31, 2027", deadlineISO: "2027-12-31",
    details: ["Arena + slab design, valgrind-clean, benchmarked", "C++ rewrite: unique_ptr, placement new, move semantics", "Full architecture doc in 5-section design-doc format"],
  },
  {
    id: "xv6", name: "XV6 KERNEL", desc: "xv6 with a custom syscall/scheduler modification, LLDB throughout.",
    traces: ["Apple Core OS", "NVIDIA", "OpenAI"], color: "#5fb0ff",
    deadline: "Y2·Q3 · Mar 31, 2028", deadlineISO: "2028-03-31",
    details: ["Scheduler, virtual memory, file system understood deeply", "Custom modification: new syscall or scheduler policy", "Architecture doc in Linux-kernel-style format, public repo"],
  },
  {
    id: "tcpip", name: "TCP/IP STACK", desc: "TCP/IP stack in C++ — handshake, sliding window, congestion control.",
    traces: ["HRT", "Jump Trading", "OpenAI", "Apple"], color: "#45c8e8",
    deadline: "Y3·Q1 · Sep 30, 2028", deadlineISO: "2028-09-30",
    details: ["Handshake, sliding window, retransmission, congestion control", "Benchmarked latency & throughput numbers published", "Explained as an infra system-design answer, timed"],
  },
  {
    id: "sql", name: "SQL STORAGE ENGINE", desc: "B+ tree + WAL + SIMD vectorized scan + Arrow format reader.",
    traces: ["ClickHouse", "Databricks", "Snowflake"], color: "#ffb224",
    deadline: "Y3·Q3 · Mar 31, 2029", deadlineISO: "2029-03-31",
    details: ["B+ tree: all operations + WAL crash recovery", "SIMD scan (SSE2/AVX2) benchmarked vs row-at-a-time", "Arrow format reader functional · blog post with benchmarks"],
  },
  {
    id: "raft", name: "RAFT KV STORE", desc: "Distributed KV store in Go — log replication, leader election, compaction.",
    traces: ["Snowflake", "MongoDB", "CockroachDB"], color: "#6fdd8b",
    deadline: "Y3·Q3 · Mar 31, 2029", deadlineISO: "2029-03-31",
    details: ["Log replication + leader election + log compaction", "Passes linearizability tests (Jepsen-style harness)", "TLA+ model of the core protocol (2-week intro applied)"],
  },
  {
    id: "orderbook", name: "ORDER BOOK SIM", desc: "Lock-free C++ order book — SPSC ring buffer, sub-1μs per operation.",
    traces: ["Jump", "Citadel", "HRT", "DRW", "Optiver", "IMC"], color: "#ff5c7a",
    deadline: "Y3·Q4 · Jun 30, 2029", deadlineISO: "2029-06-30",
    details: ["Lock-free SPSC ring buffer, L2 market data simulation", "Nanosecond timestamps · sub-1μs per op benchmarked, TSan-clean", "Portfolio centerpiece across the entire HFT tier"],
  },
  {
    id: "cuda", name: "CUDA MATMUL", desc: "Naive → tiled → Tensor-Core matmul with full roofline analysis.",
    traces: ["NVIDIA", "Modular", "OpenAI"], color: "#ff7849",
    deadline: "Y4·Q2 · Dec 31, 2029", deadlineISO: "2029-12-31",
    details: ["Coalescing, bank conflicts, occupancy analysis, CUDA streams", "% of theoretical peak bandwidth published (Nsight)", "2 Triton kernels (flash attention, fused softmax) benchmarked"],
  },
  {
    id: "transformer", name: "GPT TRANSFORMER", desc: "Transformer from scratch + distributed training design doc.",
    traces: ["NVIDIA", "DeepMind", "OpenAI", "Anthropic"], color: "#9db4ff",
    deadline: "Y4·Q3 · Mar 31, 2030", deadlineISO: "2030-03-31",
    details: ["Attention, positional encoding, layer norm, gradient checkpointing", "Trains and generates coherent text on a real dataset", "5-page distributed training doc: AllReduce, parallelism, stragglers"],
  },
];

/* ── daily plan system ─────────────────────────────────────────────── */
export type Cat = { id: string; label: string; color: string; icon: string };

export const CATS: Cat[] = [
  { id: "python", label: "Python / CS61A", color: "#ffb224", icon: "code" },
  { id: "htdp", label: "HtDP Logic Sandbox", color: "#2fd6b5", icon: "cube" },
  { id: "rosen", label: "Rosen Discrete Math", color: "#b48cff", icon: "sigma" },
  { id: "cp-theory", label: "CP Theory", color: "#5fb0ff", icon: "target" },
  { id: "cp-exec", label: "CP Execution", color: "#ff5c7a", icon: "bolt" },
  { id: "tools", label: "Tools / Projects", color: "#45c8e8", icon: "list" },
  { id: "income", label: "Income (RLHF)", color: "#6fdd8b", icon: "dollar" },
];

/* weekday → engine tracks the day addresses (0 = Sunday) — all six daily, rotated in pairs */
export const WEEK_SETS: string[][] = [
  ["tools", "income"],
  ["python", "rosen"],
  ["htdp", "cp-theory"],
  ["python", "cp-exec"],
  ["rosen", "income"],
  ["cp-theory", "python"],
  ["cp-exec", "tools"],
];

export type BankTask = { id: string; cat: string; title: string; detail: string };

export const TASK_BANK: BankTask[] = [
  /* ── Python / CS61A (3.5h engine block) ── */
  { id: "py-1", cat: "python", title: "6.100L / CS61A — today's lecture batch + finger exercises", detail: "Watch the scheduled lectures at 1.5×, read the matching Guttag / Composing Programs section first, then complete every finger exercise closed-book. Push your solutions to NEXUS-Y1 with a commit message that explains one thing you learned — visibility is a tracked hour, not an afterthought." },
  { id: "py-2", cat: "python", title: "Helsinki MOOC — complete this week's exercise batch", detail: "Every exercise in the batch must pass the automated checker. This is where raw Python skill is built — no skipping to the solution. After finishing, read 2–3 community solutions to one problem and note what they knew that you didn't." },
  { id: "py-3", cat: "python", title: "CS61A project session — advance the current project one phase", detail: "Work the active 61A project (Hog / Cats / Ants / Scheme interpreter) for one focused 90-minute phase. Define done-criteria before starting: which autograder tests pass when you stop. Commit with a meaningful message, not 'update'." },
  { id: "py-4", cat: "python", title: "Calculator interpreter — tokenize → parse → eval → apply", detail: "The warm-up for the final Scheme interpreter. Build each stage separately against tiny inputs, then wire them. Draw the 4 components on paper first (Reader, Environment, Evaluator, Apply) — the same architecture you'll prototype with a Thunk sentinel and trampoline loop for TCO in week 10." },
  { id: "py-5", cat: "python", title: "Recursion / TCO deep-work block", detail: "The most important concept of the quarter. Implement one of: recursive evaluator, trampoline loop with Thunk sentinels, Frame model lookup — from scratch, then step through it in Python Tutor. If you can't explain the call stack out loud, it's not done." },
  { id: "py-6", cat: "python", title: "Testing pass — pytest ≥ 80% coverage on this week's code", detail: "Write tests before or immediately after each function, never as an afterthought. Add fixtures and parametrization where a function has edge cases (empty input, single element, deep recursion). Run mypy clean. This is the Google code-review standard applied from week 1." },

  /* ── HtDP Logic Sandbox (2h engine block) ── */
  { id: "ht-1", cat: "htdp", title: "HtDP Design Recipe — one data definition end-to-end", detail: "Run the full 6-step recipe: signature, purpose, examples, template, function, tests. Write the template BEFORE the function. This rewires structural thinking — the same pattern becomes your Scheme eval in the interpreter weeks." },
  { id: "ht-2", cat: "htdp", title: "HtDP — arbitrarily large data: recursive data definitions", detail: "Map one recursive data definition directly to a recursive function structure (lists, natural numbers, trees). One self-reference per self-reference in the data — no more, no less. Test with a base case and at least two recursive depths." },
  { id: "ht-3", cat: "htdp", title: "HtDP — abstraction: build a higher-order function", detail: "Take two structurally identical recursive functions you wrote this week and fold the difference into a parameter. If you can't name the abstraction, you haven't found it yet. This is the exact move SICP makes in weeks 5–6." },
  { id: "ht-4", cat: "htdp", title: "HtDP — intertwined data: trees + mutual recursion", detail: "Implement one mutually recursive pair (e.g. expression trees with two node types). Trace both functions on paper for one input before coding. This is the AST shape your Scheme interpreter will use." },

  /* ── Rosen Discrete Math (1.5h engine block) ── */
  { id: "ro-1", cat: "rosen", title: "Rosen — today's chapter section + warm-ups", detail: "Read the scheduled section (logic, proofs, induction, counting, relations, or graphs) BEFORE attempting problems. Do every warm-up. For each proof technique used, write a one-line Anki card: technique + when to reach for it." },
  { id: "ro-2", cat: "rosen", title: "Proof reconstruction — one proof from memory", detail: "Close the book. Reproduce one proof from this week (induction, contradiction, or a counting argument) fully on paper. Check against Rosen and note exactly where your reasoning diverged. This is the Level-1 bar of the deep-understanding test." },
  { id: "ro-3", cat: "rosen", title: "Unseen-problem transfer set — 3 problems never done before", detail: "Take 3 problems from a 6.042J past exam or Rosen's end-of-chapter set you have never seen. Attempt each 15 minutes before checking anything. Solving unseen problems is the definition of understanding — memorized examples don't count." },
  { id: "ro-4", cat: "rosen", title: "Math → code bridge — implement today's concept", detail: "Implement the current topic in Python: Euclidean algorithm, modular exponentiation (fast power), a hash map from buckets, or BFS over an adjacency list. 100 lines max, with 3+ test cases. This is the number-theory-to-CP pipeline made physical." },
  { id: "ro-5", cat: "rosen", title: "Rosen summary sheets + Anki consolidation", detail: "Produce one-page summary sheets for every chapter covered so far, from memory first, then fill gaps. Check Anki metrics — again-queue >20% means slow down and consolidate; <5% means you can add more cards." },

  /* ── CP Theory (1.5h engine block) ── */
  { id: "ct-1", cat: "cp-theory", title: "CPH / CP4 reading — this week's technique chapters", detail: "Read the scheduled Competitive Programmer's Handbook chapters (1–4 foundations, 5 greedy, 7 DP, 11–12 graphs) with a pen: write the one-sentence essence of each technique and the problem shape that triggers it. Theory before grinding — pattern recognition is the asset." },
  { id: "ct-2", cat: "cp-theory", title: "Technique drill — the week's named algorithm", detail: "Drill the scheduled technique (prefix sums, two-pointer, binary search variants, greedy, DP, BFS/DFS, graphs): read the cp-algorithms.com page, then solve 3–5 problems using only that technique. Add one template snippet to your library with a usage note." },
  { id: "ct-3", cat: "cp-theory", title: "USACO block — one complete-search / simulation set", detail: "Complete one USACO Bronze (later Silver) problem set end-to-end. These are implementation-heavy — the exact muscle for HRT's 'correctness under pressure' superday. Time yourself; brute force first, optimize only with a measured reason." },
  { id: "ct-4", cat: "cp-theory", title: "Memory test — 7 core algorithms from scratch", detail: "Write binary search, BFS/DFS, merge sort, GCD, sieve of Eratosthenes, and union-find entirely from memory, under 10 minutes each. This is the week-13 gate before Q2 — anything that stalls gets re-drilled this week, not next quarter." },

  /* ── CP Execution (1.5h engine block) ── */
  { id: "ce-1", cat: "cp-exec", title: "CF batch — problems at the current rating band", detail: "Solve today's batch at the week's target rating (800 → 1300 as the quarter progresses, toward 210 cumulative). Before submitting each, estimate its time complexity out loud — never submit without knowing the complexity. Log pattern + failure reason in Problems-Log.md." },
  { id: "ce-2", cat: "cp-exec", title: "Live rated round — full contest conditions", detail: "Enter today's Div.4/Div.3 round (later Div.2 A) at real time-box, no pauses. Simulate pressure: one submission per problem mindset, penalty awareness. Afterward, upsolve at least one problem above your solved ceiling before sleeping." },
  { id: "ce-3", cat: "cp-exec", title: "CF sprint checkpoint — hit the cumulative ladder", detail: "Check your cumulative count against the ladder: 20 → 42 → 64 → 86 (Bronze done) → 107 → 128 → 142 → 158 → 170 → 180 (first Div.2 A) → 210 with rating 900+. If behind, take the delta as extra problems this block — the ladder is the contract." },
  { id: "ce-4", cat: "cp-exec", title: "Upsolve session — last round's unsolved problems", detail: "Every problem you didn't solve in the last rated round gets solved today, including one above your rating. Write a 3-line summary per problem: the key observation, the implementation pitfall, the tag. Upsolving is where rating actually moves." },

  /* ── Income / RLHF (variable, outside the 12h engine) ── */
  { id: "in-1", cat: "income", title: "RLHF platforms — one onboarding step or task batch", detail: "Advance the RLHF pipeline one concrete step: finish an onboarding assessment, claim and complete a task batch on Outlier / DataAnnotation / Mercor, or register one more platform. Track hours and rate in the runway sheet — the C/C++ specialist tier ($75–135/hr) unlocks once your C is solid." },
  { id: "in-2", cat: "income", title: "Upwork / Mostaql — 5 tailored micro-freelance proposals", detail: "Send 5 proposals for Python automation / Excel scripting / data extraction gigs aimed at small businesses in your reachable markets. Each proposal: 2 sentences proving you read the brief + one relevant GitHub link. Log all 5 with follow-up dates." },
  { id: "in-3", cat: "income", title: "Runway sheet — update income vs your burn", detail: "Log this month's actual income against your personal monthly burn (set it once, keep it honest). Recompute months-of-runway and the delta to your emergency-fund target. Write one line: the single highest-leverage income action for next week." },
  { id: "in-4", cat: "income", title: "GSoC / Outreachy — one contribution or application step", detail: "Move the stipend pipeline forward: claim a beginner-friendly issue on a target org's repo, submit a small PR, or draft one section of the application. GSoC $3–6.6k / Outreachy $7k are one-time but real — the deadline calendar is in the quarter brief." },

  /* ── Tools / Projects (1.5h engine block + review) ── */
  { id: "to-1", cat: "tools", title: "python-dsa / cf-tracker — one tested component", detail: "Implement one data structure or feature (linked list, stack, BST, hash table — or the CF API client, JSON persistence). Write pytest tests first or immediately after. Type hints on, mypy clean. Push to GitHub with a README update — every project gets a real benchmark number, never just 'implemented'." },
  { id: "to-2", cat: "tools", title: "Toolchain block — WSL2 / git terminal / pdb / mypy", detail: "One concrete tooling upgrade per session: get comfortable in WSL2, drive git from the terminal only (no GUI), debug with pdb breakpoints, or enforce type hints with mypy. Tool fluency is what makes the other 10.5 hours faster." },
  { id: "to-3", cat: "tools", title: "Code review practice — 5 open-source Python functions", detail: "Review 5 open-source Python functions for correctness, efficiency, and edge cases — out loud, as if commenting on a colleague's CL. This is direct prep for RLHF code-evaluation applications and for the Google-style review checklist you apply to your own code." },
  { id: "to-4", cat: "tools", title: "GitHub cleanup — pin, document, test every repo", detail: "Every repo (python-dsa, scheme-interpreter, cf-tracker, NEXUS-Y1) gets: a README that explains what it does and how to run it, passing tests, and a meaningful commit history. Pinned repos are your resume before the resume exists." },
  { id: "to-5", cat: "tools", title: "Sunday review — close the week honestly", detail: "Run the review: queue completion % per track, CF delta (rating + problems + upsolves), money logged, one unfinished task moved to Monday, and the 3 non-negotiables for next week. Write the single sentence that summarizes the week. 30 minutes, no more." },
  { id: "to-6", cat: "tools", title: "Three-level self-assessment + backup", detail: "Level 1 Recall: write one concept from scratch, closed-book. Level 2 Transfer: solve one unseen problem. Level 3 Teach: one-paragraph Feynman explanation in the vault. Then export a NEXUS backup and push NEXUS-Y1 to git — nothing lost, ever." },
];

/* ── the 16 quarters ───────────────────────────────────────────────── */
export type Quarter = {
  id: number;
  label: string;
  range: string;
  theme: string;
  deliverables: string[];
  milestone: string;
};

export const QUARTERS: Quarter[] = [
  { id: 1, label: "Y1 · Q1", range: "Jul – Sep 2026", theme: "Python + Discrete Math + Tools", deliverables: ["6.100L + Helsinki complete; CF 600+", "Discrete Math (6.042J) foundations + MCS", "Missing Semester: git/bash/vim live", "GitHub active from day one"], milestone: "Working Python programs · git workflow operational" },
  { id: 2, label: "Y1 · Q2", range: "Oct – Dec 2026", theme: "Python depth + Calc I + Probability", deliverables: ["Recursion, OOP, generators deep", "Calculus I differentiation (18.01)", "Probability I: EV, distributions, Bayes", "CP: binary search, prefix sums · CF 900 · Hacktoberfest PR"], milestone: "Income accounts live (RLHF + Mostaql)" },
  { id: 3, label: "Y1 · Q3", range: "Jan – Mar 2027", theme: "C language + Scheme Interpreter", deliverables: ["K&R C Ch.1–6", "Scheme Interpreter in C: closures + TCO + mark-sweep GC", "Zetamac + Godbolt habits start", "CF 1100 · RLHF earning · Outreachy/GSoC apps"], milestone: "First real system built in C · RLHF income flowing" },
  { id: 4, label: "Y1 · Q4", range: "Apr – Jun 2027", theme: "C data structures + Nand2Tetris", deliverables: ["Linked list / BST / hash table from scratch in C", "Nand2Tetris Part 1: gates → ALU → CPU", "Theory of Computation: automata → CFGs", "CF 1400 · portfolio site + blog #1 live"], milestone: "Portfolio site + blog #1 live — visibility engine starts" },
  { id: 5, label: "Y2 · Q1", range: "Jul – Sep 2027", theme: "K&R complete + Heap Allocator + Calc II", deliverables: ["K&R all exercises done", "Heap allocator: arena + slab, valgrind-clean, benchmarked", "Handmade Hero ep. 1–50", "CF 1550 · first remote role search begins"], milestone: "First real design doc (5-section) · public allocator" },
  { id: 6, label: "Y2 · Q2", range: "Oct – Dec 2027", theme: "C++ begins + Linear Algebra", deliverables: ["C++ RAII allocator rewrite: unique_ptr, placement new, moves", "C syscalls/signals: fork, exec, mmap", "Linear Algebra (Strang 18.06) first half", "CP: segment trees + Fenwick · CF 1650"], milestone: "C++ starts 18 months early — the quant-firm gate opens" },
  { id: 7, label: "Y2 · Q3", range: "Jan – Mar 2028", theme: "xv6 kernel + eBPF + LLDB", deliverables: ["xv6: scheduler, VM, FS + custom modification", "eBPF syscall tracer", "LLDB as primary debugger · ASan/UBSan always-on", "CP: KMP + Z-function · CF 1700"], milestone: "xv6 modification public with architecture doc" },
  { id: 8, label: "Y2 · Q4", range: "Apr – Jun 2028", theme: "C++ concurrency + OCaml + Linux patch #1", deliverables: ["Lock-free SPSC queue: atomics, memory ordering, TSan-clean", "OCaml 4-week basics: types, functors, a parser", "First Linux kernel patch submitted via LKML workflow", "CF 1750 · graduate April 2028"], milestone: "Kernel contribution history begins — Apple pipeline entry" },
  { id: 9, label: "Y3 · Q1", range: "Jul – Sep 2028", theme: "Go + TCP/IP Stack + Multivariable", deliverables: ["Go: goroutines, channels, scheduler internals", "TCP/IP stack in C++: sliding window + congestion control", "TLA+ 2-week intro: model-check one protocol", "CP: SCC, bridges, 2-SAT · CF 1800"], milestone: "Stack benchmarked · CF 1800 = HFT application threshold" },
  { id: 10, label: "Y3 · Q2", range: "Oct – Dec 2028", theme: "B+ Tree + XNU + Probability II", deliverables: ["B+ tree: all operations + WAL crash recovery", "XNU source reading: Mach IPC, IOKit (3 weeks)", "Linux kernel patch #2 — non-trivial mm/ or net/", "Probability II: Markov chains, martingales · CF 1850"], milestone: "Mid-level remote applications open" },
  { id: 11, label: "Y3 · Q3", range: "Jan – Mar 2029", theme: "SQL Engine + Raft + Stochastic Calculus", deliverables: ["SQL engine: SIMD scan (SSE2/AVX2) + Arrow reader", "Go Raft KV: replication, election, compaction", "Stochastic Calculus: Brownian motion → Ito's lemma", "Blog #2: vectorized execution + benchmarks · CF 1900"], milestone: "Raft passes linearizability tests · Candidate Master" },
  { id: 12, label: "Y3 · Q4", range: "Apr – Jun 2029", theme: "Order Book + Query Optimizer + Ito complete", deliverables: ["Order Book Simulator: lock-free, sub-1μs, TSan-clean", "Query optimizer: predicate pushdown + projection elimination", "Ito's lemma derivable from scratch on demand", "Blog #3: lock-free design + latency analysis · CF 1950"], milestone: "HFT portfolio centerpiece shipped" },
  { id: 13, label: "Y4 · Q1", range: "Jul – Sep 2029", theme: "C++ advanced + Path Tracer + PyTorch ext", deliverables: ["Templates, CRTP, expression templates, UB elimination", "Vulkan path tracer: BVH + Cook-Torrance BRDF", "PyTorch C++ extension with custom CUDA op", "Mock interviews on Pramp/interviewing.io · CF 2000"], milestone: "CF 2000 — confirmed ceiling, sufficient for every target" },
  { id: 14, label: "Y4 · Q2", range: "Oct – Dec 2029", theme: "CUDA kernels + Triton + Convex Optimization", deliverables: ["CUDA matmul: naive → tiled → Tensor-Core + roofline", "AVX-512 aggregation benchmarked vs scalar", "Triton: flash attention + fused softmax", "Blog #4: matmul roofline analysis"], milestone: "The single most-tested NVIDIA skill, proven in public" },
  { id: 15, label: "Y4 · Q3", range: "Jan – Mar 2030", theme: "GPT Transformer + Compiler Theory", deliverables: ["Transformer from scratch trains on real data", "SSA + liveness analysis (Cooper & Torczon Ch.5)", "Distributed training design doc (5 pages)", "Information Theory · CF 2000 maintained"], milestone: "Can construct SSA from a CFG on a whiteboard" },
  { id: 16, label: "Y4 · Q4", range: "Apr – Jun 2030", theme: "Lock-free advanced + Applications open", deliverables: ["Wait-free queue: hazard pointers, epoch reclamation, TSan proofs", "Register allocation: Chaitin-Briggs + linear scan", "ABI depth: ARM64 vs x86-64, vtables, mangling", "Full application pipeline across all 5 domains"], milestone: "🏁 Applications open · target: sign the giant, Jun 2030" },
];

export const OBJECTIVES = [
  { id: "cf2000", label: "CF ≥ 2000", detail: "Confirmed ceiling — covers HRT/Citadel/Two Sigma OAs", color: "#ff5c7a" },
  { id: "projects", label: "9 core projects shipped", detail: "Each traced to a named company's screen", color: "#2fd6b5" },
  { id: "math", label: "Math spine — 12 subjects", detail: "Discrete → Stochastic Calculus (HFT gate)", color: "#b48cff" },
  { id: "dossiers", label: "44 company dossiers", detail: "5 domains · both tiers · pipeline intelligence", color: "#45c8e8" },
  { id: "remote", label: "Remote job + 2yr tenure", detail: "Income engine + resume signal by Y4", color: "#6fdd8b" },
];

/* ── CP topics (priority order from the master plan) ───────────────── */
export const CP_TOPICS = [
  "Arrays / strings / hashmaps", "Two pointers / sliding window", "Binary search — all variants",
  "Sorting / prefix sums", "Basic DP", "BFS / DFS", "Dijkstra / Floyd-Warshall",
  "Union-Find (DSU)", "Segment / Fenwick trees", "Advanced DP", "KMP / Z-function",
  "Max-flow / bipartite matching", "SCC — Tarjan / Kosaraju", "2-SAT",
  "Convex hull basics", "Implementation speed + bug-free coding",
];

/* ── math spine (hiring-only scope) ────────────────────────────────── */
export type MathSubject = {
  id: string;
  name: string;
  lectures: number;
  problems: number;
  traces: string[];
  color: string;
};

export const MATH_SUBJECTS: MathSubject[] = [
  { id: "discrete", name: "Discrete Math", lectures: 20, problems: 60, traces: ["Every company — CS reasoning base"], color: "#2fd6b5" },
  { id: "calc1", name: "Calculus I", lectures: 18, problems: 50, traces: ["HFT gate — stochastic chain start"], color: "#5fb0ff" },
  { id: "prob1", name: "Probability I", lectures: 14, problems: 50, traces: ["Jane Street · Optiver · SIG · IMC OAs"], color: "#ff5c7a" },
  { id: "calc2", name: "Calculus II", lectures: 16, problems: 45, traces: ["HFT gate prerequisite"], color: "#5fb0ff" },
  { id: "linalg", name: "Linear Algebra (Strang)", lectures: 18, problems: 55, traces: ["NVIDIA · DeepMind · Databricks AI Infra"], color: "#b48cff" },
  { id: "prob2", name: "Probability II — Stochastic Processes", lectures: 12, problems: 40, traces: ["All Tier 1/2 quant firms"], color: "#ff5c7a" },
  { id: "multivar", name: "Multivariable Calculus", lectures: 15, problems: 45, traces: ["HFT gate · DeepMind ML discussions"], color: "#5fb0ff" },
  { id: "stoch", name: "Stochastic Calculus — Ito derived", lectures: 12, problems: 35, traces: ["Explicit screen at every quant firm"], color: "#ff7849" },
  { id: "ode", name: "ODEs (basics, 3 weeks)", lectures: 6, problems: 15, traces: ["GPU simulation background"], color: "#8e9cc0" },
  { id: "convex", name: "Convex Optimization (core)", lectures: 8, problems: 20, traces: ["DeepMind · NVIDIA · Databricks AI Infra"], color: "#6fdd8b" },
  { id: "info", name: "Information Theory", lectures: 8, problems: 20, traces: ["DeepMind ML-depth domain round"], color: "#6fdd8b" },
  { id: "realan", name: "Real Analysis (Rudin Ch.1–4)", lectures: 10, problems: 25, traces: ["Whiteboard proof fluency"], color: "#9db4ff" },
];

/* ── the 44 target companies across 5 domains ──────────────────────── */
export type Company = {
  id: string;
  name: string;
  tier: string;
  role: string;
  color: string;
  pipeline: string[];
  passes: string;
  fails: string;
  build: string;
  checklist: string[];
};

const HFT_CHECK = [
  "C++17/20: lock-free SPSC queue + custom allocator in real code",
  "Explain memory_order_acquire vs release with a hardware example",
  "Identify & fix false sharing (alignas(64)) in shown code",
  "Order Book Simulator public, sub-1μs per op benchmarked",
  "Derive Ito's lemma from scratch without notes",
  "Zetamac: fast, consistent mental math (18+ months practice)",
  "CF 1800+ visible on profile",
  "5+ company-tagged mock interviews completed",
];
const AI_CHECK = [
  "CUDA tiled matmul with roofline analysis — portfolio centerpiece",
  "Memory hierarchy + warp divergence explainable with latency numbers",
  "PyTorch C++ extension functional, callable from Python",
  "2 Triton kernels benchmarked vs PyTorch baselines",
  "Distributed training design doc complete",
  "GPT Transformer trained on real data, public GitHub",
  "LeetCode Hard consistency (DeepMind bar)",
  "'Why this company' grounded in their engineering blog / mission",
];
const KERNEL_CHECK = [
  "3+ Linux kernel patches merged, ≥1 non-trivial (mm/ or net/)",
  "xv6 modified version public with full architecture doc",
  "LLDB as primary debugger for all work since Y2 Q3",
  "Can discuss XNU: Mach IPC, IOKit driver model",
  "Can implement a spinlock in C from memory",
  "LFX Mentorship / contribution history visible in git blame",
];
const COMPILER_CHECK = [
  "Construct SSA from a CFG with phi-node placement on a whiteboard",
  "Regalloc: graph coloring vs linear scan, spilling trade-offs explainable",
  "Custom LLVM-adjacent pass written and working",
  "Scheme Interpreter in C, public, with GC documentation",
  "Fluent: reverse-postorder traversal + LLVM debug info formats",
];
const DB_CHECK = [
  "SIMD vectorized scan benchmarked with block-size analysis",
  "Arrow format reader functional",
  "Raft KV public, passes linearizability tests",
  "Query optimizer: predicate pushdown + projection elimination",
  "B+ tree: all operations + WAL crash recovery",
  "Fluent: MVCC, LSM vs B-tree, columnar storage, query planning",
  "LeetCode Hard consistency (Snowflake/Databricks bar)",
];

const HFT = "Quantitative Systems (HFT)";
const AI = "AI GPU Infrastructure";
const KERN = "OS Kernels & Embedded";
const COMP = "Compilers & Language Design";
const DB = "Database Internals";

const hft = (id: string, name: string, role: string, pipeline: string[], passes: string, fails: string, build: string, extraCheck: string[] = []): Company => ({
  id, name, tier: HFT, role, color: "#ff5c7a", pipeline, passes, fails, build, checklist: [...HFT_CHECK, ...extraCheck],
});

export const COMPANIES: Company[] = [
  /* ── Domain 1 · Quantitative Systems (HFT) — Quant Developer track ── */
  hft("jane", "Jane Street", "Quant Developer — Trading",
    ["Online assessment", "Phone/video technicals", "Superday: live collaborative coding — real code, any language"],
    "Teachability: how you use hints, adjust when wrong, stay calm. Honest 'I don't know'. No GPA/degree filter.",
    "Bluffing. Freezing when a problem is deliberately slightly too hard.",
    "Probability mastery + Zetamac + OCaml project", ["OCaml project public (Jane Street is the largest industrial OCaml user)"]),
  hft("citadel", "Citadel / Citadel Securities", "Quant Developer",
    ["General technical + behavioral ×2", "Team-matched technical rounds", "Superday — ~8 weeks total"],
    "Narrated uncertainty: 'share your thought process, discuss trade-offs, be clear about what you know and don't know'.",
    "One strong area, one dead area. Performing confidence instead of reasoning.",
    "Lock-free C++ (RAII allocator) + Order Book + Ito's lemma"),
  hft("hrt", "Hudson River Trading", "Quant Developer",
    ["CodeSignal OA (Python/C++): LC-hard DP in 2 hours", "Superday — 3 live-coding rounds", "Implementation + design explained out loud"],
    "CF-style speed with zero bugs. Systems intuition: latency, memory, constant factors.",
    "Correct-but-slow. Ignoring constant factors under the 2-hour clock.",
    "CF 2000 + Order Book Simulator"),
  hft("twosigma", "Two Sigma", "Quant Developer",
    ["OA", "Phone: algo + language depth", "Onsite ×4"],
    "Production-quality code in interviews. Data intuition under uncertainty.",
    "Competitive-style hacks without engineering care.",
    "SQL engine + statistics depth"),
  hft("jump", "Jump Trading", "Quant Developer",
    ["Online assessment", "Technical phones", "Onsite: live order-book-style implementation + probability"],
    "Lock-free fluency demonstrated live. Calm probability reasoning.",
    "Theoretical-only concurrency answers.",
    "Order Book Simulator (implemented live in their interviews)"),
  hft("optiver", "Optiver", "Quant Developer — Trading",
    ["80-question math test (5-min sections)", "Technical interviews", "Onsite"],
    "Flawless arithmetic speed. Market-microstructure curiosity.",
    "Failing the math gate. Zero trading-domain interest.",
    "Zetamac 18+ months + probability drills"),
  hft("imc", "IMC Trading", "Quant Developer",
    ["OA (Prosperity competition is a recognized signal)", "Technical interviews", "Onsite"],
    "Probability puzzles + implementation speed.",
    "Slow ramp on calibration games ('how much would you pay to play?').",
    "IMC Prosperity participation + math drills"),
  hft("drw", "DRW", "Quant Developer",
    ["OA", "Technical phones", "Onsite: C++ low-latency systems"],
    "C++ depth with hardware empathy.",
    "App-layer-only worldview.",
    "Order Book + lock-free queue"),
  hft("sig", "Susquehanna (SIG)", "Quant Developer",
    ["OA + probability screen", "Technical interviews", "Onsite"],
    "Probability/market-making game fluency under time pressure.",
    "Sizing errors on expected-value questions.",
    "Zetamac + probability I/II"),
  hft("tower", "Tower Research Capital", "Quant Developer",
    ["OA", "Technical interviews", "Onsite"],
    "Systems + probability balance.",
    "Weak mental math under pressure.",
    "Order Book + C++ concurrency"),
  hft("xtx", "XTX Markets", "Quant Developer",
    ["OA", "Technical interviews", "Onsite — ML-native infra flavor"],
    "ML-native infrastructure instincts.",
    "No awareness of ML systems workloads.",
    "CUDA matmul + SQL engine"),
  hft("akuna", "Akuna Capital", "Quant Developer",
    ["OA (HackerRank)", "Technical phones", "Onsite"],
    "Implementation correctness under time.",
    "Untested edge cases.",
    "python-dsa → C++ systems pipeline"),
  hft("fiverings", "Five Rings", "Quant Developer",
    ["OA + probability", "Technical interviews", "Onsite"],
    "Probability reasoning + clean code.",
    "Guessing without sizing the error.",
    "Probability spine + Zetamac"),

  /* ── Domain 2 · AI GPU Infrastructure ── */
  { id: "nvidia", name: "NVIDIA", tier: AI, role: "CUDA / GPU Systems Engineer", color: "#b48cff",
    pipeline: ["Recruiter screen", "Technical phones ×1–2", "4–6h loop ×4–6 interviewers — specialty rounds dominate"],
    passes: "CUDA depth specifically: coalescing, warp divergence, bank conflicts, tiling, profiling methodology. Intellectual honesty — admit gaps immediately.",
    fails: "Generic systems knowledge. 'NVIDIA-specific systems thinking is what's tested.' Bluffing.",
    build: "CUDA matmul + roofline + Triton", checklist: AI_CHECK },
  { id: "deepmind", name: "Google DeepMind", tier: AI, role: "Software Engineer — Research Infra", color: "#b48cff",
    pipeline: ["OA (LC Hard — Google's bar)", "Phone ×2", "Onsite ×4–5: algo + research infrastructure"],
    passes: "Hard algo + research-engineering empathy. ML-math discussion depth (linalg, info theory).",
    fails: "Algo-only, no research context. LeetCode-Medium ceiling.",
    build: "Transformer + distributed training doc", checklist: AI_CHECK },
  { id: "openai", name: "OpenAI", tier: AI, role: "Software Engineer, Infra", color: "#b48cff",
    pipeline: ["Recruiter", "Coding phone", "Onsite ×4: systems-heavy + ML-adjacent"],
    passes: "Practical ML systems engineering over LeetCode. Real project deep-dives. OSS at the top of the resume.",
    fails: "Web-dev-scale thinking only. Thin production stories.",
    build: "Triton kernels + Raft KV", checklist: AI_CHECK },
  { id: "anthropic", name: "Anthropic", tier: AI, role: "Software Engineer", color: "#b48cff",
    pipeline: ["Recruiter", "Take-home or phone", "Onsite ×4: coding + values"],
    passes: "Thoughtful safety-aware reasoning. Deep systems skill. Independent research + OSS prominently shown.",
    fails: "Misaligned-vibes answers. Shallow depth on your own projects.",
    build: "VECTOR-grade depth + write-ups", checklist: AI_CHECK },
  { id: "meta-ai", name: "Meta AI Infrastructure", tier: AI, role: "Software Engineer — FAIR/GenAI Infra", color: "#b48cff",
    pipeline: ["Recruiter + HM", "Technical phone ×2", "Onsite: 2 coding (speed), 1 design, 1 behavioral"],
    passes: "Two mediums in 40 min bug-free. Design at GPU-cluster scale.",
    fails: "Slow but correct. Thin behavioral stories.",
    build: "CUDA + distributed training doc", checklist: AI_CHECK },
  { id: "xai", name: "xAI", tier: AI, role: "Software Engineer — Training Infra", color: "#b48cff",
    pipeline: ["Recruiter", "Technical interviews", "Onsite: systems-heavy"],
    passes: "First-principles GPU systems reasoning. Extreme ownership signals.",
    fails: "Framework-only knowledge.",
    build: "Distributed training design doc", checklist: AI_CHECK },
  { id: "mistral", name: "Mistral", tier: AI, role: "Software Engineer — Infra", color: "#b48cff",
    pipeline: ["Recruiter", "Technical interviews", "Onsite"],
    passes: "Lean-team engineering maturity. Systems + ML breadth.",
    fails: "Needing large-org scaffolding to ship.",
    build: "Transformer + CUDA fundamentals", checklist: AI_CHECK },
  { id: "ms-ai", name: "Microsoft AI Infrastructure", tier: AI, role: "Software Engineer — Azure ML Platform", color: "#b48cff",
    pipeline: ["OA or recruiter", "Phone ×1", "Onsite ×4–5"],
    passes: "Breadth + collaboration signals. Distributed-systems reasoning at platform scale.",
    fails: "Solo-cowboy vibes. Untested assumptions.",
    build: "Raft KV + TCP/IP stack", checklist: AI_CHECK },
  { id: "db-ai", name: "Databricks AI Research Infra", tier: AI, role: "Staff SWE — AI Research Infrastructure", color: "#b48cff",
    pipeline: ["Recruiter", "Coding screen (CoderPad)", "Distributed systems deep-dive", "Platform round", "HM final"],
    passes: "OSS awareness — can discuss recent Spark releases and lakehouse formats. Take-homes graded on docs + tests.",
    fails: "'Weak open-source awareness' — their named failure mode.",
    build: "SQL engine + Arrow reader", checklist: AI_CHECK },

  /* ── Domain 3 · OS Kernels & Embedded ── */
  { id: "apple-os", name: "Apple Core OS / Silicon", tier: KERN, role: "Kernel Engineer", color: "#5fb0ff",
    pipeline: ["Phone screens", "Packed onsite: 8–9 interviews, 2 people each", "Content: instruction sets, debug info formats, OS fundamentals, architecture"],
    passes: "Contribution history they can look up. Mach IPC + IOKit fluency. Exact, low-level answers.",
    fails: "No kernel contributions — 'not much you can do now' (verified engineer quote).",
    build: "xv6 + Linux patches + XNU reading", checklist: KERNEL_CHECK },
  { id: "linux-foundation", name: "Linux Foundation", tier: KERN, role: "Kernel Engineer (contribution pipeline)", color: "#5fb0ff",
    pipeline: ["LFX Mentorship (Y2–Y3)", "Merged patches visible in LKML + git blame", "Employers review contribution history directly"],
    passes: "A real, citable contribution history before you ever interview.",
    fails: "Applying cold with zero upstream history.",
    build: "Kernel patches #1–#3 + LFX", checklist: KERNEL_CHECK },
  { id: "redhat", name: "Red Hat", tier: KERN, role: "Software Engineer — Kernel", color: "#5fb0ff",
    pipeline: ["Recruiter", "Technical interviews", "Upstream contribution review"],
    passes: "Upstream-first mindset. mm/net subsystem familiarity.",
    fails: "Downstream-only patch experience.",
    build: "Kernel patch #2 (mm/ or net/)", checklist: KERNEL_CHECK },
  { id: "suse", name: "SUSE", tier: KERN, role: "Kernel Engineer", color: "#5fb0ff",
    pipeline: ["Recruiter", "Technical interviews", "Contribution history review"],
    passes: "Sustained upstream engagement.",
    fails: "One-off patches without follow-through.",
    build: "Kernel patches + xv6 doc", checklist: KERNEL_CHECK },
  { id: "intel-kernel", name: "Intel Linux Kernel Team", tier: KERN, role: "Kernel Engineer", color: "#5fb0ff",
    pipeline: ["Recruiter", "Technical interviews", "Architecture + low-level screens"],
    passes: "Hardware-software interface depth (Nand2Tetris pays here).",
    fails: "No driver/subsystem context.",
    build: "xv6 + eBPF tracer", checklist: KERNEL_CHECK },
  { id: "arm", name: "ARM", tier: KERN, role: "Software Engineer — Systems", color: "#5fb0ff",
    pipeline: ["Recruiter", "Technical interviews", "Architecture screens"],
    passes: "ABI + calling-convention depth (ARM64 vs x86-64).",
    fails: "x86-only assumptions.",
    build: "ABI depth + xv6", checklist: KERNEL_CHECK },
  { id: "google-kernel", name: "Google Kernel Teams", tier: KERN, role: "Software Engineer — Android/ChromeOS", color: "#5fb0ff",
    pipeline: ["Recruiter", "Phone (LC)", "Onsite + kernel contribution review"],
    passes: "Google coding bar + real upstream patches.",
    fails: "Patches without algorithmic fluency.",
    build: "Kernel patches + CF 1800+", checklist: KERNEL_CHECK },
  { id: "ms-kernel", name: "Microsoft (kernel-adjacent)", tier: KERN, role: "Software Engineer — OS teams", color: "#5fb0ff",
    pipeline: ["OA or recruiter", "Phone", "Onsite ×4–5"],
    passes: "Systems breadth + contribution evidence.",
    fails: "Surface-level OS answers.",
    build: "xv6 + TCP/IP stack", checklist: KERNEL_CHECK },

  /* ── Domain 4 · Compilers & Language Design ── */
  { id: "apple-llvm", name: "Apple LLVM / Swift", tier: COMP, role: "Compiler Engineer", color: "#ffb224",
    pipeline: ["Phone interviews", "Packed onsite — starts approachable, sharpens fast", "LLVM debug info formats, reverse-postorder traversal, IR structures"],
    passes: "Evidence you've read LLVM internals, not just used it. Parser depth in C.",
    fails: "LLVM-as-black-box. Being 'discovered' instead of explicit about compiler depth on the resume.",
    build: "Scheme Interpreter + SSA/regalloc", checklist: COMPILER_CHECK },
  { id: "google-v8", name: "Google V8 / MLIR", tier: COMP, role: "Software Engineer — Compilers", color: "#ffb224",
    pipeline: ["Recruiter", "Phone (LC Hard)", "Onsite: compiler + systems rounds"],
    passes: "JIT/IR reasoning + Google coding bar.",
    fails: "No runtime/IR mental model.",
    build: "SSA + interpreter pipeline", checklist: COMPILER_CHECK },
  { id: "modular", name: "Modular (Mojo)", tier: COMP, role: "Software Engineer — Compiler/Runtime", color: "#ffb224",
    pipeline: ["Recruiter", "Technical interviews", "Onsite: deep compiler + GPU rounds"],
    passes: "MLIR-era compiler thinking + Triton/kernel literacy.",
    fails: "Framework-user-level GPU knowledge.",
    build: "Triton kernels + SSA", checklist: COMPILER_CHECK },
  { id: "amd", name: "AMD Compiler Team", tier: COMP, role: "Compiler Engineer — ROCm/GPU", color: "#ffb224",
    pipeline: ["Recruiter", "Technical interviews", "Compiler fundamentals screens"],
    passes: "GPU compiler pipeline reasoning.",
    fails: "No codegen-stage awareness.",
    build: "Regalloc + CUDA matmul", checklist: COMPILER_CHECK },
  { id: "intel-comp", name: "Intel oneAPI Compilers", tier: COMP, role: "Compiler Engineer", color: "#ffb224",
    pipeline: ["Recruiter", "Technical interviews", "Compiler + architecture screens"],
    passes: "Classic compiler pipeline depth: SSA → regalloc → ABI.",
    fails: "Weak codegen fundamentals.",
    build: "SSA + register allocation", checklist: COMPILER_CHECK },
  { id: "meta-comp", name: "Meta HHVM / Buck2", tier: COMP, role: "Software Engineer — Language Infra", color: "#ffb224",
    pipeline: ["Recruiter", "Phone", "Onsite: coding + infra rounds"],
    passes: "Type-system + build-system internals reasoning.",
    fails: "No large-codebase tooling empathy.",
    build: "Interpreter + build-tool literacy", checklist: COMPILER_CHECK },

  /* ── Domain 5 · Database Internals ── */
  { id: "clickhouse", name: "ClickHouse", tier: DB, role: "Software Engineer — Engine", color: "#6fdd8b",
    pipeline: ["Recruiter", "Technical interviews", "Onsite: columnar engine + C++ depth"],
    passes: "Vectorized execution as core differentiator — directly tested.",
    fails: "Row-at-a-time-only thinking.",
    build: "SIMD scan + Arrow reader", checklist: DB_CHECK },
  { id: "snowflake", name: "Snowflake", tier: DB, role: "Software Engineer — Core", color: "#6fdd8b",
    pipeline: ["Recruiter screen", "OA 90–120min: 2–3 Medium-Hard + SQL/data questions", "Phone: LC + C++ memory model", "Virtual onsite"],
    passes: "Graphs/DP/concurrency (concurrent LRU, transactional KV). Infra design: 'distributed rate limiter', 'warehouse metadata service'.",
    fails: "Generic product-design answers. Weak DB-internals vocabulary.",
    build: "SQL engine + Raft KV", checklist: DB_CHECK },
  { id: "databricks", name: "Databricks Core", tier: DB, role: "Software Engineer — Engine", color: "#6fdd8b",
    pipeline: ["Recruiter", "Coding screen (CoderPad, LC Medium-Hard)", "Distributed systems / Spark deep-dive", "ML or platform round", "Behavioral", "HM final"],
    passes: "Ownership — drove outcomes yourself. Current OSS awareness of the lakehouse landscape.",
    fails: "'Weak open-source awareness' — named failure mode. Describing team work as your own.",
    build: "SQL engine + Spark-ecosystem literacy", checklist: DB_CHECK },
  { id: "mongodb", name: "MongoDB Core", tier: DB, role: "Software Engineer — Storage", color: "#6fdd8b",
    pipeline: ["Recruiter", "Technical phones", "Onsite: storage + distributed rounds"],
    passes: "Replication/consensus depth with real numbers.",
    fails: "Hand-wavy consistency answers.",
    build: "Raft KV + B+ tree/WAL", checklist: DB_CHECK },
  { id: "cockroachdb", name: "CockroachDB", tier: DB, role: "Software Engineer — Distributed SQL", color: "#6fdd8b",
    pipeline: ["Recruiter", "Technical interviews", "Onsite: Raft-heavy distributed SQL"],
    passes: "Raft as lived experience, not blog knowledge.",
    fails: "Consensus-as-vocabulary.",
    build: "Raft KV + TLA+ model", checklist: DB_CHECK },
  { id: "tigerdata", name: "TigerData / Timescale", tier: DB, role: "Software Engineer — Postgres/Time-series", color: "#6fdd8b",
    pipeline: ["Recruiter", "Technical interviews", "Postgres-internals screens"],
    passes: "Postgres-based engine reasoning.",
    fails: "No storage-layer context.",
    build: "B+ tree + WAL", checklist: DB_CHECK },
  { id: "motherduck", name: "MotherDuck", tier: DB, role: "Software Engineer — DuckDB-adjacent", color: "#6fdd8b",
    pipeline: ["Recruiter", "Technical interviews", "Query-engine screens"],
    passes: "Analytical engine + vectorization literacy.",
    fails: "OLTP-only mental model.",
    build: "SQL engine + SIMD scan", checklist: DB_CHECK },
  { id: "yugabyte", name: "Yugabyte", tier: DB, role: "Software Engineer — Distributed DB", color: "#6fdd8b",
    pipeline: ["Recruiter", "Technical interviews", "Distributed-storage screens"],
    passes: "Distributed SQL + consensus depth.",
    fails: "No failure-mode vocabulary.",
    build: "Raft KV + TCP/IP stack", checklist: DB_CHECK },
];

export const TIER_COLORS: Record<string, string> = {
  [HFT]: "#ff5c7a",
  [AI]: "#b48cff",
  [KERN]: "#5fb0ff",
  [COMP]: "#ffb224",
  [DB]: "#6fdd8b",
};

/* ── income — 48 months from Jul 2026, anchored to the plan's table ── */
export const INCOME_MONTHS: { m: string; v: number }[] = (() => {
  const names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const out: { m: string; v: number }[] = [];
  for (let i = 0; i < 48; i++) {
    const mi = (6 + i) % 12; // starts July 2026
    out.push({ m: `${names[mi]} ${2026 + Math.floor((6 + i) / 12)}`, v: 0 });
  }
  /* Anchors from Section 12 + the income catalog:
     Oct'26 RLHF onboarding $50–150 → Feb'27 $250–450 →
     Sep'27 first remote junior $800–1,200 → Jan'28 C/C++ tier $1,500–2,500 →
     Jun'28 graduation $2,000–3,500 → Sep'29 $100k-yr equivalent → Jun'30 $6,000+ / giant offer */
  const vals = [
    0, 0, 0, 100, 225, 275, 325, 350, 300, 300,
    300, 300, 400, 600, 1000, 1000, 1100, 1200,
    2000, 2200, 2400, 2600, 2700, 2750, 2900, 3050,
    3200, 3350, 3500, 3650, 3800, 3950, 4100, 4250,
    4400, 4550, 4700, 4850, 5000, 5500, 5900, 6300,
    6700, 7100, 7500, 7900, 8300, 9500,
  ];
  return vals.map((v, i) => ({ m: out[i].m, v }));
})();

export const NEGOTIATIONS = [
  {
    id: "n1",
    title: "RLHF → C/C++ specialist tier",
    when: "Y2 · once C is solid",
    from: "$15–40/hr",
    to: "$75–135/hr",
    color: "#6fdd8b",
    triggers: ["K&R C complete + valgrind-clean allocator", "Pass C++ evaluation tasks on Outlier/Mercor", "2–3 platforms active with steady volume"],
  },
  {
    id: "n2",
    title: "First remote junior role",
    when: "Y2 Q1–Q2 · Sep 2027",
    from: "$0 salary",
    to: "$800–1,200/mo",
    color: "#5fb0ff",
    triggers: ["python-dsa + 2 projects public with benchmarks", "Resume rewritten: skills → projects → OSS → education", "Remote role search started in Y2 Q1"],
  },
  {
    id: "n3",
    title: "Remote role rate bump",
    when: "Y2 Q4 · Jun 2028 (graduation)",
    from: "$800–1,200/mo",
    to: "$2,000–3,500/mo",
    color: "#ffb224",
    triggers: ["Probation passed clean", "C++ concurrency work public", "Competing offer or strong BATNA doc"],
  },
  {
    id: "n4",
    title: "ML/CUDA expert tier + consulting",
    when: "Y4 · Sep 2029",
    from: "$2,000–3,500/mo",
    to: "$4,000–6,000+/mo",
    color: "#b48cff",
    triggers: ["CUDA matmul + roofline analysis public", "Mercor ML-infra expert track accepted", "Inbound consulting leads ≥ 2/month"],
  },
];

/* ── AI parse preview (current quarter: Y1 Q1) ─────────────────────── */
export const PARSED_PREVIEW = [
  { track: "Python / CS61A", task: "MIT 6.100L L1–6 + Helsinki Part 1 exercises 1–10", priority: "High" },
  { track: "CP Execution", task: "5 CF problems rated 800 — Codeforces account live", priority: "High" },
  { track: "Rosen Discrete Math", task: "Rosen 1.1–1.6 — logic equivalences + rules of inference", priority: "Medium" },
  { track: "Tools / Projects", task: "NEXUS-Y1 repo created + README committed in English", priority: "Medium" },
  { track: "Income (RLHF)", task: "Register: Outlier + DataAnnotation + Prolific", priority: "Medium" },
  { track: "Tools / Projects", task: "Obsidian vault + Anki decks: 6.100L · Rosen · CP Patterns", priority: "Low" },
];

/* ── build identity — proves which version is actually live ────────── */
export const BUILD_TAG = "v2.5.1 · self-purging storage";

/* ── 10 · opportunity radar ───────────────────────────────────────── */
export type JobPosting = {
  id: string;
  title: string;
  company: string;
  url: string;
  platform: string;
  kind: "Full-time" | "Part-time" | "Freelance" | "Internship" | "Contract";
  status: "radar" | "applied" | "interview" | "offer" | "rejected";
  score: number;
  added: string;
};

export const SEARCH_PRESETS = [
  { id: "python", label: "Python", q: "python developer" },
  { id: "cpp", label: "C++ / Low Latency", q: "c++ low latency" },
  { id: "cuda", label: "CUDA / GPU", q: "cuda engineer" },
  { id: "go", label: "Go / Backend", q: "golang backend" },
  { id: "kernel", label: "Kernel / Systems", q: "linux kernel engineer" },
  { id: "compilers", label: "Compilers", q: "compiler engineer llvm" },
  { id: "db", label: "Databases", q: "database engine engineer" },
  { id: "quant", label: "Quant Dev", q: "quant developer" },
];

export const JOB_PLATFORMS = [
  { id: "linkedin", name: "LinkedIn Jobs", url: (q: string) => `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(q)}&f_TPR=r604800`, color: "#5fb0ff", note: "The volume giant — filter to past week; message recruiters directly before applying (Section 9 rule)." },
  { id: "indeed", name: "Indeed", url: (q: string) => `https://www.indeed.com/jobs?q=${encodeURIComponent(q)}&fromage=7`, color: "#45c8e8", note: "Largest aggregator; set alerts per preset so matches arrive daily." },
  { id: "glassdoor", name: "Glassdoor", url: (q: string) => `https://www.glassdoor.com/Job/jobs.htm?sc.keyword=${encodeURIComponent(q)}`, color: "#6fdd8b", note: "Interview reports attached to listings — read them before you apply." },
  { id: "wellfound", name: "Wellfound (AngelList)", url: (q: string) => `https://wellfound.com/jobs?query=${encodeURIComponent(q)}`, color: "#b48cff", note: "Startups with transparent comp; strong for early remote systems roles." },
  { id: "otta", name: "Otta", url: (q: string) => `https://otta.com/jobs?query=${encodeURIComponent(q)}`, color: "#ffb224", note: "Curated tech-only boards; signal-heavy companies." },
  { id: "yc", name: "YC Work at a Startup", url: (q: string) => `https://www.workatastartup.com/jobs?query=${encodeURIComponent(q)}`, color: "#ff7849", note: "One profile, apply across YC companies — referral-like warmth." },
  { id: "hn", name: "HN Who's Hiring", url: () => "https://www.google.com/search?q=site%3Anews.ycombinator.com+%22who+is+hiring%22", color: "#ff5c7a", note: "Monthly mega-thread; systems roles from engineers, not recruiters." },
  { id: "remoteok", name: "RemoteOK", url: (q: string) => `https://remoteok.com/remote-${encodeURIComponent(q.split(" ")[0])}-jobs`, color: "#2fd6b5", note: "Remote-first listings, worldwide-friendly filters." },
  { id: "weworkremotely", name: "We Work Remotely", url: (q: string) => `https://weworkremotely.com/remote-jobs/search?term=${encodeURIComponent(q)}`, color: "#9db4ff", note: "The oldest remote board; programming category is strong." },
  { id: "remotive", name: "Remotive", url: (q: string) => `https://remotive.com/remote-jobs?search=${encodeURIComponent(q)}`, color: "#45c8e8", note: "Hand-screened remote roles with timezone notes." },
  { id: "builtin", name: "Built In", url: (q: string) => `https://builtin.com/jobs?search=${encodeURIComponent(q)}`, color: "#6fdd8b", note: "US tech-hub companies, many remote-eligible." },
  { id: "levels", name: "Levels.fyi", url: () => "https://www.levels.fyi/t/software-engineer?countryId=254", color: "#ffb224", note: "Not a job board — the offer-number truth source. Consult before any negotiation." },
];

export type FreelancePlatform = { id: string; name: string; url: (q: string) => string; color: string; kind: string; stages: string[] };

export const FREELANCE_PLATFORMS: FreelancePlatform[] = [
  { id: "upwork", name: "Upwork", url: (q) => `https://www.upwork.com/nx/search/jobs/?q=${encodeURIComponent(q)}`, color: "#6fdd8b", kind: "marketplace", stages: ["not registered", "profile live", "10 proposals sent", "first gig won", "steady clients"] },
  { id: "mostaql", name: "Mostaql", url: () => "https://mostaql.com/projects", color: "#2fd6b5", kind: "marketplace", stages: ["not registered", "profile live", "10 proposals sent", "first gig won", "steady clients"] },
  { id: "freelancer", name: "Freelancer", url: (q) => `https://www.freelancer.com/jobs/${encodeURIComponent(q.split(" ")[0])}/`, color: "#45c8e8", kind: "marketplace", stages: ["not registered", "profile live", "10 proposals sent", "first gig won", "steady clients"] },
  { id: "contra", name: "Contra", url: () => "https://contra.com/opportunities", color: "#b48cff", kind: "marketplace", stages: ["not registered", "profile live", "10 proposals sent", "first gig won", "steady clients"] },
  { id: "fiverr", name: "Fiverr", url: () => "https://www.fiverr.com/", color: "#9db4ff", kind: "gig-store", stages: ["no gigs listed", "1st gig published", "optimized + samples", "first order", "repeat buyers"] },
  { id: "outlier", name: "Outlier (Scale)", url: () => "https://outlier.ai/", color: "#ff7849", kind: "rlhf", stages: ["not registered", "assessment passed", "first tasks done", "weekly volume", "top-tier rates"] },
  { id: "dataannotation", name: "DataAnnotation", url: () => "https://www.dataannotation.tech/", color: "#ffb224", kind: "rlhf", stages: ["not registered", "assessment passed", "first tasks done", "weekly volume", "top-tier rates"] },
  { id: "mercor", name: "Mercor", url: () => "https://mercor.com/", color: "#ff5c7a", kind: "rlhf", stages: ["not registered", "assessment passed", "first tasks done", "weekly volume", "top-tier rates"] },
  { id: "prolific", name: "Prolific", url: () => "https://www.prolific.com/", color: "#5fb0ff", kind: "rlhf", stages: ["not registered", "assessment passed", "first tasks done", "weekly volume", "top-tier rates"] },
  { id: "algora", name: "Algora Bounties", url: () => "https://algora.io/bounties", color: "#6fdd8b", kind: "oss", stages: ["lurking", "1st PR merged", "niche repos targeted", "1st bounty won", "bounty regular"] },
  { id: "gsoc", name: "GSoC / Outreachy", url: () => "https://summerofcode.withgoogle.com/programs", color: "#2fd6b5", kind: "oss", stages: ["orgs researched", "issue claimed", "PR merged", "proposal drafted", "submitted"] },
  { id: "kaggle", name: "Kaggle", url: () => "https://www.kaggle.com/competitions", color: "#45c8e8", kind: "competition", stages: ["account made", "tutorial comp done", "1st submission", "top-50% finish", "medal tier"] },
];

/* ── 09 · resource library (csdiy.wiki taxonomy, plan-anchored) ─────── */
export type ResCourse = {
  code: string;
  name: string;
  level: "Foundation" | "Core" | "Advanced";
  url: string;
  inPlan?: string;
  note: string;
};
export type ResCategory = { id: string; label: string; cn: string; color: string; courses: ResCourse[] };
export type ResBook = { title: string; author: string; inPlan?: string; note: string };

const csdiy = (cat: string, slug: string) => `https://csdiy.wiki/en/${encodeURIComponent(cat)}/${encodeURIComponent(slug)}/`;

export const RES_CATEGORIES: ResCategory[] = [
  {
    id: "intro", label: "Programming Intro", cn: "编程入门", color: "#ffb224",
    courses: [
      { code: "MIT 6.100L", name: "Intro to CS & Programming Using Python", level: "Foundation", url: "https://ocw.mit.edu/courses/6-100l-introduction-to-cs-and-programming-using-python-fall-2022/", inPlan: "Y1 Q1 · wks 1–4", note: "26 lectures + finger exercises + PSets 1–5. Guttag companion textbook, chapter-per-lecture." },
      { code: "Helsinki MOOC", name: "Programming in Python (Parts 1–4)", level: "Foundation", url: "https://programming-23.mooc.fi/", inPlan: "Y1 Q1", note: "Plan-only (~95 exercises, all must pass the checker) — not on csdiy. Where raw Python skill is built." },
      { code: "CS61A", name: "Structure & Interpretation of Computer Programs", level: "Foundation", url: "https://cs61a.org/", inPlan: "Y1 Q1 · wks 5–13", note: "HOF, environments, data abstraction → the Calculator + Scheme interpreters with TCO. Composing Programs textbook." },
      { code: "CS50P", name: "CS50's Introduction to Programming with Python", level: "Foundation", url: csdiy("编程入门", "Python/CS50P"), note: "Complementary — a gentler on-ramp if 6.100L moves too fast in week 1." },
      { code: "CS3110", name: "Cornell — Functional Programming (OCaml)", level: "Core", url: csdiy("编程入门", "Functional/CS3110"), inPlan: "Y2 Q4 (4-wk basics)", note: "The full version of the Jane Street language track; the plan runs a 4-week subset (types, functors, a parser)." },
      { code: "CS50", name: "Harvard CS50 (C track)", level: "Foundation", url: csdiy("编程入门", "C/CS50"), note: "Complementary — the plan learns C from K&R directly instead." },
      { code: "Missing Semester", name: "MIT — The Missing Semester of Your CS Education", level: "Foundation", url: "https://missing.csail.mit.edu/", inPlan: "Y1 Q1 · wks 1–2", note: "Shell, vim, git, data wrangling. Lectures 1–6 mandatory, exercises not optional." },
    ],
  },
  {
    id: "math", label: "Math Foundations & Advanced", cn: "数学基础 · 数学进阶", color: "#b48cff",
    courses: [
      { code: "6.042J", name: "Mathematics for Computer Science (Demaine/Leighton)", level: "Foundation", url: csdiy("数学进阶", "6.042J"), inPlan: "Y1 Q1–Q2", note: "Lectures 1–13 in Q1 with the MCS textbook (read before each lecture). Leighton's 2010 classics as the when-stuck supplement." },
      { code: "Rosen", name: "Discrete Mathematics & Its Applications", level: "Foundation", url: csdiy("数学进阶", "6.042J"), inPlan: "Y1 Q1 · daily 1.5h", note: "The 12-hour engine's math block: Ch.1 logic → Ch.5 induction → Ch.9 relations → Ch.10 counting, with proof reconstruction ritual." },
      { code: "MIT 18.06", name: "Linear Algebra (Strang)", level: "Core", url: csdiy("数学基础", "MITLA"), inPlan: "Y2 · full", note: "The NVIDIA / DeepMind / Databricks AI-Infra math gate. First half Y2 Q2, SVD/PCA/eigenvalues by Y2 Q3." },
      { code: "MIT 18.01/18.02", name: "Calculus I–II + Multivariable", level: "Core", url: csdiy("数学基础", "MITmaths"), inPlan: "Y1 Q2 → Y3", note: "The HFT prerequisite chain: Calc I (Y1 Q2), Calc II series (Y2 Q1), multivariable (Y3 Q1)." },
      { code: "Convex Opt", name: "Convex Optimization (core: GD, duality)", level: "Advanced", url: csdiy("数学进阶", "convex"), inPlan: "Y4 Q2 · 3 weeks", note: "DeepMind / Databricks AI-Infra. Core only — GD convergence, duality, proximal operators." },
      { code: "MacKay ITPRNN", name: "Information Theory, Pattern Recognition & Neural Networks", level: "Advanced", url: csdiy("数学进阶", "The_Information_Theory_Pattern_Recognition_and_Neural_Networks"), inPlan: "Y4 Q3 · 4 weeks", note: "The DeepMind ML-depth signal in their domain round: entropy, KL divergence, mutual information." },
      { code: "CS70", name: "Berkeley — Discrete Math & Probability Theory", level: "Core", url: csdiy("数学进阶", "CS70"), note: "Complementary — a second angle on probability before the Y1–Y2 Probability I/II sequence." },
    ],
  },
  {
    id: "dsa", label: "Data Structures & Algorithms", cn: "数据结构与算法", color: "#ff5c7a",
    courses: [
      { code: "CPH / CP4", name: "Competitive Programmer's Handbook / CP4 Book 1", level: "Core", url: "https://cses.fi/book/book.pdf", inPlan: "Y1 Q1 → Y2", note: "The plan's theory spine: Ch.1–4 foundations, 5 greedy, 7 DP, 11–12 graphs — paired with the 20→210 CF ladder." },
      { code: "CS61B", name: "Berkeley — Data Structures", level: "Core", url: csdiy("数据结构与算法", "CS61B"), note: "Complementary — the plan covers this ground via python-dsa (week 4) + USACO + CP instead." },
      { code: "MIT 6.006", name: "Introduction to Algorithms", level: "Core", url: csdiy("数据结构与算法", "6.006"), note: "Complementary reference for the algorithm-analysis gaps Big-O weeks surface." },
      { code: "MIT 6.046 / CS170", name: "Design & Analysis of Algorithms", level: "Advanced", url: csdiy("数据结构与算法", "6.046"), note: "Complementary — for the HRT-tier hard-graph and DP depth beyond CF 1800." },
    ],
  },
  {
    id: "systems", label: "Systems Foundations & Architecture", cn: "系统基础 · 体系结构", color: "#45c8e8",
    courses: [
      { code: "Nand2Tetris", name: "N2T Part 1 — logic gates to CPU", level: "Foundation", url: csdiy("体系结构", "N2T"), inPlan: "Y1 Q4 · 8h/wk", note: "NVIDIA hardware-software interface + Apple hardware empathy. CPU implemented by quarter end." },
      { code: "CSAPP", name: "CMU 15-213 — Computer Systems: A Programmer's Perspective", level: "Core", url: csdiy("计算机系统基础", "CSAPP"), note: "Complementary — the classic; the plan's Handmade Hero + K&R + syscalls block covers adjacent ground." },
      { code: "CS61C", name: "Berkeley — Great Ideas in Computer Architecture", level: "Core", url: csdiy("体系结构", "CS61C"), note: "Complementary — Godbolt/assembly-empathy habit made systematic; pairs with the SIMD weeks in Y3–Y4." },
      { code: "DDCA", name: "Digital Design & Computer Architecture", level: "Foundation", url: csdiy("体系结构", "DDCA"), note: "Complementary backup reading alongside Nand2Tetris." },
    ],
  },
  {
    id: "os", label: "Operating Systems", cn: "操作系统", color: "#2fd6b5",
    courses: [
      { code: "MIT 6.S081", name: "xv6 Operating Systems Engineering", level: "Core", url: csdiy("操作系统", "MIT6.S081"), inPlan: "Y2 Q3 · 14h/wk", note: "The plan's xv6 quarter — scheduler, VM, FS + a custom modification, LLDB as primary debugger. This course IS the Y2 Q3 project." },
      { code: "CS162", name: "Berkeley — Operating Systems", level: "Advanced", url: csdiy("操作系统", "CS162"), note: "Complementary second angle after xv6; threads/synchronization depth for the C++ concurrency quarter." },
      { code: "NJU OS", name: "Nanjing University — Operating Systems (Jiang Yanyan)", level: "Core", url: csdiy("操作系统", "NJUOS"), note: "Complementary — concurrent-programming perspective; useful alongside the SPSC queue work." },
    ],
  },
  {
    id: "net", label: "Computer Networks", cn: "计算机网络", color: "#5fb0ff",
    courses: [
      { code: "CS144", name: "Stanford — Computer Networking (TCP from scratch)", level: "Core", url: csdiy("计算机网络", "CS144"), inPlan: "Y3 Q1 · 16h/wk", note: "The plan's TCP/IP stack in C++ — handshake, sliding window, retransmission, congestion control, benchmarked. CS144 is the canonical companion." },
      { code: "Top-Down", name: "Kurose & Ross — Networking: A Top-Down Approach", level: "Foundation", url: csdiy("计算机网络", "topdown"), note: "Complementary theory text to read around the stack build." },
      { code: "CS168", name: "Berkeley — Introduction to the Internet", level: "Advanced", url: csdiy("计算机网络", "CS168"), note: "Complementary — routing/distributed-systems-flavored depth." },
    ],
  },
  {
    id: "db", label: "Database Systems", cn: "数据库系统", color: "#6fdd8b",
    courses: [
      { code: "CMU 15-445", name: "Database Systems (BusTub)", level: "Core", url: csdiy("数据库系统", "15445"), inPlan: "Y3 Q2–Q3", note: "The direct companion to the SQL Storage Engine: B+ tree + WAL + SIMD vectorized scan + Arrow reader. MVCC/LSM/columnar fluency for ClickHouse, Snowflake, MongoDB." },
      { code: "CS186", name: "Berkeley — Introduction to Database Systems", level: "Core", url: csdiy("数据库系统", "CS186"), note: "Complementary — query-optimizer theory for the Y3 Q4 rule-based optimizer." },
      { code: "CMU 15-799", name: "Special Topics: Streaming/ML Databases", level: "Advanced", url: csdiy("数据库系统", "15799"), note: "Complementary post-ship reading once the engine is benchmarked." },
    ],
  },
  {
    id: "dist", label: "Parallel & Distributed Systems", cn: "并行与分布式系统", color: "#ff7849",
    courses: [
      { code: "CS149", name: "Stanford — Parallel Computing", level: "Core", url: csdiy("并行与分布式系统", "CS149"), inPlan: "Y4 Q2 · 16h/wk", note: "The CUDA quarter's theory home: coalescing, occupancy, bank conflicts — the single most-tested NVIDIA skill, with roofline analysis." },
      { code: "MIT 6.824", name: "Distributed Systems (Raft labs)", level: "Core", url: csdiy("并行与分布式系统", "MIT6.824"), inPlan: "Y3 Q3", note: "Pairs with the Go Raft KV store — log replication, leader election, linearizability tests. The Snowflake/MongoDB/CockroachDB door." },
    ],
  },
  {
    id: "pl", label: "Compilers & Language Design", cn: "编译原理 · 编程语言", color: "#b48cff",
    courses: [
      { code: "CS143", name: "Stanford — Compilers", level: "Core", url: csdiy("编译原理", "CS143"), inPlan: "Y4 Q3–Q4 (Cooper & Torczon)", note: "The plan runs SSA + liveness (Ch.5) then register allocation (Ch.13); CS143 is the hands-on companion for the LLVM-track interviews." },
      { code: "NJU / PKU Compilers", name: "Compiler courses with full labs", level: "Core", url: csdiy("编译原理", "NJU-Compilers"), note: "Complementary — lab-heavy alternatives when a concept needs a second implementation." },
      { code: "CS242", name: "UIUC — Programming Language Design & Analysis", level: "Advanced", url: csdiy("编程语言设计与分析", "CS242"), note: "Complementary — type-systems depth that feeds Apple LLVM's type-checking questions." },
      { code: "Cambridge Semantics", name: "Semantics of Programming Languages", level: "Advanced", url: csdiy("编程语言设计与分析", "Cambridge-Semantics"), note: "Complementary — the Scheme interpreter's formal underpinning, if time allows in Y4." },
    ],
  },
  {
    id: "mlsys", label: "ML Systems & Deep Learning", cn: "机器学习系统 · 深度学习", color: "#6fdd8b",
    courses: [
      { code: "MLC", name: "Machine Learning Compilation (Tianqi Chen)", level: "Core", url: csdiy("机器学习系统", "MLC"), inPlan: "Y4 Q2–Q3 bridge", note: "The Triton-kernels + CUDA quarter's natural theory bridge: tensor IR, scheduling, roofline thinking." },
      { code: "AICS", name: "CMU 15-849 — AI Infrastructure & Compilers", level: "Advanced", url: csdiy("机器学习系统", "AICS"), note: "Complementary — lands exactly on the AI-Infra target tier's vocabulary." },
      { code: "CMU 15-442", name: "Machine Learning Systems", level: "Advanced", url: csdiy("机器学习系统", "CMU15-442"), note: "Complementary — feeds the distributed-training design doc (AllReduce, parallelism strategies)." },
      { code: "Karpathy Zero→Hero", name: "Neural Networks: Zero to Hero", level: "Core", url: csdiy("人工智能", "Neural Networks：Zero to Hero"), inPlan: "Y4 Q3 warm-up", note: "The practical ramp before building the GPT Transformer from scratch with gradient checkpointing." },
      { code: "CS231n", name: "Stanford — Deep Learning for Vision", level: "Core", url: csdiy("深度学习", "CS231"), note: "Complementary — backprop/autograd mechanics, referenced not required." },
    ],
  },
  {
    id: "gfx", label: "Computer Graphics", cn: "计算机图形学", color: "#ffb224",
    courses: [
      { code: "GAMES101", name: "现代计算机图形学入门 (Yan Lingqi)", level: "Core", url: csdiy("计算机图形学", "GAMES101"), inPlan: "Y4 Q1 companion", note: "Theory for the Vulkan Path Tracer: BVH, ray-sphere intersection, Cook-Torrance BRDF, area lights." },
      { code: "15-462", name: "CMU — Computer Graphics", level: "Core", url: csdiy("计算机图形学", "15462"), note: "Complementary — GPU-pipeline depth for the NVIDIA domain round." },
    ],
  },
  {
    id: "se", label: "Software Engineering & Code Quality", cn: "软件工程", color: "#8e9cc0",
    courses: [
      { code: "MIT 6.031", name: "Software Construction", level: "Core", url: csdiy("软件工程", "6031"), note: "Complementary — testing/specs discipline that reinforces the Part-3 self-review checklist." },
      { code: "CS169", name: "Berkeley — Software Engineering", level: "Core", url: csdiy("软件工程", "CS169"), note: "Complementary — design-doc culture in practice; pairs with the 5-section doc standard from Y2 Q1." },
    ],
  },
  {
    id: "tools", label: "Essential Tools", cn: "必学工具", color: "#45c8e8",
    courses: [
      { code: "Git / GitHub", name: "Version control — terminal only", level: "Foundation", url: csdiy("必学工具", "Git"), inPlan: "Y1 Q1 · day 1", note: "NEXUS-Y1 repo, meaningful commits, push via command line from week 2 onward." },
      { code: "Vim", name: "Editors (Vim)", level: "Foundation", url: csdiy("必学工具", "Vim"), inPlan: "Y1 Q1 · wk 2", note: "Navigate, insert, delete, search, quit — Missing Semester Lec 3, then daily." },
      { code: "GNU Make / CMake", name: "Build systems", level: "Core", url: csdiy("必学工具", "GNU_Make"), inPlan: "Y1 Q3 (C projects)", note: "Every C/C++ project from K&R onward builds with a real Makefile." },
      { code: "Docker", name: "Containers + basic AWS", level: "Core", url: csdiy("必学工具", "Docker"), inPlan: "Y2 Q3–Q4 · ~20–30h", note: "Income-stream Category B #1: DevOps-adjacent freelance unlocked ($25–60/hr). Not a detour — applied OS concepts." },
      { code: "LaTeX", name: "Technical typesetting", level: "Core", url: csdiy("必学工具", "LaTeX"), note: "Complementary — for the design docs and any future preprint work." },
      { code: "Info Retrieval", name: "Searching like an engineer", level: "Foundation", url: csdiy("必学工具", "信息检索"), note: "Complementary — read once in Y1; Google-fu is a daily multiplier." },
    ],
  },
];

/* which quarter each csdiy complement earns its place (1..16) */
export const RES_QUARTER_HINTS: Record<string, number> = {
  "CS50P": 1, "Helsinki MOOC": 1, "MIT 6.006": 1, "CS61B": 1, "Info Retrieval": 1,
  "CS70": 2,
  "CS50": 3,
  "DDCA": 4,
  "CSAPP": 5, "MIT 6.031": 5, "CS169": 5, "LaTeX": 5,
  "CS162": 7,
  "NJU OS": 8,
  "MIT 6.824": 9, "Top-Down": 9, "CS168": 9,
  "MIT 6.046 / CS170": 10,
  "CMU 15-799": 11,
  "CS186": 12,
  "GAMES101": 13,
  "CS61C": 14, "AICS": 14,
  "CS149": 14,
  "CS143": 15, "NJU / PKU Compilers": 15, "CS242": 15, "Cambridge Semantics": 15, "CMU 15-442": 15, "CS231n": 15, "MLC": 14, "Karpathy Zero→Hero": 15,
};

export const resForQuarter = (qid: number) =>
  RES_CATEGORIES.flatMap((cat) =>
    cat.courses.filter((c) => RES_QUARTER_HINTS[c.code] === qid && !c.inPlan).map((c) => ({ code: c.code, url: c.url, topic: cat.label }))
  );

export const RES_OFF_ROADMAP = [
  "Systems Security (CS161, MIT 6.858, SEED Labs)",
  "Web Development (CS142, CS571, Full Stack Open)",
  "Data Science (Berkeley Data100)",
  "Electronics foundations (EE16A/B)",
];

export const RES_BOOKS: ResBook[] = [
  { title: "The C Programming Language (K&R)", author: "Kernighan & Ritchie", inPlan: "Y1 Q3 → Y2 Q1", note: "Ch.1–6 in Q3, complete with all exercises by Y2 Q1. Apple Core OS is non-negotiable about C." },
  { title: "Introduction to Computation & Programming Using Python", author: "Guttag", inPlan: "Y1 Q1", note: "Chapter-per-lecture companion to MIT 6.100L — more detail than the videos." },
  { title: "Mathematics for Computer Science (MCS)", author: "Lehman, Leighton, Meyer", inPlan: "Y1 Q1–Q2", note: "Free PDF. Read the chapter BEFORE each 6.042J lecture — mandatory per the plan." },
  { title: "Discrete Mathematics & Its Applications", author: "Rosen", inPlan: "Y1 Q1 · daily", note: "The 12-hour engine's math text: logic → induction → counting → relations → graphs." },
  { title: "Competitive Programming 4 (Book 1)", author: "Halim & Halim", inPlan: "Y1 Q1", note: "Ch.1 + 2.1 in Q1; the CP-mindset foundation." },
  { title: "Competitive Programmer's Handbook", author: "Antti Laaksonen", inPlan: "Y1 Q1 → Y2", note: "Free (cses.fi). The technique chapters matched to the 20→210 CF ladder." },
  { title: "Composing Programs", author: "Berkeley (SICP in Python)", inPlan: "Y1 Q1 wks 11–13", note: "Ch.1 as the Q3 bridge — the Scheme Interpreter preview, read online free." },
  { title: "Linear Algebra (Strang, 18.06 companion)", author: "Gilbert Strang", inPlan: "Y2", note: "The NVIDIA/DeepMind math gate text." },
  { title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", inPlan: "Y3", note: "Infrastructure-flavored system design — the exact genre Snowflake/Databricks interviews test." },
  { title: "Engineering a Compiler", author: "Cooper & Torczon", inPlan: "Y4 Q3–Q4", note: "Ch.5 SSA + liveness, Ch.13 register allocation — whiteboard-provable by application time." },
  { title: "Software Engineering at Google", author: "Winters, Manshreck, Wright", inPlan: "Y1 Q2 → Y4", note: "Free at abseil.io. Code Review chapter in Y1 Q2, Testing chapters in Y2 — the daily code-quality standard." },
  { title: "Principles of Mathematical Analysis (Rudin)", author: "Walter Rudin", inPlan: "Y4 · 6 weeks", note: "Ch.1–4 only — proof fluency for math-heavy whiteboards. Reduced scope, deliberately." },
];

/* ── quarterly focus · mocks · hiring windows · design docs · freelance ── */
export type MockPhase = { id: string; label: string; freq: string; platform: string; when: string };
export const MOCK_PHASES: MockPhase[] = [
  { id: "self", label: "Self-mock — solve mediums out loud, record audio", freq: "2×/week", platform: "LeetCode", when: "Y2 Q3 – Q4" },
  { id: "peer", label: "Peer mock with a study partner", freq: "1×/week", platform: "Pramp / Discord communities", when: "Y3 · all quarters" },
  { id: "pro", label: "Professional mock — experienced engineers", freq: "2×/month", platform: "interviewing.io", when: "Y4 Q1 – Q3" },
  { id: "company", label: "Company-specific style practice", freq: "3×/week", platform: "interviewing.io + peers", when: "Y4 Q4 · pre-application" },
];
export type MockSession = { id: string; date: string; phase: string; partner: string; topic: string; verdict: "strong" | "okay" | "rough"; note: string };

export type HiringWindow = { id: string; label: string; months: number[]; tier: string; note: string; color: string };
export const HIRING_WINDOWS: HiringWindow[] = [
  { id: "hft-fall", label: "HFT Fall Wave", months: [8, 9], tier: "All 13 HFT targets", note: "Jane Street · Citadel · HRT · Two Sigma · Jump · Optiver · IMC · DRW · SIG · Tower · XTX · Akuna · Five Rings — apply at CF 1800+", color: "#ff5c7a" },
  { id: "hft-spring", label: "HFT Spring Wave", months: [1, 2], tier: "All 13 HFT targets", note: "Second major wave — new-grad and off-cycle QD roles", color: "#ffb224" },
  { id: "ai-rolling", label: "AI Infra (rolling)", months: [0, 3, 6, 9], tier: "NVIDIA · DeepMind · OpenAI · Anthropic · xAI · Meta AI", note: "No fixed season — CUDA matmul + Triton + transformer are the entry", color: "#2fd6b5" },
  { id: "systems-rolling", label: "Kernel · Compiler · DB (rolling)", months: [2, 5, 8, 11], tier: "Apple · Google · ClickHouse · Snowflake · Databricks · MongoDB", note: "Contribution history and benchmarked projects open these year-round", color: "#5fb0ff" },
];

export type DesignDoc = { id: string; title: string; when: string; focus: string };
export const DESIGN_DOCS: DesignDoc[] = [
  { id: "heap", title: "Heap Allocator — arena + slab", when: "Y2 Q1", focus: "First real 5-section doc. Make Motivation compelling; Alternatives Considered is what separates it from a to-do list." },
  { id: "xv6", title: "xv6 custom modification", when: "Y2 Q3", focus: "Second doc — Alternatives Considered should feel natural, not forced, by now." },
  { id: "tcpip", title: "TCP/IP Stack", when: "Y3 Q1", focus: "Design docs become the default here, no longer a special event." },
  { id: "sql", title: "SQL Storage Engine", when: "Y3 Q3", focus: "Vectorized execution design + block-size analysis + benchmarks." },
  { id: "raft", title: "Raft distributed KV store", when: "Y3 Q3", focus: "Log replication, leader election, compaction, linearizability argument." },
  { id: "orderbook", title: "Order Book Simulator", when: "Y3 Q4", focus: "Lock-free SPSC ring buffer design + sub-1μs latency analysis." },
  { id: "disttrain", title: "Distributed training design doc", when: "Y4 Q3", focus: "5-page system design: AllReduce variants, parallelism strategies, straggler detection, checkpoint recovery." },
];
export const DOC_STATUSES = ["Not started", "Drafting", "Self-review", "Done"];

export type FreelanceSkill = { id: string; label: string; income: string; demand: number; gate: string; icon: string };
export const FREELANCE_SKILLS: FreelanceSkill[] = [
  { id: "py-auto", label: "Python automation / Excel scripting", income: "$50–200/mo (Y1)", demand: 3, gate: "6.100L underway", icon: "code" },
  { id: "fastapi", label: "FastAPI backend APIs", income: "$25–60/hr gigs", demand: 4, gate: "Helsinki Parts 1–4 + APIs", icon: "cube" },
  { id: "scraper", label: "Web scraping / Playwright", income: "per-gig (JS-heavy sites)", demand: 2, gate: "just-in-time — learn when a gig needs it", icon: "list" },
  { id: "docker", label: "Docker + basic AWS deployment", income: "$25–60/hr", demand: 4, gate: "~20–30h one-time (Y2 Q3–Q4)", icon: "upload" },
  { id: "db-opt", label: "Database / query optimization", income: "$30–80/hr", demand: 3, gate: "SQL Engine real (Y3)", icon: "sigma" },
  { id: "cpp-review", label: "C/C++ code evaluation (RLHF tier)", income: "$75–135/hr", demand: 5, gate: "C solid — the single biggest income upgrade", icon: "check" },
  { id: "cuda", label: "CUDA / HPC consulting", income: "$80–100+/hr", demand: 5, gate: "CUDA kernels + roofline (Y4 Q2)", icon: "radar" },
  { id: "ml-deploy", label: "Model deployment gigs", income: "$95–200+/hr expert tier", demand: 4, gate: "PyTorch C++ ext + transformer (Y4)", icon: "chart" },
  { id: "compiler-niche", label: "Custom linters / static analysis", income: "$100+/hr (scarce skill)", demand: 2, gate: "SSA + register allocation (Y4 Q3–Q4)", icon: "edit" },
  { id: "due-diligence", label: "Code audit / technical due diligence", income: "very high per engagement", demand: 2, gate: "reputation + full portfolio (beyond Y4)", icon: "briefcase" },
];

export type Gig = { id: string; title: string; source: string; skill: string; amount: number; status: "applied" | "talk" | "won" | "lost"; date: string };
export const GIG_SOURCES = ["Upwork", "Mostaql", "Outlier", "DataAnnotation", "Mercor", "Prolific", "Algora bounty", "Referral", "Other"];

/* outside-plan skill → consulting angle matcher */
export const SKILL_HINTS: { re: RegExp; angle: string; pay: string }[] = [
  { re: /react|next|frontend|vue|typescript/i, angle: "Dashboards & internal tools — your NEXUS stack is the portfolio itself", pay: "$20–50/hr" },
  { re: /design|figma|ui|ux/i, angle: "Design-to-code: turn Figma into production frontends", pay: "$15–40/hr" },
  { re: /data|pandas|excel|sheet|etl/i, angle: "Data cleaning & reporting automation for SMBs", pay: "$10–30/hr" },
  { re: /\bml\b|torch|tensorflow|model|llm|prompt/i, angle: "LLM tooling / model deployment — hottest freelance category in 2026", pay: "$30–80/hr" },
  { re: /arabic|translat|localiz/i, angle: "Arabic localization tooling & content pipelines (rare, valuable)", pay: "$15–35/hr" },
  { re: /wordpress|shopify|wix|web/i, angle: "Small-business sites + automation retainers", pay: "$10–25/hr" },
  { re: /video|edit|premiere|davinci/i, angle: "Technical content editing for dev channels", pay: "$10–30/hr" },
  { re: /math|tutor|teach/i, angle: "Discrete math / CS tutoring in Arabic & English", pay: "$8–20/hr" },
  { re: /game|unity|godot/i, angle: "Gameplay scripting & tools gigs", pay: "$15–35/hr" },
  { re: /security|ctf|pentest/i, angle: "⚠ Off-roadmap — park it; revisit only if security becomes a goal", pay: "—" },
];

export const SUNDAY_REVIEW = [
  "Log the week: queue completion % per track",
  "CF delta: rating, problems solved, upsolves",
  "Money: RLHF income, saved, buffer vs $600–900 target",
  "Move 1 unfinished task to Monday",
  "Set the 3 non-negotiables for next week",
];
