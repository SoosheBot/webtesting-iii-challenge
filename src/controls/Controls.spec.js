// // Test away!
import React from 'react';
import { render } from '@testing-library/react';
import Controls from './Controls';


describe('<Controls />', () => {
    it('renders without crashing', () => {
        render(<Controls />);
    })
})

// // test('controls displays', () => {
// //     const { getByTestId } = render(<Controls />);
// //     expect(getByTestId('controls'));
// // });

// //test ('defaults to lock (has to show unlocked)') getByText
