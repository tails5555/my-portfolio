import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

const ProjectBar = ({ toggleAction, activeTab, projects }) => (
    <Nav tabs>
    {
        projects.map((project, idx) => (
            <NavItem 
                key={`project_nav_${idx}`}
                style={{ cursor : 'pointer' }}
            >
                <NavLink
                    className={ classnames({ active : activeTab === `${idx}` }) }
                    onClick={ () => toggleAction(`${idx}`) }
                >
                    { project && project.projectName }
                </NavLink>
            </NavItem>
        ))
    }
    </Nav>
);

export default ProjectBar;