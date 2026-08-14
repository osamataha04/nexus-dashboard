# NEXUS — COMPLETE HIRING READINESS
## Real Interview Processes, Code Quality Standards, and Documentation Mastery
## For the Five Chosen Domains — No Surprises

---

# PART 0 — WHY THIS DOCUMENT EXISTS

NEXUS builds deep engineering capability. That is necessary but not sufficient. Getting
hired at the actual companies on your list requires three more things this document covers
in full: (1) knowing exactly what each domain's interview process tests, so nothing is a
surprise, (2) writing code at the standard the best engineers at these companies actually
write it, as a daily habit, not a final-year cram, and (3) writing documentation
(design docs, RFCs, architecture write-ups) at the same standard — because at every one of
these companies, writing is explicitly part of the engineering job, not separate from it.

Competitions (CP, ICPC, Meta Hacker Cup) are not goals. They are partial proxies some of
these companies use to screen for the skills below. Where they matter, it's stated plainly.
Where they don't, that's stated too — so you stop guessing and start preparing for what's
actually tested.

---

# PART 1 — DOMAIN-BY-DOMAIN: THE REAL INTERVIEW PROCESS

## 1. Quantitative Systems (HFT) — Jane Street, Citadel Securities, HRT, Jump Trading

**No GPA or degree requirement at Jane Street** — confirmed directly from their own
careers site. They interview from 70+ universities and explicitly state they don't filter
on credentials. This is genuinely the most meritocratic door on your entire target list.

**Jane Street process:** Online assessment → phone/video technical interviews → final-round
"Super-Day" (in-person or virtual), focused almost entirely on live collaborative coding
problems. **You write real code, not pseudocode, in whatever language you know best** — most
hired engineers arrive with zero OCaml experience; you learn it on the job. What they
actually score is what they call internally a "teachability index" — they deliberately give
you a problem slightly too hard to solve alone, and watch how you use hints, how you adjust
when wrong, and whether you stay calm and curious under pressure. The process is the same
length whether you ace it or not, so don't read into call-back speed.

**Citadel/Citadel Securities process:** Four stages, ~8 weeks total. First two rounds are
general technical + behavioral (not yet team-specific) — "share your thought process, discuss
trade-offs, be clear about what you know and don't know" is their own stated guidance. Later
rounds are team-matched based on your profile.

**Hudson River Trading process:** Online assessment on CodeSignal (Python or C++), genuinely
hard — candidates report LeetCode-hard-level dynamic programming under a 2-hour window.
Then a multi-round live-coding Superday (3 rounds), heavy on implementation correctness and
explaining your design choices out loud, not just getting the right answer.

**Does CP/competition rating matter here?** **Yes, directly and explicitly.** These firms
recruit visibly from Codeforces leaderboards, ICPC results, and Project Euler. A strong CF
rating is a genuine fast-track signal at this specific category of company — more so than
anywhere else on your list. This is the deepest reason the CP track (and the optional
Grandmaster push, in the companion CP document) has real payoff specifically here.

**Math/probability content:** expect on-the-fly expected value calculations, calibration
games ("how much would you pay to play this game"), and mental math under time pressure —
exactly what the Zetamac micro-habit and the probability puzzle books (Mosteller, Crack)
in the CP companion document are for.

## 2. AI GPU Infrastructure — NVIDIA, Google DeepMind, OpenAI Hardware Team, Anthropic

**NVIDIA is the hardest door on your entire list by raw selectivity** — approximately 0.3-0.4%
acceptance rate across ~3 million annual applications, more selective than Harvard admissions.
This needs to be said plainly so you calibrate expectations, not to discourage you.

**NVIDIA process:** Recruiter screen → 1-2 technical phone screens → 4-6 hour onsite/virtual
loop with 4-6 interviewers, 4-8 weeks total. Generic LeetCode exists but **specialty rounds
dominate** — NVIDIA explicitly hires specialists, not generalists. A CUDA engineer is tested
on CUDA depth specifically: memory coalescing, warp divergence, bank conflicts, tiling
strategies for memory-bandwidth-limited kernels, profiling methodology. **"Generic systems
knowledge isn't enough; NVIDIA-specific systems thinking is what's tested"** — direct
confirmation that your Y4 CUDA project work, done with real depth (not surface-level), is the
actual preparation, more than any generic prep course. System design rounds here are
infrastructure-flavored: distributed training pipelines, GPU-accelerated computing
infrastructure, not generic product design. Their stated cultural value is "intellectual
honesty" — admitting what you don't know immediately rather than bluffing, which is worth
practicing explicitly since it cuts against most people's interview instincts.

