import React from 'react';
import { render } from '@testing-library/react';

import Following from './following';

describe('Following', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Following />);
    expect(baseElement).toBeTruthy();
  });
});
