import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTasks, faClipboardList, faCodeBranch, faHeart, faClock, faHistory, faCogs} from "@fortawesome/free-solid-svg-icons";

const Nav = styled.nav`

position: sticky;
top: 0;
z-index: 9999;
height: 100vh;
padding: 0 1rem;

  border: 1px solid #eee;

`;

const NavItems = styled.ul`
  list-style: none;
  text-align: left;
  border-bottom: ${props=>props.border ? '1px solid #eee' : 'none' };
  padding: 3rem;
  
    li{
    margin: 1rem 0;
    transition: all .2s;
   
    &:hover{
      color: #8EC06C;
      cursor: pointer;
    }
    &:active,
    &:focus{
      color: #8EC06C;
    }
      
      p{
      display: inline-block;
      }
    }
`;


const DynamicContent = styled.div`
 h3{
 margin-top: 3rem;
 font-size: 1.6rem;
 font-weight: 400;
 color: #8EC06C;
 text-align: left;
 padding: 0 3rem;
 }
`;

const Settings = styled.div`

`;


const sideNavigation = () => {
    return (
        <Nav>
            <NavItems border='true'>
                <li><FontAwesomeIcon icon={faTasks}/> <p>Tasks</p></li>
                <li><FontAwesomeIcon icon={faClipboardList}/> <p>Projects</p></li>
                <li><FontAwesomeIcon icon={faCodeBranch}/> <p>Technologies</p></li>
            </NavItems>
            {/*Dynamic render Component with functionalities to each nav item  */}
            <DynamicContent>
                <h3>Tasks</h3>
                <NavItems border='true'>
                    <li><FontAwesomeIcon icon={faHeart}/> <p>Important</p></li>
                    <li><FontAwesomeIcon icon={faClock}/> <p>Upcoming</p></li>
                    <li><FontAwesomeIcon icon={faHistory}/> <p>Recent</p></li>
                </NavItems>
            </DynamicContent>
            <Settings>
                <NavItems>
                    <li><FontAwesomeIcon icon={faCogs}/> <p>Settings</p></li>
                </NavItems>
            </Settings>
        </Nav>
    )
};

export default sideNavigation;