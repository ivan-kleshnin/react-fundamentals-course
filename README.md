# Course "React Fundamentals"

The program is designed for self learning individuals or to be used as a part of learning with a mentor.
The course is practice-oriented as we believe it's the best way to learn for most students. The content is WIP.

## Introduction

### Learning Sequences

The content largely represents [part 4.2](https://raw.githubusercontent.com/ivan-kleshnin/frontend-mindmaps/master/intern.png)
from the "Frontend/React Intern" roadmap. But the point to note is that all of the following learning sequences are possible 
and acceptable:

```
TypeScript -> Markup -> React               -- proposed at the above roadmap, but rare to see in practice t.b.h
Markup -> TypeScript -> React               -- will work as well
JavaScript -> Markup -> React -> TypeScript -- more common to see, will work as well
Markup -> JavaScript -> React -> TypeScript -- /
```

We don't recommend to start with React BEFORE you're comfortable with programming basics BUT it's possible to know just
the gist of HTML & CSS and delay real practice of Markup for later:

```
Markup 0 -> JavaScript -> React -> Markup I -> TypeScript
```

There're, admittedly, other important topics like `Async Programming` or `Functional Programming` we kinda skip here
to not go insane with combinatorics. The underline is that it's possible to go through this course knowing `just JS + HTML`, `just TS + HTML`, `JS + CSS + HTML`, etc. 
No knowledge is strictly required besides `Basic Programming / JavaScript`. Please refer to the above roadmap for more details.

### Learning in Parallel

We don't recommend learning large topics in parallel. But it's possible to "Learn X" and "Improve at Y" at the same time.
And that is exactly the reason we think it's better to learn React after CSS, HTML, JS/TS – to repeat and practice all of them.
But at the end it's up to you. There're many ways to study and learning things in suboptimal way is still much better than nothing.

### Extending the Program

Home exercises are intentionally minimalistic, feel free to extend them whenever you feel like it.
You should find your own perfect pace and balance between squeezing the most out of a single task and moving forward.
Choose one or two (or none) of the following options:
- Add more features to examples (we'll be giving some tips)
- Improve the UI/UX, make the design look more complete and professional
- Use TypeScript instead of JavaScript (only if you already learned TS)
- Take Bonus tasks (we'll be giving suggestions)

Tip: do not enrich your solutions until you finished all of them (for a particular section). It's always 
better to have at least two iterations and revisit your work with fresh eyes. In other words: 

```
implement 1.1 -> implement 1.2 -> improve 1.1 -> improve 1.2
```

might work better than 

```
implement and extend 1.1 -> implement and extend 1.2
```

Good luck!

## FAQ

> Should I learn React with hooks following the [beta](https://beta.reactjs.org/) docs or should
> I stick to the [original](https://reactjs.org/) one first?

In 2022 hooks are everywhere and there's simply no justification to learn legacy React (with classes and lifecycle events) for beginners.
It's a shame and embarassment that the documentation of such a popular tool lags far behind the reality. Definitely go for the beta docs 
and refer to 3rd party sources on necessity. Preserve your time & energy for something that is not outdated.

## Table of Contents

- [Section 0: Prerequisites](https://github.com/ivan-kleshnin/react-fundamentals-course/blob/main/README.md#section-0-prerequisites)
- [Section 1: React and JSX](https://github.com/ivan-kleshnin/react-fundamentals-course/blob/main/README.md#section-1-react-and-jsx)
- [Section 2: States and Updates](https://github.com/ivan-kleshnin/react-fundamentals-course/blob/main/README.md#section-2-states-and-updates)
- Section 3: Data Flow(s)
- Section 4: Effects
- Section 5: Forms 
- Section 6: Other Topics
- Section 7: Final Practice

## Section 0: Prerequisites

1. Setup your IDE (install VSCode or WebStorm, apply necessary customizations)
2. If you're familiar with Git & Github we recommend to track your progress there. In case you don't and you want to share you work – use Dropbox/Google Drive/...
3. Fill the profile at Github. Empty profiles are the scourge.
4. Customize `.gitignore` if necessary. Add `.idea` and other relevant (for your tools) folders there.

> How to stucture my Repositories?

We propose to have one repo per Project or per Task Set. For example, "ToDo app project" would have its own dedicated repo.
A set of tasks like "Async Challenges" or "Common Algorithms" would have their own repos. A Task is something that fits
into a file and is usually represented as a single function (not dogmatically: it can be 2-3 exported functions plus a bunch of helpers in more complex case).
A Project can be very simple (micro-project) or pretty complex. 

> What's better: implement more but smaller projects or fewer but larger ones?

We believe the first option is better to start. Your portfolio should naturally look like this:

```
   z    -- a few larger projects
  yyy   -- enough mid-size projects
 xxxxx  -- quite a lot of mini-projects
0000000 -- an abundance of tasks like algorithmic challenges
```

A portfolio with just a couple of large projects and otherwise empty (if everything else signals "I'm a Beginner") looks like you've just forked
those things. You don't want to make such an impression. Even if you're not going to show your Github profile to anyone, it's 
better to learn this way. It's much easier to experiment with things in isolation, and experiments are the key to successful learning.

## Section-1: React and JSX

### Theory 

Read the following sections of the official documentation:

- https://beta.reactjs.org/learn/installation
- https://beta.reactjs.org/learn/thinking-in-react
- https://beta.reactjs.org/learn/describing-the-ui

### Questions

- What is React? Compare it to a couple of alternatives (jQuery, Vue, Angular, etc), tell similarities and differences.
- What is JSX? What problem does it solve?
- What JSX compiles to? What is Hyperscript? (hing: google "hyperscript jsx" exactly, the term has multiple meanings)
- Describe different ways to add React to a web page 

### Practice

Implement and optionally extend the following projects:

- https://react-fundamentals-conds-loops.vercel.app/task1
- https://react-fundamentals-conds-loops.vercel.app/task2

Note: use props (not state) to add a level of interactivity to the pagination. You can access the current page like:

```js
let query = (new URL(document.location)).searchParams
let p = Number(query.get("p")) || 1 // current page
```

### Bonus Practice

- Find and compare ALL ways to have a condition in JSX.
- Find and compare ALL ways to have a loop in JSX.
- Implement a `Rating` component using HTML entities `&star;` and `&starf;` (not interactive for now!)

## Section 2: States and Updates

### Theory 

Read the following sections of the official documentation:

- https://beta.reactjs.org/learn/adding-interactivity
- https://beta.reactjs.org/learn/managing-state (up to the "Reducer" and "Context" topics, keep them for later)

### Questions

- What are React hooks? Why they are necessary?
- What rules should hooks obey?
- How to represent state in React?
- Describe the API of `setState`? Is is sync or async?
- What happens after sequential `setState` calls like `setCounter(1); setCounter(2)`?
- <button type="button"> vs <button type="submit">

### Practice

Implement and optionally extend the following projects:

- https://react-fundamentals-tweet-form.vercel.app
- https://react-fundamentals-bmi-calculator.vercel.app
- https://react-fundamentals-rgb.vercel.app
- https://react-fundamentals-password-generator.vercel.app

### Bonus Questions

- What is a "state" of a system in general?
- How React `setState` batching works?
- Is is possible to write a code to be executed "exactly after" a state change? 

### Bonus Practice

- Add RGB &harr; CMY switcher to the Sliders project
- Add "Copy" button to the Password project
   
--- 

## License

[**CCA 3.0**](https://creativecommons.org/licenses/by/3.0/deed.en)

(Free to share and modify. **Attribution required**)

--- 

Please ★ this repo to support our work!

