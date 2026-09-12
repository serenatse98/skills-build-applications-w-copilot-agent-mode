import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <NavLink className="brand" to="/"><span className="brand-mark">O</span>OctoFit Tracker</NavLink>
        <nav aria-label="Primary navigation" className="nav-links">
          <NavLink to="/activities">Activities</NavLink>
          <NavLink to="/leaderboard">Leaderboard</NavLink>
          <NavLink to="/teams">Teams</NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/workouts">Workouts</NavLink>
        </nav>
      </header>
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

function Home() {
  return (
    <section className="home-view">
      <p className="eyebrow">Performance, together</p>
      <h1>Make every move count.</h1>
      <p className="home-copy">Track progress, build momentum, and see how your team is moving today.</p>
      <NavLink className="primary-action" to="/activities">View activities</NavLink>
    </section>
  )
}

export default App
