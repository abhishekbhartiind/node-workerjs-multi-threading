const http = require("http")
const { Worker } = require("node:worker_threads")

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" })
    res.end("Home page")
  } else if (req.url === "/slow-page") {
    //Web Worker
    const worker = new Worker("./worker-thread.js")
    //On recieving message
    worker.on("message", (j) => {
      res.writeHead(200, { "Content-Type": "text/plain" })
      res.end(`Slow Page ${j}`)
    })
    //On error
    worker.on("error", (error) => {
      res.writeHead(404, { "Content-Type": "text/plain" })
      res.end(`An error occured ${error}`)
    })
  }
})

server.listen(8000, () => console.log("Server is running on port 8000"))
