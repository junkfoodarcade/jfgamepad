import {useEffect, useState} from 'react';

export const useGamepad = () => {
    const [gamepads,setGamepads] = useState([]);
    useEffect(()=>{
        const getUpdates = () => {
            setGamepads(navigator.getGamepads());
            requestAnimationFrame(getUpdates);
        }
        getUpdates();
        return ()=> {
            cancelAnimationFrame(getUpdates);
        }
    },[])
    return gamepads;
}