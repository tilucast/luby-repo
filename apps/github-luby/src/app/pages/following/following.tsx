import React, { useContext, useEffect, useState } from 'react';

import styled from 'styled-components';
import { fetchUserStuff } from '../../common/fetchUserStuff';
import SimpleNavbar from '../../components/simple-navbar/simple-navbar';
import UserTile from '../../components/user-tile/user-tile';
import { UserContext } from '../../UserContext';

const StyledFollowing = styled.div`
  section{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export function Following() {

  const [user, _] = useContext(UserContext)

  const [following, setFollowing] = useState([{}])

  useEffect(() => {
    fetchUserStuff(`https://api.github.com/users/${user.login}/following`)
      .then(data => setFollowing(data)).catch(error => console.error(error))
  }, [])

  console.log(following);

  return (
    <StyledFollowing>
      <SimpleNavbar  objectProps={{number: following.length, title: 'seguindo'}}/>

      <section>
        {following.map((followed,index) => (
          <UserTile key={followed.id + index} userObject={followed} />
        ))}
      </section>
      
    </StyledFollowing>
  );
}

export default Following;
