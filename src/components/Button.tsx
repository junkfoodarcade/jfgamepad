import React from 'react'

type ButtonProps = {
    index: number;
    controllerIndex:number;
    className?: string;
    pressed?: boolean;
    name: string;
};

export const Button = ({index,controllerIndex,className='',pressed=false,name}:ButtonProps) =>{
    const classes = `button${className?' '+className:''}${pressed?' pressed':''}`;
    const id=`c${controllerIndex}b${index}`
    return (
        <span className={classes} id={id}>{name}</span>
    )
};