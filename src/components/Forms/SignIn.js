import React from 'react';
import styled from 'styled-components';
import {Redirect} from "react-router-dom";
import {Formik, Field, Form, ErrorMessage} from "formik";
import * as Yup from 'yup';
import {AddButton} from "../../utils/AddButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

const SignInForm = styled.div`

`;

const FieldEmail = styled.div`

`;

const ErrorEmail = styled.p`

`;

const FieldPassword = styled.div`

`;

const ErrorPassword = styled.p`

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
            <Formik

                initialValues={{
                    email: '',
                    password: ''
                }}

                validationSchema={SignupSchema}

                onSubmit={() => {

                  return <Redirect to='/dashboard/tasks'/>
                }}>
                {({errors, touched}) => (
                    <Form>
                        <FieldEmail>
                            <Field name='email' placeholder='Email'/>
                        </FieldEmail>
                        {errors.email && touched.email ? (
                            <ErrorEmail>{errors.email}</ErrorEmail>
                        ) : <ErrorEmail></ErrorEmail>}
                        <FieldPassword>
                            <Field name='password' placeholder='Password'/>
                        </FieldPassword>
                        {errors.password && touched.password ? (
                            <ErrorPassword>{errors.password}</ErrorPassword>
                        ) : <ErrorPassword></ErrorPassword>}

                        <AddButton type='submit' right='2' bottom='2' fontSize='1.4'><FontAwesomeIcon
                            icon={faPlus}/></AddButton>
                    </Form>
                )}
            </Formik>
        </SignInForm>
    )
};

export default signIn;
