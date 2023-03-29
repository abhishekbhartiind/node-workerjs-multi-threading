# Worker Threads Module

- The worker_threads module enables the use of threads that execute JavaScript in
  parallel
- Code executed in a worker thread runs in a separate child process, preventing it
  from blocking your main application
- The cluster module can be used to run multiple instances of Node.js that can
  distribute workloads
- worker_threads module allows running multiple application threads within a single
  Node.js instance
- When process isolation is not needed, that is, no separate instances of V8, event
  loop and memory are needed, you should use worker_threads

## System Codes

```bash
# MAC
sysctl -n hw.ncpu
# 8 (Cores)

# LINUX
nproc

# WINDOWS
echo %NUMBERS_OF_PROCESSORS%

time curl --get http://localhost:3000/blocking_url
```

Resources:

```
[To Achieve Multithreading]
https://www.npmjs.com/package/poolifier
https://www.digitalocean.com/community/tutorials/how-to-use-multithreading-in-node-js
https://www.youtube.com/watch?v=nC5UbrpbD5E
```
