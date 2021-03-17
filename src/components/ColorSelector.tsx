import React from 'react';

type ColorSelectorProps = {
    initial: string;
    setValue: (val:string)=>void;
}

export const ColorSelector = ({initial='#663399', setValue }:ColorSelectorProps) => {
    return (
        <div className="color-selector">
            <input type="color" value={initial} onChange={(e) => {
                    const val = e.target.value;
                    setValue(val||initial);
            }} />
        </div>
    )
};