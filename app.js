const express = require('express')
const path = require('path')

const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5001

// serve static files from React build
app.use(express.static(path.join(__dirname, 'dist')))

// version endpoint (for deployment testing)
app.get('/version', (req, res) => {
  res.send('1')
})

// health check endpoint (for later exercises)
app.get('/health', (req, res) => {
  res.send('ok')
})

// fallback: send index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

const start = async () => {
  await app.listen(PORT)
  console.log(`server started on port ${PORT}`)
}

start()