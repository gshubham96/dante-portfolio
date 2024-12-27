---
title: Setting up a pomodoro timer in Rust.
excerpt: I always wanted a hands-on timer to physically remind my body to switch between "work-time" and "play-time".
publishDate: 'December 14, 2024'
isFeatured: true
tags:
  - rust
  - pomodoro
seo:
  image:
    src: '/posts/post-5/pomodoro.webp'
    alt: pomodoro visualized
---

![pomodoro visualized](/posts/post-5/pomodoro.webp)

# Intro 

[The Pomodoro Technique](https://www.pomodorotechnique.com/) is a well established technique for time and productivity management. I have found that I work well with this so I wanted to build myself a physical device to help me transition between the focused work mode and the relaxed break mode. Of course, the big crazy idea that I have is a portable device with different buttons for inputs and visual output and make it super fancy, perhaps something like below.

![portable](/posts/post-5/timer.png)

Yeah, I tend to overcomplicate things. For now, I'll start with the simplest possible execution for it. I want a cli program which runs like...

```
pomo <time-arg-in-minutes>
```
with default arg being 25. I'll keep all my code in this [repo](https://github.com/gshubham96/pomo).

# First Implementation

A simple program in Rust to take time as an args and play a random music file from a list.

![first implementation on cmd line](/posts/post-5/pomo_v0.1.png)

I have aleady been using it for a few days now and it is, let's say functional. There are a number of things I can still do to make it better. They are
1. "Start as an application": This means that instead of a one-off command line, it might be better to have a program that waits for the next input. Save from writing 'pomo' everytime.

2. The "GUI" is very functional, which is to say it is very ugly. True that I don't want it to be distracting, but I'd like it to be pretty still.