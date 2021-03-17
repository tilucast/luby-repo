import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ReposProps {}

const StyledRepos = styled.div`
  color: pink;
`;

export function Repos(props: ReposProps) {
  return (
    <StyledRepos>
      <h1>Welcome to Repos!</h1>
    </StyledRepos>
  );
}

export default Repos;
