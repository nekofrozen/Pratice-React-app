import React from 'react'
import SwitchButtonHooks from './SwitchButtonHooks'
import {render, fireEvent} from '@testing-library/react'

test('tttt', () => {
    //arrange
    const { debug, getByText } = render(<SwitchButtonHooks/>)
    const btn = getByText('TURN ON')
    //act

    fireEvent.click(btn)

    //assert
    expect(btn.textContent).toBe('TURN OFF')
   debug()
})