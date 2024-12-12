---
title: SLAM. Everyone loves it, no one wants it. Why?
excerpt: It is hard and maybe people are not able to put in the right effort in the given amount of time. Is it even worth it? I don't know, let's explore.
publishDate: 'December 9, 2024'
isFeatured: true
tags:
  - SLAM
  - RUST
  - Mapping
seo:
  image:
    src: '/posts/post-1.jpg'
    alt: Graffiti of word SLAM on wall
---

![Graffiti of word SLAM on wall](/posts/post-1/main.jpg)

I'm currently doing research on various SLAM algorithms out there. I'm interested in developing a real-time SLAM/Mapping algorithms using LiDAR and Bathymetry SONAR. I want to start small so before I go knee-deep in SLAM, I want to do a shorter project in RUST. I think Google's Cartographer algorithm could be a nice start. From the example ![here](https://www.youtube.com/watch?v=qNdcXUEF7KU), it's a fair bet that it will work on a portable embedded hardware.

## Real-Time Loop Closure in 2D LIDAR SLAM
by Wolfgang Hess1, Damon Kohler1, Holger Rapp1, Daniel Andor

![Link to the paper](https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/45466.pdf)

![flowchart](/posts/post-1/cartographer-1.png)

Okay so the paper itself presents some suuupper interesting concepts but was a bit hard to process at first. I'm still not sure if I got everything right but I'm gonna try to summarize in the shortest words I can above.

Step 1: LiDAR records a bunch of laser scans. On an unstable platform, we use an IMU to project the pointcloud (used interchangably with laser scan) on the horizontal plan.

Step 2: A bunch of lase scans collected in a short duration are combined together to make a submap (grid) using non-linear optimization. This submap consist of 1. grid points that are occupied, 2. grid points that are free and 3. grid points that have no observation. The optimization process also yields relative poses of the scans/trajectory of the LiDAR. This process is called local SLAM.

The "Global SLAM" consist of two steps.

Step 3: First we check to see if a pixel accurate match of the new submap is found in the exiting map. This is done using a "Depth First Search" Branch and Bound algorithm. If the submap has a match, then this new submap is added as a "loop closure" constraint.

Step 4: Nonlinear optimization aligns all the small submaps to form the big map using the relative poses computed in the first step. This step also corrects for errors in global position using loop closure.

We loop till kingdome come? Of course there are a bunch of different logic that builds on top of this to ensure that algorithm runs in real time in the real world.