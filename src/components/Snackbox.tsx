import React from 'react';
import {snackboxButtonNames} from './buttonNames';
import { Button } from './Button'

export type SnackboxProps = {
    gamepad: Gamepad;
    bg: string;
    pressed: string;
}

export const Snackbox = ({gamepad,bg,pressed}) =>{
    const buttons = gamepad.buttons || [];
    const index= gamepad.index|| 0;
    return (
    <section className="controller snackbox" id={`c${index}`} style={{backgroundColor:bg }}>
        {buttons && buttons.map((btn, idx) =>
            <Button key={idx} index={idx} controllerIndex={0} pressed={btn.pressed} name={snackboxButtonNames[idx]} pressedColor={pressed}/>
        )}
        <span className="rivet tl">+</span>
        <span className="rivet tr">+</span>
        <span className="rivet bl">+</span>
        <span className="rivet br">+</span>
    </section>);
}