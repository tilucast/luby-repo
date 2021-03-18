import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import {ReactComponent as ExitIcon} from '../../../assets/exit.svg'
import { styles } from '../../common/styles';
import RenderProfile from '../../components/render-profile/render-profile';
import YellowThing from '../../components/yellow-thing/yellow-thing';
import { UserContext } from '../../UserContext';

const StyledUserProfile = styled.div`
  height: 100%;

  nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3rem 2rem;

    h3{
      font-size: 2rem;
    }

    .link{
      font-size: 20px;
      color: var(--white);
      text-decoration: none;
      font-weight: 300;

      display: flex;
      align-items: center;

      &:hover{
        cursor: pointer;
      }

      svg{
        width: 3.2rem;
        fill: var(--red);
        margin-left: 5px;
      }
    }
  }
  
`;

export function UserProfile() {
  const history = useHistory()
  
  const [user, setUser] = useContext(UserContext)
  
  const exitApp = () => {
    history.push("")
    setUser(null)
  }
  
  return (
    <StyledUserProfile>
      <nav>
        <h3>#{user.login}</h3>

        <p className="link" onClick={exitApp}>
          Sair
          <ExitIcon />
        </p>
      </nav>

      <RenderProfile user={user} mainProfile={true} />

    </StyledUserProfile>
  );
}

export default UserProfile;
