import express from 'express'
import database from './config/database.js'
import { createResourceRouter } from './routes/resourceRouter.js'
import { Activity } from './models/activity.js'
import { LeaderboardEntry } from './models/leaderboard.js'
import { Team } from './models/team.js'
import { User } from './models/user.js'
import { Workout } from './models/workout.js'

const app = express()
const port = 8000
const codespaceName = process.env.CODESPACE_NAME
const apiUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : `http://localhost:${port}`

app.use(express.json())

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok' })
})

app.use('/api/users', createResourceRouter(User))
app.use('/api/teams', createResourceRouter(Team))
app.use('/api/activities', createResourceRouter(Activity))
app.use('/api/leaderboard', createResourceRouter(LeaderboardEntry))
app.use('/api/workouts', createResourceRouter(Workout))

app.use((_request, response) => {
  response.status(404).json({ error: 'Route not found' })
})

app.listen(port, () => {
  console.log(`OctoFit API listening at ${apiUrl}`)
  console.log(`MongoDB state: ${database.readyState === 1 ? 'connected' : 'connecting'}`)
})
