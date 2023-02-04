import React from "react"
import "./App.css"
import Die from "./Die"

function App() {
  const [dice, setDice] = React.useState(allNewDice())

  function allNewDice() {
    let numbersArray = []

    for (let i = 0; i < 10; i++) {
      numbersArray.push(Math.floor(Math.random() * 6 + 1))
    }
    return numbersArray
  }

  const diceElement = dice.map((item) => {
    return <Die value={item} />
  })

  console.log(dice)
  return (
    <div className="App">
      <div className="die-container">{diceElement}</div>
    </div>
  )
}

export default App
