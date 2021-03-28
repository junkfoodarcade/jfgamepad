import {useEffect, useState} from 'react';

const defaultConfig = {buttons:[],connected:false}
const initial= {
    pressed:[],connected:false
}
//returns only indexs of pressed buttons
const filterButtonData= (buttons) => buttons.map((btn,i) => btn.pressed ? i.toString() : false).filter(Boolean).map(btn => parseInt(btn,10))

export const useGamepad = () => {
    const [data,setData] = useState(initial);
    useEffect(()=>{
        const getUpdates = () => {
            const gamepads = navigator.getGamepads();
            const {buttons,connected} = gamepads[0]||defaultConfig;
            const pressed = buttons.length && filterButtonData(buttons);
            const length = buttons.length;
            const state = {
                pressed,length,
                timestamp: Date.now(),
                connected
            };
            setData(state);
            requestAnimationFrame(getUpdates);
        }
        getUpdates();
        return ()=> {
            cancelAnimationFrame(getUpdates);
        }
    },[])
    return data;
}