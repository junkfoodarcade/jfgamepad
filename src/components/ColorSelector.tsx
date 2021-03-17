import React from 'react';

type ColorSelectorProps = {
    initial: string;
    setValue: (val:string)=>void;
    id: string;
    label: string;
}

export const ColorSelector = ({initial='#663399', setValue, id,label }:ColorSelectorProps) => {
    return (
        <div id={id} className="color-selector">
            <label htmlFor={`${id}-input`}>{label}</label>
            <input id={`${id}-input`} type="color" value={initial} onChange={(e) => {
                    const val = e.target.value;
                    setValue(val||initial);
            }} />
        </div>
    )
};