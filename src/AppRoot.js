import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const RouterRoot = ({ children }) => (
    <Router basename={process.env.PUBLIC_URL}>
        <Switch>
            { children }
        </Switch>
    </Router>
);

const AppRoot = () => (
    <RouterRoot>
        <Route exact path="/" render={() => <h1>HOME</h1>} />
        <Route exact path="/intro" render={() => <h1>INTRODUCE</h1>} />
        <Route exact path="/project" render={() => <h1>PROJECTS</h1>} />
        <Route exact path="/skill" render={() => <h1>SKILL</h1>} />
    </RouterRoot>
);

export default AppRoot;