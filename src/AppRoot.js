import React, { Fragment } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { NavigationBar } from './component/navigation';
import SlideAnotherView from './SlideAnotherView';
import { SkillPage } from './container';

const RouterRoot = () => (
    <Fragment>
        <Route exact path="/" render={() => <h1>HOME</h1>} />
        <Route exact path="/intro" render={() => <h1>INTRODUCE</h1>} />
        <Route exact path="/project" render={() => <h1>PROJECTS</h1>} />
        <Route exact path="/skill" render={SkillPage} />
    </Fragment>
);

const AppRoot = () => (
    <Router>
        <SlideAnotherView>
            <NavigationBar />
            <Switch>
                <RouterRoot />
            </Switch>
        </SlideAnotherView>
    </Router>
);

export default AppRoot;