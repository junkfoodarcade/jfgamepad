import React from 'react';
import {render, screen} from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', ()=>{

    it('should match snapshot', ()=>{
        const {baseElement} =render(<Button index={0} controllerIndex={0} pressed={false} name="Button"/>)
        const el= screen.getByText('Button')
        expect(el).toBeInTheDocument();
        expect(baseElement.firstChild).toMatchSnapshot();
    })
    it('should have pressed class if pressed prop is true', ()=>{
        render(<Button index={0} controllerIndex={0} pressed={true} name="Button"/>)
        const el= screen.getByText('Button')
        expect(el).toHaveClass('pressed');
    })


});