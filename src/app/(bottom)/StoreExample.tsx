/**
 * @copyright Copyright 2025. SJSoftTech. All rights reserved.
 * @file app/(bottom)/StoreExample.tsx
 * @description userStore 활용 예시
 * @author Canal framework
 * @since 2025.01.20
 * ---------------------------------------------------------------------
 * Date                     AUTHOR                  MAJOR_ISSUE
 * ---------------------------------------------------------------------
 * 2025.01.20           park jong-suk        		신규 생성
 */

import { useSearchUser } from '@/api/user/user';
import { useEffect, useRef, useState } from 'react';
import { Button, SubPageHeader, Text, TopNavigation } from 'react-native-sj-prime-base';
import { View } from 'react-native';
import useUserStore from '@/store/userStore';
import Profile from '@/components/user/Profile';
import BottomSheet from '@gorhom/bottom-sheet';
import UserListPopup from '@/components/user/UserListPopup';
import { router } from 'expo-router';

const StoreExample = () => {
  /**
   * =====================================================================
   *	변수 선언부
   * =====================================================================
   */
  const [id, setId] = useState<string>('70');

  const bottomSheetRef = useRef<BottomSheet>(null);

  //userStore 사용
  const { setUser, user } = useUserStore();
  //유저 정보조회
  const { data, isLoading, error } = useSearchUser({
    variables: { id: id } //userId가 변경되면 api 호출됨
  });

  /**
   * =====================================================================
   *	함수
   * =====================================================================
   */
  const onClosePopup = () => {
    // CHECK: IOS 와 android 같은 UI 표현을 위한 function 호출
    // bottomSheetRef.current?.close();
    bottomSheetRef.current?.snapToIndex(0);
  };

  /**
   * =====================================================================
   *	Hook
   * =====================================================================
   */
  useEffect(() => {
    console.log('userData: ', data);
    if (data) {
      setUser(data[0]);
    }
  }, [data]);

  useEffect(() => {
    console.log('user store data : ', user);
  }, [user]);

  return (
    <TopNavigation backgroundColor="#596E8E" barStyle="light-content">
      <SubPageHeader exitEvent={() => router.back()} title={'내정보'} />
      <View className="items-center justify-center pt-[10px]">
        <Text face={'body'} size={'small'}>
          Tab [Store Example]
        </Text>
      </View>
      <View className="flex-2 items-center p-5 bg-gray-100">
        <Profile
          followers={20}
          following={55}
          company={'Apple.co.ltd'}
          twitter={'인스타최고'}
          location={'Seoul'}
          linkedin={'https:://naver.com'}
        />
      </View>
      <View className="flex-2 items-center p-5 bg-gray-100">
        <Button
          backgroundColor={'green'}
          text={'사용자정보변경'}
          onPress={() => {
            bottomSheetRef.current?.expand();
          }}
        />
      </View>
      <UserListPopup ref={bottomSheetRef} setId={setId} onClose={onClosePopup} />
    </TopNavigation>
  );
};

export default StoreExample;
