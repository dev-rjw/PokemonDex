## 소개

-   노션 링크 : https://teamsparta.notion.site/React-6-1111c1a5dbf44f0887675dc6bc45e339
-   완성본 예시 : https://react-6-pokemon.vercel.app/

## 설치 패키지

-   react install
    1.  yarn create vite PokemonDex --template react
    2.  cd PokemonDex
    3.  yarn install
    4.  yarn dev
-   styled-components install : yarn add styled-components
-   react-router-dom install : yarn add react-router-dom

## 과제 진행 순서

1. 프로젝트 셋업
    - Vite 를 이용해서 리액트 프로젝트를 셋업합니다.
2. Home 페이지와 Dex 페이지 구성하기
    - `src` 폴더 안에 `pages` 폴더를 만들고 `Home.jsx`와 `Dex.jsx` 파일을 생성하고, 간단한 UI를 작성하세요.
    - `Home.jsx`에서는 "포켓몬 도감 시작하기" 버튼을 만들고, 이를 클릭하면 `/dex`로 이동하게 하세요.
3. React Router 설정하기
    - `react-router-dom`을 설치하고, `App.jsx`에서 페이지 라우팅을 설정하세요
4. 기본 컴포넌트 생성하기
    - `Dashboard` 컴포넌트:
        - 선택된 포켓몬을 보여주는 컴포넌트입니다.
        - `components/Dashboard.jsx` 파일을 생성하고, 기본적인 UI를 작성하세요.
    - `PokemonList` 컴포넌트:
        - 모든 포켓몬을 리스트로 보여주는 컴포넌트입니다.
        - `components/PokemonList.jsx` 파일을 생성하고, 기본적인 UI를 작성하세요.
    - `PokemonCard` 컴포넌트:
        - 개별 포켓몬의 정보를 카드 형식으로 보여주는 컴포넌트입니다.
        - `components/PokemonCard.jsx` 파일을 생성하고, 기본적인 UI를 작성하세요.
5. 상태 관리와 포켓몬 선택 기능 구현
    - `useState`를 사용하여 선택된 포켓몬을 관리하는 상태를 생성하세요.
    - `Dex.jsx`에서 `selectedPokemon` 상태를 만들고, 선택된 포켓몬을 추가 및 제거하는 기능을 구현하세요.
    - `src` 폴더 안에 `mock.js` 라는 파일을 만들고, 아래 코드를 붙여넣기를 합니다.
    - 해당 `MOCK_DATA` 를 `Dex.jsx` 서 import 한 뒤, `PokemonList` 로 전달해주세요.
6. 알림 기능 구현하기
    - 포켓몬을 선택할 때 이미 선택된 포켓몬이라면 `alert` 메시지를 띄우고, 최대 6개의 포켓몬만 선택할 수 있도록 `alert`로 사용자에게 알립니다.
    - 이미 위의 `addPokemon` 함수에서 구현된 로직을 사용하여 이 기능을 추가하세요.
7. 포켓몬 디테일 페이지 구현하기
    - `PokemonDetail` 컴포넌트 생성하기
    - 포켓몬 카드를 클릭하면 `queryString`으로 포켓몬 ID를 전달하고, 이를 통해 해당 포켓몬의 상세 정보를 표시하는 페이지를 구현하세요.
    - "뒤로 가기" 버튼을 추가하여 이전 페이지로 돌아갈 수 있게 만드세요.
8. Context API로 리팩터링하기
    - Context API 사용하기
    - props drilling의 불편함을 해결하기 위해 Context API를 사용하여 상태 관리를 리팩터링하세요.

## 필수 구현 사항

-   **Git 브랜치 전략 사용하기**:
    -   **`props-drilling` 브랜치**를 생성하고, props drilling을 사용해 상태를 관리하며 작업하세요.
    -   모든 기능 구현 후, **`context` 브랜치**를 생성하여 Context API로 리팩터링하세요.
-   **페이지 라우팅 구현하기**:
    -   `react-router-dom`을 이용해 홈 페이지에서 도감 페이지로 이동할 수 있도록 구현하세요.
-   **도감 페이지 요구사항**:
    -   **반드시 `Dashboard`, `PokemonList`, `PokemonCard`로 컴포넌트를 구분**하여 페이지를 구성하세요.
    -   포켓몬 리스트가 표시되고, 각 포켓몬 카드는 '추가' 버튼을 가집니다.
    -   선택된 포켓몬이 대시보드에 표시되며, 이 포켓몬들은 '삭제' 버튼을 가집니다.
    -   최대 6개의 포켓몬만 선택할 수 있습니다.
    -   각 포켓몬 카드를 클릭하면 해당 포켓몬의 디테일 페이지로 이동합니다.
-   **디테일 페이지**:
    -   `queryString`으로 포켓몬 ID를 받아 해당 포켓몬의 상세 정보를 표시하세요.
    -   "뒤로 가기" 버튼을 통해 이전 페이지로 돌아갈 수 있도록 구현하세요.
-   **알림 기능 구현**:
    -   포켓몬을 선택할 때 이미 선택된 포켓몬이라면 `alert` 메시지를 띄우고, 선택된 포켓몬이 6개가 되면 더 이상 선택할 수 없도록 `alert` 메시지를 띄웁니다.
-   **스타일링**:
    -   `styled-components`를 사용하여 포켓몬 카드와 대시보드를 스타일링하세요.

## Why?

-   **Props drilling**이란 무엇인가요?
-   **Context API**를 사용하여 props drilling을 어떻게 해결할 수 있었나요?
-   이 과제에서 **컴포넌트 구조를 어떻게 구성**했나요? 그 이유는 무엇인가요?
-   **컴포넌트 분리**가 코드의 가독성과 재사용성에 어떤 이점을 제공했나요?
