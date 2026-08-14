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
  { id: "Engineering", label: "Engineering", color: "#ffb224", icon: "cube" },
  { id: "Math", label: "Math", color: "#b48cff", icon: "sigma" },
  { id: "CP", label: "CP", color: "#ff5c7a", icon: "code" },
  { id: "Income", label: "Income", color: "#6fdd8b", icon: "dollar" },
  { id: "Application", label: "Application", color: "#45c8e8", icon: "briefcase" },
  { id: "Admin", label: "Admin", color: "#8e9cc0", icon: "list" },
];

/* weekday → skills the day addresses (0 = Sunday) */
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
  { id: "eng-1", cat: "Engineering", title: "6.100L / CS61A — today's lecture batch + finger exercises", detail: "Watch the scheduled lectures at 1.5×, read the matching Guttag/SICP section first, then complete every finger exercise closed-book. Afterward, push your solutions to NEXUS-Y1 with a commit message that explains one thing you learned — visibility is a tracked hour, not an afterthought." },
  { id: "eng-2", cat: "Engineering", title: "Helsinki MOOC — complete this week's exercise batch", detail: "Every exercise in the batch must pass the automated checker. This is where raw Python skill is built — no skipping to the solution. After finishing, read 2–3 community solutions to one problem and note what they knew that you didn't." },
  { id: "eng-3", cat: "Engineering", title: "HtDP Design Recipe drill — one data definition end-to-end", detail: "Pick one data definition and run the full 6-step recipe: signature, examples, template, function, tests, review. Write the template BEFORE the function. This rewires structural thinking — the same pattern becomes your Scheme eval in Q3." },
  { id: "eng-4", cat: "Engineering", title: "CS61A project session — advance the current project one phase", detail: "Work the active 61A project (Hog / Cats / Ants / interpreter) for one focused 90-minute phase. Define done-criteria before starting: which autograder tests pass when you stop. Commit with a meaningful message, not 'update'." },
  { id: "eng-5", cat: "Engineering", title: "python-dsa / cf-tracker — one tested component", detail: "Implement one data structure or feature (linked list, stack, BST, hash table — or the CF API client, JSON persistence). Write pytest tests first or immediately after. Sanitizers and type hints on. Push to GitHub with a README update." },
  { id: "eng-6", cat: "Engineering", title: "Recursion / interpreter deep-work block", detail: "The most important concept of the quarter. Implement one of: recursive evaluator, TCO trampoline, Frame model lookup — from scratch, then step through it in Python Tutor. If you can't explain the call stack out loud, it's not done." },

  { id: "math-1", cat: "Math", title: "Rosen — today's chapter section + warm-ups", detail: "Read the scheduled section (logic, proofs, induction, counting, relations, or graphs) BEFORE attempting problems. Do every warm-up. For each proof technique used, write a one-line Anki card: technique + when to reach for it." },
  { id: "math-2", cat: "Math", title: "Proof reconstruction — one proof from memory", detail: "Close the book. Reproduce one proof from this week (induction, contradiction, or a counting argument) fully on paper. Check against Rosen and note exactly where your reasoning diverged. This is the Level-1 bar of the deep-understanding test." },
  { id: "math-3", cat: "Math", title: "Unseen-problem transfer set — 3 problems never done before", detail: "Take 3 problems from an MIT 6.042J past exam or Rosen's end-of-chapter set that you have never seen. Attempt each 15 minutes before checking anything. Solving unseen problems is the definition of understanding — memorized examples don't count." },
  { id: "math-4", cat: "Math", title: "Math → code bridge — implement today's concept", detail: "Implement the current topic in Python: Euclidean algorithm, modular exponentiation (fast power), a hash map from buckets, or BFS over an adjacency list. 100 lines max, with 3+ test cases. This is the number-theory-to-CP-pipeline made physical." },

  { id: "cp-1", cat: "CP", title: "CF batch — 7 problems at the current rating band", detail: "Solve 7 problems at the week's target rating (800 → 1300 as the quarter progresses). Before submitting each, estimate its time complexity out loud — never submit without knowing the complexity. Log every problem in Problems-Log.md with pattern + failure reason." },
  { id: "cp-2", cat: "CP", title: "Live rated round — full contest conditions", detail: "Enter today's Div.3/Div.4 round at real time-box, no pauses. Simulate pressure: one submission per problem mindset, penalty awareness. Afterward, upsolve at least one problem above your solved ceiling before sleeping." },
  { id: "cp-3", cat: "CP", title: "Technique drill — the week's named algorithm", detail: "Drill the scheduled technique (prefix sums, two-pointer, binary search variants, greedy, DP, BFS/DFS, graphs): read the cp-algorithms.com page, then solve 3–5 problems that use only that technique. Add one template snippet to your library with a usage note." },
  { id: "cp-4", cat: "CP", title: "USACO block — one complete-search/simulation set", detail: "Complete one USACO Bronze (later Silver) problem set end-to-end. These are implementation-heavy — the exact muscle for HRT's 'correctness under pressure' superday. Time yourself; brute force first, optimize only with a measured reason." },

  { id: "inc-1", cat: "Income", title: "RLHF platforms — one onboarding step or task batch", detail: "Advance the RLHF pipeline one concrete step: finish an onboarding assessment, claim and complete a task batch on Outlier/DataAnnotation/Mercor, or register one more platform (Prolific accepts Egypt). Track hours and rate in the runway sheet — the C/C++ specialist tier ($75–135/hr) unlocks once your C is solid." },
  { id: "inc-2", cat: "Income", title: "Mostaql / Upwork — 5 tailored micro-freelance proposals", detail: "Send 5 proposals for Python automation / Excel scripting / data extraction gigs aimed at Egyptian & Arab small businesses. Each proposal: 2 sentences proving you read the brief + one relevant GitHub link. Log all 5 with follow-up dates." },
  { id: "inc-3", cat: "Income", title: "Runway sheet — update income vs Asyut burn", detail: "Log this month's actual income against the $230–375/mo Asyut baseline. Recompute months-of-runway and the delta to the $600–900 buffer target (family support ends May 2027 — the buffer must be built from RLHF income by March 2027). Write one line: the single highest-leverage income action for next week." },
  { id: "inc-4", cat: "Income", title: "GSoC / Outreachy — one contribution or application step", detail: "Move the stipend pipeline forward: claim a beginner-friendly issue on a target org's repo, submit a small PR, or draft one section of the application. GSoC $3–6.6k / Outreachy $7k are one-time but real — the deadline calendar is in the quarter brief." },

  { id: "app-1", cat: "Application", title: "Dossier — build one company's intelligence file", detail: "Pick the next company in the queue. Fill: interview process stages, what passes and what fails there, the project of yours that maps to their stack, and the domain checklist items you still owe. Tick checklist boxes only where genuinely verified — never aspirationally." },
  { id: "app-2", cat: "Application", title: "Cocktail Party Test — explain one project in plain language", detail: "Explain your latest project to an imagined non-engineer in one paragraph, out loud, timed 2 minutes. Then do it again as a 5-minute system-design answer: components, trade-offs, failure modes. This is the behavioral-narration habit — 4 years deep by application time, per the plan." },
  { id: "app-3", cat: "Application", title: "STAR story — write one from real NEXUS work", detail: "Write one STAR answer (≤120 words) from real work: 'hard bug' = a debugger session, 'performance' = a benchmark you ran, 'system designed' = python-dsa or the interpreter. The metric goes in the Result. Read it aloud twice — it must sound spoken." },

  { id: "adm-1", cat: "Admin", title: "Sunday review — close the week honestly", detail: "Run the review: queue completion % per track, CF delta (rating + problems + upsolves), money logged, one unfinished task moved to Monday, and the 3 non-negotiables for next week. Write the single sentence that summarizes the week. 30 minutes, no more." },
  { id: "adm-2", cat: "Admin", title: "Three-level self-assessment — Sunday ritual", detail: "Level 1 Recall: write one concept from scratch, closed-book. Level 2 Transfer: solve one unseen problem. Level 3 Teach: one-paragraph Feynman explanation in the vault. Then check Anki metrics — again-queue >20% means slow down; <5% means add more cards." },
  { id: "adm-3", cat: "Admin", title: "Backup + tidy the system", detail: "Export a NEXUS backup, push NEXUS-Y1 to git, file loose notes into the Obsidian vault (Engineering / Math / CP / Journal / HiddenGaps), and read tomorrow's skill set here so tomorrow-you starts in 30 seconds, not 10 minutes." },
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
  { id: 4, label: "Y1 · Q4", range: "Apr – Jun 2027", theme: "C data structures + Nand2Tetris", deliverables: ["Linked list / BST / hash table from scratch in C", "Nand2Tetris Part 1: gates → ALU → CPU", "Theory of Computation: automata → CFGs", "CF 1400 · portfolio site + blog #1 live"], milestone: "⚠ Family support ends May 2027 — buffer $600–900 must hold" },
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
    "ATLAS-grade systems + math spine"),
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
     Oct'26 RLHF onboarding $50–150 → Feb'27 $250–450 → May'27 family support ends →
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

/* Asyut survival baseline — real monthly costs */
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
  { track: "Engineering", task: "MIT 6.100L L1–6 + Helsinki Part 1 exercises 1–10", priority: "High" },
  { track: "CP", task: "5 CF problems rated 800 — Codeforces account live", priority: "High" },
  { track: "Math", task: "Rosen 1.1–1.6 — logic equivalences + rules of inference", priority: "Medium" },
  { track: "Engineering", task: "NEXUS-Y1 repo created + README committed in English", priority: "Medium" },
  { track: "Income", task: "Register: Outlier + DataAnnotation + Prolific (accepts Egypt)", priority: "Medium" },
  { track: "Admin", task: "Obsidian vault + Anki decks: 6.100L · Rosen · CP Patterns", priority: "Low" },
];

export const SUNDAY_REVIEW = [
  "Log the week: queue completion % per track",
  "CF delta: rating, problems solved, upsolves",
  "Money: RLHF income, saved, buffer vs $600–900 target",
  "Move 1 unfinished task to Monday",
  "Set the 3 non-negotiables for next week",
];
