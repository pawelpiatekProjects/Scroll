import React from 'react';
import styled from 'styled-components';
import * as variables from '../../utils/variables';
import jsLogo from '../../assets/images/jsIcon.png';
import reactLogo from '../../assets/images/reactIcon.png';

const ProjectWrapper = styled.div`
background-image: linear-gradient(to bottom right, ${props=>props.colorFirst}, ${props=>props.colorSecond});
height: 30rem;
width: 40rem;
border-radius: 2rem;
position: relative;
display: grid;
grid-template-columns: repeat(3,1fr);
align-items: center;
transition: all .8s;
background-size: 200% auto;


&:hover{
 background-position: right top;
 cursor: pointer;
transform: scale(1.02);
}



`;

const ProjectIcon = styled.div`

grid-column: 2/span 1;

width: 10rem;
height: 10rem;
border-radius: 50%;
background-image: url(${reactLogo});
background-size: cover;
margin: 2rem;




`;

const ProjectTitle = styled.h1`
grid-column: 1/-1;
font-size: 3rem;
color: ${variables.white};
`;

const project = (props)=>{
    const type = props.type;
    let colorFirst;
    let colorSecond;
    // if(type==='react'){
    //     colorFirst = variables.reactColor;
    //     colorSecond = variables.darkBlue;
    // }
    // if(type==='')
    switch(type){
        case 'react':{
                colorFirst = variables.reactColor;
                colorSecond = variables.darkBlue;
                break;
        }
        case 'js':{
            colorFirst = variables.jsColor;
            colorSecond = variables.darkYellow;
            break;
        }
        case 'gamedev':{
            colorFirst = variables.gameDev;
            colorSecond = variables.gameDev2;
            break;
        }
        case 'school':{
            colorFirst = variables.school;
            colorSecond = variables.school2;
            break;
        }
        default:{
            colorFirst = variables.primaryGreen;
            colorSecond = variables.secondaryGrey;
        }

    }

    return(
        <ProjectWrapper
        colorFirst={colorFirst}
        colorSecond={colorSecond}
        >
            <ProjectIcon/>
            <ProjectTitle>
                Title
            </ProjectTitle>
        </ProjectWrapper>
    )
};

export default project;