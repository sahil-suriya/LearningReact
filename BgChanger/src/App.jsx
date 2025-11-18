import { useState } from 'react'
import './App.css'

function App() {
  let [color, setcolor] = useState("Olive")

  let colors = ["Red", "Black", "Blue", "Green", "Cyan", "Pink", "Purple", "White", "Yellow", "Magenta"]

  return(
    <div className="h-screen w-full flex justify-center" style={{backgroundColor:color}}>

      <div className='fixed flex flex-wrap justify-center rounded-xl px-2 py-2 bottom-2'>

        {colors.map((c)=>(
          <button key={c} className='flex justify-center rounded-xl px-3 py-1 m-1'
          style={{
            backgroundColor: c.toLowerCase(), color: c.toLowerCase() === "white" || c.toLowerCase() === "yellow" ? "black" : "white"}}
          onClick={()=> setcolor(c.toLowerCase())}
          >{c}</button>
        ))}
      </div>
    </div>
  )
}

export default App

