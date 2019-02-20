import React from 'react';
import { Media } from 'reactstrap';

const AwardView = ({ award }) => (
    <Media style={{ marginBottom: '1rem' }}>
        <Media body>
            <Media heading>
                { award && award.contest_title } ({ award && award.award_date })
            </Media>
            { award && award.sub_title } / { award && award.main_title }
      </Media>
    </Media>
);

export default AwardView;