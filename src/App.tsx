import React, { useState, useEffect } from 'react'
import { useGamepad } from './hooks/useGamepad'
import { ColorSelector, Show, Record } from './components'
import { SnackboxMicro } from './gamepads'
import axios from 'axios'
import { useGlobalState } from './store/store'
import { sendUrl, playUrl, b2str } from './utils'
import './App.css'

const defaultOptions = { connected: false, pressed: [], length: 0 }

const localStorageKey = 'jfgamepad-highlight'

const App = () => {
  const [isRecording, setIsRecording] = useState(false)
  const [color, setColor] = useState('#bde3ff')
  const { buttons, connected, timestamp } = useGamepad() || defaultOptions
  const [buttondata, setButtonData] = useState(buttons)
  const [sessionId, setSessionId] = useGlobalState('sessionId')
  const [replay, setReplay] = useGlobalState('replay')

  useEffect(() => {
    const c = localStorage.getItem(localStorageKey) || '#bde3ff'
    setColor(c)
  }, [])

  useEffect(() => {
    if (buttons !== buttondata) {
      if (isRecording) {
        axios(sendUrl(buttons, sessionId, Date.now()))
      }
      setButtonData(buttons)
    }
  }, [isRecording, buttons, buttondata])

  useEffect(() => {
    localStorage.setItem(localStorageKey, color)
  }, [color])

  const handlePlay = async () => {
    const {data} = await axios(playUrl(sessionId))
    setReplay(data);
    for(let i=0,l=data.length;i<l;i++) {
      setTimeout(()=>{
        const d = b2str(data[i].btn);
        console.log(d);
        setButtonData(d);
      },1000)
    }
  }

  return (
    <div className="App">
      <h1>
        <img src="./logo.png" alt="Junkfood Arcade Logo" width="200" className="logo" />
      </h1>
      <main>
        <Show when={!connected}>
          <p>Press a button on the controller to begin</p>
        </Show>
        <Show when={!!connected}>
          <Record isRecording={isRecording} setIsRecording={setIsRecording} setSessionId={setSessionId} />
          <ColorSelector id="highlight" label="Button Highlight" initial={color} setValue={setColor} />
          <SnackboxMicro buttons={buttons} color={color} />
          <button onClick={handlePlay}>Play</button>
        </Show>
      </main>
    </div>
  )
}

export default App
