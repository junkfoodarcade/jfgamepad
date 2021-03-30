const BASE_URL='https://jfgamepad.netlify.app/.netlify/functions/';

export const getUrl = (btn:string) => `${BASE_URL}gp?d=${str2b(btn)}`

export const str2b = (str:string) => parseInt(str, 2)

export const b2str = (str:number) => {
  let updated = str.toString(2)
  return ('0000000000000000' + updated).slice(-16)
}

export const buttonsToString = (buttons) => buttons.map((btn, i) => (btn.pressed ? '1' : '0')).join('')
