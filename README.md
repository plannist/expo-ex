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
    eas build -p android --profile production
```

## rule
```markdown
1. tsx 파일명의 시작은 대문자로 규격한다.
2. '@expo/metro-runtime' >> expo-router users do not need to install this package, it is already included.
3. eas.json 파일에서 build 옵션을 지정할 수 있다.
4. obytes 의 android, ios 폴더가 생기는 이유는 react-native-keyboard-controller
   를 사용하기 때문이다 해당 라이브러리는 Native 기반 컨테이너 components 이다.
5. react-native-keyboard-controller 제거 및 KeyboardAvoidingView 대체
6. Bare Workflow 프로젝트 전환
 - expo prebuild > android 폴더생성
 - npx react-native run-android
 - 에러시 > npx react-native doctor

```
