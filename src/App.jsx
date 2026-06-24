// import { Fragment } from 'react'
import './App.css'

const text = "qwerty"
const image = "https://img.a.transfermarkt.technology/portrait/big/8198-1748102259.jpg?lm=1"
const object = {
  url: "https://www.transfermarkt.world/cristiano-ronaldo/profil/spieler/8198"
}
const colors = ["Червоний", "Синій", "Зелений"]


// let search = "S"

function App() {
  return (
    <>
    <p>{2+2}</p>
    <img src={image} alt="Ronaldo"  width={200}/>
   <h1>{text}</h1>
   <p>Ласкаво просимо до нашого сайту</p>
   <a href={object.url}>{object.url}</a>


    <ul>{colors.map((color, index) => {
      return (
        <li key={index}>{color}</li>
      )
    })}</ul>
    </>
  )
}

export default App
