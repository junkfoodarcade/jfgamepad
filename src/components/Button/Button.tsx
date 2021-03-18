import React, { memo } from 'react'
import './Button.css';

type ButtonProps = {
  index: number
  className?: string
  pressed?: boolean
  name: string
  color: string;
}

export const Button = ({
  index,
  className = '',
  pressed = false,
  name,
  color,
}: ButtonProps) => {
  const id = `b${index}`
  const arrows= ['↑', '↓', '←',  '→'];
  let arrow='';
  if(arrows.includes(name)) {
    arrow = (name === '↑') ? 'up'
          : (name === '↓') ? 'down'
          : (name === '←') ? 'left'
          : 'right';
  }
  const classes = `button${className ? ' ' + className : ''}${pressed ? ' pressed' : ''} ${id.toLowerCase()} ${arrow? arrow : name.toLowerCase()}`
  const styles = pressed ? {
    backgroundColor: color
  } : {};
  return (
    <span className={classes} style={styles}>
      {name}
    </span>
  )
}
