import React from 'react';
import styled,{keyframes} from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart,faCheck,faInfo} from "@fortawesome/free-solid-svg-icons";



const Task = styled.div`
display: grid;
grid-template-columns: repeat(4,1fr);
grid-template-rows: 5rem 1fr;
justify-content: start;
align-content: center;
justify-items: start;
align-items: center;
opacity: ${props=>props.passed ? '.6' : '1'};




background: #FCFCFC;
margin: 2rem auto;
padding: 1rem 3rem 3rem 3rem;
position: relative;
border-radius: .5rem;
`;

const Title = styled.div`
grid-column: 1/span 1;
grid-row: 1/ span 1;
font-size: 1.2rem;
font-weight: bold;
`;

const Deadline = styled.div`
grid-column: 2/span 1;
grid-row: 1/ span 1;
font-size: 1.2rem;
span{
font-weight: bold;
}
`;

const Left = styled.div`
grid-column: 3/ span 1;
grid-row: 1/ span 1;
font-size: 1.2rem;
color: ${props=>props.passed ? '#FF6C5F' : '#000'};
span{
font-weight: bold;
}
`;

const Controlls = styled.div`
grid-row: 4/span 1;
grid-row: 1/span 1;
`;

const Control = styled.button`
  padding: .5rem;
  width: 3rem;
  border: none;
  border-radius: 2rem;
  color: #fff;;
  background: ${props=>props.color};
  margin: 0 .25rem;
  
  &:hover{
  cursor: pointer;
  background: #fff;
  border: 1px solid ${props=>props.color};
  color: ${props=>props.color};
  }
`;





const ControlHeart = styled.button`
padding: .5rem;
  width: 3rem;
  border: none;
  border-radius: 2rem;
  color: ${props=>props.important ? '#FF6C5F' : '#fff'};
  background: ${props=>props.important ? '#eee' : '#FF6C5F'};
  border: 1px solid #FF6C5F;
  margin: 0 .25rem;
  animation: ${props=>props.important ? 'heart .3s ease-out' : 'none'};
  
  @keyframes heart {
    0% {
    background: #FF6C5F ;
    color: #fff;
    transform: scale(1);
    }
    50%{
    background: #FF6C5F ;
    color: #fff;
    transform: scale(1.5);
    }
    100% {
    background: #fff ;
    color: #FF6C5F;
    transform: scale(1);
    }
}
  
  &:hover,
  &:focus{
  cursor: ${props=>props.important ? 'not-allowed' : 'pointer'};
  background: ${props=>props.important ? '#eee' : '#fff'};
  border: 1px solid #FF6C5F;
  color: #FF6C5F;
  outline: none;
  }
  
  &:active{
  
  }
`;

const Content = styled.p`
grid-column: 1/ -1;
grid-row: 2/span 1;
text-align: left;
border-top: 2px solid ${props=>props.important ?'#FF6C5F': '#8EC06C'} ;
padding: 2rem 0;
width: 100%;
`;



const task = (props)=>{

let left;
let passed;
if(Math.round((  new Date(props.deadline)- new Date())/86400000) > 0){
   left = Math.round((  new Date(props.deadline)- new Date())/86400000).toString() + ' days';
   passed = false;
}else{
    left='Deadline has passed';
    passed = true;
}
    return(
        <Task passed={passed}>
            <Title>{props.title}</Title>
            <Deadline><span>{}Deadline: </span>{props.deadline}</Deadline>
            <Left passed={passed}><span>{passed ? '' : 'Left: '}</span> {left}</Left>
            <Controlls>
                <ControlHeart  important={props.important} onClick={()=>{props.importantAdd(props.id)}}>
                    <FontAwesomeIcon icon={faHeart}/>
                </ControlHeart>
                <Control color='#8EC06C' onClick={()=>{props.delete(props.id)}} important={props.important}>
                    <FontAwesomeIcon icon={faCheck}/>
                </Control>
                <Control color='#FFCC2F'>
                    <FontAwesomeIcon icon={faInfo}/>
                </Control>
            </Controlls>
            <Content important={props.important}>{props.content}</Content>
        </Task>
    );
};

export default task;