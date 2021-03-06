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
    faCogs, faCloudMoon, faToggleOn, faToggleOff, faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import * as variables from '../../../utils/variables';

const Nav = styled.nav`

position: fixed;
top: 0;
left: 0;
z-index: 20;
height: 100vh;
padding: 0 1rem;
background: ${variables.primaryGrey};
  border: 1px solid ${variables.secondaryGrey};
  transform: ${props=>props.show ? `translateX(0)`: `translateX(-100%)`};
  
 transition: all .5s;
 
 @media(max-width: 1000px){
 width: 25%;
 }
 
 @media(max-width: 700px){
 width: 30%;
 }
 
 @media(max-width: 600px){
 width: 35%;
 }
 
 @media(max-width: 500px){
 width: 45%;
 }
 
 @media(max-width: 400px){
 width: 50%;
 }

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

const Accordin = styled.div`

`;

const ToggleButton = styled.button`
background:transparent;
border: none;
font-size: 2rem;
margin-top: .5rem;
margin-left: .5rem;
color: ${props=>props.darkMode ? variables.fontColorFirst : variables.white};
transition: all .3s;

&:hover{
color: ${props=>props.darkMode ? variables.white : variables.fontColorFirst};
cursor: pointer;
}

&:focus{
outline: none;
}
`;

const mobileNav = (props) => {
    return (
        <Nav show={props.show}>
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
            <Accordin>
                <li>
                    <span><FontAwesomeIcon icon={faCloudMoon}/></span>
                    <span>Dark Mode</span>
                    <ToggleButton
                        onClick={props.toggleDarkMode}
                        darkMode={props.darkMode}>
                        <FontAwesomeIcon icon={props.darkMode ? faToggleOn : faToggleOff}/>
                    </ToggleButton>
                </li>
                <li><span><FontAwesomeIcon icon={faCogs}/></span><span>Settings</span></li>

                <li onClick={props.logout}><span><FontAwesomeIcon icon={faSignOutAlt}/></span><span>Sign Out</span></li>
            </Accordin>
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

export default mobileNav;