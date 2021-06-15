---
title: Installing & Building RISC-V Toolchain 
date: "2021-05-21T22:40:32.169Z"
template: "post"
draft: false
slug: "riscv"
category: "🤖 RISC-V"
tags:
  - "RISC-V"
description: "Installing & Building RISC-V Toolchain"
---
This blog walks you through how to install and build Installing & Building RISC-V Toolchain from scratch [^1]

### Prerequisites 
- I assume you have installed git in your system 
  ```
  sudo apt install git-all  # To install git
  ```
- Running a Linux Machine (This installation tested on Ubuntu 20 LTS)

- Make sure you have sufficient storage (around 30 GB free)
- You also need to install few dependencies 

```
sudo apt-get install autoconf automake autotools-dev curl python3 libmpc-dev libmpfr-dev libgmp-dev gawk build-essential bison flex texinfo gperf libtool patchutils bc zlib1g-dev libexpat-dev
```

### Create a directory and clone 
 Create a new directory in your home folder
  ```
  mkdir risc-v
  cd risc-v
  git clone https://github.com/riscv/riscv-gnu-toolchain
```
### Create a directory in `opt` 
 
 ```
mkdir /opt/riscv
```
### Configure and make 

```
./configure --prefix=/opt/riscv
make linux
```

This might take several hours depending on your machine configuration.

Your tool will be available on `/opt/riscv/bin`

### Add `/opt/riscv/bin` to `PATH`

Open the `~/.bashrc` file 

```
sudo gedit ~/.bashrc 
```
Add below the almost at the end of the file and save it. 
```
.....

export PATH="$PATH:/opt/riscv/bin"
.....
```
Now your RISC-V tools will be available without specifying the path. 


[^1]: https://github.com/riscv/riscv-gnu-toolchain





