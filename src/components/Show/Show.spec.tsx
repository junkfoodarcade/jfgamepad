import React from 'react'
import {render,screen} from '@testing-library/react'
import { Show } from './Show'

describe('Show component', ()=>{

    it('should match snapshot',()=>{
        const {baseElement} = render(<Show when>hi</Show>)
        expect(screen.getByText('hi')).toBeInTheDocument();
        expect(baseElement.firstChild).toMatchSnapshot();
    })
    it('should not display (when is false)',()=>{
        const {baseElement} = render(<Show when={false}>hi</Show>)
        expect(screen.queryByText('hi')).not.toBeInTheDocument();
        expect(baseElement.firstChild).toMatchSnapshot();
    })

})