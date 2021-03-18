import React, { useState } from 'react'
import { useGamepad } from './hooks/useGamepad'
import { ColorSelector, Show } from './components'
import {SnackboxMicro} from './gamepads'

import './App.css'

const defaultOptions =  [{ connected: false }];

const App = () => {

  const [color, setColor] = useState('#5bbcff');
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
        <ColorSelector id="highlight" label="Highlight" initial={color} setValue={setColor} />
        <SnackboxMicro gamepad={gp} color={color} />
      </Show>
      </main>
    </div>
  )
}

export default App
