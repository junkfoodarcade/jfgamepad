import axios from 'axios';
import {useEffect, useState} from 'react';

const defaultConfig = {buttons:[],connected:false}
const initial= {
    pressed:[],connected:false
}
//returns only indexs of pressed buttons
const filterButtonData= (buttons) => buttons.map((btn,i) => btn.pressed ? i.toString() : false).filter(Boolean).map(btn => parseInt(btn,10))
const buttonsToString = (buttons) => buttons.map((btn,i)=> btn.pressed? '1' :'0').join('');

let buttonData='';

const headers = {
    "content-type": "text/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
};

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
                connected
            };
            const btnString = buttonsToString(buttons);
            if (btnString !== buttonData) {
                buttonData=btnString;
                const data = `${Date.now()}|${btnString}`
                axios.post('https://junkfood-serverless.netlify.app/.netlify/functions/gamepad',{data}, {headers});
            }

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