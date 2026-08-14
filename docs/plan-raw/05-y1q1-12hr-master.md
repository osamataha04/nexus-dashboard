# NEXUS — Year 1, Quarter 1
## The 12-Hour Master Plan: Logic, Architecture, and Execution

---

## THE DAILY 12-HOUR ENGINE (Weeks 1-13)
To survive this pacing, your day is rigidly blocked to alternate between syntax (Python), logic (HtDP/SICP), theory (Math/CP), and execution (Building/CF).

| Focus Area | Core Activity | Duration |
| :--- | :--- | :--- |
| **Python / CS61A** | MIT 6.100L (Weeks 1-4) → CS61A & SICP (Weeks 5-13) | 3.5h |
| **Logic Sandbox** | HtDP (Design Recipes, Data Structures) | 2.0h |
| **Discrete Math** | Rosen reading and problem sets | 1.5h |
| **CP Theory** | Competitive Programmer's Handbook & USACO Bronze/Silver | 1.5h |
| **CP Execution** | Codeforces grinding and live rated contests | 1.5h |
| **Tools / Projects** | Linux, Git, pytest, mypy, or dedicated project blocks | 1.5h |
| **Total** | | **11.5 - 12h** |

---

## PHASE 1: Python Foundations & The Logic Sandbox (Weeks 1–4)
**Objective:** Go from absolute zero to writing tested classes, recursion, and data structures, while rewiring your brain to think structurally via HtDP.

### Week 1: Control Flow, Logic, and The Design Recipe
* **Python (Syntax):** MIT 6.100L Lectures 1–6 (Variables, Branching, Iteration, Bisection Search) and Helsinki MOOC Parts 1–2.
* **HtDP (Structure):** Prologue through Chapter 6. Master the 6-step Design Recipe for basic data types and enumerations.
* **Math (Rosen):** Chapters 1.1–1.6 (Propositional Logic, Equivalences, Rules of Inference).
* **CP (Theory + Execution):** CPH Chapters 1–4. Codeforces Div. 4 A problems. Target: 20+ problems solved.
* **Tools:** Linux WSL2 setup, Git terminal usage, and `pdb` debugger.

### Week 2: Functions, Mutability, and Proofs
* **Python (Syntax):** MIT 6.100L Lectures 7–12 (Tuples, Lists, Aliasing, Comprehensions) and Helsinki MOOC Parts 3–4.
* **HtDP (Structure):** Arbitrarily Large Data. Mapping recursive data definitions directly to recursive function structures.
* **Math (Rosen):** Chapters 1.7–1.8, 2.1–2.3 (Direct/Contradiction Proofs, Sets, Functions).
* **CP (Theory + Execution):** USACO Bronze (Complete Search & Simulation). Target: 42+ cumulative problems.
* **Tools:** Type hints (`mypy`) and testing functions with `pytest`.

### Week 3: OOP, Exceptions, and Induction
* **Python (Syntax):** MIT 6.100L Lectures 13–18 (Exceptions, Dicts, Recursion, Python Classes) and Helsinki MOOC Parts 5–7.
* **HtDP (Structure):** Abstraction. Building higher-order functions from structurally identical recursive patterns.
* **Math (Rosen):** Chapters 2.4–2.6, 5.1–5.3 (Sequences, Matrices, Mathematical Induction, Strong Induction).
* **CP (Theory + Execution):** CPH Chapter 5 (Greedy Algorithms). Target: 64+ cumulative problems.

### Week 4: Algorithms, Complexity, and Project #1
* **Python (Syntax):** MIT 6.100L Lectures 19–26 (Inheritance, Big-O, Searching/Sorting algorithms). 
* **HtDP (Structure):** Intertwined Data (Trees and Mutual Recursion).
* **Math (Rosen):** Chapters 3.1–3.3, 6.1–6.3 (Algorithm Complexity, Big-O limits, Permutations/Combinations).
* **Projects:** Build and deploy `python-dsa` (Linked Lists, Stacks, Queues, BSTs, Hash Tables) to GitHub.
* **CP (Theory + Execution):** USACO Bronze complete. Target: 86+ cumulative problems.

---

## PHASE 2: The Multi-Paradigm Shift (Weeks 5–9)
**Objective:** Transition to deep architectural concepts. You already know Python; now you learn the ideas behind it using CS61A (Python) and SICP (Scheme).

### Week 5: Higher-Order Functions & The Environment Model
* **CS61A & SICP:** CS61A Weeks 1–2 (HOF, Environments). Watch SICP Lectures 1A, 1B, and 2A as supplements to see the exact same concepts in Scheme.
* **Projects:** Complete 61A Project 1 (Hog dice game).
* **Math (Rosen):** Chapters 4.1–4.3, 6.4–6.5 (Modular Arithmetic, Primes, GCD, Generalized Combinations).
* **CP (Theory + Execution):** CPH Chapter 7 (Dynamic Programming Intro). Target: 107+ cumulative problems.

