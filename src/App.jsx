// import { Fragment } from 'react'
import './App.css'

const text = "qwerty"
const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmcM2UzR0xA7I7bPnUqBdPTl663Opbu5gIUiU1RxrFcthCCBhjYztiUP0&s=10"


let search = "S"

function App() {
  return (
    <>
      <img src={image} alt="" width={300} />
      {search && <h1>{text}</h1>}
      {search.length > 0  ? <h1>Є ДАНІ ПРО СТОРІНКУ</h1> : <h1>НЕМАЄ ДАНИХ ПРО СТОРІНКУ</h1>}
  

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Magnam, sint? Molestias voluptate quaerat dolorum repellat
        beatae, sit eligendi, blanditiis eos sint eius nam aspernatur
        sequi inventore suscipit accusantium pariatur porro?
      </p>
    </>
  )
}



export default App
