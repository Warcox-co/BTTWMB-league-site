import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Teams from './components/Teams'
import leagueHeader from './assets/theLeagueHeader.webp'
import './App.css'

function Home() {
  return (
    <div className="league-home">
      <main>
        {/* League content will go here */}
      </main>
    </div>
  )
}

function App() {
  return (
    <Router basename="/BTTWMB-league-site">
      <div className="app-container">
        <header className="site-header">
          <img src={leagueHeader} alt="League Header" className="league-header-image" />
        </header>
        
        <nav className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/teams">Teams</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
