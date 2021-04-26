import { useEffect, useState } from 'react'
import {buttonsToString} from '../utils'

const defaultConfig = { buttons: [], connected: false }
const initial = {
  pressed: [],
  connected: false,
}
let buttonData = ''

export const useGamepad = () => {
  const [data, setData] = useState(initial)
  useEffect(() => {
    const getUpdates = () => {
      const gamepads = navigator.getGamepads()
      const { buttons, connected,  timestamp } = gamepads[0] || defaultConfig
      const btnString = buttonsToString(buttons)
      if (btnString !== buttonData) {
        buttonData=btnString;
        const state = {
          connected,
          buttons: btnString,
          timestamp
        }
        setData(state)
      }
      requestAnimationFrame(getUpdates)
    }
    getUpdates()
    return () => {
      cancelAnimationFrame(getUpdates)
    }
  }, [])
  return data
}
