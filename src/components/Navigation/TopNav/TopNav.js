import React from 'react';
import styled from 'styled-components';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserAstronaut,faScroll} from "@fortawesome/free-solid-svg-icons";

const TopNavWrapper = styled.nav`
//position: sticky;
//top: 0;
//z-index: 10;
background: #fcfcfc;
border-bottom: 1px solid #eeeeee;
`;

const Navigation = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  
  padding: 1.5rem 3rem;
  
  li{
    display: inline-block;
    position: relative;
    &:last-child{
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
    
    p{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    }
    
    }
    
    
    &:first-child{
    color: #8EC06C;
    font-family: 'Dancing Script', cursive;
    font-size: 3.5rem;
    transition: all .3s;
    background: #fff;
    
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
    }
    
  }
`;

const topNav = ()=>{
    return(
        <TopNavWrapper>
            <Navigation>
                <NavLink to='/welcomePage'>
                <li>
                    <FontAwesomeIcon icon={faScroll}/>
                    <span>Scroll</span>
                </li>
                </NavLink>
                <li>
                    <p>
                        <FontAwesomeIcon icon={faUserAstronaut}/>
                    </p>

                </li>
            </Navigation>
        </TopNavWrapper>
    )
};

export default topNav;