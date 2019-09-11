import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTasks,faClipboardList,faCodeBranch } from "@fortawesome/free-solid-svg-icons";

const Nav = styled.nav`
height: 100vh;
padding: 0 1rem;

  

`;

const MainNavItems = styled.ul`
  list-style: none;
  text-align: left;
  box-shadow: 0px 7px 8px -10px rgba(0,0,0,0.75);
  padding: 3rem;
  
    li{
    margin: 1rem 0;
      
      p{
      display: inline-block;
      }
    }
`;



const sideNavigation = ()=>{
    return(
        <Nav>
            <MainNavItems>
                <li> <FontAwesomeIcon icon={faTasks}/> <p>Tasks</p></li>
                <li> <FontAwesomeIcon icon={faClipboardList}/> <p>Projects</p></li>
                <li> <FontAwesomeIcon icon={faCodeBranch}/> <p>Technologies</p></li>
            </MainNavItems>
        </Nav>
    )
};

export default sideNavigation;