import React from "react"
import "./App.css"
import Die from "./Die"
import { nanoid } from "nanoid"

function App() {
  const [dice, setDice] = React.useState(allNewDice())

  function holdDice(id) {
    console.log(id)
  }

  function allNewDice() {
    let numbersArray = []

    for (let i = 0; i < 10; i++) {
      let num = Math.floor(Math.random() * 6 + 1)
      numbersArray.push({ value: num, isHeld: true, id: nanoid() })
    }
    return numbersArray
  }

  function rollDice() {
    setDice(allNewDice())
  }
  console.log(dice)

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

  console.log(dice)
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
