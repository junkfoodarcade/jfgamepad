const BASE_URL = '/.netlify/functions/'

export const sendUrl = (btn, sid, ts) => `${BASE_URL}gp?d=${ts}|${str2b(btn)}|${sid}`

export const playUrl = (sid) => `${BASE_URL}play?d=${sid}`

export const str2b = (str) => parseInt(str, 2)

export const b2str = (str) => {
  let updated = str.toString(2)
  return ('0000000000000000' + updated).slice(-16)
}

export const buttonsToString = (buttons) => buttons.map((btn, i) => (btn.pressed ? '1' : '0')).join('')
