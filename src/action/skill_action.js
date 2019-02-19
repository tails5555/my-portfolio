import {
    django, java, mongo_db, mysql, python, reactjs, redis, redux, spring, vuejs, javascript
} from '../resource/skill';

export const SKILL_LIST = [
    {
        skillImg : javascript,
        skillName : 'JavaScript',
        skillType : '웹 프로그래밍',
        context : '모던 ES6 문법에 대한 이해를 가지고 있고, 비동기 프로그래밍에 대한 관심이 많습니다.',
        score : 9
    },
    {
        skillImg : reactjs,
        skillName : 'React',
        skillType : '웹 프로그래밍',
        context : 'React 가 요구하는 Virtual DOM 에 알맞게 리팩토링 작업을 진행한 적이 있고, 소스 코드를 10000 줄 이상 줄였습니다.',
        score : 9
    },
    {
        skillImg : redux,
        skillName : 'Redux',
        skillType : '웹 프로그래밍',
        context : 'Flux 패턴에 대한 간단한 이해와 단방향 플로우에 알맞는 Application 을 제작할 수 있습니다.',
        score : 7
    },
    {
        skillImg : vuejs,
        skillName : 'Vue.js',
        skillType : '웹 프로그래밍',
        context : '아직까지 공부를 자세히 안 해봤지만, 라이브러리와 프레임워크의 차이를 인지하고 있는 중입니다.',
        score : 6
    },
    {
        skillImg : python,
        skillName : 'Python',
        skillType : '서버 프로그래밍',
        context : '간결한 객체지향 프로그래밍을 공부하고, 웹 크롤링에 대한 기술을 향상시키기 위해 제 2의 언어로 삼고 있습니다.',
        score : 7
    },
    {
        skillImg : django,
        skillName : 'django',
        skillType : '서버 프로그래밍',
        context : '간단한 RESTful API 과 템플릿 문법을 활용할 수 있습니다.',
        score : 7
    },
    {
        skillImg : java,
        skillName : 'Java',
        skillType : '서버 프로그래밍',
        context : 'JVM 의 동작 원리를 어느 정도 이해하고 있고, 알고리즘을 풀 때 주로 사용하는 언어입니다.',
        score : 8
    },
    {
        skillImg : spring,
        skillName : 'Spring Framework',
        skillType : '서버 프로그래밍',
        context : 'Spring Web MVC 와 Spring Boot 로 간단한 프로젝트와 약간 복잡한 서버를 구축할 수 있습니다.',
        score : 8
    },
    {
        skillImg : mysql,
        skillName : 'MySQL',
        skillType : '데이터베이스',
        context : '소규모 프로젝트를 위한 작은 관계형 데이터베이스 구축 및 IS-A 관계형 데이터베이스를 구성할 수 있습니다.',
        score : 8
    },
    {
        skillImg : mongo_db,
        skillName : 'MongoDB',
        skillType : '데이터베이스',
        context : 'Document 모델 NoSQL 에 대한 간단한 이해와 프레임워크에 적용할 수 있습니다.',
        score : 5
    },
    {
        skillImg : redis,
        skillName : 'Redis',
        skillType : '데이터베이스',
        context : '조회가 많은 데이터에 대한 캐싱 처리 및 실시간 데이터베이스의 성능을 향상 시킬 수 있습니다.',
        score : 6
    }
];