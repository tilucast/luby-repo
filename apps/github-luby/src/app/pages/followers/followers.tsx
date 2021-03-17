import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FollowersProps {}

const StyledFollowers = styled.div`
  color: pink;
`;

export function Followers(props: FollowersProps) {
  return (
    <StyledFollowers>
      <h1>Welcome to Followers!</h1>
    </StyledFollowers>
  );
}

export default Followers;
