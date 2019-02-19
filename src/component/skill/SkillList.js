import React from 'react';
import { CardColumns } from 'reactstrap';

import SkillCard from './SkillCard';

const top_bottom_margin = {
    marginTop : '10px',
    marginBottom : '10px'
};

const SkillList = ({ skills }) => (
    <CardColumns style={top_bottom_margin}>
    {
        skills.map((skill, idx) => (
            <SkillCard skill={skill} key={`skill_card_${idx}`} />
        ))
    }
    </CardColumns>
);

export default SkillList;