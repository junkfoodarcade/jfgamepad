import React from 'react';
import ButtonNames from './SnackboxMicroMappings';
import { Button } from '../../components'

import './SnackboxMicro.css';

export type SnackboxMicroProps = {
    gamepad: Gamepad;
}

export const SnackboxMicro = ({gamepad}) =>{
    const buttons = gamepad.buttons || [];
    const index= gamepad.index|| 0;
    return (
    <section className="controller snackboxmicro" id={`c${index}`}>
        {buttons && buttons.map((btn, idx) =>
            <Button key={idx} index={idx} controllerIndex={0} pressed={btn.pressed} name={ButtonNames[idx]} />
        )}
    </section>);
}