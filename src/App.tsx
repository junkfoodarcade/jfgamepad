import React from 'react'
import { useGamepad } from './components/useGamepad'
import { Snackbox } from './components/Snackbox'

import './App.css'

const Show = ({ when, children }) => when && children

const App = () => {
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
          <Snackbox gamepad={gp} />
      </Show>
      </main>
    </div>
  )
}

export default App
