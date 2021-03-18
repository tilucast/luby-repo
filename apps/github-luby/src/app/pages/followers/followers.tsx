import React, { useContext, useEffect, useState } from 'react';

import styled from 'styled-components';
import { fetchUserStuff } from '../../common/fetchUserStuff';
import SimpleNavbar from '../../components/simple-navbar/simple-navbar';
import YellowThing from '../../components/yellow-thing/yellow-thing';
import { UserContext } from '../../UserContext';
import {ReactComponent as ArrowRight} from '../../../assets/arrowright.svg'
import { Link } from 'react-router-dom';
import UserTile from '../../components/user-tile/user-tile';

const StyledFollowers = styled.div`
  
  section{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export function Followers() {

  const [followers, setFollowers] = useState([{}])

  const [user, _] = useContext(UserContext)

  useEffect(() => {
    fetchUserStuff(user.followers_url).then(data => setFollowers(data)).catch(error => console.error(error))
  }, [user.followers_url])

  return (
    <StyledFollowers>
      <SimpleNavbar objectProps={{number: followers.length, title: 'seguidores'}} />

      <section>
        {followers.map((follower, index) => (
          
          <UserTile key={follower.id +index} userObject={follower}/>

        ))}
      </section>

    </StyledFollowers>
  );
}

export default Followers;
