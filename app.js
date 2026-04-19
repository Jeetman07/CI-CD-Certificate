const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 5001

// Serve React build
app.use(express.static(path.join(__dirname, 'dist')))

// Version endpoint (for testing deployment)
app.get('/version', (req, res) => {
  res.send('1')
})

// ✅ Health check endpoint
app.get('/health', (req, res) => {
  res.send('ok')
})

// Fallback route for React (MUST be last)
app.get('/*splat', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

// Start server
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})