# My Portfolio

https://tails5555.github.io/my-portfolio/

메뉴는 Introduce(간단한 자기소개), Projects(프로젝트), Skills(개발 스킬) 로 구성되어 있습니다.

## Dependencies

JavaScript Application 모듈 매니저는 NPM 을 사용했습니다.

그리고 배포 환경은 GitHub Pages 를 사용했습니다.

```json
"dependencies": {
    "classnames": "^2.2.6",
    "react": "^16.8.2",
    "react-dom": "^16.8.2",
    "react-router-dom": "^4.3.1",
    "react-scripts": "2.1.5",
    "reactstrap": "^7.1.0"
},
"devDependencies": {
    "gh-pages": "^2.0.1"
}
```

## Scripts

localhost(http://127.0.0.1/) 환경에서는 `npm start` 명령어로 실행할 수 있습니다.

배포 환경을 위한 build 파일은 `npm run build` 를 이용해서 React Application 을 이용합니다.

그리고 `npm run deploy` 명령어를 사용하여 GitHub Pages 에 build 파일들을 올립니다.

이들은 `gh-pages` 브랜치에 저장 되어 있습니다.

`master` 브랜치에는 프로젝트를 만든 파일들이 저장되어 있습니다.

## Author

- 강인성([tails5555](https://github.com/tails5555))