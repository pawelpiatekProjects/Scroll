import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import * as variables from '../../utils/variables';

const Note = styled.div`
display: grid;
grid-template-columns: repeat(4,1fr);
grid-row-gap: 2rem;

margin: .5rem;
background: ${variables.primaryGrey};
padding: 3rem;
border-radius: .5rem;


`;

const Title = styled.h1`
grid-column: 1/ 4;
text-align: left;
font-size: 3rem;
color: ${variables.fontColorFirst};
`;

const Controls = styled.div`
width: 100%;
display: inline-block;
text-align: right;
`;

const Control = styled.button`
grid-column: 4/ 5;


padding: .5rem;
  width: 4rem;
  border: none;
  font-size: 1.8rem;
  border-radius: 2rem;
  color: ${variables.white};
  background: ${variables.primaryRed};
  margin: 0 .25rem;
  
  &:hover{
  cursor: pointer;
  background: ${variables.white};
  border: 1px solid ${variables.primaryRed};
  color: ${variables.primaryRed};
  }
`;



const Content = styled.p`
grid-column: 1/-1;
text-align: left;
font-size: 1.8rem;
color: ${variables.fontColorFirst};
`;

const note = (props) => {
    return (
        <Note>
            <Title>{props.title}</Title>
            <Controls>
                <Control onClick={()=>{props.delete(props.id)}}>
                    <FontAwesomeIcon icon={faTimes}/>
                </Control>
            </Controls>
            <Content>
                {props.content}
            </Content>
        </Note>
    )
};

export default note;