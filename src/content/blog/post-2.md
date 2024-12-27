---
title: Model Predictive Control in Rust.
excerpt: Reimplementing my thesis project in Rust using ??.
publishDate: 'December 12, 2024'
isFeatured: true
tags:
  - Rust
  - Model Predictive Control
  - MPC
  - AutoNaut
seo:
  image:
    src: '/posts/post-2/mpc.gif'
    alt: MPC
---

![A person standing at the window](/posts/post-2/mpc.gif)

This is hopefully gonna be pretty straight forward (famous last words). Let's implement a MPC-based course controller for a wave-powered vehicle, AutoNaut, based on my thesis at NTNU. My motivation for doing this is basically to complete a "full project" in Rust. I'm will write down some requirements later. 

## Objectives 
The plan for now is below

- [ ] function to accept initial state of the vehicle, input forces and then output the final state based on Fossen's 6-dof model.
- [ ] function to generate course reference angles
- [ ] function to initialize vehicle model
- [ ] function to implement MPC, probably using [OpEn](https://github.com/alphaville/optimization-engine)

### Extended Objectives
- [ ] It could be a nice idea to run simulator and controller on different nodes and run this thing using some kind of communication solution. Perhaps [nng](https://docs.rs/nng/latest/nng/), [iceoryx2](https://github.com/eclipse-iceoryx/iceoryx2) or [zeromq](https://github.com/zeromq/zmq.rs)
- [ ] Run it headless on raspberry-pi

### Moonshot
- [ ] Interface a knob-potentiometer for course angle control and display output in real-time on a display.

## Goal
My end goal is to just learn some really cool things. :)