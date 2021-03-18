import React from 'react';
import { render } from '@testing-library/react';

import GuestProfile from './guest-profile';

describe('GuestProfile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GuestProfile />);
    expect(baseElement).toBeTruthy();
  });
});
