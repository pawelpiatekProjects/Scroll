import React from 'react';
import styled from 'styled-components';
import SignIn from '../Forms/SignIn';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faScroll} from "@fortawesome/free-solid-svg-icons";

import img from '../../assets/images/cristina-gottardi-R4y_E5ZQDPg-unsplash.jpg';

const IntroPage = styled.div`
background-image: url(${img});
height: 100vh;
background-size: cover;
opacity: .8;
position: relative;
`;

const LogoWrapper = styled.div`
width: 20%;
height: 10rem;
padding: .5rem;
display: flex;
align-items: center;
justify-items: center;
align-content: center;
justify-content: center;
margin: 0 auto;
display: inline-block;
text-align: center;
  position: absolute;
  top: 0;
  left: 0;
 
  
  border-radius: 4rem;
`;

const Logo = styled.div`
//display: inline-block;
    position: relative;
    //top: 50%;
    //left: 50%;
    transform: translate(-15%,15%);
    
    
    
    &:first-child{
    color: #8EC06C;
    font-family: 'Dancing Script', cursive;
    font-size: 6rem;
    transition: all .3s;
    
    
    
    &::before{
    display: none;
    }
    span{
    
    position: absolute;
    top: 0;
    left: 10rem;
    font-size: 4rem;
    color: #000;
    
    &::first-letter{
    color: #fff;
    }
    }
    }
`;

const introPage = () => {
    return (
        <IntroPage>
            <LogoWrapper>
                <Logo>
                    <FontAwesomeIcon icon={faScroll}/>
                    <span>Scroll</span>
                </Logo>
            </LogoWrapper>
            <SignIn/>
        </IntroPage>
    )
};

export default introPage;