import React from 'react';

import styled from 'styled-components';

const StyledYellowThing = styled.div`
  width: 15px;
  height: 40px;
  border-radius: 0 8px 8px 0;
  background-color: var(--yellow);
  margin-right: 1.8rem !important;
  align-self: flex-start;
`;

export function YellowThing() {
  return (
    <StyledYellowThing>
      
    </StyledYellowThing>
  );
}

export default YellowThing;
