import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

const Note = styled.div`
display: grid;
grid-template-columns: repeat(4,1fr);
grid-row-gap: 2rem;

margin: .5rem;
background: #FCFCFC;
padding: 3rem;
border-radius: .5rem;


`;

const Title = styled.h1`
grid-column: 1/ 4;
text-align: left;
`;

const Controls = styled.div`
width: 100%;
display: inline-block;
text-align: right;
`;

const Control = styled.button`
grid-column: 4/ 5;


padding: .5rem;
  width: 3rem;
  border: none;
  border-radius: 2rem;
  color: #fff;;
  background: #FF6C5F;
  margin: 0 .25rem;
  
  &:hover{
  cursor: pointer;
  background: #fff;
  border: 1px solid #FF6C5F;
  color: #FF6C5F;
  }
`;



const Content = styled.p`
grid-column: 1/-1;
text-align: left;
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