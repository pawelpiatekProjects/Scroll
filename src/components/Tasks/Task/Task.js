import React from 'react';
import styled,{keyframes} from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart,faCheck,faInfo} from "@fortawesome/free-solid-svg-icons";
import * as variables from '../../../utils/variables';



const Task = styled.div`
display: grid;
grid-template-columns: repeat(4,1fr);
grid-template-rows: 5rem 1fr;
justify-content: start;
align-content: center;
justify-items: start;
align-items: center;
opacity: ${props=>props.passed ? '.6' : '1'};

background: ${variables.secondaryGrey};
margin: 2rem auto;
padding: 1rem 3rem 3rem 3rem;
position: relative;
border-radius: .5rem;

@media(max-width: 700px){
grid-template-rows: repeat(4,max-content) 1fr;

justify-items: center;
}

@media(max-width: 500px){
grid-template-rows: repeat(4,max-content) 1fr;

justify-items: center;
}
`;

const Title = styled.div`
grid-column: 1/span 1;
grid-row: 1/ span 1;
font-size: 1.8rem;
font-weight: bold;

@media(max-width: 700px){
grid-column: 1/span 2;
grid-row: 1/span 1;
margin: .5rem;
}

@media(max-width: 500px){
grid-column: 1/-1;
grid-row: 2/span 1;
margin: .5rem;
}

`;

const Deadline = styled.div`
grid-column: 2/span 1;
grid-row: 1/ span 1;
font-size: 1.8rem;
span{
font-weight: bold;
}

@media(max-width: 700px){
grid-column: 1/ span 2;
grid-row: 2/span 1;
margin: .5rem;
}

@media(max-width: 500px){
grid-column: 1/-1;
grid-row: 3/span 1;
margin: .5rem;
}
`;

const Left = styled.div`
grid-column: 3/ span 1;
grid-row: 1/ span 1;
font-size: 1.8rem;
color: ${props=>props.passed ? `${variables.primaryRed}` : `${variables.black}`};
span{
font-weight: bold;
}

@media(max-width: 700px){
grid-column: 3/span 2;
grid-row: 2/span 1;
margin: .5rem;
}

@media(max-width: 500px){
grid-column: 1/-1;
grid-row: 4/span 1;
margin: .5rem;
}
`;

const Controlls = styled.div`
grid-row: 4/span 1;
grid-row: 1/span 1;

@media(max-width: 700px){
grid-column: 3/span 2;
grid-row: 1/span 1;
margin: .5rem;
}

@media(max-width: 500px){
grid-column: 1/-1;
grid-row: 1/span 1;
margin: .5rem;
}
`;

const Control = styled.button`
  padding: .5rem;
  width: 4rem;
  font-size: 1.8rem;
  border: none;
  border-radius: 2rem;
  color: ${variables.white};
  background: ${props=>props.color};
  margin: 0 .25rem;
  
  &:hover{
  cursor: pointer;
  background: ${variables.white};
  border: 1px solid ${props=>props.color};
  color: ${props=>props.color};
  }
`;





const ControlHeart = styled.button`
padding: .5rem;
  width: 4rem;
  font-size: 1.8rem;
  border: none;
  border-radius: 2rem;
  color: ${props=>props.important ? `${variables.primaryRed}` : `${variables.white}`};
  background: ${props=>props.important ? `${variables.secondaryGrey}` : `${variables.primaryRed}`};
  border: 1px solid ${variables.primaryRed};
  margin: 0 .25rem;
  animation: ${props=>props.important ? 'heart .3s ease-out' : 'none'};
  
  @keyframes heart {
    0% {
    background: ${variables.primaryRed} ;
    color: ${variables.white};
    transform: scale(1);
    }
    50%{
    background: ${variables.primaryRed} ;
    color: ${variables.white};
    transform: scale(1.5);
    }
    100% {
    background: ${variables.white} ;
    color: ${variables.primaryRed};
    transform: scale(1);
    }
}
  
  &:hover,
  &:focus{
  cursor: ${props=>props.important ? 'not-allowed' : 'pointer'};
  background: ${props=>props.important ? `${variables.secondaryGrey}` : `${variables.white}`};
  border: 1px solid ${variables.primaryRed};
  color: ${variables.primaryRed};
  outline: none;
  }
  
  &:active{
  
  }
`;

const Content = styled.p`
grid-column: 1/ -1;
grid-row: 2/span 1;
font-size: 1.6rem;
text-align: left;
border-top: 2px solid ${props=>props.important ?`${variables.primaryRed}`: variables.primaryGreen} ;
padding: 2rem 0;
width: 100%;

@media(max-width: 700px){
grid-column: 1/-1;
grid-row: 5/span 1;
}
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
        <Task passed={passed} key={props.id}>
            <Title>{props.title}</Title>
            <Deadline><span>{}Deadline: </span>{props.deadline}</Deadline>
            <Left passed={passed}><span>{passed ? '' : 'Left: '}</span> {left}</Left>
            <Controlls>
                <ControlHeart  important={props.important} onClick={()=>{props.importantAdd(props.id)}}>
                    <FontAwesomeIcon icon={faHeart}/>
                </ControlHeart>
                <Control color={variables.primaryGreen} onClick={()=>{props.delete(props.id)}} important={props.important}>
                    <FontAwesomeIcon icon={faCheck}/>
                </Control>
                <Control color={variables.primaryYellow}>
                    <FontAwesomeIcon icon={faInfo}/>
                </Control>
            </Controlls>
            <Content important={props.important}>{props.content}</Content>
        </Task>
    );
};

export default task;