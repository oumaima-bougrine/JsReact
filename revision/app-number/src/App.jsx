import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [numbers, setNumbers] = useState([])

  const addNumber = () => {
    const num = Math.floor(Math.random() * 10) + 1
    setNumbers([...numbers, num])
  }

  const shuffleNumbers = () => {
    setNumbers([...numbers].sort(() => Math.random() - 0.5))
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
      <button onClick={addNumber}>
          Ajouter un nombre
        </button>
        <button onClick={shuffleNumbers}>
          Mélanger la liste
        </button>
        <ul>
          {numbers.map((num, i) => (
            <li key={i}>{num}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
