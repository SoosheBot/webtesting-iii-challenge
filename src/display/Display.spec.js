import React from 'react';
import Display from './Display';
import { render } from 'react-testing-library';
import { isTSAnyKeyword } from '@babel/types';

describe('<Display />', () => {
    it('renders without crashing', () => {
        render(<Display />);
    })

    it('display shows open - green and unlocked - green when gate is open and unlocked', () => {
        const display = render(<Display closed={false} locked={false}/>);
        const lockState = display.getByText('Unlocked');
        const openState = display.getByText('Open');
        expect(lockState.className).toBe('led green-led');
        expect(openState.className).toBe('led green-led');
    })
})