import React from 'react'
import ButtonNames from './SnackboxMicroMappings'
import { Button } from '../../components'

import './SnackboxMicro.css'

export type SnackboxMicroProps = {
  buttons: string
  color: string
}
export const SnackboxMicro = ({ buttons = '0000000000000000', color }) => {
  const btns = buttons.split('')
  return (
    <section className="controller snackboxmicro" data-id={0}>
      {btns.map((btn, index) => {
        const name = ButtonNames[index]
        const size = index === 12 ? 'lg' : 'md'
        return (
          name && <Button key={name + index} index={index} pressed={btn === '1'} name={name} color={color} size={size} />
        )
      })}
    </section>
  )
}
