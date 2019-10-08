import React from 'react';
import styled from 'styled-components';

import Project from './Project';

const ProjectsListWrapper = styled.div`
padding: 6rem;
display: grid;
grid-template-columns: repeat(2,1fr);
grid-gap: 6rem;
justify-items: center;
`;

const projectsList = (props)=>{
    return(
        <ProjectsListWrapper>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
        </ProjectsListWrapper>
    )
};

export default projectsList;