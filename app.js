const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 5001

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/version', (req, res) => {
  res.send('1')
})

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/*splat', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})