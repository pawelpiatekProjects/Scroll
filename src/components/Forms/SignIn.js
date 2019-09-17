import React from 'react';
import styled from 'styled-components';
import {Redirect} from "react-router-dom";
import {Formik, Field, Form, ErrorMessage} from "formik";
import * as Yup from 'yup';
import {AddButton} from "../../utils/AddButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

const SignInForm = styled.div`
background: #333;
opacity: .8;
border-radius: 2rem;
width: 25%;
height: 27.5rem;
margin: 0 auto;
position: absolute;
top:50%;
left: 50%;
transform: translate(-50%,-50%);
padding: 2rem 0;
form{
margin-top: 4rem;
}

`;



const H1 = styled.h1`
color: #ffffff;
margin-bottom: 3rem;
`;

const Button = styled.button`
position: absolute;
right: ${props=>props.right}rem;
bottom: ${props=>props.bottom}rem;
width: 30%;
padding: .5rem;
background: #8EC06C;
border: 1px solid #8EC06C;
border-radius: 2rem;
color: #fff;
font-size: ${props=>props.fontSize}rem;
transition: all .3s;

&:hover,
&:focus{
cursor: pointer;
outline: none;
background: #fff;
color: #8EC06C;
}
`;

const FieldWrapper = styled.div`
  input{
  border: none;
  border-bottom: 1px solid #8EC06C;
  background:transparent;
  color: #fff;
  padding: .5rem 0;
  width: 60%;
  
  &:hover,
  &:focus{
  outline: none;
  cursor: pointer;
  border-bottom: 1px solid #fff;
  }
  }
`;

const Error = styled.p`
height: 1rem;
margin: 0 auto 2em auto;
width: 60%;
text-align: left;
color: #FF6C5F;

`;


const Forgot = styled.div`
color: #ffffff;
position: absolute;
bottom: 3.5rem;
left: 4rem;

&:hover{
cursor: pointer;
}
`;


const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .min(2, 'Too Short')
        .max(50, 'Too Long')
        .required('Email is required')
        .email('Invalid email'),
    password: Yup.string()
        .min(8, 'Too Short')
        .max(20, 'Too Long')
        .required('Password is required'),
});
//todo: redirecting doesn't work
const signIn = (props) => {
    return (
        <SignInForm>
            <H1>Sign In</H1>

                <Formik

                    initialValues={{
                        email: '',
                        password: ''
                    }}

                    validationSchema={SignupSchema}

                    onSubmit={() => {
                        props.history.push('/dashboard/tasks');
                    }}>
                    {({errors, touched}) => (
                        <Form>
                            <FieldWrapper>
                                <Field name='email' placeholder='Email'/>
                            </FieldWrapper>
                            {errors.email && touched.email ? (
                                <Error>{errors.email}</Error>
                            ) : <Error></Error>}
                            <FieldWrapper>
                                <Field name='password' placeholder='Password' type='password'/>
                            </FieldWrapper>
                            {errors.password && touched.password ? (
                                <Error>{errors.password}</Error>
                            ) : <Error></Error>}

                            <Forgot><p>Forgot password?</p></Forgot>
                            <Button right='4' bottom='4' type='submit'>Sign In</Button>
                        </Form>
                    )}
                </Formik>

        </SignInForm>

    )
};

export default signIn;
