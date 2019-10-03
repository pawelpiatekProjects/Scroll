import React from 'react';
import styled from 'styled-components';
import {Formik, Field, Form} from "formik";
import * as Yup from 'yup';
import * as variables from '../../utils/variables';

const SignInForm = styled.div`


background: ${variables.darkGreyPrimary};
opacity: .8;
border-radius: 2rem 0 2rem 2rem ;
width: 100%;
height: 45rem;
margin: 0 auto;
position: absolute;
bottom:0;
left: 50%;
transform: translate(-50%);
padding: 2rem 0;
form{
width: 100%;
margin-top: 4rem;

grid-template-columns: repeat(6,1fr);
grid-template-rows: repeat(6,max-content);
justify-items: center;
align-items: center;

}

@media(max-width: 700px){
height: 36rem;

}


`;



const H1 = styled.h1`
grid-column: 1/-1;
color: ${variables.white};
margin-bottom: 3rem;
font-size: 3.5rem;

@media(max-width: 700px){
font-size: 2.5rem;
}
`;

//todo: media queries in forms

const Button = styled.button`

//position: absolute;
// right: ${props=>props.right}rem;
// bottom: ${props=>props.bottom}rem;
width: 50%;
height: 3rem;
padding: .5rem;
background: ${variables.primaryGreen};
border: 1px solid ${variables.primaryGreen};
border-radius: 2rem;
color: ${variables.white};
font-size: 1.6rem;
transition: all .3s;
margin: 3rem auto;
&:hover,
&:focus{
cursor: pointer;
outline: none;
background: ${variables.white};
color: ${variables.primaryGreen};
}

@media(max-width: 700px){
grid-column: 1/-1;
width: 40%;
font-size: 1.4rem;
}
`;

const FieldWrapper = styled.div`

width: 100%;
margin: 0 auto;

  input{
  grid-column: 1/-1;
  border: none;
  border-bottom: 1px solid ${variables.primaryGreen};
  background:transparent;
  color: ${variables.white};
  padding: .5rem 0;
  width: 80%;
  font-size: 1.6rem;
  
  &:hover,
  &:focus{
  outline: none;
  cursor: pointer;
  border-bottom: 1px solid ${variables.white};
  }
  }
  
  @media(max-width: 700px){
grid-column: 1/-1;
width: 80%;
}
`;

const Error = styled.p`
grid-column: 1/-1;
font-size: 1.4rem;
height: 1rem;
margin: 0 auto 2em auto;
width: 50%;
text-align: left;
color: ${variables.primaryRed};

`;


const Forgot = styled.div`
grid-column: 1/ -1;
color: ${variables.white};
font-size: 1.6rem;

&:hover{
cursor: pointer;
}



@media(max-width: 700px){

font-size: 1.2rem;
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

                    onSubmit={(values) => {
                        props.method(values);
                        // props.history.push('/dashboard/tasks');
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
