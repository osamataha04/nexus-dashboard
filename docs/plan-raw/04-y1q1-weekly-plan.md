# NEXUS — YEAR 1, QUARTER 1
## April 23 – July 22, 2026 (13 Weeks)
## The Foundation Quarter: Programming Literacy + Formal Logic

---

# PART 0 — QUARTER OVERVIEW

## What This Quarter Builds
By end of Q1 you can:
- Write Python programs involving functions, recursion, data structures, OOP, and complexity analysis
- Construct and verify formal proofs using direct proof, contradiction, and induction
- Reason about sets, relations, and basic number theory
- Use a terminal, vim, and git professionally
- Solve Codeforces problems rated 800-1000 consistently
- Write basic English technical explanations that a native speaker can follow

## Why This Sequence Is Correct
MIT 6.100L and MIT 6.042J are run in parallel deliberately.
Each reinforces the other: propositional logic (6.042J Week 1) = boolean expressions in Python (6.100L Week 1).
Induction (6.042J Week 3) = recursion mental model (6.100L Week 8).
Sets (6.042J Week 5) = Python sets and dictionaries (6.100L Week 7).
This is not accidental — it is the Lead-Sync principle operating within a single quarter.

## Q1 Integration Project: PyLogic
A propositional logic toolkit built incrementally in Python across weeks 4-13.
Integrates everything learned in both courses simultaneously.
Details in Part 4.

---

# PART 1 — COMPLETE RESOURCE MAP

## Primary Resources (do these, no exceptions)

### Python Track
**MIT 6.100L: Introduction to CS and Programming Using Python**
URL: https://ocw.mit.edu/courses/6-100l-introduction-to-cs-and-programming-using-python-fall-2022/
- Watch all 26 lecture videos (each ~50 minutes)
- Complete all Finger Exercises after each lecture (online, auto-graded)
- Complete Problem Sets 1-5 (covers weeks 1-13 content)
- Read slides before watching each lecture
- Textbook companion: Guttag "Introduction to Computation and Programming Using Python" (3rd ed)
  Read the chapter corresponding to each lecture. The book has more detail than the video.
  Available as MIT Press e-book. Read it if you have confusion after the lecture.

**Helsinki MOOC: Programming in Python**
URL: https://programming-23.mooc.fi/ (Parts 1–4 in Q1)
- Part 1: Introduction (~25 exercises) — weeks 1-2
- Part 2: More basics (~20 exercises) — weeks 2-3
- Part 3: Functions and loops (~25 exercises) — weeks 3-5
- Part 4: Lists and advanced basics (~25 exercises) — weeks 5-7
Complete every single exercise. Not optional. This is where actual Python skill is built.

### Discrete Math Track
**MIT 6.1200J: Mathematics for Computer Science (Spring 2024)**
URL: https://ocw.mit.edu/courses/6-1200j-mathematics-for-computer-science-spring-2024/
- Instructors: Erik Demaine + Zachary Abel
- Watch lectures 1-13 in Q1 (full course continues into Q2)
- Textbook: Lehman, Leighton, Meyer "Mathematics for Computer Science" (MCS)
  Free PDF: https://courses.csail.mit.edu/6.042/spring18/mcs.pdf
  Read the corresponding chapter BEFORE the lecture. This is mandatory.
- Complete all Problem Sets 1-4 (with solutions available for checking)
- Complete all Warm-Up Problems for each lecture

**Classic 6.042J Video Lectures (Tom Leighton, MIT OCW 2010)**
URL: https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/
Use these as a SUPPLEMENT when Demaine's explanation is unclear.
Leighton's explanations are exceptionally clear. Some students find him better than Demaine.
Keep both open — use Leighton when stuck.

### Tools Track (Weeks 1-2 only, then done)
**MIT: The Missing Semester of Your CS Education**
URL: https://missing.csail.mit.edu/
- Lecture 1: The Shell (Jan 13, 2020)
- Lecture 2: Shell Tools and Scripting (Jan 14)
- Lecture 3: Editors (Vim) (Jan 15)
- Lecture 4: Data Wrangling (Jan 16)
- Lecture 5: Command-line Environment (Jan 21)
- Lecture 6: Version Control (Git) (Jan 22)
Lectures 7-11 are optional in Q1. Do them if you have spare time in weeks 3-4.
Each lecture is ~60 minutes + exercises. Do the exercises. They are not optional.

### CP Track
**Codeforces** (codeforces.com) — create account week 1
**CP4 Book**: Halim & Halim "Competitive Programming 4" — Book 1 only in Q1
Read Chapter 1 (Introduction) and Chapter 2.1 (Ad Hoc Problems) in Q1.
URL for free community resources: cp-algorithms.com (reference, not primary)

---

## Secondary Resources (use when you have extra time or need different explanation)

### Python — ordered by density (dense → light)
1. **Composing Programs** (composingprograms.com) — Berkeley's Python SICP adaptation
   Dense. Read Chapter 1 only in weeks 11-13 as a preview of Q3 SICP work.
   This bridges 6.100L Python to the Scheme Interpreter you will build in Q3.
2. **Think Python** (Downey, free at greenteapress.com) — alternative explanations
   Less dense than Guttag. Use when a specific concept in 6.100L is unclear.
   Read the chapter that corresponds to what you just struggled with in 6.100L.
3. **Python Tutor** (pythontutor.com) — visualize code execution step by step
   Not a reading resource. Use it to visualize what recursion and mutation are doing.
   Paste any confusing code here and step through it frame by frame.
