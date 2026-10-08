import { useState } from 'react'
import AboutMe from './components/aboutme'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AboutMe />
  )
}

export default App
