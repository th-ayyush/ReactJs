import { useState ,useCallback ,useEffect , useRef} from 'react'

function App() {
  const [length ,setLength] = useState(8)
  const [noAllowed, setNumberAllowed]= useState(false);
  const[charAllowed,setCharAllowed]=useState(false);
  const[password ,setPassword]=useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator =useCallback(()=>{
    let pass =""
    let str ="ABCDEFGHIJabcdefghijkl"
    if(noAllowed) str += "0123456789"
    if(charAllowed) str +="!@#$$%^&*()_{}|:?"

    for(let i=1;i<=length;i++){
      let char =Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  } ,[length,noAllowed,charAllowed,setPassword])

  //copy passwword
  const copyPassword =useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,8);
    window.navigator.clipboard.writeText(password)},[password])

  useEffect(()=>{passwordGenerator()},[length,setNumberAllowed,charAllowed,passwordGenerator])

   

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 px-3 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center'>Password generator</h1>
      <div className='className="flex shadow rounded-lg overflow-hidden mb-4"'>
        <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passwordRef} />
        <button onClick={copyPassword} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 mt-3  '>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex item-center gap-x-1'>
          <input type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}} />
          <label >Length:{length}</label>
        </div>
        <div className='flex item-center gap-x-1'>
          <input type="checkbox" defaultChecked={setNumberAllowed} id="numberInput"
          onChange={()=>{setNumberAllowed((prev)=>!prev);}} />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap x-1'>
          <input type="checkbox" defaultChecked={charAllowed} id='characterInput' onChange={()=>{
            setCharAllowed((prev)=>!prev);
          }} />
          <label htmlFor="charInout">Characters</label>
        </div>

      </div>
    </div>
    </>
  )
}

export default App
