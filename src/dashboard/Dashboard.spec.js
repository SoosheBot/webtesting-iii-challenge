import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dashboard from './Dashboard';
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';

// test('should match snapshot', () => {
//     expect(render(<Dashboard />)).toMatchSnapshot();
// });

describe('<Dashboard />', () => {
    it('renders without crashing', () => {
        render(<Dashboard />);
    })

    it('default state is unlocked and open', () => {
        const dashboard = render(<Dashboard />);

        const lockBtn = dashboard.getByText('Lock Gate');
        const closeBtn = dashboard.getByText('Close Gate');

        expect(lockBtn.disabled).toBe(true);
        expect(closeBtn.disabled).toBe(false);
    })

    it('close gate to enable lock btn', () => {
        const dashboard = render(<Dashboard />);
        const closeBtn = dashboard.getByText('Close Gate');

        fireEvent.click(closeBtn);

        const openBtn = dashboard.getByText('Open Gate');
        const lockBtn = dashboard.getByText('Lock Gate');
        expect(lockBtn.disabled).toBe(false);
        expect(openBtn.disabled).toBe(false);
    })

    it('locks gate to disable open btn and enable unlocked', () => {
        const dashboard = render(<Dashboard />);
        
        const closeBtn = dashboard.getByText('Close Gate');
        fireEvent.click(closeBtn);

        const lockBtn = dashboard.getByText('Lock Gate');
        fireEvent.click(lockBtn);
        
        const openBtn = dashboard.getByText('Open Gate');
        fireEvent.click(openBtn);
    })
})
