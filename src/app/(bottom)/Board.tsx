/**
 * @copyright Copyright 2025. SJSoftTech. All rights reserved.
 * @file app/(bottom)/Board.tsx
 * @description bottom navigation 게시판 예제
 * @author RN framework
 * @since 2025.01.20
 * ---------------------------------------------------------------------
 * Date                     AUTHOR                  MAJOR_ISSUE
 * ---------------------------------------------------------------------
 * 2025.01.20           park jong-suk        		신규 생성
 */

import { View } from 'react-native';
import { useEffect, useState } from 'react';
import { Button, SubPageHeader, Text, TopNavigation } from 'react-native-sj-prime-base';
import { Ionicons } from '@expo/vector-icons';
import { FlashList } from '@shopify/flash-list';
import { useSearchBoardTest } from '@/api/example/test';
import { useRouter } from 'expo-router';

const Board = () => {
  /**
   * =====================================================================
   *	변수 선언부
   * =====================================================================
   */
  const router = useRouter();
  const [userId, setUserId] = useState<number>(1);
  const { data, isLoading, error } = useSearchBoardTest({
    variables: { userId: userId } //userId가 변경되면 api 호출됨
  });

  /**
   * =====================================================================
   *	함수
   * =====================================================================
   */
  const changeUserId = () => {
    setUserId((prev) => (prev === 1 ? 2 : 1));
    // setId((prev) => (prev === 1 ? 2 : 1));
  };

  /**
   * =====================================================================
   *	Hook
   * =====================================================================
   */

  useEffect(() => {
    console.log('data: ', data);
  }, [data]);

  return (
    <TopNavigation backgroundColor="#596E8E" barStyle="light-content">
      <SubPageHeader exitEvent={() => router.back()} title={'리스트테스트'} />
      <View className="items-center justify-center pt-[100px]">
        <Text face={'body'} size={'small'}>
          Tab [myPage]
        </Text>
      </View>
      <View style={{ height: 500 }}>
        <FlashList
          data={data}
          renderItem={({ item }) => (
            <>
              <Text face={'body'} size={'medium'} weight={'regular'}>{`id: ${item.id}`}</Text>
              <Text face={'body'} size={'medium'} weight={'regular'}>{`userId: ${item.userId}`}</Text>
              <Text face={'body'} size={'medium'} weight={'regular'}>
                {item.title}
              </Text>
            </>
          )}
          estimatedItemSize={50}
        />
      </View>

      <View className="items-center">
        <Button
          className={'max-w-80 mt-4'}
          text={'userId 변경'}
          variant={'danger'}
          shape={'round'}
          height={'h-[30px]'}
          leftIcon={{
            icon: <Ionicons name="checkmark-circle" size={20} color="yellow" />,
            gap: 4
          }}
          onPress={() => {
            changeUserId();
          }}
        />
      </View>
    </TopNavigation>
  );
};

export default Board;
