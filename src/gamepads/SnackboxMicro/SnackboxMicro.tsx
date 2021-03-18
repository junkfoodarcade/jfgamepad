import React from 'react';
import ButtonNames from './SnackboxMicroMappings';
import { Button } from '../../components'

import './SnackboxMicro.css';

export type SnackboxMicroProps = {
    gamepad: Gamepad;
    color: string;
}

export const SnackboxMicro = ({gamepad,color}) =>{
    const buttons = gamepad.buttons || [];
    const index= gamepad.index|| 0;
    return (
    <section className="controller snackboxmicro" data-id={index}>
        {buttons && buttons.map((btn, idx) =>
            <Button key={idx} index={idx} pressed={btn.pressed} name={ButtonNames[idx]} color={color} />
        )}
    </section>);
}