import React from 'react';
import { TabContent } from 'reactstrap';

import ProjectBar from './ProjectBar';
import ProjectContent from './ProjectContent';

const top_bottom_margin = {
    marginTop : '10px',
    marginBottom : '10px'
};

class ProjectTab extends React.PureComponent {
    constructor(props) {
        super(props);
        this._toggle = this._toggle.bind(this);
        this.state = {
            activeTab : '0'
        };
    }

    _toggle(tab) {
        const { activeTab } = this.state;
        if(activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        const { activeTab } = this.state;
        const { projects } = this.props;
        return (
            <div style={top_bottom_margin}>
                <ProjectBar
                    toggleAction={this._toggle}
                    activeTab={activeTab}
                    projects={projects.map(project => ({ projectName : project.projectName }))}
                />
                <TabContent activeTab={activeTab}>
                    {
                        projects.map((project, idx) => (
                            <ProjectContent
                                key={`project_content_${idx}`}
                                project={project}
                                tabId={`${idx}`}
                            />
                        ))
                    }
                </TabContent>
            </div>
        );
    }
}

export default ProjectTab;