import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";

const ProjectWrapper = styled.div`
background: #eee;
height: 30rem;
width: 40rem;
border-radius: 2rem;
position: relative;
`;

const ProjectIcon = styled.div`
width: 10rem;
height: 10rem;
border-radius: 50%;
background: #fff;
margin: 2rem;
`;

const ProjectTitle = styled.h1`
position: absolute;
bottom: 6rem;
right: 12rem;
`;

const project = (props)=>{
    return(
        <ProjectWrapper>
            <ProjectIcon>
                {/*<FontAwesomeIcon icon={}/>*/}
            </ProjectIcon>
            <ProjectTitle>
                Title
            </ProjectTitle>
        </ProjectWrapper>
    )
};

export default project;