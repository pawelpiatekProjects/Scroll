import React from 'react';
import styled from 'styled-components';

import TaskAddForm from '../Forms/TaskAddForm';

const Modal = styled.div`
height: 100%;
 background: #fff;
 border-radius: 1.5rem;
 width: 25%;
padding: 2rem;
 margin: 0 auto;
 height: 60vh;
 position: fixed;
 top: 50%;
 left: 50%;
 
 //transform: translate(-50%,-50%);
 z-index: 11;
 // opacity: ${props=>props.show ? 1 : 0};
 transform: scale(${props=>props.show ? 1 : 0}) translate(-50%,-50%);
 transform-origin: left center;
 transition: all .3s ease-out;
`;

const Header = styled.h1`
font-weight: bold;
text-align: left;
color: #8EC06C;
margin-bottom: 2rem;
`;

const modal = (props)=>{
    return(
        <Modal show={props.show}>
            <Header>Add Task</Header>
            <TaskAddForm submit={props.submit} showModall={props.show}/>
        </Modal>

    );
};

export default modal;