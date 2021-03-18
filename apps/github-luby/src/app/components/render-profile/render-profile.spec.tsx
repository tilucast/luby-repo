import React from 'react';
import { render } from '@testing-library/react';

import RenderProfile from './render-profile';

describe('RenderProfile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RenderProfile />);
    expect(baseElement).toBeTruthy();
  });
});