### Week 6: Data Abstraction & Object Mechanics
* **CS61A & SICP:** CS61A Weeks 5–7 (Data Abstraction, Mutable Objects, Inheritance). Watch SICP Lecture 5A (State and Environment Model) twice.
* **Projects:** Complete 61A Project 2 (Cats typing game).
* **Math (Rosen):** Chapters 9.1, 9.3, 9.5–9.6, 10.1–10.2 (Relations, Equivalence, Graph Models).
* **CP (Theory + Execution):** USACO Silver (Graph Traversal). Target: 128+ cumulative problems.

### Week 7: Linked Lists, Efficiency, & Scheme Intro
* **CS61A & SICP:** CS61A Weeks 8–9 (Composition, Scheme Intro). Write your first Scheme expressions (`define`, `lambda`, `cond`). Watch SICP 4A (Pattern Matching).
* **Projects:** Start 61A Project 3 (Ants tower defense game) Phases 1–4.
* **Math (Rosen):** Chapters 10.3–10.5, 11.1–11.3 (Graph Connectivity, Euler Paths, Trees).
* **CP (Theory + Execution):** CPH Chapters 11–12 (Graph basics). Target: 142+ cumulative problems.

### Week 8: The Calculator Interpreter & Testing Deep Dive
* **CS61A:** Learn the Calculator Interpreter (tokenize, parse, eval, apply). This is the warmup for the final Scheme interpreter.
* **Projects:** Finish 61A Project 3 (Ants) and pass the autograder. Deep dive into `pytest` (fixtures, parametrization) and achieve 80%+ coverage on all Phase 1 code.
* **CP (Theory + Execution):** 2 live rated CF contests. Target: 158+ cumulative problems.

### Week 9: Macros & Interpreter Architecture Prep
* **CS61A:** Lectures 27–28 (Interpreters, Macros, Tail Calls).
* **Python Internals:** Advanced Python (metaclasses, `__slots__`, multiprocessing).
* **Math (Rosen):** Catch up and chapter reviews.
* **CP (Theory + Execution):** USACO Silver (Prefix Sums). Target: 170+ cumulative problems.

---

## PHASE 3: The Bare-Metal Interpreter & Polish (Weeks 10–13)
**Objective:** Build a Scheme interpreter in Python from scratch, launch your final projects, and secure a Codeforces rating of 900+.

### Week 10: TCO & Interpreter Components
* **Architecture Mapping:** Draw the 4 core interpreter components (Reader, Environment, Evaluator, Apply) on paper.
* **Advanced Concepts:** Prototype Tail-Call Optimization (TCO) using the `Thunk` sentinel and trampoline loop pattern in pure Python to prevent stack overflows.
* **Math (Rosen):** Complete summary sheets for all chapters covered.
* **CP (Theory + Execution):** Target: 180+ cumulative problems. First Div. 2 A attempt.

### Week 11: The CS61A Scheme Interpreter
* *This week is entirely dedicated to the final interpreter project.*
* **Days 71-72:** Implement `scheme_read` (tokenizer/parser) and `scheme_eval` (self-evaluating variables and lookups).
* **Days 73-74:** Implement special forms (`define`, `lambda`, `if`, `cond`).
* **Days 75-76:** Implement `scheme_apply` (the REPL loop) and integrate Tail-Call Optimization.
* **Day 77:** Pass the 61A autograder and write a comprehensive GitHub README documenting the Frame model and TCO architecture.
* **CP:** Reduced volume (15 problems) to prioritize the interpreter build.

### Week 12: CF Tracker CLI & RLHF Prep
* **Projects:** Build GitHub Project #2 (`cf-tracker`), a CLI tool integrating Codeforces API to track problem stats locally with JSON persistence.
* **Professional Output:** Practice code reviews on 5 open-source Python functions (correctness, efficiency, edge cases) to prep for RLHF applications.
* **CP (Theory + Execution):** Join 2 live rated contests. Sprint: 6 problems. Target: 210+ cumulative problems.

### Week 13: Buffer, Review, & Q2 Launch
* **Testing:** Test yourself to write 7 core algorithms (Binary Search, BFS/DFS, Merge Sort, GCD, Sieve, Union-Find) entirely from memory in under 10 minutes each.
* **GitHub Cleanup:** Ensure all repositories (`python-dsa`, `scheme-interpreter`, `cf-tracker`) are pinned, documented, and fully tested. 
* **Final Output:** Submit RLHF applications to Scale AI and Outlier. Secure CF 900+ rating.