4. **Real Python** (realpython.com) — specific topic deep dives
   Use only for specific topics: "Real Python recursion", "Real Python list comprehension"
   Do not browse randomly. Search for something specific that confused you.
5. **Automate the Boring Stuff** (automatetheboringstuff.com, free) — practical Python
   Skim only. Use for practical automation ideas for your early freelance track.

### Discrete Math — ordered by density
1. **Rosen: Discrete Mathematics and Its Applications** (7th or 8th edition)
   The standard university textbook. Denser and more comprehensive than MCS.
   Use only as a reference for topics where MCS explanation is insufficient.
   Do not read cover to cover — this is a dictionary, not a novel.
2. **Susanna Epp: Discrete Mathematics with Applications**
   Clearer proof explanations than Rosen. Use if you struggle with proofs in week 2-3.
   Specifically: her induction explanations in Chapter 5 are exceptional.
3. **3Blue1Brown YouTube** — relevant videos for Q1:
   "Essence of linear algebra" (not Q1, but watch Lesson 1 for math mindset)
   Any combinatorics or logic explainer that comes up in your 6.042J work
4. **Art of Problem Solving** (artofproblemsolving.com) — proof and competition math
   Use for supplementary proof exercises beyond MIT problem sets.

### Reading Others' Code (when and how)
**Rule: Only read others' code AFTER you have written your own attempt. Never before.**

In Q1, appropriate code reading:
- After completing each Helsinki exercise batch: search GitHub for "mooc.fi python solutions"
  Read 2-3 different solutions to the same problem you just solved.
  Question to ask: why did they choose this approach vs mine?
- After building each PyLogic component: search GitHub for "truth table python"
  Read 2-3 implementations. What data structures did they use? What's cleaner than yours?
- CPython source: NOT in Q1. Too complex. Save for Y2.
- Other people's Scheme interpreters: NOT in Q1. Save for Q3 when you are building yours.

**The reading-code loop:**
1. Build your own version
2. Read 2 others
3. Answer: what do they know that I didn't?
4. Revise your code if you find something genuinely better
5. Card the insight

---

# PART 2 — WEEK-BY-WEEK PLAN

## WEEK 1 (April 23–29): SETUP + FIRST PRINCIPLES

### Theme: Build your environment. Understand what computation is.

### Setup Checklist (Day 1, April 23 — non-negotiable)
- [ ] Create GitHub account (github.com). Username: professional, use your real name.
- [ ] Create GitHub repo: `NEXUS-Y1` — this holds all Q1 work
- [ ] Create Codeforces account (codeforces.com)
- [ ] Create AtCoder account (atcoder.jp)
- [ ] Install: Python 3.12+, VS Code, Git, Vim (all free)
- [ ] Install Obsidian (obsidian.md, free) — create NEXUS vault
- [ ] Install Anki (ankiweb.net, free)
  - Create deck: "6.100L Python"
  - Create deck: "6.042J Discrete Math"
  - Create deck: "English Vocabulary"
  - Create deck: "German"
  - Create deck: "CP Patterns"
- [ ] Download: MCS textbook PDF (mcs.pdf link above)
- [ ] Download: Guttag textbook (purchase or find PDF)
- [ ] Bookmark: MIT 6.100L OCW page, MIT 6.1200J OCW page, missing.csail.mit.edu

### Daily Schedule This Week
```
08:00–09:00  MIT Missing Semester Lec 1 (Shell) + exercises
09:00–11:00  MIT 6.042J: Read MCS Chapter 1 (Intro to Proofs) + Lec 1 video
11:00–12:00  Murphy Grammar Units 1-5 (do every exercise)
12:00–13:00  Anki setup + first 20 cards from this week's material
14:00–17:00  MIT 6.100L: Lec 1 video + finger exercises + Guttag Ch.1
              Helsinki MOOC: Part 1 exercises 1-10
17:30–19:00  CF: Create account, read problem statement structure, solve 3 problems (800 rated)
19:00–19:30  Chess: Create Lichess account, do daily puzzles
20:00–21:30  Write first GitHub README for NEXUS-Y1 repo (in English)
              German: Anki German Top 5000 deck, 10 new cards
```

### Week 1 Checklist
**MIT Missing Semester:**
- [ ] Complete Lecture 1 (The Shell): watch + do all shell exercises
- [ ] Complete Lecture 2 (Shell Tools): watch + do exercises including find, grep, history

**MIT 6.042J:**
- [ ] Read MCS Chapter 1 (pp. 1-25: intro, propositional logic, predicates)
- [ ] Watch Lecture 1 (6.1200J Spring 2024 or Leighton classic)
- [ ] Complete Warm-Up Problems for Lecture 1
- [ ] Anki: add cards for all logical connectives (∧, ∨, ¬, →, ↔) with truth table examples

**MIT 6.100L:**
- [ ] Watch Lecture 1 (Introduction) + complete finger exercises
- [ ] Watch Lecture 2 (Strings, I/O, Branching) + finger exercises
- [ ] Read Guttag Chapters 1-2
- [ ] Anki: add cards for: variable, type, branching, boolean expression

**Helsinki MOOC:**
- [ ] Part 1, exercises 1-10 (all must pass the automated checker)

**CP:**
- [ ] Create CF + AtCoder accounts
- [ ] Solve 5 CF problems rated 800 (pick from "Problemset" filtered to difficulty 800)
- [ ] Read CP4 Chapter 1.1-1.3 (introduction to CP mindset)

**English:**
- [ ] Murphy Grammar Units 1-5 (complete all exercises in each unit)

