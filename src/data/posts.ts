import type { Post } from '../types'

export const posts: Post[] = [
  {
    id: 'two-majors-one-engineer',
    title: 'How I became an engineer with two majors and a design background',
    date: '2025.03.12',
    content: "I didn't choose engineering. I drifted into it.\n\nThe design degree came first. I learned how to look at things — how a button's weight changes when its corner radius shifts by one pixel, why a typeface can feel like a person. It was a kind of training I didn't realize was training.\n\nThen I doubled in computer science. Mostly out of curiosity. The first time I wrote a function that worked, I felt the same thing I felt when a layout finally clicked. The artifact was different. The discipline was the same.\n\nWhat I tell people now: I don't have two careers stitched together. I have one practice that runs through both. Design is engineering with imprecise inputs. Engineering is design with strict ones.\n\nThe bridge was never academic. It was the small projects where the code had to feel right, not just work.",
  },
  {
    id: 'robots-and-frontend-perf',
    title: 'What building a robot control platform taught me about frontend performance',
    date: '2025.01.22',
    content: "When you're rendering a live video feed from a robot 8,000 km away, the frame rate of your UI is not the frame rate the operator sees. The operator sees a chain.\n\nEvery link in that chain — encoding, network, decoding, paint, GPU compositing — adds latency you can't undo. The frontend's job isn't to be fast in isolation. It's to be honest about where the slow parts are.\n\nWe rewrote the streaming pipeline three times. Each time, the lesson was the same: make the latency visible, not invisible. A 250ms indicator is more useful than a frame that looks live but isn't.\n\nFrontend performance, when the stakes are real, isn't about benchmarks. It's about trust.",
  },
  {
    id: 'korean-engineer-london',
    title: 'Job hunting in London as a Korean engineer',
    date: '2024.11.05',
    content: "I won't pretend I have answers. I'll write down what I've learned so far.\n\nFirst: the bar is not the same. The companies that say \"we hire globally\" often mean \"we hire globally in theory.\" You have to find the ones that mean it.\n\nSecond: my work history reads as a list of Korean company names that nobody outside Korea recognizes. I had to learn to lead with what I actually built, not who I built it for.\n\nThird: writing in English is part of the job, not a separate skill. Slack messages, PR descriptions, design docs — every one of them is an interview in slow motion.\n\nI'll write a part two when I'm on the other side of this.",
  },
  {
    id: 'works-vs-feels-right',
    title: '"it works" vs "it feels right"',
    date: '2024.08.18',
    content: "There is a moment, late in any project, where the feature works. The tests pass. The PM signs off. You could ship.\n\nAnd then there is a different moment, often a week later, where it feels right. The button responds the way a button should. The transition lands instead of stutters. The error state stops feeling like a punishment.\n\nMost engineers I admire live in the second moment. Most teams I've been on don't budget for it.\n\nI don't have a clean argument for why the second moment matters. I just know that the products I trust were made by people who didn't stop at the first one.",
  },
]