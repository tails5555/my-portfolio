import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Progress } from 'reactstrap';

const SkillCard = ({ skill }) => (
    <Card>
        <CardImg top width="100%" src={skill.skillImg} alt={`skill_img_${skill && skill.skillName}`} />
        <CardBody>
            <CardTitle>{skill && skill.skillName}</CardTitle>
            <CardSubtitle>{skill && skill.skillType}</CardSubtitle>
            <CardText>{skill && skill.context}</CardText>
            <Progress animated value={skill && skill.score} max={10}>
                {skill && skill.score}
            </Progress>
        </CardBody>
    </Card>
);

export default SkillCard;