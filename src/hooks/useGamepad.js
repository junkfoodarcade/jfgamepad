import axios from 'axios'
import { useEffect, useState } from 'react'

const defaultConfig = { buttons: [], connected: false }
const initial = {
  pressed: [],
  connected: false,
}

const buttonsToString = (buttons) => buttons.map((btn, i) => (btn.pressed ? '1' : '0')).join('')

const str2b = (str) => parseInt(str, 2)

const b2str = (str) => {
  let updated = str.toString(2)
  return ('00000000000000000' + updated).slice(-17)
}

let buttonData = ''

const headers = {
  'content-type': 'text/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
}

export const useGamepad = () => {
  const [data, setData] = useState(initial)
  useEffect(() => {
    const getUpdates = () => {
      const gamepads = navigator.getGamepads()
      const { buttons, connected } = gamepads[0] || defaultConfig
      const btnString = buttonsToString(buttons)
      if (btnString !== buttonData) {
        buttonData = btnString
        const state = {
          connected,
          buttons: btnString,
        }
        axios(`https://jfgamepad.netlify.app/.netlify/functions/gp?d=${`${Date.now()}|${str2b(btnString)}`}`)
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
