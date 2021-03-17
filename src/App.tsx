import React from 'react'
import { useGamepad } from './hooks/useGamepad'
import { Show } from './components'
import {SnackboxMicro} from './gamepads'

import './App.css'

const defaultOptions =  [{ connected: false }];

const App = () => {

  const gamepads: Gamepad[] = useGamepad() ||defaultOptions
  const isConnected = gamepads[0]?.connected || false
  const gp = gamepads[0]

  return (
    <div className="App">
        <main>
      <Show when={!isConnected}>
        <p>Press a button on the controller to begin</p>
      </Show>
      <Show when={!!isConnected}>
        <SnackboxMicro gamepad={gp} />
      </Show>
      </main>
    </div>
  )
}

export default App
