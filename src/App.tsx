import React, { useState, useEffect } from 'react'
import { useGamepad } from './hooks/useGamepad'
import { ColorSelector, Show, Record } from './components'
import { SnackboxMicro } from './gamepads'
import axios from'axios'
import {getUrl} from './utils'
import './App.css'

const defaultOptions = { connected: false, pressed: [], length: 0 }

const localStorageKey = 'jfgamepad-highlight';

const App = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [color, setColor] = useState('#bde3ff')
  const {buttons, connected } = useGamepad() || defaultOptions;
  const [buttondata, setButtonData] = useState(buttons);

  useEffect(()=>{
    const c = localStorage.getItem(localStorageKey) ||'#bde3ff';
    setColor(c);
  },[])

  useEffect(()=>{
    if (buttons !== buttondata) {
      if (isRecording) {
        axios(getUrl(buttons))
      }
      setButtonData(buttons);
    }
  },[isRecording,buttons,buttondata])

  useEffect(()=>{
    localStorage.setItem(localStorageKey,color);
  },[color]);

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
          <Record isRecording={isRecording} setIsRecording={setIsRecording}/>
          <ColorSelector id="highlight" label="Button Highlight" initial={color} setValue={setColor} />
          <SnackboxMicro buttons={buttons} color={color} />
        </Show>
      </main>
    </div>
  )
}

export default App
