import React from "react"

export default function Die(props) {
  return (
    <div>
      <div
        key={props.key}
        onClick={(id) => props.holdDice(props.id)}
        style={{
          backgroundColor: props.isHeld ? "#59E391" : "white",
        }}
        className="die"
      >
        {props.value}
      </div>
    </div>
  )
}
