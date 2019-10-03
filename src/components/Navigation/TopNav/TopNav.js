import React from 'react';
import styled from 'styled-components';
import UserMenu from '../UserMenu/UserMenu';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserAstronaut, faScroll} from "@fortawesome/free-solid-svg-icons";
import * as variables from '../../../utils/variables';
import TopNav from "../../../containers/Tasks";

const Navigation = styled.div`
background: ${variables.primaryGrey};
border-bottom: 1px solid ${variables.secondaryGrey};
display: grid;
grid-template-columns: 30% 40% 30%;
grid-template-rows: repeat(2, max-content);
padding: 1.5rem 3rem;
  
align-items: center;
justify-items: start;
  
  

`;

const LogoWrapper = styled.div`
grid-column: 1/ span 1;

@media(max-width: 1000px){
  grid-column: 2/span 1;
  }

//@media (max-width: 1000px){
//    grid-column: 2/ span 1;
//    }

`

const Logo = styled.p`
    position: relative;
    color: ${variables.primaryGreen};
    font-family: 'Dancing Script', cursive;
    font-size: 6rem;
    transition: all .3s;
    background: ${variables.white};
    justify-self: start;
    
    
    &:hover{
    cursor: pointer;
    transform: translateX(.5rem);
    }
    &::before{
    display: none;
    }
    span{
    
    position: absolute;
    top: 0;
    left: 4rem;
    font-size:4.3rem;
    color: #333;
    
    &::first-letter{
    color: ${variables.white};
    }
    }

`;

const Hamburger = styled.div`
display: none;

grid-column: 2/span 1;
grid-row: 1/span 1;
height: 3.5rem;

&:hover button,
&:hover button::after,
&:hover button::before,
&:focus button,
&:focus button::after,
&:focus button::before{
background: ${variables.primaryGreen};
cursor: pointer;
}

button{
width: 4rem;
height: .35rem;
background: ${variables.fontColorFirst};
border: none;
position: relative;



&::before,
&::after{
width: 4rem;
height: .35rem;
position: absolute;
content: '';
display: block;
background: ${variables.fontColorFirst};
}

&::before{
top: -1rem;
left: 0;
}
&::after{
top: 1rem;
left: 0;

}
}

@media(max-width: 1000px){
  grid-column: 1/span 1;
  display: block;
  }
`;

const ProfileWrapper = styled.div`
grid-column: 3/-1;
grid-row: 1/span 1;
width: 100%;
display: grid;
grid-template-columns: repeat(3, 1fr);
justify-items: center;
`;



const topNav = (props) => {
    return (
        <Navigation>
            <LogoWrapper>
                <NavLink to='/welcomePage'>
                    <Logo>
                        <FontAwesomeIcon icon={faScroll}/>
                        <span>Scroll</span>
                    </Logo>
                </NavLink>
            </LogoWrapper>
            <Hamburger >
                <button onClick={props.showMobile}></button>
            </Hamburger>
            <ProfileWrapper>
                <UserMenu
                    userMenu={props.userMenu}
                    logout={props.logout}
                    showUserMenu = {props.showUserMenu}
                    toggleDarkMode = {props.toggleDarkMode}
                    darkMode = {props.darkMode}
                />
            </ProfileWrapper>
        </Navigation>

    )
};

export default topNav;