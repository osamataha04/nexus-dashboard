# PROJECT NEXUS — HIRING-ONLY MASTER PLAN
## Single Goal: Get Hired by a Giant. Nothing Else.
### Jul 1, 2026 to Jun 2030 (4 Years)

---

> Every line in this plan traces to a verified hiring requirement of a named target
> company. If it doesn't trace, it is not in this plan. No PhD track. No language
> maintenance. No chess. No philosophy. No content whose only purpose was academic
> depth for its own sake.

---

# SECTION 1 — THE COMPLETE TARGET LIST (Expanded, Verified)

The earlier 14-company list was real but incomplete. Research confirms a much larger
set of legitimate targets per domain, all requiring nearly identical core skills to the
named "giants." Applying broadly across each tier is the correct strategy, confirmed
directly from quant recruiting sources: candidates who target only Jane Street/Citadel
risk zero offers; a tiered portfolio of applications is the standard professional approach.

## Domain 1: Quantitative Systems (HFT) — Quant Developer track specifically

**Tier 1 (hardest, sub-1% acceptance for some roles):**
Jane Street, Citadel Securities, Hudson River Trading, Two Sigma

**Tier 2 (still elite, more accessible pipelines, same core skills tested):**
Jump Trading, Optiver, IMC Trading, DRW, SIG (Susquehanna), Tower Research Capital,
XTX Markets, Akuna Capital, Five Rings

**Critical clarification confirmed by research:** "Quant Developer" (QD) is the role
that matches NEXUS's skill-building — it is explicitly the most accessible quant role
from a traditional software engineering background, distinct from Quant Researcher (QR,
which requires PhD-level statistics at top funds) and Quant Trader (QT, which leans
probability/market-making games over deep systems work). NEXUS targets QD roles
specifically across all firms above — this is the correct, confirmed framing.

**Confirmed tech-stack differentiation (apply when choosing where to weight portfolio
work):** Jane Street = OCaml. XTX/HRT = ML-native infrastructure. Optiver/Tower
Research = FPGA-intensive (VHDL/Verilog) — a different hardware skill, noted as
optional, not required, since most QD roles at other firms don't need it. Citadel/
Jump/DRW = C++-heavy low-latency systems, matching the NEXUS core directly.

**Confirmed: competitions matter as a real hiring pipeline.** Jane Street, Citadel, and
Schonfeld run datathons with direct hiring pipelines. IMC's Prosperity competition is a
recognized signal. This validates keeping a lean CP track — not for rating-chasing, but
because these specific company-run competitions are themselves a hiring channel.

## Domain 2: AI GPU Infrastructure

**Tier 1:** NVIDIA, Google DeepMind, OpenAI, Anthropic
**Tier 2 (same skill set, more accessible, real targets):** Meta AI Infrastructure
(FAIR/GenAI infra), xAI, Mistral, Microsoft AI Infrastructure (Azure ML platform team).
Also confirmed: Databricks maintains a dedicated AI Research Infrastructure org with
named open roles (Staff Software Engineer - AI Research Infrastructure) — Databricks is
a legitimate crossover target between AI Infra and Database Internals.

## Domain 3: OS Kernels & Embedded

**Tier 1:** Apple (Core OS/Silicon), Linux Foundation (contribution-based path to any
kernel-hiring employer)
**Tier 2 (real employers hiring through the same contribution-based pipeline):**
Red Hat, SUSE, Intel (Linux kernel team), ARM, Google (Android/ChromeOS kernel teams),
Microsoft (kernel-adjacent teams) — all hire kernel engineers by reviewing upstream
contribution history, identical to the Apple/Linux Foundation pipeline already in the
plan. No new skill required, only more doors for the same patches.

## Domain 4: Compilers & Language Design

**Tier 1:** Apple (LLVM/Swift), Google (V8/MLIR), Modular (Mojo)
**Tier 2:** AMD (compiler team for ROCm/GPU compilers), Intel (compiler team for
oneAPI), Meta (HHVM/Hack compiler team, Buck2 build system internals) — confirmed real,
active compiler engineering employers with LLVM-adjacent or custom-compiler hiring needs
matching the exact skill set already in NEXUS.

## Domain 5: Database Internals

**Tier 1:** ClickHouse, Snowflake, Databricks, MongoDB Core
**Tier 2:** CockroachDB (distributed SQL, Raft-heavy, direct match to planned Raft KV
work), TigerData/Timescale (Postgres-based time-series), MotherDuck (DuckDB-adjacent),
Yugabyte — all confirmed real database internals employers requiring the same B-tree/
MVCC/query-optimizer/distributed-consensus skill stack.

---

# SECTION 2 — WHAT IS PERMANENTLY ELIMINATED (And Why, Explicitly)

