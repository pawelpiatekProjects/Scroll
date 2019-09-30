import React from 'react';
import styled from 'styled-components';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserAstronaut, faScroll} from "@fortawesome/free-solid-svg-icons";


const Navigation = styled.div`
background: #fcfcfc;
border-bottom: 1px solid #eeeeee;
display: grid;
grid-template-columns: 30% 40% 30%;
grid-template-rows: repeat(2, max-content);
padding: 1.5rem 3rem;
  

justify-items: start;
  
  

`;

const LogoWrapper = styled.div`
grid-column: 1/ span 1;

//@media (max-width: 1000px){
//    grid-column: 2/ span 1;
//    }

`

const Logo = styled.p`
    position: relative;
    color: #8EC06C;
    font-family: 'Dancing Script', cursive;
    font-size: 3.5rem;
    transition: all .3s;
    background: #fff;
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
    left: 2.32rem;
    font-size: 2.5rem;
    color: #333;
    
    &::first-letter{
    color: #fff;
    }
    }

`;
const ProfileWrapper = styled.div`
grid-column: 3/-1;
width: 100%;
display: grid;
grid-template-columns: repeat(3, 1fr);
justify-items: end;
`;

const Profile = styled.button`

    grid-column: 3/-1;
    border: 1px solid #fff;
    font-size: 2rem;
    background: #8EC06C;
    color: #fff;
    border-radius: 50%;
    width: 3.5rem;
    height: 3.5rem;
    position: relative;
    transition: all .3s;
    
        &::before{
      content: '';
      display: inline-block;
      position: absolute;
      width: 3.25rem;
      height: 3.25rem;
      border-radius: 50%;
      border: 2px solid #8EC06C;
      top: 50%;
      left: 50%;
      opacity: 0;
      transform: translate(-50%,-50%) scale(1);
      transition: all .3s;
    
    }
    
    &:hover{
    cursor: pointer;
    background: #ffffff;
    color: #8EC06C;
    }
    
    &:hover::before{
    opacity: 1;
    transform: translate(-50%,-50%) scale(1.2);
    cursor: pointer;
    }
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
            <ProfileWrapper>
                <Profile onClick={props.logout}>
                    <p>
                        <FontAwesomeIcon icon={faUserAstronaut}/>
                    </p>

                </Profile>
            </ProfileWrapper>
        </Navigation>

    )
};

export default topNav;