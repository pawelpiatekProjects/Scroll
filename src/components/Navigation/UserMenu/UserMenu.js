import React from 'react';
import styled from 'styled-components';
import Accordin from './Accordin';
import * as variables from "../../../utils/variables";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserAstronaut, faCloudMoon,faCogs, faSignOutAlt, faToggleOff,faToggleOn} from "@fortawesome/free-solid-svg-icons";

const UserMenuWrapper = styled.div`
 grid-column: 3/span 1;
 
 z-index: 20;
`;

const Profile = styled.button`

   
    border: 1px solid ${variables.white};
    font-size: 3rem;
    background: ${variables.primaryGreen};
    color: ${variables.white};
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    position: relative;
    transition: all .3s;
    
        &::before{
      content: '';
      display: inline-block;
      position: absolute;
      width: 5.25rem;
      height: 5.25rem;
      border-radius: 50%;
      border: 2px solid ${variables.primaryGreen};
      top: 50%;
      left: 50%;
      opacity: 0;
      transform: translate(-50%,-50%) scale(1);
      transition: all .3s;
    
    }
    
    &:hover
  {
    cursor: pointer;
    background: ${variables.white};
    color: ${variables.primaryGreen};
    outline: none;
    }
    
    &:focus{
    outline: none;
    }
    
    &:hover::before{
    opacity: 1;
    transform: translate(-50%,-50%) scale(1.2);
    cursor: pointer;
    }
`;



const userMenu =(props)=>{

    return(
        <UserMenuWrapper>
            <Profile onClick={props.showUserMenu}>
                <p>
                    <FontAwesomeIcon icon={faUserAstronaut}/>
                </p>
            </Profile>
            <Accordin
                userMenu={props.userMenu}
                toggleDarkMode ={props.toggleDarkMode}
                darkMode={props.darkMode}
                logout={props.logout}
            />
        </UserMenuWrapper>
    )
};

export default userMenu;