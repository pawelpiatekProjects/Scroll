import React from 'react';
import {NavLink} from "react-router-dom";
import styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTasks, faClipboardList, faCodeBranch, faHeart, faStar, faHistory, faCogs} from "@fortawesome/free-solid-svg-icons";

const Nav = styled.nav`

position: sticky;
top: 0;
z-index: 9;
height: 100vh;
padding: 0 1rem;
background: #fcfcfc;
  border: 1px solid #eee;

`;

const NavItems = styled.ul`
  list-style: none;
  text-align: left;
  border-bottom: ${props=>props.border ? '1px solid #eee' : 'none' };
  padding:3rem 2rem;
  
    li{
    margin: 1rem 0;
    transition: all .2s;
   
    
      
      p{
      display: inline-block;
       margin-left: 1rem;
      }
      
      a{
      text-decoration: none;
      color: #000;
     
      
      &:hover{
      color: #8EC06C;
      cursor: pointer;
    }
    &:active,
    &:focus{
      color: #8EC06C;
    }
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
 padding: 0 2rem;
 }
`;

const Settings = styled.div`

`;

const CopyRight = styled.p`
margin-top: 1rem;
color: #8EC06C;
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
                    <li><NavLink to='/dashboard/important-tasks'><FontAwesomeIcon icon={faHeart}/> <p>Important</p></NavLink></li>
                    <li><NavLink to='/dashboard/upcoming-tasks'><FontAwesomeIcon icon={faStar}/> <p>This week</p></NavLink></li>
                    <li><NavLink to='/dashboard/completed-tasks'><FontAwesomeIcon icon={faHistory}/> <p>Completed</p></NavLink></li>
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