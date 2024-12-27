---
title: SLAM. Everyone loves it, no one wants it. Why?
excerpt: It is hard and maybe people are not able to put in the right effort in the given amount of time. Is it even worth it? I don't know, let's explore.
publishDate: 'December 9, 2024'
isFeatured: true
tags:
  - SLAM
  - Rust
  - Mapping
seo:
  image:
    src: '/posts/post-1.jpg'
    alt: Graffiti of word SLAM on wall
---

![Graffiti of word SLAM on wall](/posts/post-1/main.jpg)

I'm currently doing research on various SLAM algorithms out there. I'm interested in developing a real-time SLAM/Mapping algorithms using LiDAR and Bathymetry SONAR. I want to start small so before I go knee-deep in SLAM, I want to do a shorter project in RUST. I think Google's Cartographer algorithm could be a nice start. From the example [here](https://www.youtube.com/watch?v=qNdcXUEF7KU), it's a fair bet that it will work on a portable embedded hardware.

## Real-Time Loop Closure in 2D LIDAR SLAM
by Wolfgang Hess1, Damon Kohler1, Holger Rapp1, Daniel Andor

[Link to the paper](https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/45466.pdf)

![flowchart](/posts/post-1/cartographer-1.png)

Okay so the paper itself presents some suuupper interesting concepts but was a bit hard to process at first. I'm still not sure if I got everything right but I'm gonna try to summarize in the shortest words I can above.

Step 1: LiDAR records a bunch of laser scans. On an unstable platform, we use an IMU to project the pointcloud (used interchangably with laser scan) on the horizontal plan.

Step 2: A bunch of lase scans collected in a short duration are combined together to make a submap (grid) using non-linear optimization. This submap consist of 1. grid points that are occupied, 2. grid points that are free and 3. grid points that have no observation. The optimization process also yields relative poses of the scans/trajectory of the LiDAR. This process is called local SLAM.

The "Global SLAM" consist of two steps.

Step 3: First we check to see if a pixel accurate match of the new submap is found in the exiting map. This is done using a "Depth First Search" Branch and Bound algorithm. If the submap has a match, then this new submap is added as a "loop closure" constraint.

Step 4: Nonlinear optimization aligns all the small submaps to form the big map using the relative poses computed in the first step. This step also corrects for errors in global position using loop closure.

We loop till kingdome come?! Of course there are a bunch of different logic that builds on top of this to ensure that algorithm runs in real time in the real world.

## slam_toolbox by Steve Macenski

Okay this one quite interesting as well. It works in real-time and has a capable navigation stack backing it. I have already tested it once in simulation however, that wasn't very exciting (since I couldn't really dive into the nitty-gritty yet). I have also started building a small robot with LiDAR so that I can see it perform IRL. I will make notes along the way, especially to document the process and the working of nav2/slam_toolbox (as I understand it).

The toolbox is essentially based on Karto-SLAM, which I believe is explained in the paper: [Efficient Sparse Pose Adjustment for 2D mapping](http://ais.informatik.uni-freiburg.de/publications/papers/konolige10iros.pdf). Could be wrong, things were a bit murky.

There is a strong motivation behind exploring this in detail.
  1. It could prove to be quite useful in building a USV control/survey platform, with focus of slam_toolbox on object avoidance and planning only.
  2. People at OpenNavigation have done some great work. It would be wise to build on their efforts than starting from scratch.
  3. My efforts could contribute back to community, introduce a third navigation component which I can use to build my profile, pick up paid commisions along the way and the like.

What are my objectives? 
- [ ] Document the code behind [this example](https://roboticsbackend.com/ros2-nav2-generate-a-map-with-slam_toolbox/#Start_Nav2_and_ROS2_slam_toolbox).
- [ ] Run the example on a "mini-pc" with HIL (gazebo on my laptop).
- [ ] Run the example with real-world robot for benchmarking.

My use-case is on water, this means there is no odometry coming from wheels. There is also another state coming in the global context (gps). I will use a two step approach to build for this use case.

- [ ] Add a state estimation node for navigation output in global context.
- [ ] Replace existing odometry node. Add EKF for taking in input from wheel odometry.

Assuming things are smooth sailing so far, I will add an IMU (Could be interesting to consider using data from pixhawk here).

- [ ] Transform the output of the robot from body frame to "world-horizontal" frame. I could simulate the environment conditions by driving the robot on uneven surface.
- [ ] Remove wheel odometry and consider velocity coming in from IMU to perform odometry estimate. This is where the real fun will begin.

### How does slam_toolbox (and by extention - Nav2) work?

So the best way I have found to understand anything related to ros2 is by first running the code and then printing the output of `rqt_graph`. [It](http://wiki.ros.org/rqt_graph) provides a GUI plugin for visualizing the ROS computation graph. If the topics and nodes are named meaningfully, there's a lot one can take from it. In these notes, I am following the tutorial laid out by The Robotics Backend [here](https://roboticsbackend.com/ros2-nav2-generate-a-map-with-slam_toolbox/#Start_Nav2_and_ROS2_slam_toolbox).

On a new machine, I installed ubuntu 22.04 along with the ros2 stack. I then followed the steps there verbatim. `rqt_graph` output of the simulation is available here.