**German:**
- [ ] Anki German deck: 10 new cards/day = 70 cards seen
- [ ] Duolingo: 5min/day, German track

**Setup:**
- [ ] GitHub repo created and README committed
- [ ] Obsidian vault created with folder structure from NEXUS plan
- [ ] Anki decks created with first cards
- [ ] All software installed and working

---

## WEEK 2 (April 30 – May 6): TOOLS COMPLETE + ITERATION

### Theme: Finish tooling. Understand loops and proof methods.

### Daily Schedule This Week
```
08:00–09:30  MIT Missing Semester Lec 3 (Vim) + practice (open a file, edit, save, quit)
09:30–11:00  MIT 6.042J: Read MCS Ch.2 (Proofs) + Lec 2 video (proof methods)
11:00–12:00  Murphy Grammar Units 6-10
12:00–13:00  Anki review (20 min) + add new cards
14:00–17:00  MIT 6.100L: Lec 3 (Iteration) + Lec 4 (Loops, Guess-Check, Binary)
              Helsinki MOOC: Part 1 exercises 11-25 + Part 2 exercises 1-5
17:30–19:00  CF: 5 more problems rated 800-900
19:00–19:30  Chess: Lichess daily puzzles
20:00–21:30  Missing Semester Lec 4 (Data wrangling) + Lec 5 (CLI environment)
             German Anki 10 new cards
```

### Week 2 Checklist
**MIT Missing Semester:**
- [ ] Complete Lecture 3 (Vim): be able to navigate, insert, delete, search, quit
- [ ] Complete Lecture 4 (Data Wrangling): practice grep, sed, awk on real files
- [ ] Complete Lecture 5 (Command-line Environment): tmux, aliases, dotfiles
- [ ] Complete Lecture 6 (Git): clone, commit, branch, merge, push. Create first real commit.
- [ ] Push this week's Python exercises to GitHub using git command line (not GitHub desktop)

**MIT 6.042J:**
- [ ] Read MCS Chapter 2 (pp. 26-65: proof by contradiction, contrapositive, cases)
- [ ] Watch Lecture 2 (Proof Methods)
- [ ] Complete Problem Set 1 (logic and proofs section)
- [ ] Anki: add cards for proof techniques (direct, contradiction, contrapositive, cases)

**MIT 6.100L:**
- [ ] Watch Lecture 3 (Iteration) + finger exercises
- [ ] Watch Lecture 4 (Loops, Guess-and-Check, Binary) + finger exercises
- [ ] Read Guttag Chapters 3-4
- [ ] Begin Problem Set 1 (submit via OCW or grade yourself using solutions)

**Helsinki MOOC:**
- [ ] Part 1: complete exercises 11-25 (finish Part 1)
- [ ] Part 2: exercises 1-10

**CP:**
- [ ] 5 problems rated 800-900
- [ ] Participate in 1 CF rated round (Div.3 or Div.4 — these are beginner-friendly)
  If no round this week, solve 5 extra problems instead.

**English:**
- [ ] Murphy Grammar Units 6-12

---

## WEEK 3 (May 7–13): APPROXIMATION + MATHEMATICAL INDUCTION

### Theme: How do computers solve problems approximately? How do mathematicians prove infinitely many cases?

### Week 3 Checklist
**MIT 6.042J:**
- [ ] Read MCS Chapter 3 (pp. 66-110: induction, strong induction, well-ordering)
- [ ] Watch Lecture 3 (Induction)
- [ ] Complete all Warm-Up Problems for Lecture 3
- [ ] **Key exercise**: Prove by induction that 1+2+...+n = n(n+1)/2 — write the full proof on paper.
      Close everything. Write proof from scratch. Check against MCS solution.
- [ ] Anki: base case, inductive step, inductive hypothesis

**MIT 6.100L:**
- [ ] Watch Lecture 5 (Floats and Approximation Methods) + finger exercises
- [ ] Watch Lecture 6 (Bisection Search) + finger exercises
- [ ] Read Guttag Chapters 5-6
- [ ] Connection note in Obsidian: bisection search is a binary search algorithm —
      the same structure that appears in CP problems and later in binary search trees
- [ ] Anki: bisection, approximation, epsilon, floating point

**Helsinki MOOC:**
- [ ] Part 2: complete exercises 11-25 (finish Part 2)
- [ ] Part 3: exercises 1-10

**CP:**
- [ ] 7 problems rated 800-1000
- [ ] Focus: brute force and implementation problems
- [ ] One rated round if available

**English:**
- [ ] Murphy Grammar Units 13-19
- [ ] Read one Economist article. Look up every unfamiliar word. Add to Anki.

**PyLogic Project — Design Document (start):**
- [ ] In Obsidian, write: "What will PyLogic do?"
      Answer: evaluate propositional logic formulas, build truth tables, check equivalences
- [ ] Sketch on paper: what inputs and outputs does a truth table generator need?
      This connects 6.042J propositional logic to 6.100L functions and loops.

---

## WEEK 4 (May 14–20): FUNCTIONS + SETS + PYLOGIC BEGINS

### Theme: Functions as the unit of abstraction. Sets as the language of mathematics.

### Week 4 Checklist
**MIT 6.042J:**
- [ ] Read MCS Chapter 4 (Sets) and Chapter 5 (Sequences and Sums, first half)
- [ ] Watch Lecture 4 (Strong Induction and State Machines)
- [ ] Watch Lecture 5 (Sets, Sequences, Sums)
- [ ] Complete Problem Set 2 (induction section)
- [ ] Anki: set operations (∪, ∩, \, ×, ℙ), cardinality, subset

