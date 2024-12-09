import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline p-4 bg-slate-600 rounded-md">
      Hello world!
    </h1>
    <Card username="Ayush" btnText ="click me"/>
    {/* Props methodoogy */}
    <Card username="Devender" btnText="click me"/>
    

    </>
  )
}

export default App
