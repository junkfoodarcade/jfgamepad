import React from 'react'

type ButtonProps = {
    index: number;
    controllerIndex:number;
    className?: string;
    pressed?: boolean;
    name: string;
    pressedColor?: string;
};

export const Button = ({index,controllerIndex,className='',pressed=false,name,pressedColor='#ff0000'}:ButtonProps) =>{
    const classes = `button${className?' '+className:''}${pressed?' pressed':''}`;
    const bgstyle= pressed ? {backgroundColor:pressedColor} :{};
    const id=`c${controllerIndex}b${index}`
    return (
        <span className={classes} id={id} style={bgstyle}>{name}</span>
    )
};