import React from 'react';
import { render } from '@testing-library/react';

import YellowThing from './yellow-thing';

describe('YellowThing', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<YellowThing />);
    expect(baseElement).toBeTruthy();
  });
});
