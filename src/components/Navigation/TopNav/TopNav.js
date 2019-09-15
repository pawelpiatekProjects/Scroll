import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserAstronaut,faScroll} from "@fortawesome/free-solid-svg-icons";

const TopNavWrapper = styled.nav`
//position: sticky;
//top: 0;
//z-index: 10;
border-bottom: 1px solid #eeeeee;
`;

const Navigation = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  
  padding: 1.5rem 3rem;
  
  li{
    display: inline-block;
    font-size: 1.6rem;
    position: relative;
    
    &:first-child{
    color: #8EC06C;
    font-family: 'Dancing Script', cursive;
    font-size: 3.5rem;
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
                <li>
                    <FontAwesomeIcon icon={faScroll}/>
                    <span>Scroll</span>
                </li>
                <li><FontAwesomeIcon icon={faUserAstronaut}/></li>
            </Navigation>
        </TopNavWrapper>
    )
};

export default topNav;