| Eliminated | Why It Does Not Trace to Any Hiring Requirement |
|---|---|
| PhD/Masters track (KAUST, OIST, TUM, ETH, CMU applications) | Zero of the ~25 target companies require a graduate degree for the engineering roles targeted. Confirmed: "a PhD is helpful but not required at most firms" for QD roles specifically — QR roles requiring PhDs are not the target role. |
| German language track | Existed solely for the Germany Chancenkarte emigration path, which existed solely for the academic/research track. No target company requires German. |
| Chinese language track | Existed solely for CSC scholarship / Tsinghua academic track. No target company requires it. |
| Chess (3hr/week) | Zero companies across all research mention it. Zero identified interview-prep value. |
| Quantum Information course | No domain overlap with any of the ~25 target companies. Was "future-proofing" for academic research, not hiring. |
| Philosophy of Science | Zero hiring relevance. Existed solely to frame an "original invention" research capstone tied to PhD applications. |
| Full Lean4/Coq formal verification track + 1000hr Original Invention capstone | TLA+ awareness retained (distributed-systems-adjacent interview content exists); the full proof-assistant mastery + invention capstone was PhD-portfolio content, not a hiring requirement anywhere in the ~25-company list. |
| Modal Logic | Zero hiring relevance — fed the now-cut formal verification depth track. |
| Full Real Analysis (Rudin) | Reduced to a 6-week proof-fluency subset (Ch.1-4) only — no company tests it directly; retained narrowly because whiteboard proof reasoning shows up generically at math-heavy firms. |
| CF 2200 (Grandmaster) target | Confirmed: CF/OA difficulty tops out at "CF 2000+" even for the hardest OA in the list (HRT). The extra ~400-800 hours for 2200 has no identified marginal hiring value across any of the ~25 companies. |
| Spring Boot / Java enterprise track | Not tested by a single target company in any research pass. |
| Full Java track beyond a 2-week read | Scheme Interpreter moves to C (Apple LLVM/compiler roles test parser depth in C, not Java); Java retained only as a 2-week read for RLHF annotation income relevance. |
| Thermodynamics, full Electromagnetism, full Optics courses | Zero direct interview testing identified. Reduced to short conceptual reads only where a real project dependency exists (Optics: ~2 days, BRDF physics for the path tracer only). |

---

# SECTION 3 — WHAT IS RETAINED OR ADDED (Each Traces to a Named Requirement)

