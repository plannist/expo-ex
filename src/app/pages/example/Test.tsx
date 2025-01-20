import { Stack, useRouter } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { useSearchBoardTest, useCreateTest, useLoginTest, apiUserCreateTest, apiLoginTest } from '@/api/example/test';
import { PROFILE, API_URL } from '@env';
import {
  Text,
  TextField,
  Button,
  SocialButton,
  SearchBar,
  TopNavigation,
  SubPageHeader
} from 'react-native-sj-prime-base';
import { FlashList } from '@shopify/flash-list';
import { Ionicons } from '@expo/vector-icons';
import _ from 'lodash';
import useUserStore from '@/store/userStore';
import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const Test = () => {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('ko');

  const [idText, setIdText] = useState('');
  const [searchText, setSearchText] = useState('');

  const { setUser } = useUserStore();

  const signUpSchema = z
    .object({
      email: z.string().email({ message: '유효한 이메일 주소를 입력해주세요.' }),
      password: z
        .string()
        .min(8, { message: '비밀번호는 최소 8자 이상이어야 합니다.' })
        .regex(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])/, '비밀번호는 문자, 숫자, 특수문자를 포함해야 합니다.'),
      confirmPassword: z.string()
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: '비밀번호가 일치하지 않습니다.',
      path: ['confirmPassword']
    });

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(signUpSchema)
  });

  const onSubmit = (data: any) => {
    console.log('submit data: ', data);
  };

  const DATA = [
    {
      title: 'First Item'
    },
    {
      title: 'Second Item'
    }
  ];

  //react-query-kit
  const { data, isLoading, error } = useLoginTest({
    variables: {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    }
  });

  const {
    data: userData,
    isLoading: userLoading,
    error: userError
  } = useCreateTest({
    variables: { name: '종석', job: 'developer' }
  });

  const {
    data: boardData,
    isLoading: boardLoading,
    error: boardError
  } = useSearchBoardTest({
    variables: { userId: 1, id: 1 }
  });

  useEffect(() => {
    console.log('PROFILE: ', PROFILE);
    console.log('API_URL: ', API_URL);

    apiUserCreateTest({ name: '종석', job: 'developer' }).then((res) => console.log('apiUserCreateTest: ', res));

    apiLoginTest({ email: 'eve.holt@reqres.in', password: 'cityslicka' }).then((res) => {
      console.log('apiLoginTest: ', res);
    });
  }, []);

  useEffect(() => {
    console.log('useSearchBoardTest data :: >>', boardData);
  }, [boardData]);

  useEffect(() => {
    if (!_.isEmpty(userData)) {
      console.log('useCreateTest data :: >>', userData);
      setUser({
        id: userData?.id,
        name: userData?.name,
        age: '30',
        sex: 'M',
        profileUrl: ''
      });
    }
  }, [userData]);

  useEffect(() => {
    console.log('login test api response :: >>', data);
  }, [data]);

  useEffect(() => {
    console.log('useInputTest error >>', error);
  }, [error]);

  useEffect(() => {
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [language]);

  return (
    <TopNavigation backgroundColor="#596E8E" barStyle="light-content">
      <SubPageHeader exitEvent={() => router.back()} title={'폼사용예제'} />
      <Stack.Screen
        options={{
          title: '',
          headerBackTitle: '',
          headerShown: false
        }}
      />
      <View className="flex-1 p-4">
        <SearchBar
          backgroundColor={'#F3F4F6'}
          onClear={() => {
            setSearchText('');
          }}
          value={searchText}
          onChangeText={(value) => setSearchText(value)}
          placeholder={'어디로 떠나고 싶으신가요?'}
          onFocus={() => {
            console.log('focus search bar');
          }}
        />

        <View className="flex-row justify-between items-center mt-4">
          <SocialButton
            className={'flex-1 mx-2 mb-3'}
            type="google"
            onPress={() => {
              console.log('onPress');
            }}
          />
          <SocialButton
            className={'flex-1 mx-2 mb-3'}
            type="kakao"
            onPress={() => {
              console.log('onPress');
            }}
          />
        </View>
        <SocialButton
          className={'mb-3'}
          type="kakao"
          onPress={() => {
            console.log('onPress');
          }}
        />

        <Controller
          control={control}
          name={'email'}
          render={({ field }) => (
            <TextField
              label={{
                text: t('translation.id'),
                className: 'text-sm',
                required: true
              }}
              input={{
                mode: 'default',
                placeholder: t('translation.id'),
                charactorCount: true,
                value: idText
              }}
              onChangeText={(value) => setIdText(value)}
              onClear={() => {
                setIdText('');
              }}
            />
          )}
          //
        />

        <TextField
          label={{
            text: t('translation.name'),
            className: 'text-sm'
          }}
          input={{
            mode: 'default',
            placeholder: t('translation.name')
          }}
        />
        <TextField
          label={{
            text: t('translation.age'),
            className: 'text-sm'
          }}
          input={{
            mode: 'default',
            placeholder: t('translation.age')
          }}
        />

        {/* flash-list 사용법 */}
        <FlashList
          data={DATA}
          renderItem={({ item }) => (
            <Text face={'body'} size={'medium'}>
              {item.title}
            </Text>
          )}
          estimatedItemSize={200}
        />

        <Button
          text={'버튼 테스트'}
          variant={'primaryLow'}
          shape={'round'}
          height={'h-[56px]'}
          leftIcon={{
            icon: <Ionicons name="checkmark-circle" size={20} color="red" />,
            gap: 4
          }}
          onPress={handleSubmit(onSubmit)}
        />

        <View className="flex-row justify-between items-center mt-4">
          <Button
            className={'flex-1 mx-2'}
            disabled={false}
            loading={false}
            variant={'primaryLow'}
            shape={'round'}
            height={'h-[56px]'}
            text={t('com.trans')}
            backgroundColor={'brand-primary-default'}
            textColor={'blue'}
            onPress={() => {
              if (language === 'ko') {
                setLanguage('en');
              } else {
                setLanguage('ko');
              }
            }}
          />
          <Button
            className={'flex-1 mx-2'}
            disabled={false}
            loading={false}
            variant={'secondary'}
            text={'뒤로가기'}
            shape={'round'}
            backgroundColor={'brand-primary-default'}
            textColor={'blue'}
            onPress={() => {
              router.back();
            }}
          />
        </View>
      </View>
    </TopNavigation>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5'
  },
  buttonContainer: {
    flexDirection: 'row', // 좌우 정렬
    justifyContent: 'space-between', // 버튼 간 간격 확보
    width: '80%' // 버튼 컨테이너의 너비 설정
  }
});

export default Test;
