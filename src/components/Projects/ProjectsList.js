import React from 'react';
import styled from 'styled-components';

import AddNav from '../../components/Navigation/AddNav/AddNav';
import Project from './Project';

const ProjectsListWrapper = styled.div`
padding: 6rem;
display: grid;
grid-template-columns: repeat(2,1fr);
grid-gap: 6rem;
justify-items: center;
`;

const AddNavWrapper = styled.div`
grid-column: 1/-1;
width: 100%;
`

const projectsList = (props) => {
    return (
        <ProjectsListWrapper>
            <AddNavWrapper>
                <AddNav/>
            </AddNavWrapper>
            <Project type='react'/>
            <Project type='js'/>
            <Project type='gamedev'/>
            <Project type='school'/>
        </ProjectsListWrapper>
    )
};

export default projectsList;