import React from 'react';
import { render } from '@testing-library/react';

import Repos from './repos';

describe('Repos', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Repos />);
    expect(baseElement).toBeTruthy();
  });
});
