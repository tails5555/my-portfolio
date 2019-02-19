import React from 'react';
import { Container } from 'reactstrap';
import { SkillList } from '../component/skill';
import { SKILL_LIST } from '../action/skill_action';

const SkillPage = () => (
    <>
        <Container>
            <SkillList skills={SKILL_LIST} />
        </Container>
    </>
);

export default SkillPage;