**MIT 6.100L:**
- [ ] Watch Lecture 7 (Decomposition, Abstraction, Functions) + finger exercises
- [ ] Watch Lecture 8 (Functions as Objects) + finger exercises
- [ ] Read Guttag Chapters 7-8
- [ ] Complete Problem Set 2

**Helsinki MOOC:**
- [ ] Part 3: exercises 11-25 (all functions-related exercises)

**CP:**
- [ ] 7 problems rated 900-1000
- [ ] One rated round

**PyLogic — Component 1: Truth Table Generator**
This week you build the first component. Use only what you have learned in 6.100L so far.
- [ ] Write a Python function: `evaluate(formula, assignment)` 
      Input: a string like "A AND B", a dict like `{"A": True, "B": False}`
      Output: True or False
      Use only: if/else, loops, string operations, functions (no OOP yet — you haven't learned it)
- [ ] Write a function: `truth_table(variables, formula)`
      Input: list of variable names, a formula string
      Output: prints all rows of the truth table
      Use: nested loops to generate all combinations of True/False
- [ ] Push to GitHub with a commit message that explains what you built
- [ ] This is the first proof-of-concept. It will be ugly. That is correct.

**English:**
- [ ] Murphy Grammar Units 20-26

---

## WEEK 5 (May 21–27): LISTS + RELATIONS

### Theme: Ordered collections. Mathematical relationships between sets.

### Week 5 Checklist
**MIT 6.042J:**
- [ ] Read MCS Chapter 9 (Relations, first 20 pages: binary relations, equivalence relations)
- [ ] Watch Lecture 6 (Relations and partial orders)
- [ ] Anki: relation, equivalence relation, partial order, total order, reflexive, symmetric, transitive

**MIT 6.100L:**
- [ ] Watch Lecture 9 (Lambda, Tuples, Lists) + finger exercises
- [ ] Watch Lecture 10 (Lists, Mutability) + finger exercises
- [ ] Read Guttag Chapter 9 (lists)
- [ ] **Critical exercise**: implement a Python list from scratch using only arrays.
      This is not in 6.100L — it is your own exercise. Use a fixed-size list internally.
      Force yourself to understand what `.append()` is doing.

**Helsinki MOOC:**
- [ ] Part 3: exercises 26-40 (finish Part 3)
- [ ] Part 4: exercises 1-10

**CP:**
- [ ] 7 problems rated 1000-1100
- [ ] Introduce prefix sums technique: read cp-algorithms.com/sequences/prefix-sums.html
- [ ] Solve 3 prefix sum problems on CF

**PyLogic — Component 2: Formula Representation**
- [ ] Represent a formula as a Python list/tuple, not a string.
      Example: `("AND", ("OR", "A", "B"), ("NOT", "C"))`
      This is a tree — you will learn formal trees in 6.042J later.
- [ ] Update `evaluate()` to work on this tree representation (use recursion placeholder —
      you will learn recursion in week 8, use iteration for now)
- [ ] Push to GitHub with explanation in commit message

**English:**
- [ ] Murphy Grammar Units 27-33
- [ ] Second Economist article: every word to Anki

---

## WEEK 6 (May 28 – June 3): TESTING/DEBUGGING + NUMBER THEORY

### Theme: How do you know your program is correct? How do numbers have structure?

### Week 6 Checklist
**MIT 6.042J:**
- [ ] Read MCS Chapter 8 (Number Theory: GCD, Primality, Modular Arithmetic)
- [ ] Watch Lecture 7 (Number Theory)
- [ ] **Key exercise**: implement Euclidean algorithm in Python from scratch.
      Write it from memory after reading. Check against MCS.
- [ ] Anki: GCD, coprime, modular arithmetic, Fermat's little theorem, prime
- [ ] Connection: mod operations in CP problems — this is why you need this now.

**MIT 6.100L:**
- [ ] Watch Lecture 11 (Aliasing, Cloning) + finger exercises
- [ ] Watch Lecture 12 (List Comprehension, Testing, Debugging) + finger exercises
- [ ] Read Guttag Chapter 10 (testing and debugging)
- [ ] Add pytest to your toolkit: write 3 test functions for your PyLogic truth table generator
- [ ] Anki: aliasing, mutation, cloning, unit test, black-box test

**Helsinki MOOC:**
- [ ] Part 4: exercises 11-25 (finish Part 4 — major milestone)
      Completing Part 4 means you have finished 95+ Helsinki exercises.
      This is a real achievement. Commit and note it in Obsidian.

**CP:**
- [ ] 7 problems rated 1000-1100, at least 2 using modular arithmetic
- [ ] One rated round

**PyLogic — Component 3: Testing**
- [ ] Write a test suite for PyLogic using pytest
      At minimum 10 test cases covering: simple AND, OR, NOT, nested formulas,
      edge cases (single variable, all True, all False)
- [ ] Fix any bugs your tests reveal
- [ ] Push to GitHub

**English:**
- [ ] Murphy Grammar Units 34-40

---

## WEEK 7 (June 4–10): DICTIONARIES + NUMBER THEORY CONTINUED

### Theme: Key-value mappings. RSA and why number theory is not just abstract.

### Week 7 Checklist
**MIT 6.042J:**
- [ ] Read MCS Chapter 8 continued (RSA encryption, modular exponentiation)
- [ ] Watch Lecture 8 (Number Theory continued)
- [ ] Complete Problem Set 3 (number theory section)
- [ ] **Exercise**: implement modular exponentiation in Python (fast power algorithm)
      This is a CP technique and a number theory result simultaneously.
- [ ] Anki: RSA structure (you do not need to understand the proof fully yet), fast exponentiation

**MIT 6.100L:**
- [ ] Watch Lecture 13 (Exceptions, Assertions) + finger exercises
- [ ] Watch Lecture 14 (Dictionaries) + finger exercises
- [ ] Read Guttag Chapter 11 (dictionaries and hashing)
- [ ] **Key exercise**: implement a hash map from scratch using a Python list of buckets.
      Understand what happens when two keys hash to the same bucket.
- [ ] Anki: hash table, hash function, collision, dictionary

**CP:**
- [ ] 7 problems rated 1000-1200
- [ ] Two-pointer technique: read cp-algorithms.com/two_pointers.html
- [ ] Solve 3 two-pointer problems

**PyLogic — Component 4: Dictionary-Based Variable Assignments**
- [ ] Refactor truth table generator to use dictionaries for variable assignments
- [ ] Add: given a formula, generate ALL possible truth table rows and store them in a dict
      Key: tuple of True/False values, Value: formula result
- [ ] This uses: dictionaries (just learned), list comprehensions, nested functions
- [ ] Push to GitHub

**English:**
- [ ] Murphy Grammar Units 41-47
- [ ] Economist article 3

---

## WEEK 8 (June 11–17): RECURSION — THE MOST IMPORTANT WEEK IN Q1

### Theme: Recursion is the most important concept in this quarter. Expect to spend more time here.

### Why Recursion Is Special
Recursion is how mathematicians think (induction) expressed as code.
If you understand recursion deeply, the Scheme Interpreter in Q3 becomes natural.
If you don't, Q3 will be painful.
This week, spend more time than usual. Cut chess to 15min if needed. Do not cut recursion.

### Week 8 Checklist
**MIT 6.042J:**
- [ ] Read MCS Chapter 5 (Graph Theory introduction: vertices, edges, paths, cycles)
- [ ] Watch Lecture 9 (Graph Theory basics)
- [ ] Anki: graph, vertex, edge, path, cycle, connected, degree

**MIT 6.100L:**
- [ ] Watch Lecture 15 (Recursion) + finger exercises — watch TWICE if needed
- [ ] Watch Lecture 16 (Recursion on Non-Numerics) + finger exercises
- [ ] Read Guttag Chapter 12 (recursion)

**Recursion Exercises (mandatory, in order):**
- [ ] Exercise 1: Implement factorial recursively — write from scratch, no looking
- [ ] Exercise 2: Fibonacci recursively — write from scratch
- [ ] Exercise 3: Sum of a list recursively — without using loops
- [ ] Exercise 4: Reverse a string recursively
- [ ] Exercise 5: Power function (x^n) recursively
- [ ] Exercise 6: Binary search recursively
For each: first write it, then use Python Tutor (pythontutor.com) to step through the call stack
- [ ] Anki: base case, recursive case, call stack, stack overflow, tail recursion

**CP:**
- [ ] 7 problems rated 1000-1200, at least 3 requiring recursion or DFS
- [ ] Read binary search template: cp-algorithms.com/binary_search.html

**PyLogic — Component 5: Recursive Evaluator (the key refactor)**
- [ ] Rewrite the formula evaluator using recursion instead of iteration
      Now that you understand recursion, your tree-based formula representation becomes elegant:
      ```python
      def evaluate(formula, assignment):
          if isinstance(formula, str):  # base case: variable
              return assignment[formula]
          op, *args = formula
          if op == "NOT":
              return not evaluate(args[0], assignment)
          elif op == "AND":
              return evaluate(args[0], assignment) and evaluate(args[1], assignment)
          elif op == "OR":
              return evaluate(args[0], assignment) or evaluate(args[1], assignment)
      ```
      This is the evaluator pattern. This is what your Scheme Interpreter will do in Q3.
      The connection is not accidental. Write this and feel it.
- [ ] All existing tests must still pass after refactor
- [ ] Push to GitHub with a commit message explaining why recursion is better here

**English:**
- [ ] Murphy Grammar Units 48-54

---

## WEEK 9 (June 18–24): OOP + GRAPH THEORY

### Theme: Objects model the world. Graphs model relationships.

### Week 9 Checklist
**MIT 6.042J:**
- [ ] Read MCS Chapter 5 continued (trees, spanning trees, bipartite graphs)
- [ ] Watch Lecture 10 (Graph Theory: trees, connectivity)
- [ ] **Exercise**: represent a graph in Python as an adjacency list (using dicts)
      Implement: is_connected(graph, u, v) — returns True if path exists from u to v
      Use BFS (you know loops and queues from 6.100L lists)
- [ ] Anki: tree, spanning tree, BFS, adjacency list, bipartite

**MIT 6.100L:**
- [ ] Watch Lecture 17 (Python Classes) + finger exercises
- [ ] Watch Lecture 18 (More Class Methods) + finger exercises
- [ ] Read Guttag Chapter 13 (OOP)
- [ ] Anki: class, instance, method, attribute, __init__, __str__, self

**CP:**
- [ ] 7 problems rated 1100-1200
- [ ] BFS/DFS introduction: read cp-algorithms.com/graph/bfs.html
- [ ] Solve 3 BFS/DFS problems on CF (graph traversal is ~20% of all CF problems)

**PyLogic — Component 6: OOP Refactor**
- [ ] Create a `Formula` class:
      ```python
      class Formula:
          def __init__(self, op, *args):
              ...
          def evaluate(self, assignment):
              ...
          def truth_table(self, variables):
              ...
          def __repr__(self):
              ...
      ```
- [ ] Refactor all previous PyLogic code into this class structure
- [ ] All tests must pass after refactor
- [ ] Push to GitHub

**English:**
- [ ] Murphy Grammar Units 55-61
- [ ] Economist article 4

---

## WEEK 10 (June 25 – July 1): INHERITANCE + GRAPH ALGORITHMS

### Theme: Code reuse through inheritance. Shortest path problems.

### Week 10 Checklist
**MIT 6.042J:**
- [ ] Read MCS Chapter 10 (Counting: multiplication rule, permutations, combinations — first 20 pages)
- [ ] Watch Lecture 11 (Counting basics)
- [ ] Complete Problem Set 4
- [ ] **Exercise**: How many distinct truth tables exist for 3 variables?
      Answer it using counting principles from this lecture. Derive it, don't look it up.
- [ ] Anki: permutation, combination, multiplication rule, sum rule

**MIT 6.100L:**
- [ ] Watch Lecture 19 (Inheritance) + finger exercises
- [ ] Watch Lecture 20 (OOP Example: Fitness Tracker) + finger exercises
- [ ] Read Guttag Chapter 14 (inheritance)
- [ ] Anki: inheritance, superclass, subclass, polymorphism, method override

**CP:**
- [ ] 7 problems rated 1100-1300
- [ ] One rated round (target: solve at least A and B in contest time)
- [ ] Begin tracking CF rating progress in Obsidian

**PyLogic — Component 7: Inheritance for Formula Types**
- [ ] Refactor Formula class using inheritance:
      ```
      Formula (abstract base)
      ├── Atom (variable: "A", "B")
      ├── Not (unary)
      └── BinaryFormula (abstract)
          ├── And
          └── Or
      ```
- [ ] This is how real language interpreters represent ASTs
- [ ] All tests must pass
- [ ] Add a `__eq__` method to check structural equality of two formulas
- [ ] Push to GitHub

**English:**
- [ ] Murphy Grammar Units 62-68

---

## WEEK 11 (July 2–8): COMPLEXITY + COMBINATORICS

### Theme: How fast is fast enough? How do we count cleverly?

### Week 11 Checklist
**MIT 6.042J:**
- [ ] Read MCS Chapter 10 continued (binomial theorem, combinatorial proofs)
- [ ] Watch Lecture 12 (Combinations and Binomial Theorem)
- [ ] Anki: binomial coefficient, Pascal's triangle, combinatorial proof

**MIT 6.100L:**
- [ ] Watch Lecture 21 (Timing, Counting Operations) + finger exercises
- [ ] Watch Lecture 22 (Big Oh and Theta) + finger exercises
- [ ] Read Guttag Chapter 15 (complexity)
- [ ] Anki: O(1), O(log n), O(n), O(n log n), O(n²), O(2^n) with concrete examples

**CP:**
- [ ] 7 problems rated 1100-1300
- [ ] Complexity analysis: before submitting any solution, estimate its time complexity
      This is a new habit. Never submit without knowing the complexity.
- [ ] Read: cp-algorithms.com/greedy/greedy_introduction.html

**PyLogic — Component 8: Equivalence Checker + Performance**
- [ ] Add method: `Formula.is_equivalent(other, variables)`
      Two formulas are logically equivalent iff they have the same truth table
      Use your truth_table method. This is O(2^n) — note this in a comment.
- [ ] Add method: `Formula.simplify()` — apply basic simplification rules:
      NOT(NOT(A)) → A
      A AND True → A
      A OR False → A
- [ ] Measure the time for is_equivalent on formulas with 2, 3, 4, 5, 6 variables.
      Plot the results. This is your first empirical complexity analysis.
- [ ] Push results and plot to GitHub

**English:**
- [ ] Murphy Grammar Units 69-75
- [ ] Economist article 5

---

## WEEK 12 (July 9–15): SORTING + INTRO PROBABILITY

### Theme: Sorting algorithms as a case study in algorithmic thinking. The mathematics of uncertainty.

### Week 12 Checklist
**MIT 6.042J:**
- [ ] Read MCS Chapter 16 (Probability: sample spaces, events, first 20 pages)
- [ ] Watch Lecture 13 (Probability introduction)
- [ ] Anki: sample space, event, probability axioms, uniform distribution
- [ ] Note in Obsidian: probability connects to your Y3 stochastic calculus track

**MIT 6.100L:**
- [ ] Watch Lecture 23 (Complexity Class Examples) + finger exercises
- [ ] Watch Lecture 24 (Sorting Algorithms) + finger exercises
- [ ] Read Guttag Chapter 16 (sorting and searching)
- [ ] **Implement from scratch** (no looking): bubble sort, selection sort, merge sort, insertion sort
      For each: write it, test it, measure its runtime on lists of size 100/1000/10000
      This is where O(n²) vs O(n log n) becomes visceral, not theoretical.

**CP:**
- [ ] 7 problems rated 1200-1300
- [ ] One rated round
- [ ] Begin Composing Programs Chapter 1 (composingprograms.com) — read Section 1.1-1.2 only
      This is the Q3 SICP preview. Just read, don't do exercises yet.

**PyLogic — Component 9: Tautology and Satisfiability**
- [ ] Add method: `Formula.is_tautology(variables)` — True if formula is True for all assignments
- [ ] Add method: `Formula.is_satisfiable(variables)` — True if formula is True for at least one assignment
- [ ] Add method: `Formula.get_satisfying_assignments(variables)` — returns all satisfying assignments
- [ ] These are the SAT problem foundations. Note this in Obsidian.
- [ ] Push to GitHub

**Reading Others' Code:**
- [ ] Search GitHub for "propositional logic python" — find 2 implementations
- [ ] Compare their approach to yours: data structures, class design, test coverage
- [ ] Write one Obsidian note: "What they did better, what I did better, what I learned"

**English:**
- [ ] Murphy Grammar Units 76-82

---

## WEEK 13 (July 16–22): INTEGRATION + REVIEW + ASSESSMENT

### Theme: This is not a rest week. It is a verification week.

### PyLogic — Final Integration
- [ ] Complete and clean all PyLogic components
- [ ] Write a comprehensive README.md in English:
      - What PyLogic does
      - The math behind it (propositional logic)
      - How to use it (with examples)
      - What you learned building it
      - Time complexity of key operations
- [ ] Write a blog post draft: "Building a Propositional Logic Toolkit in Python"
      500+ words. In English. This is your first technical writing artifact.
- [ ] Final GitHub push with all components tested and documented

**MIT 6.100L Final:**
- [ ] Watch Lecture 25 (Plotting) + any remaining lectures
- [ ] Complete Problem Set 5 if available
- [ ] Read Composing Programs Section 1.1-1.3 as bridge to Q2/Q3

**MIT 6.042J:**
- [ ] Review all Anki cards from Q1 without breaks — this is the weekly review for the quarter
- [ ] Complete any remaining problem sets
- [ ] The topics not covered in Q1 (counting continued, probability deep, graph algorithms)
      will be completed in Q2 alongside Calculus I

**CP:**
- [ ] Verify CF rating is 800+
- [ ] Count problems solved: target 50
- [ ] One rated round

**English:**
- [ ] Murphy Grammar Units 83-90
- [ ] Write the PyLogic blog post (above)

---

# PART 3 — DAILY SCHEDULE (FIXED)

```
08:00–09:00  MIT 6.042J: Read MCS chapter section + do warm-up problems
09:00–11:00  MIT 6.042J: Watch lecture + do exercises on paper
11:00–12:00  English (Murphy Grammar 2 units + Anki English deck 15min)
12:00–13:00  Anki: all decks review (20min) + add new cards from morning session
14:00–16:30  MIT 6.100L: Watch lecture + finger exercises + Guttag chapter
16:30–17:00  Helsinki MOOC: exercises (complete the batch for this week)
17:30–19:00  CP: problems + 1hr (or rated round when available)
19:00–19:30  Chess: Lichess daily puzzles (25-30min)
20:00–20:30  PyLogic project work (this is engineering — not a passive activity)
20:30–21:30  Visibility: GitHub commit, Obsidian notes, German Anki (10min)
```

University days: compress to 40hr/week. Cut: visibility, chess first.
Never cut: 6.042J + 6.100L math/code blocks.

---

# PART 4 — DEEP UNDERSTANDING ASSESSMENT

## The Core Problem
Completing lectures and exercises does not equal understanding.
Understanding means: you can use the concept in a new situation you have never seen.
These are three different things. All three are required.

## The Three-Level Test (use weekly)

**Level 1 — Recall (minimum bar)**
Close everything. Open a blank document or paper.
Write the concept from scratch: definition, example, why it matters.
If you cannot: you did not learn it. Re-read, re-watch, re-do.

**Level 2 — Transfer (real understanding)**
Apply the concept to a problem you have never seen.
Source: MIT 6.042J past exams (available on OCW). MIT 6.100L past quizzes.
If you can solve unseen problems: you understand the concept.
If you can only solve the examples from the lecture: you memorized, not understood.

**Level 3 — Teach (mastery)**
Explain the concept to someone who has never studied CS.
The Feynman rule: if you cannot explain it simply, you do not understand it deeply.
In practice: write a one-paragraph explanation in your Obsidian vault.
If you cannot write it clearly in English in 5 minutes: not mastered yet.

## Weekly Self-Assessment Ritual (Every Sunday, 1 hour)

**Step 1: Blind Coding Test (20min)**
Pick one function or algorithm from the week. Close all references.
Implement it from scratch.
Pass: code runs correctly on 3 test cases without looking at notes.
Fail: re-study and repeat the test on Tuesday.

**Step 2: Proof Reconstruction (15min)**
Pick one proof from 6.042J this week. Close the book.
Reproduce the full proof from memory on paper.
Check against MCS. Note exactly where your reasoning diverged.

**Step 3: Anki Metrics Check (5min)**
How many cards due? How many failed (again queue)?
If again-queue > 20%: you are adding cards too fast. Slow down and consolidate.
If again-queue < 5%: you can add more cards.

**Step 4: Week Summary in Obsidian (20min)**
Write four sentences:
1. What I built this week (concrete)
2. What math I can now prove (concrete)
3. What I do not understand yet (honest)
4. What I will fix next week (specific)

## Q1 Final Assessment (Week 13, July 20-22)

**Pass criteria — you are ready for Q2 if:**

Python:
- [ ] Implement a recursive binary search from scratch without looking (< 15 minutes)
- [ ] Explain the difference between aliasing and cloning with a concrete example
- [ ] Write a class with __init__, __str__, a method, and a subclass — from scratch
- [ ] Determine the time complexity of any given sorting algorithm by inspection

Discrete Math:
- [ ] Write a complete proof by induction for: 2^0 + 2^1 + ... + 2^n = 2^(n+1) - 1
- [ ] Construct the truth table for: (A → B) ↔ (¬A ∨ B)
- [ ] Apply the Euclidean algorithm to find GCD(252, 105) by hand
- [ ] BFS a 6-node graph by hand and identify all reachable nodes

PyLogic Project:
- [ ] All 9 components implemented and tested
- [ ] README explains the math and the code in English
- [ ] Pushed to GitHub with meaningful commit history

CP:
- [ ] CF rating 800+ (verified — not claimed)
- [ ] 50+ problems solved (visible on profile)

English:
- [ ] Murphy Grammar Units 1-90 completed
- [ ] One blog post draft written

**If any criterion fails:** do not move to Q2 content. Spend the first week of Q2 fixing it.
Missing the Q2 start date by one week is better than starting Q2 on an unstable foundation.

---

# PART 5 — RESOURCE DIFFICULTY TIERS (for extra time)

When you have spare hours — ranked dense to light:

## Tier 1: Dense Academic (highest return per hour, hardest)
1. MCS textbook (Lehman/Leighton/Meyer) — beyond what lectures cover
2. Guttag textbook — chapters after corresponding lecture
3. MIT 6.042J past exams and solutions (OCW)
4. MIT 6.100L past quizzes (OCW)
5. Rosen: Discrete Mathematics — specific reference chapters

## Tier 2: Intermediate (good depth, more readable)
6. Think Python (Downey) — alternative explanations
7. Composing Programs Chapter 1 (composingprograms.com)
8. Epp: Discrete Mathematics with Applications — Chapter 5 (induction)
9. Art of Problem Solving Number Theory chapter (aops.com/wiki)
10. CP-algorithms.com for specific CP topics

## Tier 3: Code Reading (read after building your own version)
11. GitHub: search "truth table python" — read 3 implementations (week 12)
12. Helsinki MOOC community solutions (after completing each exercise batch)
13. Python implementations of classic algorithms (search "merge sort python github")
14. CPython source for dict: github.com/python/cpython/blob/main/Objects/dictobject.c
    Only look at this if deeply curious about hash tables. Not required.

## Tier 4: Light / Motivational
15. Real Python (realpython.com): targeted searches only, not browsing
16. Python Tutor (pythontutor.com): paste confusing code, step through it
17. 3Blue1Brown: any video that connects to current week's math
18. Computerphile YouTube: recursion, data structures videos
19. MIT OCW lecture notes (slides): skim as previews before watching

---

# PART 6 — INTEGRATION: WHY PYLOGIC CONNECTS EVERYTHING

| PyLogic Component | 6.100L Concept Used | 6.042J Concept Used | Built In |
|---|---|---|---|
| Truth Table Generator | Loops, functions | Propositional logic, truth tables | Week 4 |
| Formula as Tree | Lists, tuples | Logical connectives, trees | Week 5 |
| Test Suite | Testing, assertions | Proof by cases | Week 6 |
| Dictionary Assignments | Dictionaries | Functions as set mappings | Week 7 |
| Recursive Evaluator | Recursion | Structural induction (implicit) | Week 8 |
| Formula Class | Classes, OOP | Graph structure (AST) | Week 9 |
| Inheritance Hierarchy | Inheritance | Type hierarchies | Week 10 |
| Equivalence + Complexity | Complexity analysis (Big-O) | Combinatorics (2^n rows) | Week 11 |
| Tautology + SAT | Full OOP system | Logic completeness concepts | Week 12 |

PyLogic is also a preview of Q3:
- It is a tokenizer + evaluator operating on a tree structure
- The Scheme Interpreter in Q3 is a tokenizer + parser + evaluator on a more complex tree
- The recursive evaluator in week 8 is the same pattern as the Scheme `eval` function
- You will feel this connection explicitly when you start SICP in Q3

---

# PART 7 — Q1 QUICK REFERENCE

**Primary URLs:**
- MIT 6.100L: ocw.mit.edu/courses/6-100l-introduction-to-cs-and-programming-using-python-fall-2022/
- MIT 6.1200J: ocw.mit.edu/courses/6-1200j-mathematics-for-computer-science-spring-2024/
- MCS Textbook: courses.csail.mit.edu/6.042/spring18/mcs.pdf
- MIT Missing Semester: missing.csail.mit.edu
- Helsinki MOOC: programming-23.mooc.fi
- Composing Programs: composingprograms.com
- Codeforces: codeforces.com
- Python Tutor: pythontutor.com
- CP Algorithms: cp-algorithms.com

**Obsidian folders to create on Day 1:**
NEXUS/Engineering/Y1-Python/
NEXUS/Engineering/Y1-PyLogic/
NEXUS/Math/Discrete-Math/
NEXUS/CP/Problems-Log.md
NEXUS/Languages/English-Words.md
NEXUS/Languages/German-Words.md
NEXUS/Journal/ (weekly reviews)
NEXUS/HiddenGaps/ (insights about what you didn't know)

**Anki decks to create on Day 1:**
6.100L Python · 6.042J Discrete Math · CP Patterns · English Vocabulary · German

**Daily minimums that cannot be skipped:**
- Anki review: 20min (morning)
- Chess: 25min (evening)
- German: 10min (anytime)
- Murphy Grammar: 2 units (morning language block)
- Commit something to GitHub (even just a note)

---

*Q1 starts April 23, 2026. First action: create GitHub account. Second action: run `echo "hello world"` in a real terminal.*
