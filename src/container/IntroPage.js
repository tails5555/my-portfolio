import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import kangPhoto from '../resource/kang_photo.jpg';
import { AWARD_LIST, ACTIVITY_LIST } from '../action/main_action';
import { AwardView, ActivityToggle } from '../component/main';

const box_style = {
    border : '1px solid gray',
    borderRadius : '5px',
    padding : '5px',
    margin : '5px',
    backgroundColor : '#FCF3CF',
    boxShadow : '2px 2px 3px'
};

const IntroPage = () => (
    <>
        <Container>
            <Row style={{ margin : '10px' }}>
                <Col sm="6">
                    <img src={kangPhoto} style={{ width : '100%' }} alt={'kang_profile'} />
                    <div style={ box_style }>
                        <h3 className="text-right">초심은 떠났지만, 열정만은 남아주오 <small>Dok2 - 1ll Recognize 1ll</small></h3>
                        <p>Front-End 와 Back-End 상관 없이 Web Service 에 대한 열정을 가득 싣고 그 마음을 유지하고 싶습니다.</p>
                        <p>성공회대학교 소프트웨어공학과 4학년 2학기 재학 중입니다.</p>
                        <p>월요일만 학교 나가고, 나머지는 집 근처 도서관에서 공부합니다.</p>
                    </div>
                </Col>
                <Col sm="6">
                <h1><i className="fas fa-graduation-cap" /> Activity</h1>
                {
                    ACTIVITY_LIST.map((activity, idx) => (
                        <ActivityToggle key={`activity_${idx}`} activity={activity} />
                    ))
                }
                <h1><i className="fas fa-award" /> Awards</h1>
                {
                    AWARD_LIST.map((award, idx) => (
                        <AwardView key={`award_${idx}`} award={award} />
                    ))
                }
                </Col>
            </Row>
        </Container>
    </>
);

export default IntroPage;