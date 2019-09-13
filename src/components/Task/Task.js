import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart,faCheck,faInfo} from "@fortawesome/free-solid-svg-icons";



const Task = styled.div`
display: grid;
grid-template-columns: repeat(4,1fr);
grid-template-rows: 5rem 1fr;
justify-content: center;
align-content: center;
justify-items: center;
align-items: center;


width: 80%;
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

const Content = styled.p`
grid-column: 1/ -1;
grid-row: 2/span 1;
text-align: left;
border-top: 2px solid ${props=>props.important ?'#FF6C5F': '#8EC06C'} ;
padding: 2rem 0;
width: 100%;
`;


const task = (props)=>{
    //todo: change heart color when task is important
    return(
        <Task>
            <Title>{props.title}</Title>
            <Deadline><span>Deadline: </span>{props.deadline}</Deadline>
            <Left><span>Left: </span> 4 days</Left>
            <Controlls>
                <Control color='#FF6C5F' onClick={()=>{props.importantAdd(props.id)}}>
                    <FontAwesomeIcon icon={faHeart}/>
                </Control>
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