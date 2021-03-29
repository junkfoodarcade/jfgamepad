import React from 'react';
import ButtonNames from './SnackboxMicroMappings';
import { Button } from '../../components'

import './SnackboxMicro.css';

export type SnackboxMicroProps = {
    totalButtons: number;
    pressed: number[];
    color: string;
}
export const SnackboxMicro = ({totalButtons,pressed,color}) =>{

    let buttons = [];
    for(let i=0; i< totalButtons;i++) {
        buttons.push(i)
    }
    return (
    <section className="controller snackboxmicro" data-id={0}>
        {buttons.map(btn => {
            const name=ButtonNames[btn];
            const size= btn === 12 ?'lg': 'med';
            return name && (<Button key={btn} index={btn} pressed={pressed.includes(btn)} name={name} color={color} size={size} />)
        })}
    </section>);
}