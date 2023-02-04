import React from "react"
import "./App.css"
import Die from "./Die"
import { nanoid } from "nanoid"
import ConfettiExplosion from "react-confetti-explosion"

function App() {
  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(() => {
    const allHeld = dice.every((item) => item.isHeld)
    const allSameValus = dice.every((item) => item.value == dice[0].value)
    if (allHeld && allSameValus) {
      console.log("win!")
      setTenzies(true)
    }
  }, [dice])

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
    if (tenzies) {
      setDice(allNewDice())
      setTenzies(false)
    } else {
      setDice((oldDice) => {
        return oldDice.map((item) => {
          if (item.isHeld === true) {
            return item
          } else {
            let num = Math.floor(Math.random() * 6 + 1)
            return { value: num, isHeld: false, id: nanoid() }
          }
        })
      })
    }
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
      <h1>Tenzies</h1>
      <p className="para">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls
      </p>
      {tenzies && <ConfettiExplosion />}
      <div className="die-container">{diceElement}</div>
      <button onClick={rollDice} className="btn">
        {tenzies ? "New Game" : "Roll"}
      </button>
    </div>
  )
}

export default App
