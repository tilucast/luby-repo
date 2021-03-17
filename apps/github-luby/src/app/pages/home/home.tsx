import React, { ContextType, FormEvent, useCallback, useContext, useState } from 'react';

import styled from 'styled-components';
import { ReactComponent as Logo } from '../../../assets/github.svg';
import { ReactComponent as ArrowRight } from '../../../assets/arrowright.svg';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ContextProps, UserProps } from '../../common/interfaces';

const StyledHome = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  
  section{
    width: 40%;
    min-width: 35rem;
    display: grid;
    place-items: center;
    padding: 4rem 4rem;
  }

  .logo-svg {
    width: 15rem;
    height: 15rem;
  }

  form {
    display: grid;
    place-items: center;
    width: 100%;
    margin-top: 40px;

    input, button{
      width: 100%;
    }

    input {
      border: 0;
      padding: 1rem;
      background-color: var(--white);
      border-radius: 8px;
      color: var(--dark);
      font-size: 1.8rem;
      font-weight: 600;

      &::placeholder{
        
      }
    }

    button{
      background-color: var(--yellow);
      border: 0;
      padding: 1rem 1rem;
      font-size: 1.8rem;
      color: var(--dark);
      font-weight: 600;
      border-radius: 8px;
      margin-top: 20px;
      
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      transition: all .3s;

      &:hover{
        background-color: var(--dark);
        outline: 2px solid var(--yellow);
        color: var(--yellow);
        fill: var(--yellow);
        cursor: pointer;
      }

      &:hover path{
        fill: var(--yellow);
      }

      .arrow-right{
        margin-left: 10px;
        font-weight: bold;
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
`;

export function Home() {

  const history = useHistory()

  const [user, setUser] = useState('')

  const [_, setUserContext] = useContext(UserContext)

  const callbackUser = async (user: string) => {
    try {
      const fetchUser = fetch(`https://api.github.com/users/${user}`, {headers: {Accept: 'application/vnd.github.v3+json'}});

      const data = (await fetchUser).json()

      const actualUserData = await data

      if(actualUserData.message !== 'Not Found'){
        setUserContext(actualUserData)
        history.push({
          pathname: `/${actualUserData.id}/profile`, 
          
        })

      }
      
    } catch (error) {
      console.error(error)
    }
  }

  const fetchUser = async (event: FormEvent) => {
    event.preventDefault()

    callbackUser(user)
      
  }

  return (
    <StyledHome>

      <section>
        <Logo  className="logo-svg"/>

        <form onSubmit={fetchUser}>
          <input type="text" placeholder="Usuário" required onChange={e => setUser(e.target.value)}/>
          <button type="submit"><span>ENTRAR</span> <ArrowRight className="arrow-right" /></button>
        </form>
      </section>
      
    </StyledHome>
  );
}

export default Home;