**Does CP rating matter here?** Indirectly. Generic coding rounds exist (some LeetCode-with-
a-twist involving memory/pointers) but the deciding signal is domain depth — can you explain
warp divergence, not can you solve a graph problem fast. CF rating is not a stated recruiting
signal at NVIDIA/AI labs the way it is at HFT firms.

**OpenAI/Anthropic:** less standardized public process data than NVIDIA, but consistently
reported emphasis on: practical ML systems engineering ability over LeetCode, real project
deep-dives, and (confirmed earlier in this plan) explicit hiring guidance that independent
research and open-source contributions belong at the top of a resume. This is the strongest
direct validation in this entire research pass for the NEXUS visibility strategy (Part 4).

## 3. OS Kernels & Embedded — Apple (Core OS/Silicon), Linux Foundation

**This is the domain where your portfolio matters more than any interview performance,
and the data confirms it directly.** A real quote from an Apple kernel engineer, found
verbatim during research: *"If you have contributed to the kernel, it should be easy and
they'll look up your contributions. If you haven't contributed to the kernel, not much you
can do now."* This is the single clearest piece of evidence in this entire research pass
for why NEXUS's visibility strategy (real PRs, real contributions, from Y2 onward) is not
optional — it is the actual admission ticket for this specific domain.

**Apple Core OS process:** Standard format — phone screens → packed onsite (8-9 interviews,
2 people each, reported by candidates as unusually dense). Technical content: instruction
sets, debug information formats, data structures, OS fundamentals, computer architecture.
One honest, sourced candidate complaint worth knowing in advance: Apple's culture can run
colder/more exacting in interviews than other companies ("you forgot a semicolon there" was
a real reported moment) — don't read coldness as failure, it may simply be house style.

**The Linux Foundation path is not a traditional interview at all** — it is reputation built
through actual merged contributions to the kernel, visible in mailing list history and git
blame. This is exactly what the LFX Mentorship Program (already in NEXUS, Y2-Y3) is designed
to produce: a real, citable contribution history before you ever sit in front of an Apple or
kernel-adjacent recruiter.

**Does CP matter here?** Barely. Some employers (per researched advice for kernel developer
careers generally) still list "competitive programming sharpens problem-solving" as generic
advice, but the actual gating signal for this domain is contribution history, not rating.

## 4. Compilers & Language Design — Apple (Swift/LLVM), Google (V8/GCC), Modular (Mojo)

**Apple Compiler Engineer (verified candidate report):** several phone interviews then a
packed onsite. Content skews surprisingly approachable at first (instruction sets, basic
test questions) then sharpens fast — reverse-postorder traversal, detailed LLVM debug
information formats and data structures, the kind of question that assumes you've actually
read LLVM internals, not just used LLVM as a black box. One verified candidate report: an
interviewer redirected mid-loop wanting "someone with LLVM experience" even though it wasn't
on the resume — the honest lesson is **be explicit about your LLVM/compiler depth on your
resume and in early screens**, don't let it be discovered or assumed.

**NVIDIA's LLVM Compiler Engineer internship process** (a real, verified candidate account):
coding round with one DSA problem (easy-medium) → technical round covering global/static/
local variable scoping, stack vs. heap, and — directly relevant — representing build
dependencies as a DAG and explaining incremental recompilation via topological sort. **This
is a direct, concrete confirmation that graph theory (already deep in your NEXUS math track)
shows up explicitly in real compiler interviews**, not as an abstract requirement.

**Does CP matter here?** Moderately — DSA rounds exist and are real, but they're typically
one component alongside deep domain questions (debug info formats, IR structures, the actual
mechanics of your Y5 LLVM compiler project). Depth on your own compiler project is the
stronger signal; CP fluency makes the DSA component a non-event rather than a hurdle.

## 5. Database Internals — Databricks, Snowflake, ClickHouse, MongoDB Core

**Snowflake process:** 2-6 weeks. Recruiter screen → online assessment (HackerRank/
CodeSignal, 90-120min, 2-3 algorithmic problems Medium-Hard + SQL/data-processing questions)
→ technical phone screen (LeetCode-style + language internals, e.g. C++ memory model) →
virtual onsite. **Coding rounds skew harder than average, with a specific recurring focus on
graphs, dynamic programming, and concurrency** — confirmed: candidates report being asked to
implement thread-safe data structures (concurrent LRU cache, transactional key-value store).
**System design rounds here are explicitly infrastructure-flavored** — "design a distributed
rate limiter," "design a metadata service for a cloud warehouse," not generic product design.
Database internals come up directly and are worth deep specific prep: **MVCC, LSM trees vs.
B-trees, columnar storage, query planning, vectorized execution** — this is a precise,
verified list of exactly what your Y3 SQL Storage Engine project (plus the columnar storage
awareness addition already in NEXUS v14.0) needs to make you fluent in, not just aware of.

