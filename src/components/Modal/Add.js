import React from 'react';
import styled from 'styled-components';
import {keyframes} from "styled-components";

import TaskAddForm from '../Forms/TaskAddForm';
import NotesAddForm from '../Forms/NotesAddForm';

const Modal = styled.div`
position: fixed;
    z-index: ${props=>props.show ? 11 : 0};
    border: 1px solid #eee;
    border-radius: 2rem;
    background-color: white;
    padding: 10px;
    text-align: center;
    box-sizing: border-box;
    top: 50%;
    left: 50%;
    width: 25%;
    height: 35rem;
  padding: 3rem;
   transform: translate(-50%,-50%);

 opacity: ${props=>props.show ? 1 : 0};


 // transform-origin: left center;
 //transition: all .3s ease-out;
`;

// const modal = keyframes`
//   0%{
//   opacity: 0;
//   transform: translateY(-100%);
//   }
//   50%{
//   opacity: 1;
//   transform: translateY(20%);
//   }
//   100%{
//   opacity: 1;
//   transform: translateY(-50%);
//   }
// `

const Header = styled.h1`
font-weight: bold;
text-align: left;
color: #8EC06C;
margin-bottom: 2rem;
`;


const modal = (props)=>{
    let form;
    if(props.status ==='task'){
        form = <TaskAddForm submit={props.submit} showModall={props.show}/>
    }else{
        form = <NotesAddForm submit={props.submit} showModall={props.show}/>
    }
    return(
        <Modal show={props.show}>
            <Header>Add {props.status}</Header>
            {form}
        </Modal>

    );
};

export default modal;