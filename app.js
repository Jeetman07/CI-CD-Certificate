const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 5001

// serve React build
app.use(express.static(path.join(__dirname, 'dist')))

// version endpoint
app.get('/version', (req, res) => {
  res.send('1')
})

// ❌ intentionally broken health check
app.get('/health', (req, res) => {
  // eslint-disable-next-line no-constant-condition
  if (true) throw new Error('error...')
  res.send('ok')
})

// fallback for React routing
app.get('/*splat', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})