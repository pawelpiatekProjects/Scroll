import React from 'react';
import styled from 'styled-components';
import * as variables from '../../utils/variables';

import TaskAddForm from '../Forms/TaskAddForm';
import NotesAddForm from '../Forms/NotesAddForm';
import TaskEditForm from '../Forms/TaskEditForm';

const Modal = styled.div`
position: fixed;
    z-index: ${props=>props.show ? 11 : 0};
    border: 1px solid ${variables.secondaryGrey};
    border-radius: 2rem;
    background-color: ${variables.white};
    padding: 10px;
    text-align: center;
    box-sizing: border-box;
    top: 50%;
    left: 50%;
    width: 25%;
    height: 42.5rem;
    padding: 3rem;
   transform: translate(-50%,-50%);

 opacity: ${props=>props.show ? 1 : 0};



@media(max-width: 1100px){
width: 50%;
}

@media(max-width: 900px){
width: 55%;
}

@media(max-width: 800px){
width: 55%;
}

@media(max-width: 700px){
width: 40%;
}

@media(max-width: 600px){
width: 70%;
}

@media(max-width: 500px){
width: 75%;
}

@media(max-width: 400px){
width: 80%;
}

`;



const Header = styled.h1`
font-size: 3rem;
font-weight: bold;
text-align: left;
color: ${variables.primaryGreen};
margin-bottom: 4rem;
`;


const modal = (props)=>{

    let form;
    let header;
    if(props.status ==='task'){
        form = <TaskAddForm submit={props.submit} showModall={props.show}/>
        header = 'Add task';
    }
    if(props.status ==='note'){
        form = <NotesAddForm submit={props.submit} showModall={props.show}/>
        header = 'Add note';
    }
    if(props.status=== 'taskEdit'){
        form =<TaskEditForm id={props.id} submit={props.submit} showModall={props.show}/>
        header = 'Edit task';
    }
    return(
        <Modal show={props.show}>
            <Header>{header}</Header>
            {form}
        </Modal>
    );
};

export default modal;