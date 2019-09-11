import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoffee,faFax} from "@fortawesome/free-solid-svg-icons";

const Nav = styled.nav`
height: 100vh;
padding: 0 1rem;

  

`;

const MainNavItems = styled.ul`
  list-style: none;
  text-align: left;
  box-shadow: 0px 7px 8px -9px rgba(0,0,0,0.75);
  padding: 3rem;
  
    li{
    margin: 1rem 0;
    }
`;



const sideNavigation = ()=>{
    return(
        <Nav>
            <MainNavItems>
                <li> <FontAwesomeIcon icon={faFax}/></li>
                <li>Projects</li>
                <li>Technologies</li>
            </MainNavItems>
        </Nav>
    )
};

export default sideNavigation;