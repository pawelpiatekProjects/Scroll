import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserAstronaut} from "@fortawesome/free-solid-svg-icons";
import * as variables from '../../utils/variables';

const Empty = styled.div`

position: relative;
grid-column: 1/-1;
background-image: linear-gradient(to right bottom ,${variables.primaryGreen}, ${variables.primaryYellow});
//background: #8EC06C;
border-radius: 2rem;
width: 70%;
height: 25rem;
margin: 5rem auto;


padding: 3rem;

p{
display: inline-block;
margin: 4rem;
}

`;

const EmptyText = styled.p`
background: ${variables.white} ;
padding: 3rem;
border-radius: 1rem;
color: ${variables.fontColorFirst};
font-size: 2.5rem;
position: absolute;
top: 1rem;
left: 8rem;

&::after{
content: '';
display: inline-block;
position: absolute;
right: -.5rem;

  width: 1rem; 
  height: 1rem; 
  border-top: 1.5rem solid transparent;
  border-bottom: 1.5rem solid transparent; 
  
  border-left:1.5rem solid ${variables.primaryGrey}; 
}
`;

const UserIcon = styled.p`
font-size: 12rem;
position: absolute;
bottom: .5rem;
right: 8rem;
color: ${variables.white};
`;

const emptyInfo = (props) => {
    return (
        <Empty>
            <EmptyText>
                {props.text}!
            </EmptyText>
            <UserIcon>
                <FontAwesomeIcon icon={faUserAstronaut}/>
            </UserIcon>
        </Empty>
    )
};

export default emptyInfo;