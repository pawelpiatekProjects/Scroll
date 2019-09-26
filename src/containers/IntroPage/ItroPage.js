import React,{Component} from 'react';
import styled from 'styled-components';
import SignIn from '../../components/Forms/SignIn';
import SignUp from '../../components/Forms/SignUp';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faScroll} from "@fortawesome/free-solid-svg-icons";

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

const FormWrapper = styled.div`
background-color: #222;
clip-path: polygon(0 0, 100% 10%, 100% 100%, 0% 100%);
border-radius: 2rem;
display: block;
height: ${props=>props.height ? 35 : 42.5}rem;
width: 25%;
margin: 0 auto;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);

opacity: .9;
`;

const FormButton = styled.button`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  color: #8EC06C;
  background: transparent;
  border: none;font-size: 1.2rem;
  
  transition: all .3s;
  
  &:hover{
  outline: none;
  color: #fff;
  cursor: pointer;
  }
  &:focus{
  outline: none;
  }
`;

class IntroPage extends Component{

    state={
        isSignIn: true
    }

    onSignUpHandler = (values)=>{
        axios.post('http://localhost:8080/auth/signup', {
            email: values.email,
            password: values.password,
            name: values.name
        }).then(res=>{
            console.log(res)
            this.onChangeForm();
        }).catch(err=>console.log(err))
    }

    onChangeForm = ()=>{

        this.setState(prevState=>({isSignIn: !prevState.isSignIn}));

    }
    render(){
        let form;
        if(this.state.isSignIn){
            form = <SignIn {...this.props} />;
        }else{
            form = <SignUp  {...this.props} method={this.onSignUpHandler} />
        }
        return (
            <IntroPageWrapper>
                <LogoWrapper>
                    <Logo>
                        <FontAwesomeIcon icon={faScroll}/>
                        <span>Scroll</span>
                    </Logo>

                </LogoWrapper>
                <FormWrapper height={this.state.isSignIn}>
                    <FormButton onClick={this.onChangeForm}>{this.state.isSignIn ? 'Sign Up': 'Sign In'}</FormButton>
                    {form}
                </FormWrapper>


            </IntroPageWrapper>
        )
    }

};

export default IntroPage;