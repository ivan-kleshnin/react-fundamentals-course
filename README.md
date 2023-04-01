# Course "React Fundamentals"

The program is designed for self learning individuals or to be used as a part of learning with a mentor.
The course is practice-oriented as we believe it's the best way to learn for most students. The content is WIP 🚧

The program is split on sections which include the following parts:

- **📜 Theory**
- **🧠 Questions**
- **🔨 Practice**
- **🤔 Bonus Questions**
- **🛠 Bonus Practice**

You're expected to move through this in order. Start from **Theory** giving it a couple of reads.
Self-check yourself with **Questions**, then implement projects to **Practice**.
Move back to Theory as necessary. Compare your solutions with ours at the end of each
section.

**Bonus** parts are typically more challenging and therefore optional. You can skip them first
and return back on the second iteration, for example.

## Learning Advices

### Roadmap

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

We don't recommend to learn more than one big topic in parallel. But it's possible and even encouraged to "Learn X" and "Improve at Y" at the same time.
And that is exactly the reason we think it's better to learn React after CSS, HTML, JS/TS – to repeat and practice what you've learned.
But, at the end, it's up to you. There're many ways to study and learning things in suboptimal way is still much better than nothing.

Within a single learning sequence, however, we recommend and encourage you to use as many sources
as possible. Use Google, Stackoveflow, watch courses, YouTube, read books, listen podcasts. 
The links to theory we provide are just the tip of the information iceberg you have to (metaphorically) consume. 
We'll be expanding our references but it's clear that people come to this course with different backgrounds, 
preferences, etc. so it's impossible to make a single "optimal list". 

You'll help yourself tremendously if you read/watch double the amount of theory we propose. Each
author and resource provides a slightly different angle of view which is helpful to solidify your understanding
and, eventually, your knowledge.

### Extending the Program

