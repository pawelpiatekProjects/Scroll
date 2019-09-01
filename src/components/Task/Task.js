import React from 'react';
import styled from 'styled-components';

import {H1} from '../../utils/Headers';

const Task = styled.div`
background: #eee;
margin: 3rem auto;
padding: 1rem;
position: relative;
`;

const Deadline = styled.div`

`;

const Content = styled.p`

`;

const Cross = styled.div`
top: 1rem;
right: 1rem;
width: 2rem;
height: .5rem;
background: red;
border-radius: 20rem;
transform: rotate(45deg);
position: absolute;

&::after{
position: absolute;
content: "";
display: block;
width: 2rem;
height: .5rem;
background: red;
border-radius: 20rem;
transform: rotate(-90deg);
}

&:hover{
cursor: pointer;
}

`;

const task = (props)=>{
    return(
        <Task>
            <Cross onClick={()=>{props.delete(props.id)}}/>
            <H1>{props.title}</H1>
            <Deadline>{props.deadline}</Deadline>
            <Content>{props.content}</Content>
        </Task>
    );
};

export default task;