import React from 'react'
import './Button.css'

type ButtonProps = {
  index: number
  className?: string
  pressed?: boolean
  name: string
  color: string
  size: 'sm' | 'md' | 'lg'
}

export const Button = ({ index, className = '', pressed = false, name, color, size = 'md' }: ButtonProps) => {
  const id = `b${index}`
  const arrows = ['↑', '↓', '←', '→']
  let arrow = ''
  if (arrows.includes(name)) {
    arrow = name === '↑' ? 'up' : name === '↓' ? 'down' : name === '←' ? 'left' : 'right'
  }

  const classes = `button${className ? ' ' + className : ''}${
    pressed ? ' pressed' : ''
  } ${id.toLowerCase()} ${`button-${size}`}`
  //${arrow? arrow : name.toLowerCase()}
  const styles = pressed
    ? {
        backgroundColor: color,
      }
    : {}
  return (
    <span className={classes} style={styles}>
      <span className="inner">{name}</span>
    </span>
  )
}
