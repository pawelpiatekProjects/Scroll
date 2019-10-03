import React from 'react';
import styled from 'styled-components';

const ErrorWrapper = styled.div`
grid-column: 2/-1;

margin: 6rem ;
background: #fcfcfc;
padding: 5rem;
height: 30rem;
h1{
color:#FF6C5F;
}
`;

const error= (props)=>{
    return(
        <ErrorWrapper>
            <h1>{props.message}!</h1>

        </ErrorWrapper>
    )
};

export default error;