import React from 'react';
import {Formik, Field, Form, ErrorMessage} from "formik";
import * as Yup from 'yup';
import styled from 'styled-components';

const FieldWrapperTitle = styled.div`
width: 100%;
margin: .5rem auto;
  input{
  width: 100%;
  border: none;
  border-bottom: 1px solid #eee;
  
  }
`;

const ErrorTitle = styled.p`

`;

const FieldWrapperDeadline = styled.div`

`;

const ErrorDeadline = styled.p`

`;

const FieldWrapperContent = styled.div`

`;

const ErrorContent = styled.p`

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

const CustomDate = ({
                        field,
                        form:{touched,errors},
                        ...props
                    })=>{
    return(
        <input type='date' {...field}{...props}/>
    )
}

const taskAddForm = (props)=>{
    return(
        <Formik

            initialValues={{
                title: '',
                deadline:'',
                content: ''
            }}

            validationSchema={SignupSchema}

            onSubmit={(values)=>{
                 console.log(values)
                props.submit(values)
            }}>
            {({errors,touched})=>(
                <Form>
                    <FieldWrapperTitle>
                        <Field name='title' placeholder='Title'/>
                    </FieldWrapperTitle>
                    {errors.title && touched.title ? (
                        <ErrorTitle>{errors.title}</ErrorTitle>
                    ):null}
                    <FieldWrapperDeadline>
                        <Field name='deadline' component={CustomDate}/>
                        {/*date didn't work*/}
                    </FieldWrapperDeadline>
                    {errors.deadline && touched.deadline ? (
                        <ErrorDeadline>{errors.deadline}</ErrorDeadline>
                    ):null}

                    <FieldWrapperContent>
                        <Field name='content' placeholder='Content' component='textarea'/>
                    </FieldWrapperContent>
                    {errors.content && touched.content ? (
                        <ErrorContent>{errors.content}</ErrorContent>
                    ):null}


                    <button type='submit'>Submit</button>
                </Form>
            )}
        </Formik>
    )
};

export default taskAddForm;

