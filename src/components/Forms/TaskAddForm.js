import React from 'react';
import {Formik, Field, Form, ErrorMessage} from "formik";
import * as Yup from 'yup';
import styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

import {AddButton} from '../../utils/AddButton';

const FieldWrapperTitle = styled.div`
width: 100%;

  input{
  width: 100%;
  border: none;
  border-bottom: 1px solid #eee;
  
  &:focus,
  &:active{
  border-bottom: 1px solid  #8EC06C;
  outline: none;
  
  }
  }
`;

const ErrorTitle = styled.p`
font-size: .8rem;
margin-bottom: 0;
text-align: left;
height: 1rem;
margin-bottom: 1rem;
color: #FF6C5F;
`;

const FieldWrapperDeadline = styled.div`
width: 100%;

  input{
  width: 100%;
  border: none;
  border-bottom: 1px solid #eee;
  
  &:focus,
  &:active{
  border-bottom: 1px solid  #8EC06C;
  outline: none;
  }
  }
`;

const ErrorDeadline = styled.p`
font-size: .8rem;
margin-bottom: 0;
text-align: left;
height: 1rem;
margin-bottom: 1rem;

`;

const FieldWrapperContent = styled.div`
width: 100%;

  textarea{
  width: 100%;
  height: 5rem;
  border: none;
  border: 1px solid #eee;
  
  &:focus,
  &:active{
  border: 1px solid  #8EC06C;
  outline: none;
  
  }
  }
`;

const ErrorContent = styled.p`
font-size: .8rem;
margin-bottom: 0;
text-align: left;
height: 1rem;
margin-bottom: 1rem;
color: #FF6C5F;
`;


const SignupSchema = Yup.object().shape({
    title: Yup.string()
        .min(2, 'Too Short')
        .max(50, 'Too Long')
        .required('Title is required'),
    deadline: Yup.string(),

    content: Yup.string()
        .required('Content is required')
});

const CustomDate = ({field, form: {touched, errors}, ...props}) => {
    return (
        <input type='date' {...field}{...props}/>
    )
};



const taskAddForm = (props) => {
    return (
        <Formik

            initialValues={{
                title: '',
                deadline: '',
                content: ''
            }}

            validationSchema={SignupSchema}

            onSubmit={(values) => {
                console.log(values)
                props.submit(values)
            }}>
            {({errors, touched}) => (
                <Form>
                    <FieldWrapperTitle>
                        <Field name='title' placeholder='Title'/>
                    </FieldWrapperTitle>
                    {errors.title && touched.title ? (
                        <ErrorTitle>{errors.title}</ErrorTitle>
                    ) : <ErrorTitle></ErrorTitle>}
                    <FieldWrapperDeadline>
                        <Field name='deadline' component={CustomDate}/>
                        {/*date didn't work*/}
                    </FieldWrapperDeadline>
                    {errors.deadline && touched.deadline ? (
                        <ErrorDeadline>{errors.deadline}</ErrorDeadline>
                    ) : <ErrorDeadline></ErrorDeadline>}

                    <FieldWrapperContent>
                        <Field name='content' placeholder='Content' component='textarea'/>
                    </FieldWrapperContent>
                    {errors.content && touched.content ? (
                        <ErrorContent>{errors.content}</ErrorContent>
                    ) : <ErrorContent></ErrorContent>}


                    <AddButton type='submit' right='2' bottom='2' fontSize='1.4'><FontAwesomeIcon
                        icon={faPlus}/></AddButton>
                </Form>
            )}
        </Formik>
    )
};

export default taskAddForm;

