---
title: Installing LLVM Compiler Infrastructure 
date: "2021-05-21T22:40:32.169Z"
template: "post"
draft: false
slug: "llvm"
category: "llvm"
tags:
  - "llvm"
description: "Installing LLVM Compiler Infrastructure"
---
This blog walks you through how to install `LLVM Compiler Infrastructure` from scratch

## Prerequisites 
- I assume you have installed git in your system 
  ```
  sudo apt install git-all  # To install git
  ```
- Running a Linux Machine (This installation tested on Ubuntu 20 LTS)

- Make sure you have sufficient storage (around 20 GB free)

- While building, your CPU might freeze; it better to close all programs before installation. 

## Clone (Check out) the llvm source from git repository
We first need to clone the repository. To save space, we do a `shallow` clone. If you want the complete source code, go check this link [Getting the source code and building LLVM](https://llvm.org/docs/GettingStarted.html#getting-the-source-code-and-building-llvm)
Doing this will also pull llvm subprojects such as Clang and others. 



### Create a directory and clone 
 Create a new directory in your home folder
  ```
  mkdir llvm
  cd llvm
  git clone --depth 1 https://github.com/llvm/llvm-project.git
```
## Configure and build LLVM and Clang
 Once you have clone successfully, you can now execute the following commands in your terminal. 
 ```
 cd llvm-project
 mkdir build
 cd build
 cmake -G Ninja ../llvm
```
> Note that -G Ninja is a build system generator; you can choose others as well. Check the official documentation [^1] if you would like to build `llvm` other than `Ninja`

If you haven't installed `cmake`, go ahead and install it
```
sudo apt install cmake
```
Once done, run. 

```
 cmake -G Ninja ../llvm

```
If you haven't installed `Ninja,` you will get errors as follows:

```
Error: CMake was unable to find a build program corresponding to "Ninja". 

CMAKE_MAKE_PROGRAM is not set. You probably need to select a different build tool. CMake 

Error: CMAKE_C_COMPILER not set, after EnableLanguage CMake Error: CMAKE_CXX_COMPILER not 

set, after EnableLanguage CMake Error: CMAKE_ASM_COMPILER not set, after EnableLanguage -- Configuring incomplete, errors occurred!
```

#### Install Ninja

```
sudo apt-get install -y ninja-build
```
Once done, run the following command to generate the `build files.`
```
 cmake -G Ninja ../llvm

```
#### Building llvm and clang

```
cmake --build  .
```
This might takes hours, depending on your machine. 

It took `1 hr (approx)` in my machine  (Intel Xeon, 32GB Ram). 

I also encountered an error in linking, error similar to the following 
```
FAILED: lib/libLTO.so.13git
```
 Do the following [^2]

 ```
 cmake -G Ninja -DCMAKE_BUILD_TYPE=Release -DLLVM_PARALLEL_LINK_JOBS=1 ../llvm
 cmake --build .
 ```
 This error happens likely that you're running out of memory [^2].



[^1]: https://llvm.org/docs/GettingStarted.html#getting-the-source-code-and-building-llvm
[^2]: https://stackoverflow.com/questions/65633304/not-able-to-build-llvm-from-its-source-code




