In Sample Application,

## main-thread.js

```bash
const http = require("http")

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" })
    res.end("Home page")
  } else if (req.url === "/slow-page") {
    let j = 0
    for (let i = 0; i < 6000000000; i++) {
      j++
    }
    res.writeHead(200, { "Content-Type": "text/plain" })
    res.end(`Slow Page ${j}`)
  }
})

```

- There are two routes "/" and "/slow-page"
- To increase the performance of api calls, we use _worker_ thread

```bash
const { Worker } = require("node:worker_threads")
const worker = new Worker("./worker-thread.js")
worker.on("message", (j) => {
  res.writeHead(200, { "Content-Type": "text/plain" })
  res.end(`Slow Page ${j}`)
})

```

## worker-thread.js

```bash
const { parentPort } = require("node:worker_threads")

let j = 0
for (let i = 0; i < 6000000000; i++) {
  j++
}

parentPort.postMessage(j)

```

- with "parentPort", you can post message to main thread and
- also make execution fast
- it doesn't affect the network call of other routes

## Overview

- Worker Thread module offers similar to Thread Pool
- It's not truely _multithreading_
- But it lets you execute code in parallel outside the main thread

## UseCases

- When you have to resize images
- videos
- encrypt files
