import React from 'react'
import { useGamepad } from './components/useGamepad'
import { Snackbox } from './components/Snackbox'

import './App.css'
import { ColorSelector } from './components/ColorSelector'

const Show = ({ when, children }) => when && children

const App = () => {
  const [color,setColor] = React.useState('#663399');
  const gamepads: Gamepad[] = useGamepad() || [{ connected: false }]
  const isConnected = gamepads[0]?.connected || false
  const gp = gamepads[0]

  return (
    <div className="App">
        <main>
      <Show when={!isConnected}>
        <p>Press a button on the controller to begin</p>
      </Show>
      <Show when={!!isConnected}>
        <ColorSelector initial={color} setValue={setColor} />
          <Snackbox gamepad={gp} bg={color} />
      </Show>
      </main>
    </div>
  )
}

export default App
