import React from 'react';
import { render } from '@testing-library/react';

import SimpleNavbar from './simple-navbar';

describe('SimpleNavbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SimpleNavbar />);
    expect(baseElement).toBeTruthy();
  });
});
