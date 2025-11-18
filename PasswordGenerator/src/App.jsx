import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [password, setPassword ] = useState("")
  const [Length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const passref = useRef(null)


  const passwordGenertor = useCallback (()=>{
    let pass = ""
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    if(numberAllowed) str += "1234567890"
    if(charAllowed) str += "~`!@#$%^&*()_+=-{}[]:;,./?|"
    for (let i = 0; i < Length; i++) {
      let char = Math.floor(Math.random()* str.length + 1)
      pass += str.charAt(char) 
    }

    setPassword(pass)
  },
[Length , numberAllowed, charAllowed,setPassword])

const copy = useCallback(()=>{
  passref.current?.select()
  window.navigator.clipboard.writeText(password)
},[password])

useEffect(()=>{passwordGenertor()}, [Length, charAllowed, numberAllowed, passwordGenertor])

  return (
    <>
   <div className='w-full max-w-md mx-auto bg-gray-900 text-orange-500 text-center rounded-xl px-4 py-4 my-8'>
    <h1 className='text-4xl text-white mb-4'>Password Genertor</h1>
    <div className='flex shadow overflow-hidden rounded-xl bg-white text-black mb-4'>
      <input type="text"
      value={password}
      placeholder='Password' 
      className='w-full px-2 py-1 outline-none'
      readOnly
      ref= {passref}
      />
      <button className='outline-none bg-blue-800 hover:bg-blue-900 px-4 py-1 text-white ' onClick={copy}>Copy</button>
    </div>
    <div className='flex gap-x-5 text-sm'>
      <div className='flex gap-x-1 items-center'>
        <input type="range" className='cursor-pointer'
        min={4} max={20}
        value={Length}
        onChange={(e)=>{setLength(e.target.value)}}
        />
        <label>Length: {Length}</label>
      </div>
      <div className='flex gap-x-1 items-center'>
        <input type="Checkbox" className='cursor-pointer'
        defaultChecked = {numberAllowed}
        id = "numberid"
        onChange={()=>{setnumberAllowed((prev) => !prev)}}
        />
        <label>Numbers</label>
      </div>
      <div className='flex gap-x-1 items-center'>
        <input type="Checkbox" className='cursor-pointer'
        defaultChecked = {charAllowed}
        id = "charid"
        onChange={()=>{setcharAllowed((prev) => !prev)}}
        />
        <label>Characters</label>
      </div>
    </div>
   </div>
    </>
  )
} 

export default App
