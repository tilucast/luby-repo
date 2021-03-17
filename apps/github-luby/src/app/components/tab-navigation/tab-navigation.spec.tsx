import React from 'react';
import { render } from '@testing-library/react';

import TabNavigation from './tab-navigation';

describe('TabNavigation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TabNavigation />);
    expect(baseElement).toBeTruthy();
  });
});
