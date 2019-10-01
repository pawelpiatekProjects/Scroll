import React from 'react';
import styled from 'styled-components';
import SignIn from '../Forms/SignIn';
import SignUp from '../Forms/SignUp';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faScroll} from "@fortawesome/free-solid-svg-icons";
import * as variables from '../../utils/variables';

import img from '../../assets/images/cristina-gottardi-R4y_E5ZQDPg-unsplash.jpg';
import axios from "axios";

const IntroPageWrapper = styled.div`
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
    color: ${variables.primaryGreen};
    font-family: 'Dancing Script', cursive;
    font-size: 6rem;
    transition: all .3s;
    
    
    
    &::before{
    display: none;
    }
    span{
    
    position: absolute;
    top: 0;
    left: 14.5rem;
    font-size: 4rem;
    color: ${variables.black};
    
    @media(max-width: 1500px){
    left: 14rem;
    }
    
    @media(max-width: 800px){
    left: 13.5rem;
    }
    
    &::first-letter{
    color: ${variables.white};
    }
    }
    }
    
    @media(max-width: 700px){
    left: 9rem;
    }
`;

const FormWrapper = styled.div`
background-color: ${variables.darkGreySecondary};
clip-path: polygon(0 0, 100% 10%, 100% 100%, 0% 100%);
border-radius: 2rem;
display: block;
height: ${props=>props.height ? 50: 60}rem;
width: 25%;
margin: 0 auto;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);

opacity: .9;

    @media(max-width: 1300px){
width: 40%;
}

    @media(max-width: 700px){
height: ${props=>props.height ? 40: 50}rem;
width: 60%;
}

   @media(max-width: 500px){

width: 80%;
}
`;

const FormButton = styled.button`
  position: absolute;
  top: 2rem;
  left: 2rem;
  color: ${variables.primaryGreen};
  background: transparent;
  border: none;font-size: 1.2rem;
  font-size: 1.8rem;
  transition: all .3s;
  
  &:hover{
  outline: none;
  color: ${variables.white};
  cursor: pointer;
  }
  &:focus{
  outline: none;
  }
  
    @media(max-width: 700px){
font-size: 1.2rem;
top: 1.5rem;
  left: 1.5rem;
}
`;

const introPage =(props)=>{



        let form;
        if(props.isSignIn){
            form = <SignIn {...props} method={props.login}/>;
        }else{
            form = <SignUp  {...props} method={props.signup} />
        }
        return (
            <IntroPageWrapper>
                <LogoWrapper>
                    <Logo>
                        <FontAwesomeIcon icon={faScroll}/>
                        <span>Scroll</span>
                    </Logo>

                </LogoWrapper>
                <FormWrapper height={props.isSignIn}>
                    <FormButton onClick={props.onChangeForm}>{props.isSignIn ? 'Sign Up': 'Sign In'}</FormButton>
                    {form}
                </FormWrapper>


            </IntroPageWrapper>
        );


};

export default introPage;