**Databricks process:** 5-6 stages, 4-7 weeks (8-10 for senior/staff). Recruiter screen →
coding screen (CoderPad, LeetCode medium-hard) → distributed systems/Spark internals deep-
dive → ML or platform round → behavioral → final hiring manager. A verified, specific warning
from their own research: **"weak open-source awareness" is named as a real failure mode** —
candidates who can't discuss recent Spark releases or the lakehouse open-format landscape
signal disengagement with the ecosystem they're being hired into. **Direct lesson: know the
current state of the specific open-source projects in your target sub-field, not just the
underlying CS theory.** A take-home is occasionally used for borderline candidates (~5 hours,
sometimes database-specific) — when given, documentation quality and test coverage are
explicitly what's evaluated, not just correctness.

**Does CP matter here?** Yes, moderately-to-strongly — both Snowflake and Databricks run
genuine LeetCode medium-hard rounds as a real gate, with concurrency as a specific recurring
theme. This is one of the two domains (alongside HFT) where the CP track has direct,
confirmed payoff, not just indirect benefit.

---

# PART 2 — WHERE CP CREDENTIALS ACTUALLY MATTER: THE HONEST MAP

| Domain | CP/DSA Round Exists? | How Much It Matters | What Matters More |
|---|---|---|---|
| HFT | Yes, often hard | **High — explicit recruiting signal from CF/ICPC** | Probability reasoning, calm-under-pressure communication |
| AI GPU Infra | Yes, but lighter | Low-Medium — domain depth dominates | CUDA-specific systems knowledge, profiling fluency |
| OS Kernels/Embedded | Rarely the focus | Low | **Real contribution history** (LFX, kernel PRs) |
| Compilers | Yes, moderate | Medium | Deep familiarity with your own compiler's internals + LLVM internals knowledge |
| Database Internals | Yes, often hard, concurrency-heavy | **High** | Specific DB internals fluency (MVCC, LSM/B-tree, query planning) |

This directly resolves the earlier open question in the CP companion document about whether
the CF Grandmaster push is worth it: **it is specifically worth it for HFT and Database
Internals, less so for the other three.** If your interest weights shift toward those two
over the cycle of NEXUS, the Grandmaster extension becomes more clearly justified. If they
shift toward kernels/compilers, that extra 600-800 hours is better spent on deeper project
work and more real open-source contributions instead.

---

# PART 3 — WRITING CODE LIKE THE BEST ENGINEERS AT THESE COMPANIES (The Slow Burn, Made Concrete)

This is not a separate course. It's a standard applied to every NEXUS project starting now,
sourced directly from how Google — whose own published engineering practices are the most
detailed and freely available in the industry — actually reviews code.

## The Real Standard (from Google's own public Engineering Practices documentation)

**The goal is not perfection — it's continuous improvement.** Google's own stated mission for
code review: *"ensure that the overall code health of the codebase improves over time."* A
change that is "not perfect, but better than the current state" should be approved. This
reframes what "write perfect code" should actually mean for you: not flawless on the first
attempt, but reviewed, improved, and left better than you found it, every time.

**What every review actually checks (apply this to your own code before anyone else sees it):**
- **Design:** Is this well-designed and appropriate for the system it lives in?
- **Functionality:** Does it behave as intended? Is that behavior actually good for whoever
  uses it (including future-you)?
- **Complexity:** Could this be simpler? Would someone else understand this in a year?
- **Tests:** Are there correct, well-designed automated tests — not just "does it compile"?
- **Naming:** Are names clear enough that a stranger doesn't need to guess?

## How to Apply This Starting Now (Concrete, Not Aspirational)

**From Y1 Q1 onward, before marking any NEXUS project component "done," run this checklist
on your own code as if you were your own reviewer.** This is the daily practice version of
the "write perfect code" goal — it is not a Y5 activity, it starts with PyLogic in week 4.

- Write the test before or immediately after the function, never as an afterthought
- Read your own diff before committing, as if seeing it cold — does it explain itself?
- Apply the "one business day" review-speed principle to yourself: don't let your own
  unreviewed code pile up for weeks; review and clean as you go
- When you read others' code (the existing Code Archaeology micro-habit), specifically
  notice naming and structure decisions — this is where the standard actually transfers
