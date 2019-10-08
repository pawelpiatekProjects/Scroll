import React from 'react';
import styled from 'styled-components';

const ProjectsListWrapper = styled.div`
padding: 6rem;
display: grid;
grid-template-columns: repeat(2,1fr);
grid-gap: 6rem;
`;

const projectsList = (props)=>{
    return(
        <ProjectsListWrapper>
            Projects
        </ProjectsListWrapper>
    )
};

export default projectsList;