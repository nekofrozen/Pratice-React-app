import React from 'react'
import CounterHooks from './CounterHooks'
import {render, fireEvent} from '@testing-library/react'

test('ssssss', () => {
    //arrange
    const { debug, getByText } = render(<SwitchButtonHooks/>)
    const btn = getByText('TURN ON')
    const btn = getByText('TURN ON')
    const btn = getByText('TURN ON')

    //act

    fireEvent.click(btn)

    //assert
    expect(btn.textContent).toBe('TURN OFF')
   debug()
})
