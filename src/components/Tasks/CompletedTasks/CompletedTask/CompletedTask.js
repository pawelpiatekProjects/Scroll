import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart,faCheck,faInfo} from "@fortawesome/free-solid-svg-icons";
import * as variables from '../../../../utils/variables';


const Task = styled.div`
display: grid;
grid-template-columns: repeat(8,1fr);
grid-template-rows: 5rem 1fr;
justify-content: center;
align-content: center;
justify-items: center;
align-items: center;

width: 100%;
background: ${variables.primaryGrey};
margin: 2rem auto;
padding: 1rem 3rem 3rem 3rem;
position: relative;
border-radius: .5rem;
`;

const Title = styled.p`
grid-column: 1/span 3;
grid-row: 1/ span 1;
font-size: 1.8rem;
font-weight: bold;
text-align: left;
color: ${variables.fontColorFirst};
`;

const Deadline = styled.div`
grid-column: 4/span 3;
grid-row: 1/ span 1;
font-size: 1.8rem;
color: ${variables.fontColorFirst};
span{
font-weight: bold;
}
`;


const Controlls = styled.div`
grid-column: 8/span 1;
grid-row: 1/span 1;
position: relative;

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



const Content = styled.p`
grid-column: 1/ -1;
grid-row: 2/span 1;
text-align: left;
font-size: 1.6rem;
color: ${variables.fontColorFirst};
border-top: 2px solid ${props=>props.important ?`${variables.primaryRed}`: `${variables.primaryGreen}`} ;
padding: 2rem 0;
width: 100%;
`;


const completedTask = (props)=>{


    return(
        <Task>
            <Title>{props.title}</Title>
            <Deadline><span>Completed Task</span></Deadline>
            <Controlls>
                <Control color={variables.primaryYellow}>
                    <FontAwesomeIcon icon={faInfo}/>
                </Control>
            </Controlls>
            <Content important={props.important}>{props.content}</Content>
        </Task>
    );
};

export default completedTask;