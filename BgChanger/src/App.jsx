import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  const colors = [
    "Red", "Green", "Blue", "Pink", 
    "Yellow", "Cyan", "Black", 
    "Orange", "White", "Gold"
  ]

  return (
    <div
      className="h-screen w-full flex justify-center"
      style={{ backgroundColor: color }}
    >

      <div
        className="fixed flex flex-wrap justify-center bottom-12 rounded-xl px-2 py-2"
        style={{ backgroundColor: "white" }}
      >
        {colors.map((c) => (
          <button
            key={c}
            className="flex justify-center rounded-xl px-3 py-1 m-1"
            style={{
              backgroundColor: c.toLowerCase(),
              color: c.toLowerCase() === "white" || c.toLowerCase() === "yellow" ? "black" : "white"
            }}
            onClick={() => setColor(c.toLowerCase())}
          >
            {c}
          </button>
        ))}
      </div>

    </div>
  )
}

export default App

