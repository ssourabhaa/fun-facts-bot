import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState("Click the Button to get a Fun Fact!")
  const [loading, setLoading] = useState(false)

  const getFunFact = async () => {
    setLoading(true)
    try {
      const response = await fetch("http://localhost:8000/api/fact")
      const data = await response.json()
      setfact(data.fact)
    } catch (error) {
      console.error('Error fetching fun fact:', error)
      setfact('Failed to fetch a fun fact. Please try again.')
    } finally {
      setLoading(false)
    }
}

return (
    <div className="App">
      <h1>Fun Facts Generator</h1>
      <p>{count}</p>
      <button onClick={getFunFact} disabled={loading}>
        {loading ? 'Loading...' : 'Get Fun Fact'}
      </button>
    </div>
  )
}

export default App
