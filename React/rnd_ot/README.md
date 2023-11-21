# React 
💡 리엑트 데이터 흐름 ? 리액트는 데이터의 흐름을 단방향으로 유지합니다. 단방향 바인딩은 데이터의 변경이 UI로 전달되어 화면을 업데이트합니다. 뷰와 앵귤러는 양방향 데이터 바인딩을 합니다. 양방향 바인딩은 데이터의 변경과 UI 요소의 상태 변경이 서로 영향을 주어 동시에 업데이트됩니다. 양방향 바인딩은 UI가 복잡해지면 성능이 저하되지만, 단방향 바인딩은 성능 저하 없이 DOM을 렌더링 시켜줍니다.

💡  SPA, SSR, SSG 등의 대한 개념을 어느정도 갖춘 상태에서 다음 내용을 진행하는것을 추천 한다.리액트는 SPA (Single Page Application) 방식 - 기존 웹 페이지 처럼(MPA 방식) 여러개의 페이지를 사용, 새로운 페이지를 로드하는 방식이 아니다. - 새로운 페이지를 로드하지 않고 하나의 페이지 안에서 필요한 데이터만 가져오는 형태를 가진다.React-Router는 신규 페이지를 불러오지 않는 상황에서 각각의 url에 따라 선택된 데이터를 하나의 페이지에서 렌더링 해주는 라이브러리 라고 볼 수 있다.

## 2023/11/9(목) ~ 2023/11/21(화) 진행

React ppt 생성

React 실습 개발 환경 생성

React 목차 구성 

React 교육 자료 수집

< 공식문서 >

https://react.dev/ 

https://ko.legacy.reactjs.org/ 

< 영상 > 

생활코딩 https://opentutorials.org/module/4058 (class) https://opentutorials.org/course/4900/31262 (function)

코딩애플 https://codingapple.com/course/react-basic/  

코딩앙마 https://youtu.be/05uFo_-SGXU?si=CpDuk33P0PF9mEdk  

개발자의 품격 https://youtu.be/6GECT2Jrr_g?si=DytLlu1EZbJTlLC9 

프론트엔드 개발자들 https://youtu.be/nn6seXC10Q4?si=NRQ1Q_QcOOE27S_L 

< 블로거 >

JSX문법 https://velog.io/@brgndy/%EB%A6%AC%EC%95%A1%ED%8A%B8-JSX-%EB%AC%B8%EB%B2%95-%EC%A0%95%EB%A6%AC  

props와 state https://ljh86029926.gitbook.io/coding-apple-react/1/props-and-state  

virtualDom https://velog.io/@woohm402/virtual-dom-and-react 

벨로퍼트 API 연동 https://react.vlpt.us/integrate-api/01-basic.html  

Router https://goddaehee.tistory.com/305  

함수형 생성주기 https://adjh54.tistory.com/43#1.%20%5BMounting%5D%20%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%20%EB%82%B4%EB%B6%80-1  

클래스형 생성주기 https://adjh54.tistory.com/42 

<프로젝트 개발시 유용한 프레임워크>

Reactstrap https://reactstrap.github.io/?path=/story/home-installation--page  

<개발 도구>

[StackBlitz] https://stackblitz.com/edit/react-wudysy?file=src%2FApp.js

## 개발자 지식
💡DOM 이란? 
DOM은 문서 객체 모델(Document Object Model)의 약어로 웹 페이지 문서를 트리 구조의 노드로 표현합니다.
DOM(Document Object Model)을 영어 뜻풀이 그대로 하자면 문서 객체 모델을 의미한다.
그렇다면 여기서 말하는 문서 객체란 무엇일까?
문서 객체란 html, head, body와 같은 태그들을 javascript가 이용할 수 있는 (메모리에 보관할 수 있는) 객체를 의미
DOM은 웹 페이지의 요소에 동적으로 접근하고 수정하는 데 사용되며, 웹 애플리케이션의 동적인 기능을 구현하는 데 중요한 역할을 합니다.
DOM은 HTML과 스크립팅언어(Javascript)를 서로 이어주는 역할

💡프레임워크 란?
프레임워크는 소프트웨어 애플리케이션 개발을 위한 구조를 제공하는 미리 작성된 코드 모음입니다. (Anguler, Vue)
프레임워크는 개발을 위한 기본 구조와 규칙을 제공하는 도구입니다. 개발자는 프레임워크가 제공하는 규칙과 인터페이스에 따라 코드를 작성해야 합니다.
프레임워크는 애플리케이션의 흐름과 제어를 관리하며, 필요한 기능과 도구를 제공합니다.
대표적인 예로는 백엔드 프레임워크 Spring과, 프론트엔드 프레임워크 Angular,  Vue 등이 있습니다

💡라이브러리 란?
라이브러리는 특정 작업을 수행하는데 사용할 수 있는 미리 작성된 코드 모음입니다. (React)
라이브러리는 개발을 위해 재사용 가능한 코드의 집합이며, 특정 기능을 수행하는 함수, 클래스, 모듈 등으로 구성됩니다.
라이브러리는 개발자가 필요한 기능을 호출하여 사용할 수 있습니다.
라이브러리는 프레임워크와는 달리 개발자가 코드의 흐름과 제어를 직접 관리합니다.
대표적인 예로는 jQuery, React, Express, Axios 등이 있습니다

