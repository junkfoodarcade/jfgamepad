import React from 'react'
import './Button.css';

type ButtonProps = {
  index: number
  className?: string
  pressed?: boolean
  name: string
}

export const Button = ({
  index,
  className = '',
  pressed = false,
  name,
}: ButtonProps) => {
  const id = `b${index}`
  const classes = `button${className ? ' ' + className : ''}${pressed ? ' pressed' : ''} ${id}`
  return (
    <span className={classes}>
      {name}
    </span>
  )
}
