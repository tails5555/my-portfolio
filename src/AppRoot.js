import React, { Fragment } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import SlideAnotherView from './SlideAnotherView';
import { NavigationBar } from './component/navigation';

import { IntroPage, ProjectPage, SkillPage } from './container';

const RouterRoot = () => (
    <Fragment>
        <Route exact path="/" render={IntroPage} />
        <Route exact path="/project" component={ProjectPage} />
        <Route exact path="/skill" component={SkillPage} />
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