- **Resource: *Software Engineering at Google* (Winters, Manshreck, Wright) — free to read
  online at abseil.io/resources/swe-book.** This is the single best free resource for
  understanding what "good code" means at the organizational scale these companies operate
  at. Read the Code Review chapter in Y1 Q2, the Testing chapters in Y2, revisit both in Y4-Y5.
- **Resource: google.github.io/eng-practices** — Google's actual public engineering
  practices documents (the CL Author's Guide and Reviewer Guide). Short, concrete, free.
  Read once in Y1, apply continuously.

**Sanitizers and static analysis as a code-quality habit, not just a debugging tool:**
`-fsanitize=address,undefined` always on (already in NEXUS Hidden Gap #7) is itself a code
quality practice — it's how real systems teams catch the bugs that "looks correct" code
review alone misses.

---

# PART 4 — WRITING DOCUMENTATION LIKE THE BEST ENGINEERS (Design Docs and RFCs)

## Why This Is Not Optional at Any of Your Target Companies

Google, Amazon, Uber, LinkedIn, Spotify, Stripe, and effectively every serious engineering
organization researched here run on some form of design doc or RFC before significant work
begins — confirmed across dozens of named companies in this research pass. The one notable
exception found is Meta, which has historically had a weaker documentation culture (their own
engineers describe it as a deliberate trade-off enabled by long tenure and exceptional hiring
bars) — but Meta is not on your target list, so this exception doesn't apply to you.

**The standard structure, used almost universally (Google, Rust language RFCs, most named
companies above) — learn this format now, use it on every NEXUS project from Y2 onward:**
- **Summary** — one paragraph; a reader should know immediately if the rest is relevant to them
- **Motivation** — why does this need to exist? What happens if nothing changes? (the most
  important section — if this isn't compelling, nothing else matters)
- **Detailed Design** — how it actually works: APIs, data structures, system interactions
- **Alternatives Considered** — what else did you evaluate, and why did you reject it? (this
  single section is what separates a real design doc from a glorified to-do list — it
  proves you didn't just grab the first idea)
- **Trade-offs** — be explicit about what you're giving up, not just what you're gaining

## How to Apply This Starting Now (Concrete, Not Aspirational)

This is already partially present in NEXUS (Part 5 of the master document — "every project
gets a written architecture document before code"). **Upgrade that requirement to the actual
five-section format above, starting with the Heap Allocator in Y2 Q1.** This is a small
change in form with a large change in payoff: it is literally the same document format you
will be asked to write once hired, so you arrive already fluent in the genre, not learning
it for the first time under deadline pressure at a new job.

**Concrete schedule:**
- Y2 Q1 (Heap Allocator): first real design doc, all five sections, reviewed by yourself
  using the Part 3 checklist applied to writing instead of code
- Y2 Q3 (xv6 modules): second design doc — by now, writing the Alternatives Considered
  section should feel natural, not forced
- Y3 (TCP/IP, SQL Engine): design docs become the default, no longer a special event
- Y4-Y5: design docs for major components feed directly into your arxiv preprints — the
  Motivation and Alternatives Considered sections of a good design doc and a good paper
  introduction are nearly the same skill

**Resource:** "Design Docs at Google" (Malte Ubl/cramforce's widely-cited essay, free online)
— read once in Y2 Q1 before writing your first one. The Rust language's public RFC repository
(github.com/rust-lang/rfcs) — read 3-5 real accepted RFCs in Y2 to see the format applied by
a serious open-source systems project, directly relevant since you'll be reading/writing
similar documents for your own Rust work in Y5.

---

# PART 5 — SYSTEM DESIGN FOR INFRASTRUCTURE ROLES (Not Generic FAANG System Design)

A direct, repeated finding across this research: **system design rounds at your target
companies are not "design Twitter" or "design Instagram."** They are infrastructure-specific:
"design a distributed rate limiter," "design a metadata service for a cloud warehouse,"
"design GPU-accelerated computing infrastructure," "design a distributed lock service."

**This is good news for you specifically** — generic system design prep (most popular books
and courses) targets the product-design version. Your actual prep should be narrower and
deeper: *Designing Data-Intensive Applications* (Kleppmann, already in NEXUS Y3) is repeatedly
the right resource because it IS infrastructure-flavored system design, not product design.

**Practice format that matches what's actually asked:** when you finish each major NEXUS
project (xv6, TCP/IP Stack, SQL Engine, Transformer, LLVM Compiler), explicitly practice
explaining it as if it were a system design interview answer — components, trade-offs,
scalability, failure modes — out loud, timed, to yourself or a friend. This is free and uses
work you've already done; it just adds the verbal-interview-format layer on top.

---

# PART 6 — BEHAVIORAL AND COMMUNICATION READINESS (What These Specific Companies Actually Reward)

This research surfaced specific, named behavioral signals at each company — not generic
"be likeable" advice:

- **Jane Street:** "teachability" — how you respond to hints and correction, not whether you
  arrive already knowing the answer
- **Citadel:** explicit instruction to "share your thought process, discuss trade-offs, be
  clear about what you know and don't know" — narrating uncertainty honestly is rewarded,
  bluffing is not
- **NVIDIA:** "intellectual honesty" — admitting gaps immediately rather than guessing
  confidently and being wrong
- **Databricks:** "ownership" — behavioral questions specifically probe whether you drove
  outcomes yourself versus described a team's work as your own

**The common thread across all four:** narrate your reasoning honestly, including its limits,
rather than performing confidence. This is a practiced skill, not a personality trait — and
it directly connects to the Cocktail Party Test (Hidden Gap #10, already in NEXUS): if you've
practiced explaining your own projects in plain language throughout the 5 years, narrating
your thinking under interview pressure is an extension of a habit, not a new skill learned
the week before an interview.

---

# PART 7 — INTEGRATION: HOW THIS RUNS ALONGSIDE THE EXISTING PLAN

None of this requires new hours carved out separately. It is layered onto existing NEXUS
time as a standard, not a new track:

| When | What Changes (No New Hours) |
|---|---|
| Y1 Q1+ | Apply the Part 3 self-review checklist to every PyLogic commit |
| Y1 Q2+ | Practice explaining each finished project out loud, plain language (Cocktail Party Test, already in plan) |
| Y2 Q1 | Read *Software Engineering at Google* Code Review chapter + google.github.io/eng-practices; write first real 5-section design doc for the Heap Allocator |
| Y2 Q3 | Second design doc (xv6); read 3-5 real Rust RFCs for format exposure |
| Y3 onward | Design docs are now default for every major project; after finishing TCP/IP Stack and SQL Engine, practice explaining each as an infrastructure system-design answer, timed |
| Y3-Y4 (job search windows) | Run the CP companion document's 4-6 week interview-format sprint (NeetCode/Blind 75) before any application round; weight HFT/DB-internals practice higher per Part 2's honest map |
| Y4-Y5 | Design doc writing skill feeds directly into arxiv preprint writing; behavioral narration habit (Part 6) is now 4 years deep, not freshly learned |

**The one genuinely new habit this document adds:** the formal 5-section design doc
structure, replacing the looser "architecture document" already in NEXUS. Everything else
here is either already in the plan (just made explicit and sourced) or a zero-cost framing
change (practicing existing projects as interview answers).

---

# PART 8 — HONEST SUMMARY: WHAT WAS ALREADY COVERED VS. WHAT THIS ADDS

| Readiness Area | Already in NEXUS? | What This Document Adds |
|---|---|---|
| Domain technical depth | Yes — the entire 5-year plan | Confirms real interviews test exactly this depth, with sourced examples per domain |
| CP/algorithmic fluency | Yes — CP track + companion doc | Honest map of where it matters (HFT, DB) vs. doesn't (kernels) |
| Code quality habit | Partially (sanitizers, etc.) | Formal Google-sourced review checklist, applied from Y1 Q1 |
| Documentation skill | Partially (loose architecture docs) | Formal 5-section design doc standard, from Y2 Q1 |
| System design interview prep | Indirect (Kleppmann already assigned) | Explicit practice format: explain finished projects as infra system design answers |
| Behavioral/communication prep | Indirect (soft skills track, Cocktail Party Test) | Named, sourced signals per company — no guessing what's rewarded |
| Visibility strategy validation | Already core to NEXUS | Direct confirmation: Apple kernel hiring literally runs on contribution history; Anthropic hiring guidance literally says the same |

**The honest bottom line:** almost everything needed was already structurally present in
NEXUS. What was missing was specificity — knowing exactly what each company tests instead of
preparing for a generic "big tech interview," and a slightly more formal version of the
writing standard already half-present in the plan. Nothing here required adding a sixth
domain, and nothing here required new weekly hours. It required research, which is now done.

---

*This document, the CP & Extreme Algorithmic Mastery companion, and NEXUS v14.0 together
form the complete preparation: what to build, how to build it like the best do, how to talk
about it, and exactly what each of your five target domains will actually ask you to prove.*
