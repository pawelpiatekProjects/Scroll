import React from 'react';
import {NavLink} from "react-router-dom";
import styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faTasks,
    faClipboardList,
    faCodeBranch,
    faHeart,
    faStar,
    faHistory,
    faCogs
} from "@fortawesome/free-solid-svg-icons";
import * as variables from '../../../utils/variables';

const Nav = styled.nav`

position: sticky;
top: 0;
z-index: 9;
height: 100vh;
padding: 0 1rem;
background: ${variables.primaryGrey};
  border: 1px solid ${variables.secondaryGrey};

`;

const NavItems = styled.ul`
  list-style: none;
  text-align: left;
  border-bottom: ${props => props.border ? `1px solid ${variables.secondaryGrey}` : 'none'};
  padding:3rem 2rem;
  
    li{
    margin: 1rem 0;
    transition: all .2s;
    font-size: 1.6rem;
    color: ${variables.fontColorFirst};
    
    &:active{
    color: ${variables.primaryGreen};
    }
    
      
      p{
      display: inline-block;
       margin-left: 1rem;
      }
      
      a{
      text-decoration: none;
      color: ${variables.fontColorFirst};
     
      
      &:hover{
      color: ${variables.primaryGreen};
      cursor: pointer;
    }
    &:active,
    &:focus{
      color: ${variables.primaryGreen};
    }
      }
    }
`;


const DynamicContent = styled.div`
 h3{
 margin-top: 3rem;
 font-size: 2rem;
 font-weight: 400;
 color: ${variables.primaryGreen};
 text-align: left;
 padding: 0 2rem;
 }
`;

const Settings = styled.div`

`;

const CopyRight = styled.p`
position: fixed;
bottom: 3rem;
left: 3rem;
font-size: 1.6rem;
margin-top: 1rem;
color: ${variables.primaryGreen};
`;


const sideNavigation = () => {
    return (
        <Nav>
            <NavItems border='true'>
                <li><NavLink to='/dashboard/tasks'><FontAwesomeIcon icon={faTasks}/><p>Tasks</p></NavLink></li>
                <li><FontAwesomeIcon icon={faClipboardList}/> <p>Projects</p></li>
                <li><FontAwesomeIcon icon={faCodeBranch}/> <p>Technologies</p></li>
            </NavItems>
            {/*Dynamic render Component with functionalities to each nav item  */}
            <DynamicContent>
                <h3>Tasks</h3>
                <NavItems border='true'>
                    <li><NavLink to='/dashboard/important-tasks'><FontAwesomeIcon icon={faHeart}/> <p>Important</p>
                    </NavLink></li>
                    <li><NavLink to='/dashboard/upcoming-tasks'><FontAwesomeIcon icon={faStar}/> <p>This week</p>
                    </NavLink></li>
                    <li><NavLink to='/dashboard/completed-tasks'><FontAwesomeIcon icon={faHistory}/> <p>Completed</p>
                    </NavLink></li>
                </NavItems>
            </DynamicContent>
            <Settings>
                <NavItems border='true'>
                    <li><FontAwesomeIcon icon={faCogs}/> <p>Settings</p></li>
                </NavItems>
            </Settings>
            <CopyRight>
                2019 Notes App
            </CopyRight>

        </Nav>
    )
};

export default sideNavigation;