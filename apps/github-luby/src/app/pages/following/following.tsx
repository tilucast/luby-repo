import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FollowingProps {}

const StyledFollowing = styled.div`
  color: pink;
`;

export function Following(props: FollowingProps) {
  return (
    <StyledFollowing>
      <h1>Welcome to Following!</h1>
    </StyledFollowing>
  );
}

export default Following;
