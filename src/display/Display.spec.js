// Test away!
// Test away!
import React from 'react';
import { render } from '@testing-library/react';

import Display from './Display';


test('should match snapshot', () => {
    expect(render(<Controls />)).toMatchSnapshot();
});

test('controls displays', () => {
    const { getByTestId } = render(<Controls />);
    expect(getByTestId('controls'));
});

