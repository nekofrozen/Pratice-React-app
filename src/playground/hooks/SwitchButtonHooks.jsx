import React, { useState } from 'react'

export default function SwitchButtonHooks(props) {
  const [isOn, setIsOn] = useState(false)

  return (
    <button onClick={() => setIsOn(!isOn)}>TURN {isOn ? 'OFF' : 'ON'}</button>
  )
}
