import {
    smart_home, mentoring_season1, our_title_academy, mentoring_season2, lovelive_crawlin_project
} from '../resource/project';

export const PROJECT_LIST = [
    {
        projectImage : smart_home,
        projectName : 'Smart Home Hub',
        projectDate : '2017/09 ~ 2017/12',
        projectSkill : ['Java', 'Android', 'Spring', 'HTML', 'Bootstrap', 'Python', 'Arduino', '공공데이터'],
        projectContext : `
            <p>- 집에서 간단하게 쓸 수 있는 Smart Home Hub를 구축했습니다.</p>
            <p>1. 스마트 스위치, 콘센트는 Brand 값 때문에 직접 구매하기엔 가격 부담이 있습니다.</p>
            <p>2. 기존에 나온 Smart Home Hub 키트들을 실생활과 연동을 할 수 있는 Smart Kit를 제공했습니다.</p>
            <p>3. 실시간 생활 정보, 기기 작동 제어를 할 수 있는 Smart Desk에 대해서도 구현했습니다. 이는 Raspberry PI 환경으로 구축했습니다.</p>
            <p>- 구상 목적</p>
            <p>1. 기존의 제품들의 원거리 통신의 낭비를 줄여 단거리 통신인 Bluetooth를 기반으로 제작하였습니다.</p>
            <p>2. 스마트 콘센트, 스마트 스위치를 Arduino 키트를 이용해서 누구나 쉽게 사용할 수 있도록 제작하였습니다.</p>
            <p>3. 기존 제품과는 달리 어린이나 노약자들도 안전을 지킬 수 있게 제작했습니다.</p>
        `,
        projectLink : [{
            url : 'https://github.com/tails5555/IoT_Bluethings',
            context : 'Git'
        }]
    },
    {
        projectImage : mentoring_season1,
        projectName : '성공회대학교 SM 사업 시즌 1',
        projectDate : '2017/09 ~ 2017/12',
        projectSkill : ['Java', 'Spring', 'Bootstrap', 'jQuery', 'MySQL', 'JSP', 'JSTL'],
        projectContext : `
            <p>개발 지식 스터디를 학교 선-후배와 쉽게 배우기 위한 SM 멘토링 사업 서비스입니다.</p>
            <p>1. 게시판을 통한 소통의 장</p>
            <p>공지사항, 참여마당, 멘토링 게시판의 댓글, 파일 등록 등을 이용해서 멘토링의 다양한 정보를 활용할 수 있도록 구성하였습니다.</p>
            <p>2. 용지와 시간 절약을 통한 자원 낭비 최소화</p>
            <p>웹 페이지 상에서 교수와 학생이 보고서를 서로 확인하여 자원 낭비를 최소한으로 줄일 수 있도록 Excel, Word 파일로 제공하였습니다.</p>
            <p>3. 개성을 위한 프로필 제공</p>
            <p>프로필 사진을 이용한 소셜 네트워크 서비스를 접목하여 멘토와 멘티들의 Identity를 확실하게 제공하였습니다.</p>
            <p>4. 다양한 멘토링 구성원들의 경험 공유</p>
            <p>멘토링 경험이 있는 학우들의 이야기와 노하우를 통해, 차기 멘토링에서 더욱 의미 있는 목표를 가지고 도약할 수 있게 서비스를 제공했습니다.</p>
        `,
        projectLink : [{
            url : 'https://github.com/tails5555/MentoringProject',
            context : 'Git'
        }]
    },
    {
        projectImage : our_title_academy,
        projectName : '우리들의 제목학원 2018',
        projectDate : '2018/07 ~ 리펙토링 중',
        projectSkill : ['Java', 'Spring', 'React', 'w3CSS', 'Redis', 'MySQL', 'Redux'],
        projectContext : `
        <p>아주 평범한 사진 한 장에 제목으로 다른 사용자들에게 웃음을 제공하는 Service 를 제작했습니다.</p>
        <p>1. 실시간 제목 배틀</p>
        <p>사용자끼리 자신 있는 제목 드립으로 공감 능력을 실시간으로 대결합니다. 이는 Web Socket 을 사용했습니다. 
        <p>2. 실시간 랭킹 서비스</p>
        <p>1등부터 10등까지 사용자의 좋아요와 조회수와 공감의 수치를 계산하여 가장 뜨고 있는 제목학원을 소개합니다. 이는 스케쥴러 기능을 활용했습니다. 
        <p>3. 선정성 있는 사진 차단</p>
        <p>최근 제목학원 App 의 성향 문제에 따른 문제점을 해결하기 위해 이 App 을 관리하는 매니저가 올린 사진을 허가해야 제목을 올릴 수 있게 제작했습니다. 
        <p>4. 본문, 제목, 댓글에 대한 공감 로직 최소화</p>
        <p>공감 데이터를 IS-A 데이터베이스로 구성하여 공감 로직을 최소화 시킴으로 민감한 공감 기능을 더욱 빠르게 접근할 수 있습니다.</p>
        <p>추가로 React 의 DOM 렌더링 성능을 향상하기 위해 12월 초순부터 리펙토링을 진행하는 중입니다.</p>     
        `,
        projectLink : [{
            url : 'https://github.com/tails5555/Our_Title_Academy_2018_Web',
            context : 'Web'
        }, {
            url : 'https://github.com/tails5555/Our_Title_Academy_2018_Server',
            context : 'Server'
        }]
    },
    {
        projectImage : mentoring_season2,
        projectName : '성공회대학교 SM 사업 시즌 2',
        projectDate : '2018/09 ~ 2018/11',
        projectSkill : ['Java', 'Spring', 'w3CSS', 'Material', 'MySQL', 'React', 'Redux'],
        projectContext : `
            <p>- 프로젝트 동기</p> 
            <p>2017 년 1 학기부터 소프트웨어 지식, 기술 Skill 등을 선-후배와 공유하는 멘토링 사업이 진행되고 있습니다.</p> 
            <p>교내 학우들의 소통의 장을 형성하는 SM 사업(Software Mentoring)을 관리할 수 있는 소식통이 필요해서 제작했습니다.</p> 
            <p>- 개선 사항</p> 
            <p>지난 번 SM 사업 Web Service 와는 달리 계정 관리, 멘토링 관리, 사업 소개 관리 등 역할을 분담하였습니다.</p> 
            <p>UI 를 더욱 보기 좋게 디자인하고, Client 역할과 Server 역할을 따로 나뉘어 프로젝트의 복잡함을 최소화하는 방안으로 구성했습니다.</p> 
            <p>그리고 단방향 플로우를 위한 Redux 를 사용하여 Virtual DOM 에 데이터를 접근하기 쉽게 구성하였습니다.</p> 
            <p>또한 시간표 구현 기능에서 학교 수업 시간 단위 뿐만 아니라 디테일하게 설정 가능하도록 구현했습니다.</p>    
        `,
        projectLink : [{
            url : 'https://goo.gl/pdYvaD',
            context : 'Web Git'
        }, {
            url : 'https://goo.gl/Fq1PRi',
            context : 'Server Git'
        }, {
            url : 'https://goo.gl/zyg8nE',
            context : '동영상 One Drive'
        }]
    },
    {
        projectImage : lovelive_crawlin_project,
        projectName : 'Inven 러브라이브 크롤링 서비스',
        projectDate : '2018/10 ~ 2018/11',
        projectSkill : ['Python', 'django', 'beautifulsoup', 'React', 'Redux', 'Bootstrap', 'd3'],
        projectContext : `
        <p>- 제작 목적</p>
        <p>러브라이브 스쿨 아이돌 프로젝트 게임을 즐기는 유저들이 카드 정보에 대하여 더욱 시각화 된 Web 으로 풍부한 정보를 제공 받기 위한 토이 프로젝트입니다.</p>
        <p>Inven 사이트에서 얻어온 Crawling 데이터를 RESTful API 서버로 구축하여 Web Service 에서 보여지게 구성했습니다.</p>
        <p>- 개선 사항</p>
        <p>이전의 검색 기능을 더욱 Detail 하게 구성하였으며, 그래프와 숫자 애니메이션 등을 사용하여 Modern Web 에 더욱 가깝게 제작하였습니다.</p>
        <p>특히 이번 프로젝트에서는 시각화를 중점으로 하기 때문에 Responsive Ratio 를 맞추도록 노력했습니다. 이전 사이트에서 링크에 마우스를 올리면 나오는 박스의 불편함을 줄이기 위해 반응형 컴포넌트를 체계화 시켰습니다.</p>
        `,
        projectLink : [{
            url : 'https://github.com/tails5555/lovelive_crawlin_project',
            context : 'Git'
        }]
    }
]