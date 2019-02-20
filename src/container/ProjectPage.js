import React from 'react';
import { Container } from 'reactstrap';
import { PROJECT_LIST } from '../action/project_action';
import { ProjectTab } from '../component/project';

const ProjectPage = () => (
    <>
        <Container>
            <ProjectTab projects={PROJECT_LIST} />
        </Container>
    </>
);

export default ProjectPage;