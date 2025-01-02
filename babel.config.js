module.exports = function (api) {
  api.cache(true);
  require('dotenv').config(); // 환경 변수 로드
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
        'react-native-reanimated/plugin',
    ],
  };
};
