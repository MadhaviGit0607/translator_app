// my-backend/server.js
import express, { json } from 'express'
import cors from 'cors'
const app = express()
const port = 5000

app.use(cors())
app.use(json())

app.get('/api/home', (_req, res) => {
  res.json({message: 'Hello from the backend!'})
})
app.get('/api/movies', (_req, res) => {
  res.json({message: 'Hello from the backend!'})
})
app.get('/api/tvshows', (_req, res) => {
  res.json({message: 'Hello from the backend!'})
})
app.get('/api/sports', (_req, res) => {
  res.json({message: 'Hello from the backend!'})
})
app.get('/api/live', (_req, res) => {
  res.json({message: 'Hello from the backend!'})
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