Home exercises are intentionally minimalistic, feel free to extend them whenever you feel like it.
You should find your own perfect pace and balance between squeezing the most out of a single task and moving forward.
Choose one or two (or none) of the following options:
- Add more features to examples (we'll be giving some tips)
- Improve the UI/UX, make the design look more complete and professional
- Use TypeScript instead of JavaScript (only if you already learned TS)
- Take Bonus challenges (we'll be giving suggestions)

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

> What is considered a project solution? 

You should be able to implement a solution independently. You can obviously refer to documentation for something you keep forgetting,
or to revisit unclear concepts. But you should NOT copy-paste an existing solution and imagine you'd solve it similarly yourself. You'd not.

> Is it ok to ever copy-paste code then?

When you learn, it's more efficient to write the code yourself. It's ok to copy-paste (larger chunks of) code when:
- you're working on something in hurry 
- you're an advanced engineer and your goal is to refactor the reference
- you're going to reverse engineer a complex solution

There is indeed a place for copy-paste but, at the end:
- you will likely remember what you have written,
- you will likely forget what you have copied.

> What above solutions to the tasks/projects?

You will easily find them, just [scroll up](#course-react-fundamentals). Looking at any existing
solution *before* you tried your best is discouraged for the same reasons. The documentation and other 
theory sources will give you enough examples and references to solve a practical part in the same vein. 
The only way to make it difficult is to skip the supposedly "boring" theory and immediately practice, 
copy-pasting everything you've failed to come up to yourself. Please don't do that: you'll just spoil your 
learning experience and gain nothing. You should start with Practice over Theory only if you're
already familiar with React docs (and we mean those modern docs). 

> Other tips?

When you're at it, beware that the official documentation is twofold. E.g. https://beta.reactjs.org/learn/adding-interactivity#responding-to-events presents an initial overview while https://beta.reactjs.org/learn/responding-to-events goes into more details on the same topic. We've seen people completely
omitting the latter page as both things are named identically and the title is updated in the right sidebar, when you scroll. It's a UX gotcha that should better be fixed.

If you're going to go through this course using TypeScript here's a good resource: https://react-typescript-cheatsheet.netlify.app

## Table of Contents

- [Section 0: Prerequisites](#section-0-prerequisites)
- [Section 1: React and JSX](#section-1-react-and-jsx)
- [Section 2: States, Events, Updates](#section-2-states-events-updates)
- [Section 3: Data Flow(s)](#section-3-data-flows)
- [Section 4: Effects](#section-4-effects)
- Section 5: Forms (W.I.P)
- [Section 6: Other Topics](#section-6-custom-hooks-practice)
- [Section 7: Final Practice](#section-7-final-practice)

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
  yyy   -- several mid-size projects
 xxxxx  -- quite a lot of mini-projects
0000000 -- an abundance of tasks like algorithmic challenges
```

A portfolio with just a couple of large projects and otherwise empty (if everything else signals "I'm a Beginner") looks like you've just forked
those things. You don't want to make such an impression. Even if you're not going to show your Github profile to anyone, it's 
better to learn this way. It's much easier to experiment with things in isolation, and experiments are the key to successful learning.

## Section 1: React and JSX

### 📜 Theory 

Read the following sections of the official documentation:

- https://beta.reactjs.org/learn/installation
- https://beta.reactjs.org/learn/thinking-in-react
- https://beta.reactjs.org/learn/describing-the-ui

### 🧠 Questions

- What is React? Why some people call it a "framework" and other – a "library"?
- What is JSX? What problem does it solve?
- Describe different ways to add React to a web page.
- New VDOM tree, returned from a root component, is compared to... what?

### 🔨 Practice

Implement and optionally extend the following projects:

- [1.1 Vertical Menu UI](https://react-fundamentals-conds-loops.vercel.app/task1)
- [1.2 Pagination UI](https://react-fundamentals-conds-loops.vercel.app/task2)

Note: use props (not state) to add interactivity to both projects (full page reset is expected here). You can access the current page like:

```js
let query = (new URL(document.location)).searchParams
let p = Number(query.get("p")) || 1 // current page
```

### 🤔 Bonus Questions

- What is Hyperscript? (hint: google "hyperscript jsx" exactly, the term has multiple meanings)
- Compare React to a couple of popular alternatives (jQuery, Vue, Angular, etc), tell similarities and differences.
- Are there any successors to React? Is it a good idea to use them in production?

### 🛠 Bonus Practice

- Find and compare ALL ways to have a condition in JSX.
- Find and compare ALL ways to have a loop in JSX.
- Implement a `Rating` component using HTML entities `&star;` and `&starf;` (not interactive for now!).

## Section 2: States, Events, Updates

### 📜 Theory 

Read the following sections of the official documentation:

- https://beta.reactjs.org/learn/adding-interactivity
- https://beta.reactjs.org/learn/managing-state (up to the "Reducer" and "Context" topics, keep them for later)

### 🧠 Questions

- What are React hooks? Why they are necessary?
- What rules should hooks obey?
- How to represent state in React?
- Describe the API of `setState`? Is is sync or async?
- What happens after sequential `setState` calls like `setCounter(1); setCounter(2)`?
- Describe the order of renders of the following hierarchy:

```
<Component1>
  <Component2>
    <Component3/>
  </Component2>
</Component1>

Order the following:
- Component3 renders?
- Component1 renders?
- Component2 renders?
```

### 🔨 Practice

Implement and optionally extend the following projects:

- [2.1 Tweet Form](https://react-fundamentals-tweet-form.vercel.app)
- [2.2 BMI Calculator](https://react-fundamentals-bmi-calculator.vercel.app)
- [2.3 RGB Sliders](https://react-fundamentals-rgb.vercel.app)
- [2.4 Password Generator](https://react-fundamentals-password-generator.vercel.app)

### 🤔 Bonus Questions

- Difference between `<button type="button">` and `<button type="submit">`, regarding React?
- What is a "state of a system" in general?
- Compare alternative implementations of the Sliders project: with 1 and 3 `useState` (object of numbers vs separate).
- Is it possible to write a code to be executed "exactly after" a state change? 

### 🛠 Bonus Practice

- Implement two versions of 2.3: with multiple `useState` and with a single object-based `useState`.
- Extend 2.4 to support password copying (to the clipboard).
- Extend 2.3 to support CMY color model.
   
## Section 3: Data Flow(s)

### 📜 Theory 

Read the following sections of the official documentation:

- https://beta.reactjs.org/learn/managing-state (topics "Reducer" and "Context" you omitted previously)
   
### 🧠 Questions

- Compare `useState` and `useReducer`: which one is lower level, when to use which?
- What is React Context? What problem does it solve?
- Explain the limitations of `Context`. Hint: what happens with listeners when you update just a part of the context state?

### 🔨 Practice

- [3.1 Todo App](https://react-fundamentals-todo-app.vercel.app) (solve independently from docs, if you haven't yet)
- [3.2 Food Diary](https://react-fundamentals-diary-app.vercel.app)
- [3.3 Ecart App](https://react-fundamentals-ecart-app.vercel.app)
   
### 🤔 Bonus Questions

- Google a topic of "State Management" in React. What problems do they solve?
- What is "Unidirectional Data Flow" in React? Does React support Bidirectional and/or other flows?
- Do you need an extra library like Redux if you have `useState / useReducer`? Try to make your own judgement.
- Don't miss React-Query and uRQL as alternatives to classic state management solutions.

### 🛠 Bonus Practice

- Implement three versions of 3.1: with a single `useState`, multiple `useState`, single `useReducer` for the same case (do all implementations you can imagine).
- Experiment with [Immer](https://github.com/immerjs/immer) library (state management helper).
- Experiment with any dedicated state management library e.g. [Zustand](https://github.com/pmndrs/zustand).
   
## Section 4: Effects
   
Read the following sections of the official documentation:

- https://beta.reactjs.org/learn/escape-hatches

### 🧠 Questions

- Explain the difference between `useState` and `useRef` hooks.
- Can the code like `useState(async () => ..., [])` work and why? If not – how to fix it?
- Does `useEffect` run before or after React updates the DOM?
- Describe the order of events of the following hierarchy:

```
<Component1>
  <Component2/>
</Component1>

Order the following:
- Component1 render?
- Component2 effect?
- Component1 render?
- Component2 effect?
```

### 🔨 Practice

- [4.1 Digital Timer](https://react-fundamentals-digital-timer.vercel.app)
- [4.2 Github Profile 1](https://react-fundamentals-github-profile1.vercel.app) (load Your profile)
- [4.3 Github Profile 2](https://react-fundamentals-github-profile2.vercel.app) (fetch 2 chunks of data in parallel)

### 🤔 Bonus Questions

- Which React hooks you'd use to force-focus an input?
- Which React libraries dedicated to data-fetching you know?
- How to update the title (`<title>`) of the page?
- Is it possible to access the "previous" value of a state? If not – how to make it possible?

### 🛠 Bonus Practice

- Extend 4.2 to support search – to display any public github profile.
- Implement two versions of 4.3: with 2 hooks and with 1 hook + `Promise.all`
- Find a public weather API and implement an app to display current weather in your location.
- Find a public (crypto)currency rate API an implement an app that would display it (with "realtime" updates).

## Section 5: Forms 
   
WIP   

## Section 6: Custom Hooks Practice
   
Ordered by complexity increase (approximately):

- Make a replica of [`usePrevious`](https://usehooks.com/usePrevious/).
- Make a replica of [`useOnClickOutside`](https://usehooks.com/useOnClickOutside/).
- Make a replica of [`useDebounce`](https://usehooks.com/useDebounce/).
- Make a replica of [`useLocalStorage`](https://usehooks.com/useLocalStorage/). 
- Make a replica of [`useWhyDidYouUpdate`](https://usehooks.com/useWhyDidYouUpdate/).
- Make a replica of [`useHistory`](https://usehooks.com/useHistory/).
- Make a replica of [`useAsync`](https://usehooks.com/useAsync/).

## Section 7: Final Practice
   
- Implement a [Credit Card Validator](https://medium.com/hootsuite-engineering/a-comprehensive-guide-to-validating-and-formatting-credit-cards-b9fa63ec7863).
- Implement a [Markdown-to-HTML converter](https://markdowntohtml.com/).
- Implement a [Weather Forecast UI](https://reactjsexample.com/web-app-to-see-the-weather-forecast-in-your-city-connect-with-weatherapi/).
- Implement a [Wordle Game](https://www.perkins.org/resource/wordle-5-letter-guessing-game/).
- Implement an [Analog clock](https://vishnuramana.github.io/analogclock/) (use CSS transitions for smoother movements).
- Implement an [MP3 player](https://t-musicplayer.netlify.app/).

In each case we suggest to start with the bare minimum of the functionality. You should be able to finish
the project in few days, before you lose energy and desire to continue. Start from a Low bar
and return to add more features, better UI, type-safety, etc. later, on another iteration.

--- 

## License

[**CCA 3.0**](https://creativecommons.org/licenses/by/3.0/deed.en)

(Free to share and modify. **Attribution required**)
(^ concerns only the original text. You can publish your own solutions in your portfolio without attributions)

--- 

Please ★ this repo to support our work!

