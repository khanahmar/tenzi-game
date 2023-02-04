import React from "react"
import "./App.css"
import Die from "./Die"
import { nanoid } from "nanoid"

function App() {
  const [dice, setDice] = React.useState(allNewDice())

  function holdDice(id) {
    setDice((prevDice) => {
      return prevDice.map((item) => {
        if (item.id === id) {
          return { ...item, isHeld: !item.isHeld }
        } else {
          return item
        }
      })
    })
  }

  function allNewDice() {
    let numbersArray = []

    for (let i = 0; i < 10; i++) {
      let num = Math.floor(Math.random() * 6 + 1)
      numbersArray.push({ value: num, isHeld: false, id: nanoid() })
    }
    return numbersArray
  }

  function rollDice() {
    setDice((oldDice) => {
      oldDice.map((item) => {
       if(item.isHeld===true){
        
       }
        
      })
    })
  }

  const diceElement = dice.map((item) => {
    return (
      <Die
        key={item.id}
        id={item.id}
        holdDice={holdDice}
        isHeld={item.isHeld}
        value={item.value}
      />
    )
  })

  return (
    <div className="App">
      <div className="die-container">{diceElement}</div>
      <button onClick={rollDice} className="btn">
        Roll
      </button>
    </div>
  )
}

export default App
