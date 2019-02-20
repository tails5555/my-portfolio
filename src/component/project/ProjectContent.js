import React from 'react';

import { TabPane, Container, Row, Col, Badge } from 'reactstrap';

const box_style = {
    border : '1px solid gray',
    borderRadius : '5px',
    padding : '5px',
    margin : '5px',
    backgroundColor : 'white',
    boxShadow : '2px 2px 3px'
};

const ProjectContext = ({ project, tabId }) => (
    <TabPane tabId={tabId}>
        <Container style={{ margin : '10px' }}>
            <Row>
                <Col sm="6">
                    <img style={{ width : '100%' }}src={project && project.projectImage} alt={`${project && project.projectName}`} />
                    <div style={box_style}>
                    {
                        project && project.projectLink.map((link, idx) => (
                            <div key={`project_link_${tabId}_${idx}`} style={{ margin : '2px' }}>
                                <i className="fas fa-link" /> &nbsp;&nbsp;
                                <a href={ link.url } className="btn btn-sm btn-primary" target="_blank" rel="noopener noreferrer"> 
                                    <i className="fas fa-box-open" /> { link.context } 접속
                                </a>
                            </div>
                        ))
                    }
                    </div>
                    <div style={box_style}>
                        <i className="fas fa-calendar" /> { project && project.projectDate }
                    </div>
                    <div style={box_style}>
                        <i className="fas fa-wrench" /> 
                        {
                            project && project.projectSkill.map((skill, idx) => (
                                <Badge 
                                    key={`skill_${tabId}_${idx}`} 
                                    color="secondary"
                                    style={{ margin : '5px' }}
                                    pill
                                >
                                    { skill }
                                </Badge>
                            ))
                        }
                    </div>
                </Col>
                <Col sm="6">
                    <div style={box_style}>
                        <div dangerouslySetInnerHTML={{ __html : project && project.projectContext }} />
                    </div>
                </Col>
            </Row>
        </Container>
    </TabPane>
);

export default ProjectContext;