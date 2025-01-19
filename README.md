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

## AOS 디버깅 순서
```sh
    pnpm run start
    npx expo prebuild
    npx expo run:android
```

## IOS 디버깅 순서
```sh
    pnpm run start
    npx expo prebuild
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
15. cross-env : 운영체제와 상관없이 환경변수 설정가능
16. react-native-dotenv : 5번(dotenv) 대체 > auto.d.ts 에 환경변수(.env.xxx) 내용추가 필요
17. @shopify/flash-list : 리스트 표현 모듈
18. @gorhom/bottom-sheet : 바텀 레이어 팝업
19. expo-font, expo-image : 폰트와 이미지 관리 모듈
```

## 폴더 구조 및 파일기능
```markdown
    assets
      |_ icon
      |_ image
      |_ font
    script [node 스크립트 파일]
    src
      |_ api [영역별 서버 통신]
      |_ app
          |_ (bottom) [bottom navigation]
          |_ pages [화면]
          |_ components [화면구성, 팝업 등]
      |_ lang [다국어]
      |_ storage [토큰, 세션 등]
      |_ store [공통코드 등]
    .env.dev
    .env.local
    .env.prod
    .npmrc
    app.json
    auto.d.ts [사용자 type 지정]
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
8. android build 이슈
    - expo prebuild 를 진행 후
    - npx expo run:android 실행 시 
      Incorrect package="com.tagerjs.framework" found in source AndroidManifest.xml
      에러 발생한다.
    - 에러 발생 이유는 build.gradle의 namespace 와 AndroidManifest 의 package 명의 불일치
    - 7번의 IOS 빌드 에러와 마찬가지로 expo-build-properties 모듈을 사용하여 app.json 수정필요함
      "android": {
        "namespace": "com.tagerjs.framework"
      }
8. ReanimatedError
    - 다른 프로젝트 실행 후 npx expo run 하게 되면 babel-plugin 버전 충돌이슈
    - 해결법 : nxp expo start -c
9. IOS build 시 삭제한 module 을 찾을수 없다는 에러가 나오는 경우
    - cd ios
    - rm -rf Pods Podfile.lock
    - pod install --repo-update

```
## Prime-base dependency list
```markdown
1. react-native-svg
2. tailwind-variants
3. react-i18next (제외작업중)
4. moti
5. @gorhom/bottom-sheet
6. react-native-reanimated
7. expo-image
8. @shopify/flash-list
```
## Prime-base issue list
```markdown
1. TextFiled
    - input Props characterCount 오타 && 미동작
    - onClear 이미지 미노출
2. SocialButton
    - kakao 버튼 크기 줄일때 css 깨짐
```

## node script 설명
```markdown
1. "read-env" : auto.d.ts 의 @env 영역을 자동 생성할 스크립트
2. "env:update" : 실행버튼 클릭으로 해당 profile에 정의된 환경변수를 auto.d.ts로 자동으로 생성해준다.
```
