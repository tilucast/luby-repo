import React, { useContext, useState, useEffect } from 'react';

import styled from 'styled-components';
import { UserContext } from '../../UserContext';
import {ReactComponent as ArrowRight} from '../../../assets/arrowright.svg'
import {ReactComponent as Star} from '../../../assets/star-regular.svg'
import {ReactComponent as OpenLock} from '../../../assets/open-lock.svg'
import {ReactComponent as ClosedLock} from '../../../assets/lock.svg'
import { fetchUserStuff } from '../../common/fetchUserStuff';
import { styles } from '../../common/styles';
import YellowThing from '../../components/yellow-thing/yellow-thing';

const StyledRepos = styled.div`

  nav{
    padding: 2rem 2rem;
    display: flex;
    align-items: center;
    color: var(--white);

    svg{
      transform: rotate(180deg);
      width: 32px;
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

  section {
    
    .name{
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 7px;
    }

    .info{
      font-size: 1.7rem;
      color: var(--light-gray);
    }

    article{

      border-bottom: 1px solid var(--dark-gray);
      padding: 2rem 0;

      display: flex;
      align-items: center;
      
      .dull-container{
        width: 100%;
        padding-right: 2rem;
      }

      div.container{
        display: flex;
        justify-content: space-between;
        width: 100%;
        
        svg{
          width: 2.2rem;
        }

        svg.star{
          fill: var(--yellow);
          color: var(--yellow);
          width: 2.6rem;
        }
        
        svg.star + span{
          font-size: 1.8rem;
        }

        svg.open-lock{
          fill: var(--green);
        }

        svg.closed-lock{
          fill: var(--red);
        }
      }

      .repo-info {
        margin-bottom: 1rem;
        span{
          display: block;
        }
      }
    }
  }
`;

export function Repos() {

  const [user, _] = useContext(UserContext)

  const [repos, setRepos] = useState([{}])

  useEffect(() => {
    fetchUserStuff(user.repos_url).then(data => setRepos(data)).catch(error => console.error(error))
  }, [user.repos_url])

  return (
    <StyledRepos>
      <nav>
        <ArrowRight />
        <span>{repos.length} repositórios</span>
      </nav>

      <section>

        {repos.map((repo, index) => (
          <article key={repo.id + index}>

            <YellowThing />

            <div className="dull-container">

              <div className="repo-info">
                <span className="name">{repo.name}</span>
                <span className="info">{repo.description}</span>
              </div>
              
              <div className="container">

                <div>
                  <Star className="star" />
                  <span>{repo.stargazers_count}</span>
                </div>

                <div>
                  <OpenLock className="open-lock"/>
                  <ClosedLock className="closed-lock"/>
                </div>

              </div>

            </div>

          </article>
        ))}

      </section>
    </StyledRepos>
  );
}

export default Repos;
