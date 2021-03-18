import React from 'react';
import { render } from '@testing-library/react';

import UserTile from './user-tile';

describe('UserTile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserTile />);
    expect(baseElement).toBeTruthy();
  });
});
