import { AppIconBadgeConfig } from 'app-icon-badge/types';
import { ConfigContext, ExpoConfig } from '@expo/config';

// .env 파일에서 환경 변수 가져오기
const PROFILE = process.env.PROFILE || 'local';
const VERSION = process.env.VERSION || '0.0.1';

const appIconBadgeConfig: AppIconBadgeConfig = {
  enabled: PROFILE !== 'prod',
  badges: [
    {
      text: PROFILE,
      type: 'banner',
      color: 'white'
    },
    {
      text: VERSION.toString(),
      type: 'ribbon',
      color: 'white'
    }
  ]
};

export default ({ config }: ConfigContext): ExpoConfig => {
  return {
    ...config,
    name: 'framework',
    slug: 'framework',
    description: 'framework Mobile App',
    owner: 'tagerjs',
    icon: './assets/ai.png',
    scheme: 'acme',
    userInterfaceStyle: 'automatic',
    newArchEnabled: true,
    android: {
      softwareKeyboardLayoutMode: 'pan',
      package: 'com.tagerjs.framework',
      adaptiveIcon: {
        foregroundImage: './assets/ai.png',
        // foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#2E3C4B'
      }
    },
    ios: {
      bundleIdentifier: 'com.tagerjs.framework',
      infoPlist: {
        NSAppTransportSecurity: {
          NSAllowsArbitraryLoads: true //모든 HTTP 요청 허용
        }
      }
    },
    web: {
      favicon: './assets/favicon.ico',
      bundler: 'metro'
    },
    plugins: [
      [
        'expo-splash-screen',
        {
          backgroundColor: '#2E3C4B',
          image: './assets/pngwing.com.png',
          imageWidth: 150
        }
      ],
      [
        'expo-font',
        {
          fonts: ['./assets/fonts/Inter.ttf']
        }
      ],
      'expo-router',
      ['app-icon-badge', appIconBadgeConfig]
    ],
    extra: {
      eas: {
        projectId: 'ddafd25f-bde9-4e77-b64b-c34ea130aa7c'
      }
    }
  };
};
