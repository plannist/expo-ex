module.exports = function (api) {
  api.cache(true);
  // require('dotenv').config(); // 환경 변수 로드
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: `.env.${process.env.NODE_ENV || 'local'}`,
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: true,
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
