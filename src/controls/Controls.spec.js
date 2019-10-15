// Test away!
import React from 'react';
import { render } from '@testing-library/react';

import Controls from './Controls';


test('should match snapshot', () => {
    expect(render(<Controls />)).toMatchSnapshot();
});

test('controls displays', () => {
    const { getByTestId } = render(<Controls />);
    expect(getByTestId('controls'));
});

