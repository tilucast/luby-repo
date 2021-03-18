import React, { useContext } from 'react';
import { useHistory } from 'react-router';

import styled from 'styled-components';

import {ReactComponent as ArrowRight} from '../../../assets/arrowright.svg'
import { UserContext, UserProvider } from '../../UserContext';

/* eslint-disable-next-line */
export interface SimpleNavbarProps {
  objectProps: {
    number: string | number
    title: string
  }
  
}
const StyledSimpleNavbar = styled.div`
nav{
  padding: 2rem 2rem;
  display: flex;
  align-items: center;
  color: var(--white);

  svg{
    transform: rotate(180deg);
    width: 32px;
    cursor: pointer;
  }

  svg path{
    fill: var(--white);
  }

  span{
    display: block;
    width: 100%;
    font-size: 2rem;
    text-align: center;
  }
}
`;

export function SimpleNavbar({objectProps}: SimpleNavbarProps) {

  const history = useHistory()

  const [user, _] = useContext(UserContext)
  
  return (
    <StyledSimpleNavbar>
      <nav>
        <ArrowRight className="go-back" onClick={() => history.push(`/${user.id}/profile`)}/>
        <span>{objectProps.number} {objectProps.title}</span>
      </nav>
    </StyledSimpleNavbar>
  );
}

export default SimpleNavbar;
