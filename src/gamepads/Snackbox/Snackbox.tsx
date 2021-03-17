import React from 'react';
import ButtonNames from './SnackboxMappings';
import { Button } from '../../components'

import './Snackbox.css';

export type SnackboxProps = {
    gamepad: Gamepad;
}

export const Snackbox = ({gamepad}) =>{
    const buttons = gamepad.buttons || [];
    const index= gamepad.index|| 0;
    return (
    <section className="controller snackbox" id={`c${index}`}>
        {buttons && buttons.map((btn, idx) =>
            <Button key={idx} index={idx} controllerIndex={0} pressed={btn.pressed} name={ButtonNames[idx]} />
        )}
        <span className="rivet tl">+</span>
        <span className="rivet tr">+</span>
        <span className="rivet bl">+</span>
        <span className="rivet br">+</span>
    </section>);
}