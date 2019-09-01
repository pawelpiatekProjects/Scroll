import React from 'react';
import styled from 'styled-components';

import {H1} from '../../utils/Headers';

const Task = styled.div`
background: #eee;
margin: 3rem auto;
padding: 1rem;
`;

const Deadline = styled.div`

`;

const Content = styled.p`

`;

const task = (props)=>{
    return(
        <Task>
            <H1>{props.title}</H1>
            <Deadline>{props.deadline}</Deadline>
            <Content>{props.content}</Content>
        </Task>
    );
};

export default task;