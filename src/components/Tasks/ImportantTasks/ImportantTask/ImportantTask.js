import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart,faCheck,faInfo} from "@fortawesome/free-solid-svg-icons";
import * as variables from '../../../../utils/variables';


const Task = styled.div`
display: grid;
grid-template-columns: repeat(4,1fr);
grid-template-rows: 5rem 1fr;
justify-content: start;
align-content: center;
justify-items: start;
align-items: center;
opacity: ${props=>props.passed ? '.6' : '1'};

width: 100%;
background: ${variables.primaryGrey};
margin: 2rem auto;
padding: 1rem 3rem 3rem 3rem;
position: relative;
border-radius: .5rem;
`;

const Title = styled.div`
grid-column: 1/span 1;
grid-row: 1/ span 1;
font-size: 1.8rem;
font-weight: bold;
`;

const Deadline = styled.div`
grid-column: 2/span 1;
grid-row: 1/ span 1;
font-size: 1.8rem;
span{
font-weight: bold;
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
`;

const Controlls = styled.div`
grid-row: 4/span 1;
grid-row: 1/span 1;
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
  
  &:hover,
  &:focus{
  cursor: pointer;
  background: ${variables.primaryRed};
  border: 1px solid ${variables.primaryRed};
  color: ${variables.white};
  outline: none;
  }
`;

const Content = styled.p`
grid-column: 1/ -1;
grid-row: 2/span 1;
text-align: left;
font-size: 1.6rem;
border-top: 2px solid ${props=>props.important ? `${variables.primaryRed}`: `${variables.primaryGreen}`} ;
padding: 2rem 0;
width: 100%;
`;



const importantTask = (props)=>{

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
            <Deadline><span>Deadline: </span>{props.deadline}</Deadline>
            <Left passed={passed}><span>{passed ? '' : 'Left: '}</span> {left}</Left>
            <Controlls>
                <ControlHeart  important={props.important} onClick={()=>{props.importantRemove(props.id)}}>
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

export default importantTask;