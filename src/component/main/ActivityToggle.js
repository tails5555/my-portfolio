import React, { Fragment } from 'react';
import { UncontrolledCollapse, Button, CardTitle, CardSubtitle, CardText, CardBody, Card } from 'reactstrap';

const ActivityToggle = ({ activity }) => (
    <Fragment>
        <Button color="primary" id={`${ activity && activity.id }`} style={{ marginBottom: '1rem', display : 'block' }}>
            { activity && `${activity.title} (${ activity.date })` }
        </Button>
        <UncontrolledCollapse toggler={`#${ activity && activity.id }`} style={{ marginBottom: '1rem' }}>
            <Card>
                <CardBody>
                    <CardTitle>{activity && activity.title}</CardTitle>
                    <CardSubtitle>{activity && activity.date}</CardSubtitle>
                    <CardText>{activity && activity.context}</CardText>
                </CardBody>
            </Card>
        </UncontrolledCollapse>
    </Fragment>
);

export default ActivityToggle;