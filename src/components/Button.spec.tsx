import React from 'react';
import {render, screen} from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', ()=>{

    it('should match snapshot', ()=>{
        const {baseElement} =render(<Button index={0} controllerIndex={0} pressed={false} name="Button" pressedColor="blue" />)
        const el= screen.getByText('Button')
        expect(el).toBeInTheDocument();
        expect(baseElement.firstChild).toMatchSnapshot();
    })
    it('should have pressed class if pressed prop is true', ()=>{
        render(<Button index={0} controllerIndex={0} pressed={true} name="Button" pressedColor="#ff0000" />)
        const el= screen.getByText('Button')
        expect(el).toHaveClass('pressed');
        expect(el).toHaveAttribute('style',"background-color: rgb(255, 0, 0);")
    })


});