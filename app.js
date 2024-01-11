const express = require('express')
const app = express()
const port = 3000

// me/copilot adding express version
const expressVersion = require('express/package.json').version;

app.get('/', (req, res) => {
  res.send(`Hello World! Express version: ${expressVersion}`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})