| Retained/Added | Traces To |
|---|---|
| Scheme Interpreter built in C (not Python/Java) | Apple LLVM/Swift (C-level parser depth tested directly) |
| C++ begins Y2 Q2 (not Y4) | Citadel/HRT/Jump/DRW/IMC/Optiver (C++ mastery is the gate; starting 18 months earlier closes the depth gap before interviews) |
| OCaml (4-week basics, Y2 Q4) | Jane Street specifically (world's largest industrial OCaml user) |
| First Linux kernel patch (Y2 Q4), second patch (Y3 Q2) | Apple Core OS (contribution history is the literal admission ticket, per a verified kernel-engineer quote) plus Red Hat/SUSE/Intel/ARM/Google kernel teams |
| LLDB as primary debugger from Y2 Q3 | Apple ecosystem-wide standard debugger |
| XNU source reading (3 weeks, Y3 Q2) | Apple Core OS (Mach IPC, IOKit model directly tested) |
| Order Book Simulator, lock-free C++ (Y3 Q4) | Jump Trading (implemented live in interview), Citadel/HRT/DRW/Optiver/IMC (portfolio centerpiece for QD roles) |
| Vectorized SIMD scan in SQL engine (Y3 Q3) | ClickHouse (core differentiator, directly tested) |
| Arrow format reader (Y3 Q3) | ClickHouse, Databricks, DuckDB-adjacent companies |
| Rule-based query optimizer (Y3 Q4) | Snowflake, Databricks, CockroachDB |
| Raft distributed KV store (Y3 Q3) | Snowflake, MongoDB, CockroachDB |
| PyTorch C++ extension (Y4 Q1) | NVIDIA (domain round), DeepMind, Databricks AI Infra org |
| CUDA kernels with roofline analysis (Y4 Q2) | NVIDIA (the single most tested concrete skill in their domain round) |
| Triton kernels (Y4 Q2) | Modular, OpenAI (Triton used in production), NVIDIA-adjacent |
| Distributed training design doc: AllReduce, parallelism strategies (Y4 Q3) | OpenAI, NVIDIA, DeepMind, Meta AI Infra, xAI |
| Compiler theory: SSA + register allocation (Y4 Q3-Q4) | Apple LLVM/Swift, Google V8/MLIR, AMD/Intel compiler teams |
| TLA+ (2-week intro only, Y3 Q1) | Distributed-systems interview content at Snowflake/MongoDB/CockroachDB |
| Zetamac (from Y1 Q3) | Jane Street, Optiver, SIG (mental math is "often the primary filter" at market-making firms) |
| Godbolt/assembly empathy (from Y1 Q3) | All C++ systems firms — hardware empathy from day one of C |

---

# SECTION 4 — COMPETITIVE PROGRAMMING: EXACT SCOPE (Confirmed and Tightened)

**Confirmed OA difficulty map:**

| Company Tier | OA/Interview Level | What's Tested |
|---|---|---|
| HRT, Citadel, Two Sigma | CF 2000+ equivalent, hardest in the list | Advanced graphs, flows, complex DP, geometry |
| Jane Street | Less about rating, more about novel-problem reasoning under evolving constraints | Iterative collaborative coding, no standard tricks |
| Jump, DRW, IMC, Optiver, SIG | CF 1800-2000 + heavy mental math/probability | Algorithmic + market-making-style probability puzzles |
| NVIDIA, Apple | LeetCode Medium | Standard DSA plus heavy domain-specific deep-dive |
| Google DeepMind | LeetCode Hard (Google's standard bar, unchanged) | Graphs, DP, trees, hash tables |
| OpenAI/Anthropic | LeetCode Medium-Hard | Practical/concurrent production-style problems |
| ClickHouse, Snowflake, Databricks, MongoDB | LeetCode Medium-Hard to Hard | Performance/distributed-systems-flavored |

**CF target: 2000 covers the hardest OA in the entire ~25-company list (HRT/Citadel/Two
Sigma). No company requires more. CF 2200 is eliminated — confirmed zero marginal value.**

**Topics required, priority order:** Must-have: arrays/strings/hashmaps/two-pointer/
sliding window, binary search all variants, basic graphs (BFS/DFS), sorting/prefix
sums, basic DP. Must-have for HRT/Citadel/Two Sigma/DRW tier: advanced graphs
(Dijkstra, Floyd-Warshall, Union-Find), segment trees/Fenwick trees, advanced DP, string
algorithms (KMP, Z-function), max-flow/bipartite matching, SCC (Tarjan/Kosaraju).
Skip entirely: geometry beyond convex hull basics, suffix arrays, heavy combinatorics,
persistent data structures, link-cut trees.

**Hour allocation:** Y1: 7hr/week. Y2: 7hr/week. Y3: 5hr/week (shifts to company-tagged
practice). Y4: 4hr/week (mock-interview maintenance mode only, no new topics).

---

# SECTION 5 — MATH SPINE (Hiring-Only Scope, Confirmed)

| Subject | When | Traces To |
|---|---|---|
| Discrete Math (graphs, counting, induction, logic) | Y1 | All companies — underlying CS reasoning tested everywhere |
| Calculus I (full) | Y1 | HFT gate (stochastic calc prerequisite chain) |
| Probability I (distributions, expected value, Bayes, CLT) | Y1-Y2 | Jane Street, Optiver, SIG, IMC (heavily weighted in OAs) |
| Calculus II | Y2 | HFT gate prerequisite |
| Linear Algebra (Strang, full) | Y2 | NVIDIA, DeepMind, Databricks AI Infra |
| Probability II (stochastic processes, Markov chains) | Y3 | HFT gate (all Tier 1/2 quant firms) |
| Multivariable Calculus | Y3 | HFT gate plus DeepMind/NVIDIA ML math discussions |
| Stochastic Calculus (Ito's lemma derived) | Y3 | Explicit math screen at every Tier 1/2 quant firm |
| ODEs (basics only, 3 weeks) | Y4 | Minor — GPU simulation/physics background |
| Convex Optimization (core only: GD, duality, 3 weeks) | Y4 | DeepMind, NVIDIA, Databricks AI Infra |
| Information Theory (4 weeks) | Y4 | DeepMind (ML depth signal in domain round) |
| Real Analysis (6 weeks, Rudin Ch.1-4 only, proof fluency) | Y4 | Generic whiteboard proof reasoning at math-heavy firms |

**Eliminated entirely:** Thermodynamics, full Electromagnetism, full Optics, Quantum
Information, Modal Logic, Type Theory beyond a light 4-week intro (kept only for Apple
LLVM's type-checking questions).

---

# SECTION 6 — WEEKLY HOUR BUDGET (4-Year, Hiring-Optimized)

| Track | Y1 | Y2 | Y3 | Y4 |
|---|---|---|---|---|
| Engineering (projects + systems work) | 28 | 32 | 35 | 38 |
| Math/Science (Section 5 scope only) | 12 | 11 | 10 | 8 |
| Competitive Programming | 7 | 7 | 5 | 4 |
| Visibility (GitHub, blog, open source, kernel patches) | 4 | 6 | 8 | 10 |
| Interview Prep (mock interviews, company-tagged) | 0 | 2 | 4 | 6 |
| Income (RLHF / remote job once secured) | variable | variable | variable | variable |
| **Subtotal (excl. income)** | **51** | **58** | **62** | **66** |

**Three retained micro-habits (each traces to a specific requirement):**
1. Code Archaeology (15min/day) — read 1 source file from Redis/Linux/LLVM/ClickHouse.
   Builds source-reading fluency interviewers probe in project deep-dives at every domain.
2. Godbolt/Assembly Empathy (from Y1 Q3, every C/C++ function) — directly serves
   Citadel/HRT/DRW hardware-empathy questions.
3. Zetamac (15min/day from Y1 Q3) — directly serves Jane Street/Optiver/SIG mental
   math screens.

**Eliminated:** Intel Manual deep-reading as a tracked habit (folded into specific study
topics only when needed), language maintenance (German/Chinese, fully cut), chess.

---

# SECTION 7 — THE 4-YEAR QUARTER-BY-QUARTER PLAN

## YEAR 1: Foundation (Jul 2026 to Jun 2027)

### Y1 Q1 (Jul-Sep 2026): Python + Discrete Math + Tools
Python (MIT 6.100L + Helsinki MOOC, 10hr/wk) — foundation for all domains plus RLHF income.
Discrete Math (MIT 6.042J, 8hr/wk) — all companies, algorithmic reasoning foundation.
Missing Semester (git/bash/vim/SSH, 4hr/wk) — professional toolchain credibility.
CP: arrays, strings, hashmaps, two-pointer, sliding window (7hr/wk) — all OAs.
GitHub/Obsidian/Anki setup — active GitHub from day one (resume screen credibility).
Milestone: CF 600; working Python programs; git workflow operational.

### Y1 Q2 (Oct-Dec 2026): Python Depth + Calc I + Probability
Python deeper: algorithms, recursion, OOP, generators (8hr/wk).
Calculus I differentiation (MIT 18.01, 6hr/wk) — HFT gate prerequisite chain.
Probability I: expected value, distributions, Bayes (4hr/wk) — Jane Street/Optiver/SIG OA content.
CP: binary search all variants, prefix sums, sorting (7hr/wk).
2-week Java orientation (read-only, no project, 2hr/wk) — RLHF Java annotation income.
Freelance/income accounts registered (Mostaql, Scale AI, RLHF platforms).
Milestone: CF 900; probability basics solid; income accounts live; Hacktoberfest (first PR).

### Y1 Q3 (Jan-Mar 2027): C Language + Scheme Interpreter in C
K&R C, Ch.1-6 (8hr/wk) — Apple Core OS (C is non-negotiable).
Scheme Interpreter in C — closures, tail calls, mark-sweep GC (12hr/wk) — Apple
LLVM (C-level parser depth), all compiler-track companies.
Calculus I integration (4hr/wk) — HFT gate.
CP: recursion, basic DP, BFS/DFS (7hr/wk).
Zetamac starts (15min/day) — Jane Street/Optiver/SIG mental math.
Godbolt starts (every C function, integrated) — hardware empathy from day one.
RLHF income onboarding begins (~$50-150/mo).
Outreachy application (Feb deadline). GSoC application (Mar deadline).
Milestone: Scheme Interpreter with closures + TCO + mark-sweep GC in C; CF 1100; RLHF earning.

### Y1 Q4 (Apr-Jun 2027): C Data Structures + Nand2Tetris + Theory of Computation
C data structures from scratch — linked list, BST, hash table (10hr/wk) — Apple Core
OS, all systems firms (pointer discipline, manual memory).
Nand2Tetris Part 1 — logic gates to ALU to CPU (8hr/wk) — NVIDIA (hardware-software
interface), Apple (hardware empathy).
Theory of Computation — automata, regular languages, CFGs (4hr/wk) — Apple LLVM
(automata to parser to lexer pipeline).
CP: tree traversal/construction/LCA, heaps (7hr/wk).
Portfolio site live, project architecture docs (2hr/wk).
Blog post #1: Scheme Interpreter design + GC explanation (3hr/wk).
RLHF income steady (~$200-350/mo). Family support ends May 2027 — buffer
target $600-900 saved by March 2027, built from RLHF income.
Milestone: CF 1400; Nand2Tetris CPU implemented; portfolio site live; blog #1 published.

---

## YEAR 2: Systems Mechanic (Jul 2027 to Jun 2028)

### Y2 Q1 (Jul-Sep 2027): K&R Complete + Heap Allocator in C + Calc II
K&R C complete, all exercises (6hr/wk) — Apple Core OS C mastery.
Handmade Hero episodes 1-50 (8hr/wk) — real-time systems intuition.
Heap Allocator in C — arena + slab, valgrind-clean, benchmarked (10hr/wk) — Apple
Core OS, NVIDIA, ClickHouse.
Calculus II — series, convergence (6hr/wk) — HFT gate.
CP: advanced DP, Dijkstra, Floyd-Warshall (7hr/wk).
First remote role search begins.
Milestone: Heap allocator with full architecture doc, public GitHub; CF 1550.

### Y2 Q2 (Oct-Dec 2027): C++ Begins + Systems Foundations + Linear Algebra
C++ RAII basics — rewrite heap allocator: unique_ptr, placement new, move semantics
(10hr/wk) — Citadel/HRT/Jump/DRW/IMC/Optiver (C++ starts here, 18 months earlier than
the original plan, closing the gap before later interviews).
C syscalls/signals (fork, exec, mmap, signal handling, 6hr/wk) — HRT/Jump/Apple.
Linear Algebra (Strang 18.06, first half, 6hr/wk) — NVIDIA/DeepMind ML math gate.
CP: segment trees, Fenwick trees, range queries (7hr/wk) — HRT/Citadel hard-DS requirement.
Milestone: C++ heap allocator with full RAII + move semantics, public GitHub; CF 1650.

### Y2 Q3 (Jan-Mar 2028): xv6 Kernel + eBPF + LLDB
xv6 OS Kernel — scheduler, virtual memory, file system + custom syscall/scheduler
modification (14hr/wk) — Apple Core OS, NVIDIA, OpenAI.
eBPF basics — write a syscall tracer (4hr/wk) — OpenAI/Anthropic observability depth,
Linux Foundation pipeline.
ASan/UBSan always-on from this quarter (integrated).
LLDB as primary debugger (integrated) — Apple ecosystem standard.
Linear Algebra complete — SVD, PCA, eigenvalues (5hr/wk).
CP: string algorithms (KMP, Z-function, rolling hash, 7hr/wk) — HRT OA.
Milestone: xv6 with custom modification, public repo + architecture doc; LLDB primary
debugger; CF 1700.

### Y2 Q4 (Apr-Jun 2028): C++ Concurrency + OCaml + Linux Patch #1
C++ concurrency — std::thread, std::atomic, memory ordering, false sharing, SPSC
lock-free queue (12hr/wk) — Citadel/HRT/Jump/DRW.
OCaml basics — 4 weeks: types, pattern matching, functors, small parser/state machine
(6hr/wk) — Jane Street specifically.
First Linux kernel patch submitted (checkpatch + git format-patch + LKML workflow,
4hr/wk) — Apple Core OS, Red Hat/SUSE/Intel/ARM/Google kernel pipeline.
Probability I complete — CLT, MGF (4hr/wk) — HFT math gate.
CP: graph flows (max-flow min-cut), bipartite matching (7hr/wk) — HRT hard-graph requirement.
Graduate April 2028. Savings continue.
Milestone: Lock-free SPSC queue, TSan-clean; OCaml project public; Linux patch
submitted to LKML; CF 1750.

---

## YEAR 3: Infrastructure Sovereign (Jul 2028 to Jun 2029)

### Y3 Q1 (Jul-Sep 2028): Go + TCP/IP Stack + Multivariable Calc
Go language — goroutines, channels, scheduler internals (6hr/wk) — OpenAI/Anthropic,
Databricks.
TCP/IP Stack in C++ — handshake, sliding window, retransmission, congestion control
(16hr/wk) — HRT/Jump, OpenAI, Apple Core OS.
TLA+ — 2-week intro, model-check a simple protocol (3hr/wk) — distributed-systems
interview content at Snowflake/MongoDB/CockroachDB.
Multivariable Calculus — gradient, Jacobian, divergence theorem (6hr/wk) — HFT gate.
CP: SCC (Tarjan/Kosaraju), bridges, articulation points, 2-SAT (5hr/wk) — HRT advanced graph.
Milestone: TCP/IP stack with congestion control, benchmarked latency; CF 1800.

### Y3 Q2 (Oct-Dec 2028): SQL B-Tree + XNU Reading + Probability II
B+ Tree — search/insert/delete/range scan, split/merge, WAL for crash recovery
(12hr/wk) — ClickHouse, Snowflake, MongoDB, CockroachDB.
XNU source reading — 3 weeks: osfmk/mach, bsd/kern, osfmk/vm (6hr/wk) — Apple Core OS.
Linux kernel patch #2 — escalate to a non-trivial mm/ or net/ fix (3hr/wk) — Apple
Core OS.
Probability II — stochastic processes, Markov chains, martingales (6hr/wk) — HFT gate.
CP: number theory — modular arithmetic, Euler's theorem, sieve, CRT (5hr/wk).
Mid-level remote job applications begin.
Milestone: B+ tree all-operations-correct, WAL implemented and benchmarked; XNU
reading notes organized; patch #2 submitted; CF 1850.

### Y3 Q3 (Jan-Mar 2029): SQL Storage Engine + Stochastic Calculus + SIMD Scan
SQL Storage Engine complete: B+ tree + WAL + SIMD vectorized scan (SSE2/AVX2) +
Arrow format reader (16hr/wk) — ClickHouse, Databricks, Snowflake.
Go Raft/distributed KV store — log replication, leader election, log compaction
(8hr/wk) — Snowflake, Databricks, MongoDB, CockroachDB.
Stochastic Calculus begins — Brownian motion, quadratic variation, Ito's lemma
(8hr/wk) — every Tier 1/2 quant firm's explicit math gate.
CP: convex hull, basic geometry (5hr/wk) — HRT geometry-in-hard-problems requirement.
Blog post #2: SQL Storage Engine vectorized execution design + benchmarks (2hr/wk).
Milestone: SIMD-scan benchmarked vs. row-at-a-time; Arrow reader functional; Raft KV
passes linearizability tests; CF 1900.

### Y3 Q4 (Apr-Jun 2029): Order Book Simulator + Query Optimizer + Stochastic Calc Complete
Order Book Simulator in C++ — lock-free SPSC ring buffer, L2 market data simulation,
nanosecond timestamps, sub-1us per operation (14hr/wk) — Jump Trading, Citadel/HRT/
DRW/Optiver/IMC (portfolio centerpiece across the entire HFT tier).
Rule-based query optimizer — predicate pushdown + projection elimination (6hr/wk) —
Snowflake, Databricks, CockroachDB.
Stochastic Calculus complete — Ito's lemma derived from scratch, SDE basics, Black-
Scholes intuition (8hr/wk) — HFT math gate, all Tier 1/2 firms.
CP: hard mock-interview problems, company-tagged (Jane Street/Citadel/HRT style, 5hr/wk).
Blog post #3: Order Book lock-free design + latency analysis (2hr/wk).
Milestone: Order book sub-1us per op benchmarked, TSan-clean; query optimizer
functional; Ito's lemma derivable from scratch on demand; CF 1950.

---

## YEAR 4: Final Domain Build + Applications Open (Jul 2029 to Jun 2030)

### Y4 Q1 (Jul-Sep 2029): C++ Advanced + Vulkan Path Tracer + PyTorch Extension
C++ Advanced — templates, CRTP, expression templates, allocator traits, UB
elimination, ABI stability (8hr/wk) — Citadel/HRT/Jump/DRW, ClickHouse.
Vulkan Path Tracer — BVH, ray-sphere intersection, Cook-Torrance BRDF, area lights
(12hr/wk) — NVIDIA (graphics pipeline depth), GPU domain knowledge broadly.
PyTorch C++ Extension — custom op + CUDA kernel, callable from Python (8hr/wk) —
NVIDIA (tested directly in domain round), DeepMind, Databricks AI Infra.
ODEs basics — first-order systems, stability, 3 weeks (4hr/wk) — minor NVIDIA-adjacent.
CP: mock interviews on Pramp/interviewing.io begin (4hr/wk).
Milestone: Path tracer renders Cornell box with global illumination; PyTorch C++ op
functional; CF 2000 (the confirmed ceiling, sufficient for every company in the list).

### Y4 Q2 (Oct-Dec 2029): CUDA Kernels + Triton + Convex Optimization Core
CUDA kernels — naive to tiled to Tensor-Core-aware matrix multiply, roofline analysis,
coalescing/bank-conflict/occupancy analysis, CUDA streams (16hr/wk) — NVIDIA (the
single most tested concrete skill in their domain round).
AVX-512/SIMD vectorized aggregation in C++, vs. scalar comparison (6hr/wk) —
ClickHouse, NVIDIA, HRT.
Triton kernels: flash attention + fused softmax (6hr/wk) — Modular, OpenAI, NVIDIA-adjacent.
Convex Optimization core — 3 weeks: GD convergence, duality, proximal operators
(4hr/wk) — DeepMind/Databricks AI Infra.
CP: 4hr/week mock interviews (maintenance mode).
Blog post #4: CUDA matrix multiply naive to Tensor Core, roofline analysis (2hr/wk).
Milestone: CUDA tiled matmul with roofline analysis; 2 Triton kernels benchmarked vs.
PyTorch baselines; CF 2000 maintained.

### Y4 Q3 (Jan-Mar 2030): GPT Transformer + Compiler Theory + Distributed Training Design
GPT Transformer from scratch — attention, positional encoding, layer norm, training
loop, gradient checkpointing (14hr/wk) — NVIDIA, DeepMind, OpenAI, Anthropic.
Information Theory — entropy, KL divergence, mutual information, 4 weeks (5hr/wk) —
DeepMind ML-depth domain round.
Distributed training design doc — AllReduce variants, data/pipeline/tensor
parallelism, straggler detection, checkpoint recovery (6hr/wk) — OpenAI, NVIDIA,
DeepMind, Meta AI Infra, xAI.
Compiler Theory: SSA form + liveness analysis (Cooper & Torczon Ch.5, 6hr/wk) —
Apple LLVM/Swift, Google V8/MLIR, AMD/Intel compiler teams.
CP: 4hr/week mock interviews.
Milestone: Transformer trains and generates coherent text on a small dataset;
distributed training design doc (5-page system design); can construct SSA from CFG
with phi-node placement on whiteboard.

### Y4 Q4 (Apr-Jun 2030): Lock-Free Advanced + Register Allocation + Applications Open
Lock-free/wait-free C++ — ABA problem, hazard pointers, epoch-based reclamation,
TSan-validated proofs (12hr/wk) — Citadel/HRT/Jump/DRW, Apple Core OS.
Compiler Theory: register allocation — Chaitin-Briggs graph coloring, linear scan,
spilling, rematerialization (Cooper & Torczon Ch.13, 8hr/wk) — Apple LLVM.
ABI depth — calling conventions ARM64 vs x86-64, name mangling, vtable layout
(4hr/wk) — Apple LLVM/Core OS.
Real Analysis — 6 weeks, Rudin Ch.1-4 only, proof fluency (5hr/wk).
CP: 4hr/week mock interviews, fully company-tagged.
Applications open across the full ~25-company target list.
Milestone: Wait-free queue with formal correctness argument + TSan validation;
register allocation explainable on whiteboard with spilling trade-offs; CF 2000
maintained; full application pipeline active.

---

# SECTION 8 — THE RESUME

Order: Skills, then Projects (the actual degree-equivalent), then Open Source, then
Education last.

```
TECHNICAL SKILLS
Languages: C, C++17/20, Python, Go, OCaml
Systems: CUDA, xv6, Linux kernel (patches submitted), eBPF, LLDB
Tools: Valgrind, TSan, ASan, UBSan, Godbolt, perf, gdb/lldb
Codeforces: [rating, only listed if 1800+]

PROJECTS
Order Book Simulator | C++17, lock-free SPSC ring buffer
  Sub-1us per operation benchmarked; L2 market data feed simulation; TSan-validated

SQL Storage Engine | C++17, SIMD, Arrow format
  Vectorized scan (SSE2): [X]x speedup over row-at-a-time; B+ tree + WAL + query optimizer

xv6 Kernel Modification | C, LLDB
  [custom syscall / scheduler change]; architecture doc in Linux-kernel-style format

CUDA Matrix Multiply | CUDA C++, roofline analysis
  [X]% of theoretical peak memory bandwidth; naive to tiled to Tensor Core; profiled with Nsight

TCP/IP Stack | C++17
  Full congestion control; retransmission; [X] throughput benchmarked

Scheme Interpreter | C, mark-sweep GC
  Closures, tail-call optimization, mark-sweep garbage collection

OPEN SOURCE
Linux Kernel: [N patches merged] -- [describe the non-trivial one]
OCaml: [project/contribution]

EDUCATION
[University] -- B.Sc. Computer Science, 2028
```

Rules: every project has a real benchmark number, never just "implemented." GitHub
link in every project title. One page for junior applications. CF rating only listed
if 1800+, below that it adds no signal.

---

# SECTION 9 — APPLICATION STRATEGY

Bypass the resume-screen filter risk (non-target university, low GPA):
1. Direct recruiter contact on LinkedIn before submitting a resume — one sentence
   describing what you built plus a GitHub link.
2. Referral from open source — every Linux kernel patch and every project shared
   publicly builds a network of engineers at target companies.
3. Technical blog posts shared on Hacker News / r/cpp / r/systems — a strong post
   brings recruiters to you.
4. Apply once CF 1800+ for HFT firms specifically — a visible credential that helps
   bypass GPA-based filtering.
5. Apply broadly across both tiers, not just Tier 1 — confirmed directly from quant
   recruiting research: candidates who only target Jane Street/Citadel risk zero
   offers; a balanced portfolio across the full ~25-company list is correct.
6. Target hiring windows — HFT firms hire aggressively September-October and
   February-March; align the Y4 Q4 application push to these windows where possible.

Do not cold-apply through a website form alone for any Tier 1 company — hit rate is
near zero without one of the above signals first.

---

# SECTION 10 — MOCK INTERVIEW SCHEDULE

| Phase | Format | Frequency | Platform |
|---|---|---|---|
| Y2 Q3-Q4 | Self-mock: solve LeetCode Medium out loud, record audio | 2x/week | LeetCode |
| Y3 (all) | Peer mock with a study partner | 1x/week | Pramp or Discord communities |
| Y4 Q1-Q3 | Professional mock with experienced engineers | 2x/month | interviewing.io |
| Y4 Q4 (pre-application) | Company-specific style practice | 3x/week | interviewing.io + peers |

Required STAR-format behavioral answers, prepared from real NEXUS work: "hard bug
fixed" uses xv6 kernel panic debugging with LLDB; "performance optimization" uses CUDA
matrix multiply roofline analysis; "system designed" uses the distributed Raft KV
store or SQL engine; "why this company" stays specific, grounded in their actual
engineering blog and team, never generic.

---

# SECTION 11 — PRE-APPLICATION CHECKLISTS (Per Company Tier)

### Before applying to any Tier 1/2 HFT firm (Jane Street, Citadel, HRT, Two Sigma, Jump,
### Optiver, IMC, DRW, SIG, Tower Research, XTX, Akuna, Five Rings):
- [ ] C++17/20: lock-free SPSC queue, custom allocator, move semantics — all in real code
- [ ] Can explain memory_order_acquire vs. memory_order_release with a hardware example
- [ ] Can identify and fix false sharing (alignas(64)) in shown code
- [ ] Order Book Simulator public, benchmarked, sub-1us per operation
- [ ] Stochastic Calculus: derive Ito's lemma from scratch without notes
- [ ] Zetamac: fast, consistent mental math (18+ months practice by Y4)
- [ ] CF 1800+ visible on profile
- [ ] 5+ company-tagged mock interviews completed
- [ ] For Jane Street specifically: OCaml project public

### Before applying to NVIDIA / DeepMind / OpenAI / Anthropic / Meta AI Infra / xAI:
- [ ] CUDA tiled matmul with roofline analysis — portfolio centerpiece
- [ ] Memory hierarchy and warp divergence explainable with specific latency numbers
- [ ] PyTorch C++ extension functional, callable from Python
- [ ] 2 Triton kernels benchmarked
- [ ] Distributed training system design doc complete
- [ ] GPT Transformer trained on real data, public GitHub
- [ ] LeetCode Hard consistency (DeepMind specifically)
- [ ] "Why this company" answer grounded in their actual mission/engineering blog

### Before applying to Apple Core OS / Linux Foundation pipeline (Red Hat, SUSE, Intel,
### ARM, Google kernel teams, Microsoft kernel-adjacent):
- [ ] 3+ Linux kernel patches merged, at least 1 non-trivial (mm/ or net/)
- [ ] xv6 modified version public with full architecture doc
- [ ] LLDB used as primary debugger for all work since Y2 Q3
- [ ] XNU: can discuss Mach IPC, IOKit driver model
- [ ] Can implement a spinlock in C from memory

### Before applying to Apple LLVM/Swift / Google V8-MLIR / Modular / AMD / Intel compiler teams:
- [ ] SSA: can construct from CFG with phi-node placement on a whiteboard
- [ ] Register allocation: graph coloring vs. linear scan, spilling trade-offs explainable
- [ ] Custom LLVM-adjacent pass written and working
- [ ] Scheme Interpreter in C, public, with GC documentation

### Before applying to ClickHouse / Snowflake / Databricks / MongoDB / CockroachDB / TigerData:
- [ ] SIMD vectorized scan benchmarked with block-size analysis
- [ ] Arrow reader functional
- [ ] Raft KV store public, passes linearizability tests
- [ ] Query optimizer: predicate pushdown + projection elimination functional
- [ ] B+ tree: all operations + WAL crash recovery
- [ ] LeetCode Hard consistency (Snowflake/Databricks bar)

---

# SECTION 12 — INCOME TIMELINE (Lean, Hiring-Track Only)

| Date | Event | Monthly Income |
|---|---|---|
| Jul 2026 | NEXUS begins | $0 |
| Jan 2027 | RLHF income starts | $50-150 |
| Mar 2027 | Buffer target: $600-900 saved | $200-350 |
| May 2027 | Family support ends | Buffer covers the gap |
| Sep 2027 | First remote junior role search begins | $800-1,200 once secured |
| Jan 2028 | RLHF at C/C++ tier (higher rates once C is solid) | $1,500-2,500 |
| Jun 2028 | Graduated; rate negotiation | $2,000-3,500 |
| Sep 2029 | $100k/yr equivalent threshold | $4,000-6,000 |
| Jun 2030 | Full application pipeline open across ~25 companies | $6,000+ or giant offer |

Note on remote-job-as-income-engine: once a first remote role is secured (~Y2 Q1-Q2),
it becomes the primary income source for the rest of the plan, with RLHF/freelance as
supplementary. A real "Software Engineer" title accruing 2+ years of tenure by the Y4
application window is itself a resume signal: it passes "0 years experience" filters
that pure freelance/RLHF income does not, and gives genuine production-context
stories for behavioral interviews. This is incorporated directly into Section 7 via
the Y2 Q1 "first remote role search" objective.

---

# SECTION 13 — RESTORATION PROMPT

```
I am Osama. Egyptian, university student, Asyut University, low GPA. NEXUS starts
July 1, 2026. ONE GOAL: get hired by a giant. Nothing else.

Family support ends May 2027. Graduate April 2028. Target: applications open across
the full company list by June 2030 (4-year plan).

~25 TARGET COMPANIES ACROSS 5 DOMAINS:
HFT (Quant Developer track): Jane Street, Citadel Securities, HRT, Two Sigma (Tier 1);
Jump Trading, Optiver, IMC Trading, DRW, SIG, Tower Research, XTX Markets, Akuna
Capital, Five Rings (Tier 2).
AI GPU Infra: NVIDIA, Google DeepMind, OpenAI, Anthropic (Tier 1); Meta AI Infra, xAI,
Mistral, Microsoft AI Infra, Databricks AI Research Infra (Tier 2).
OS Kernels: Apple Core OS, Linux Foundation contribution pipeline (Tier 1); Red Hat,
SUSE, Intel, ARM, Google kernel teams, Microsoft (Tier 2).
Compilers: Apple LLVM/Swift, Google V8/MLIR, Modular Mojo (Tier 1); AMD, Intel, Meta
HHVM/Buck2 (Tier 2).
Database Internals: ClickHouse, Snowflake, Databricks, MongoDB (Tier 1); CockroachDB,
TigerData/Timescale, MotherDuck, Yugabyte (Tier 2).

PERMANENTLY ELIMINATED: PhD/Masters track, German/Chinese language tracks, chess,
Spring Boot/Java enterprise, full Java track, thermodynamics, full electromagnetism,
full optics, philosophy of science, quantum information, modal logic, full Lean4/Coq
formal verification plus 1000hr invention capstone, full Real Analysis (reduced to
6wk Ch.1-4 proof-fluency only), CF 2200 target (CF 2000 confirmed sufficient for
every company in the list).

CORE PROJECTS: Y1 Scheme Interpreter in C (closures+TCO+GC) -> compiler-track
companies. Y2 Heap Allocator C then C++ RAII rewrite -> systems firms broadly; xv6
kernel -> Apple/kernel pipeline; OCaml basics -> Jane Street; Linux patch #1 -> Apple/
kernel pipeline. Y3 TCP/IP stack C++ -> HRT/OpenAI; SQL Storage Engine + SIMD scan +
Arrow reader + query optimizer -> ClickHouse/Snowflake/Databricks/CockroachDB; Raft KV
-> Snowflake/MongoDB/CockroachDB; Order Book Simulator lock-free -> entire HFT tier;
Stochastic Calculus -> HFT math gate. Y4 Vulkan Path Tracer + PyTorch C++ extension +
CUDA kernels + Triton -> NVIDIA/DeepMind/OpenAI/Modular; Transformer + distributed
training design -> AI infra tier; Compiler theory SSA+register allocation -> Apple
LLVM/Google V8/AMD/Intel; Lock-free/wait-free C++ advanced -> HFT tier + Apple Core OS.

MATH (hiring-scope only): Discrete Math+Calc I+Prob I (Y1) -> Calc II+LinAlg+Prob II
(Y2) -> Multivar+Stochastic Calc[HFT gate] (Y3) -> Convex Opt core+Info Theory+Real
Analysis 6wk (Y4).

CP: CF 2000 target (confirmed ceiling, sufficient for every company including HRT).
7hr/wk Y1-Y2, 5hr Y3, 4hr Y4 (interview-mode). Topics through bipartite matching+SCC
(HRT bar). Skip advanced geometry, suffix arrays, persistent DS.

3 MICRO-HABITS: Code Archaeology (15min/day), Godbolt (from Y1 Q3), Zetamac (15min/
day from Y1 Q3).

INCOME: RLHF from Jan 2027, scales with C/C++ skill. First remote job search from Y2
Q1 -> becomes primary income engine + resume-experience signal for 2+ years by
application time. Family support ends May 2027, bridged by $600-900 buffer.

APPLICATION STRATEGY: Direct recruiter LinkedIn contact, referrals from open source,
technical blog posts on HN/r/cpp, apply broadly across both tiers, target Sep-Oct and
Feb-Mar hiring windows, never cold-apply via website form alone.

CURRENT POSITION: [INSERT Y/Q/WEEK/PROJECT]
Load full context. Proceed.
```

---

This is the complete, hiring-only NEXUS plan. Every item present traces to a named
company's verified hiring requirement. Every item absent was cut because it did not.
Start: July 1, 2026. Target: applications open across approximately 25 companies by
June 2030.
