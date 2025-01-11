# Expo Router and Tailwind CSS

Use [Expo Router](https://docs.expo.dev/router/introduction/) with [Nativewind](https://www.nativewind.dev/v4/overview/) styling.

## 🚀 expo example 설치 명령어 [base-project]

```sh
  npx create-expo-app -e with-router-tailwind
```

## Android Emulator 위치

```sh
    #\user << 사용자명 변수
    cd C:\Users\user\AppData\Local\Android\Sdk\emulator
    
    emulator -avd LOCAL
```

## 시작명령어
```sh
  expo start
```

## EAS 빌드 명령어
```sh
    eas build -p android --profile development
```

## IOS 디버깅 순서
```sh
    pnpm run start
    expo prebuild
    cd ios
    pod install
    xcode > build 버튼 클릭
```

## 모듈기능 요약
```markdown
1. expo : react-native를 조금더 효율적으로 관리(native기능 위임 등) 하기 위한 framework
2. expo-router, expo-linking : 페이지 이동 stack, link 구현을 위한 라이브러리
3. nativewind , babel : className으로 css요소를 조작하기위한 도구
4. expo-splash-screen : 어플실행 후 스크립트 로딩이 완료될 동안 표시할 splash 구현 도구
5. dotenv : 환경변수 관리를 위한 도구 (로컬,개발기,운영기)
6. axios : 서버와 통신하기위한 비동구 도구
7. tanstack/react-query : get, put, post 등 http 통신을 관리하기 위한 도구
8. react-query-kit : tanstack/react-query를 한번더 감싼 도구
9. zustand : 스토어 관리 도구 (ex: react-reducx)
10. react-native-mmkv-storage : mmkv를 한번더 감싼 스토리지 관리 도구 (ex: local-storage)
11. react-i18next, i18next, i18next-http-backend : 다국어 관리 도구
12. lodash : js 유틸
13. prime-base dependency > moti, svg, i18n, @gorhom/bottom
14. expo-build-properties : native build 설정
```

## 폴더 구조 및 파일기능
```markdown
    assets
      |_ icon
      |_ image
      |_ font
    src
      |_ api [영역별 서버 통신]
      |_ app
          |_ (bottom) [bottom navigation]
          |_ pages [화면]
          |_ components [화면구성, 팝업 등]
      |_ lang [다국어]
      |_ storage [토큰, 세션 등]
      |_ store [공통코드 등]
    .env
    .npmrc
    app.json
    bable.config.js
    eas.json
    global.d.ts
    metro.config.js
    nativewind-env.d.ts
    package.json
    pnpm-lock.yaml
    README.md
    taliwind.config.js
    tsconfig.js
```

## rule
```markdown
1. 코드스타일 및 주석양식은 src/app/_layout.tsx 참고한다.
2. tsx 코딩순서는 변수선언부 > 함수 > hook    
3. api 폴더는 하위에 업무영역별 폴더 생성후 .ts 형식으로 작성한다.
4. src/app 하위는 .tsx 형식으로 작성한다.
5. lang 하위는 .json 형식으로 작성한다.
6. 화면의 재사용가능한 components 와 popup 요소는 src/app/components 에 .tsx 형식으로 저장한다.

```
## Issue
```markdown
1. '@expo/metro-runtime' >> expo-router users do not need to install this package, it is already included.
2. eas.json 파일에서 build 옵션을 지정할 수 있다.
3. obytes 의 android, ios 폴더가 생기는 이유는 react-native-keyboard-controller
   를 사용하기 때문이다 해당 라이브러리는 Native 기반 컨테이너 components 이다.
4. react-native-keyboard-controller 제거 및 KeyboardAvoidingView 대체
5. Bare Workflow 프로젝트 전환
 - expo prebuild > android 폴더생성
 - npx react-native run-android
 - 에러시 > npx react-native doctor
6. pnpm 프로젝트 변환
    - npm install -g pnpm
    - pakage.json 수정(packageManager), 
    - node_modules, package-lock.json 삭제
    - pnpm install
    - .npmrc 파일생성 (pnpm 설정파일 optional)
7. mmkv-storage IOS 빌드 에러 이슈
    - expo-build-properties 설치 
    - app.json 파일에 설정 (mmkv, mmkvCore)
    - ios 폴더 이동 후 pod install

```
