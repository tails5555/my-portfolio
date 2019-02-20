import React, { Fragment } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';

const activeStyle = {
    backgroundColor : 'deepskyblue',
    color : 'black',
    borderRadius : '5px',
    border : '2px solid lightskyblue'
}

class NavigationBar extends React.PureComponent {
    constructor(props) {
        super(props);
        this._toggle = this._toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    
    _toggle() {
        const { isOpen } = this.state; 
        this.setState({
            isOpen: !isOpen
        });
    }

    render() {
        const { location } = this.props;
        const { isOpen } = this.state;

        return (
            <Fragment>
                <Navbar color="info" light expand="md">
                    <NavbarBrand tag={Link} to="/">Kang Portfolio</NavbarBrand>
                    <NavbarToggler onClick={this._toggle} />
                    <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink style={ location.pathname === '/' ? activeStyle : null } tag={Link} to="/">
                                <i className="fas fa-user-tie" /> Introduce
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={ location.pathname === '/project' ? activeStyle : null } tag={Link} to="/project"> 
                                <i className="fas fa-tasks" /> Project
                            </NavLink>
                        </NavItem> 
                        <NavItem>
                            <NavLink style={ location.pathname === '/skill' ? activeStyle : null } tag={Link} to="/skill"> 
                                <i className="fab fa-react" /> Skill
                            </NavLink>
                        </NavItem> 
                        <NavItem>
                            <NavLink href="https://github.com/tails5555/prography-front">
                                <i className="fab fa-github" /> Ref Git
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://tails5555.github.io">
                                <i className="fas fa-user-tag" /> Blog
                            </NavLink>
                        </NavItem>
                    </Nav>
                    </Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default withRouter(NavigationBar);