💡랜더링 이란 ? 
HTML, CSS, 자바스크립트 등 개발자가 작성한 문서가 브라우저에서 출력되는 과정을 말합니다. 
서버 사이드 렌더링(SSR) ? 서버에서 페이지를 그려 클라이언트(브라우저)로 보낸 후 화면에 표시하는 기법을 의미합니다
클라이언트 사이드 랜더링(CSR) ? 서버에서 전체 페이지(빈 페이지)를 최초 렌더링하고 사용자가 요청할 때마다 클라이언트 내(브라우저)에서 렌더링 하는 것을 의미합니다

💡Eject 란 ? 
react-scripts를 node-modules에서 찾아 들어가면 그, 안에 config들이 들어가있습니다. (CRA는 webpack기반으로 설정됨),
Eject (커스터마이징을 위함)스크립트를 실행하면 CRA를 구성하는 숨겨진 많은 설정들을 꺼내어 명령어를 실행한 사람에게 모두 보여지게된다.처음 CRA를 설치해서 보면 정말 기본적인 세팅만 되어있는 사실을 알 수 있는데 자세한 리액트 앱의 구성을 공부하고 싶다면 eject를 실행해서 보면된다. Webpack, Babel, ESLint, etc. 앱을 build하기 위한 모든 구성요소들을 한번에 볼 수 있다.
규모가 작은 프로젝트를 진행했던 나로썬 내가 어떤 라이브러리를 사용하는지 하나하나 알아가며 설치해야 할 필요가 있었기 때문에 CRA를 설치하지 않고 필요한 설정들을 모두 npm에서 찾아서 설치해주었는데, 진작 이 스크립트에 대해 관심을 가졌더라면 앱을 구성하기 위해서 어떤 모듈이 필요한지 빠르게 알 수 있었을 것이다... 😞
❗️ Note: this is a one-way operation. Once you eject, you can’t go back!다만 한 번 실행시 되돌릴 수 없기 때문에 (명령어 실행 전에도 되돌릴 수 없다는 alert를 준다.) 주의를 기울이며 사용해야 한다. (프로젝트 초반에는 옮겨가면 되니깐 괜찮지만 이후에는... 엄청난 양의 dependencies가 가득찬 패키지 파일이 두배로 늘어나는걸 경험하고 싶지 않다면 주의하기!)
바벨 웹펙 플러그인 들 을 최신화 하고 싶을때 사용. react , react-dom라이브러리는 eject없이도 최신화 가능 

💡XML이란?
XML(eXtensible Markup Language) 은 HTML과 같은 마크업 언어이지만, HTML은 데이터를 표현하는 마크업 언어라면, XML은 데이터를 기술하는 언어이다.
예를 들어 HTML에서는 h1, p 같은 이미 만들어진 태그를 사용해야 하지만, XML은 정의된 부분을 제외하고는 사용자가 태그를 임의로 만들 수 있다.
엄밀히 말하자면 XML은 마크업 언어 라기 보다 마크업 언어를 정의하기 위한 언어라고 할 수 있다.


💡심볼이란 ? 
Symbol 함수를 호출함으로써 생성할 수 있다. 이때 생성되는 심볼은 변경 불가능한 원시 타입의 값이며, 다른 값과 중복되지 않는 고유한 값입니다.
심볼 값은 충돌 위험이 없는 오브젝트의 유일한 프로퍼티 키를 만들기 위해서 사용할 수 있습니다. 
하위호환성을 유지하면서 표준을 확장한다든지, 고유한 상수값을 만드는 데 사용할 수 있지만 많이 사용되고 있지는 않습니다. 


💡 레이아웃이란?브라우저 로딩 과정 중 스타일 이후의 과정(스타일-> 레이아웃 -> 페인트 -> 합성)을 렌더링이라고 한다.그리고 이 렌더링 과정은 상황에 따라 반복하여 발생할 수 있다.돔이 추가되거나 삭제, 혹은 태그의 위치가 변하는 경우 렌더링이 일어난다.

💡 렌더링(Rendering) 이란?- React 내에서는 컴포넌트 렌더링이라고도 하며, 컴포넌트 내에 엘리먼트 요소들(HTML, React 사용자 정의 태그)을 화면상에 그리는 동작을 의미한다.

💡 리 렌더링(re-Rendering) 이란? - 컴포넌트 내에 엘리먼트 요소들을 코드를 기반으로 화면의 그리는 작업을 다시 수행하는 것을 의미한다.

💡... 문법의 역할이 Rest 일 때, 위처럼 배열의 구조분해 할당에 쓰일 경우 Rest elements가 되는 것이겠네요!(파라미터에서 쓰이면 Rest 파라미터)

💡MAP과 Foreach 의 차이점 ? 
Map은 각 Array의 아이템 별로 function을 실행 하고 그 결과를 반환하지만
forEach는 아이템별로 기능만 실행하고 결과값이 반환하지 않는다. 

💡 라우팅이란?  - 간단하게 생각 하자면 사용자가 요청한 URL에 따라 해당 URL에 맞는 페이지를 보여주는 것이라고 생각할 수 있다.  - 리액트에서는 라우팅 관련 라이브러리가 많이 있는데, 이중 가장 많이 쓰이는 리액트 라우터(React Router)를 사용해보려 한다.


