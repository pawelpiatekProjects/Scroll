import React from 'react';
import styled from 'styled-components';
import {Formik, Field, Form, ErrorMessage} from "formik";
import * as Yup from 'yup';
import * as variables from '../../utils/variables';


const SignUpForm = styled.div`
background: ${variables.darkGreyPrimary};
opacity: .8;
border-radius: 2rem 0 2rem 2rem ;
width: 100%;
height: 54rem;
margin: 0 auto;
position: absolute;
bottom:0;
left: 50%;
transform: translate(-50%);
padding: 2rem 0;
form{
margin-top: 4rem;
}

@media(max-width: 700px){
height: 45rem ;
}

`;



const H1 = styled.h1`
color: ${variables.white};
margin-bottom: 3rem;
font-size: 3.5rem;

@media(max-width: 700px){
font-size: 2.5rem;
}
`;

const Button = styled.button`
position: absolute;
right: ${props=>props.right}rem;
bottom: ${props=>props.bottom}rem;
width: 30%;
padding: .5rem;
background: ${variables.primaryGreen};
border: 1px solid ${variables.primaryGreen};
border-radius: 2rem;
color: ${variables.white};
font-size: 1.6rem;
transition: all .3s;

&:hover,
&:focus{
cursor: pointer;
outline: none;
background: ${variables.white};
color: ${variables.primaryGreen};
}

@media(max-width: 800px){
width: 40%;
}

@media(max-width: 700px){
width: 50%;
font-size: 1.4rem;
}


`;

const FieldWrapper = styled.div`
  input{
  font-size: 1.6rem;
  border: none;
  border-bottom: 1px solid ${variables.primaryGreen};
  background:transparent;
  color: ${variables.white};
  padding: .5rem 0;
  width: 80%;
  
  &:hover,
  &:focus{
  outline: none;
  cursor: pointer;
  border-bottom: 1px solid ${variables.white};
  }
  }
  
  @media(max-width: 700px){
font-size: 1.4rem;
}
`;

const Error = styled.p`
height: 1rem;
font-size: 1.4rem;
margin: 0 auto 2em auto;
width: 60%;
text-align: left;
color: ${variables.primaryRed};

  @media(max-width: 700px){
font-size: 1rem;
}

`;



const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .min(2, 'Too Short')
        .max(50, 'Too Long')
        .required('Email is required')
        .email('Invalid email'),
    name: Yup.string()
        .min(2,'Too Short')
        .required('Name is required'),
    password: Yup.string()
        .min(8, 'Too Short')
        .max(20, 'Too Long')
        .required('Password is required'),
    repeatPassword: Yup.string()
        .oneOf([Yup.ref('password'),null],'Passwords must match')

});
//todo: redirecting doesn't work
const signUp = (props) => {
    return (
        <SignUpForm>
            <H1>Sign Up</H1>

            <Formik

                initialValues={{
                    email: '',
                    name: '',
                    password: '',
                    repeatPassword: ''
                }}

                validationSchema={SignupSchema}

                onSubmit={(values) => {
                    // props.history.push('/dashboard/tasks');
                    // console.log('added user');
                    props.method(values);
                    console.log(values)
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
                            <Field name='name' placeholder='Name'/>
                        </FieldWrapper>
                        {errors.name && touched.name ? (
                            <Error>{errors.name}</Error>
                        ) : <Error></Error>}
                        <FieldWrapper>
                            <Field name='password' placeholder='Password' type='password'/>
                        </FieldWrapper>
                        {errors.password && touched.password ? (
                            <Error>{errors.password}</Error>
                        ) : <Error></Error>}
                        <FieldWrapper>
                            <Field name='repeatPassword' placeholder='Repeat Password' type='password'/>
                        </FieldWrapper>
                        {errors.repeatPassword && touched.repeatPassword ? (
                            <Error>{errors.repeatPassword}</Error>
                        ) : <Error></Error>}


                        <Button right='4' bottom='4' type='submit'>Sign Up</Button>
                    </Form>
                )}
            </Formik>

        </SignUpForm>

    )
};

export default signUp;
