import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import { ColorSelector } from './ColorSelector';

describe('ColorSelector Component', ()=>{

    it('should match snapshot', ()=>{
        const testFn = jest.fn();
        const {baseElement} = render(<ColorSelector id="test" label="Label" initial="#ff0000" setValue={testFn}/>);
        const el = screen.getByLabelText('Label');
        fireEvent.input(el, {target: {value: '#333333'}})
        expect(testFn).toHaveBeenCalledTimes(1);
        expect(baseElement.firstChild).toMatchSnapshot();
    });
})