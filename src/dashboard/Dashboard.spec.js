import React from 'react';
import { render } from '@testing-library/react';

import Dashboard from './Dashboard';
import { exportAllDeclaration } from '@babel/types';

test('should match snapshot', () => {
    expect(render(<Dashboard />)).toMatchSnapshot();
});