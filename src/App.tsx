import React, { useState } from 'react'
import { useGamepad } from './hooks/useGamepad'
import { ColorSelector, Show } from './components'
import { SnackboxMicro } from './gamepads'
import './App.css'

const defaultOptions = { connected: false, pressed: [], length: 0 }

const App = () => {
  const [color, setColor] = useState('#5bbcff')
  const { buttons, connected } = useGamepad() || defaultOptions

  return (
    <div className="App">
      <h1>
        <img src="./logo.png" alt="Junkfood Arcade Logo" width="200" style={{ float: 'left' }} />
      </h1>
      <main>
        <Show when={!connected}>
          <p>Press a button on the controller to begin</p>
        </Show>
        <Show when={!!connected}>
          <ColorSelector id="highlight" label="Button Highlight" initial={color} setValue={setColor} />
          <SnackboxMicro buttons={buttons} color={color} />
        </Show>
      </main>
    </div>
  )
}

export default App
