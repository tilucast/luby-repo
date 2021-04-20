import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';

import styled from 'styled-components';
import { fetchUserStuff } from '../../common/fetchUserStuff';
import RenderProfile from '../../components/render-profile/render-profile';
import {ReactComponent as ArrowRight} from '../../../assets/arrowright.svg'
import {ReactComponent as ExitIcon} from '../../../assets/exit.svg'
import { UserContext } from '../../UserContext';

const StyledGuestProfile = styled.div`
  height: 100%;

  nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;

    > span{
      margin-left: 4rem;
    }

    span{
      font-size: 2rem;
      font-weight: 600;
    }

    svg{
      width: 4.5rem;
      cursor: pointer;
    }

    >svg {
      transform: rotate(180deg);

      path{
        fill: var(--white);
      }
    }

    article{
      display: flex;
      align-items: center;
      cursor: pointer;

      svg path{
        fill: var(--green);
      }
    }
  }
`;

export function GuestProfile() {
  const {state: {userObject}} = useLocation<any>()

  const [guestInfo, setGuestInfo] = useState<any>({})

  const [_, setUser] = useContext(UserContext)
  
  const history = useHistory()

  useEffect(() => {
    fetchUserStuff(userObject.url).then(data => setGuestInfo(data)).catch(error => console.error(error))
  }, [userObject.url])

  const changeCurrentUser = () => {
    setUser(guestInfo)
    history.push(`/${guestInfo.id}/profile`)
  }

  return (
    <StyledGuestProfile>
      <nav>
        <ArrowRight onClick={() => history.goBack()}/>
        <span>{guestInfo.login}</span>
        <article onClick={changeCurrentUser}>
          <span>Salvar</span>
          <ExitIcon />
        </article>
      </nav>

      <RenderProfile user={guestInfo} mainProfile={false}/>
    </StyledGuestProfile>
  );
}

export default GuestProfile;
