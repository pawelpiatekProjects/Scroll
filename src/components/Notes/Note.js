import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

const Note = styled.div`
display: grid;
grid-template-columns: repeat(4,1fr);
grid-row-gap: 2rem;
width: 50%;
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
            <Title>Holidays</Title>
            <Controls>
                <Control>
                    <FontAwesomeIcon icon={faTimes}/>
                </Control>
            </Controls>
            <Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor quis neque id cursus. Duis lacinia
                suscipit ultricies. Nulla commodo velit nisl, ac venenatis enim vehicula at. Mauris vel diam varius,
                efficitur ante in, tristique dolor. Morbi aliquam vel orci id molestie. Phasellus volutpat vehicula
                lacus ac aliquet. Phasellus nisl felis, hendrerit non dui vel
            </Content>
        </Note>
    )
};

export default note;