/**
 * @copyright Copyright 2025. SJSoftTech. All rights reserved.
 * @file app/pages/Sona.tsx
 * @description  Redux의 useDispatch와 useSelector 훅을 타입화하여
 * flash-list 사용법 & api 호출 예제
 * @author Canal framework
 * @since 2024.03.11
 * ---------------------------------------------------------------------
 * Date                     AUTHOR                  MAJOR_ISSUE
 * ---------------------------------------------------------------------
 * 2025.01.20           park jong-suk        		신규 생성
 */

import { useEffect } from 'react';
import { Text } from 'react-native-sj-prime-base';
import { apiSearchPost, useSearchComCode } from '@/api/com/comCode';
import { FlashList } from '@shopify/flash-list';
import _ from 'lodash';
import useComCodeStore from '@/store/comCodeStore';
import { Stack } from 'expo-router';

const Sona = () => {
  /**
   * =====================================================================
   *	변수 선언부
   * =====================================================================
   */
  //react-query-kit
  const { data, isLoading, error } = useSearchComCode();

  const { comCode, setComCode } = useComCodeStore();

  /**
   * =====================================================================
   *	함수
   * =====================================================================
   */

  /**
   * =====================================================================
   *	Hook
   * =====================================================================
   */
  useEffect(() => {
    if (!_.isEmpty(data)) {
      // console.log('SONA data.list >> ', data?.list);
      if (!_.isEmpty(comCode)) {
        setComCode(data);
      }
    }
  }, [data]);

  useEffect(() => {
    //
    apiSearchPost({ jijumCd: '1' }).then((res) => {
      console.log('@responseBody post 요청 결과: ', res);
    });
  }, []);

  useEffect(() => {
    console.log('공통코드 스토어 데이터 저장 확인 :: ', data);
  }, [comCode]);

  //TODO: alert 구현
  if (error instanceof Error)
    return (
      <Text face={'body'} size={'medium'}>
        Error: {error.message}
      </Text>
    );

  return (
    <>
      <Stack.Screen
        options={{
          title: '공통코드조회',
          headerBackTitle: '',
          headerBackButtonDisplayMode: 'minimal'
        }}
      />

      {/* flash-list 사용법 */}
      <FlashList
        data={data}
        // data={DATA}
        renderItem={({ item }) => (
          <>
            <Text face={'body'} size={'medium'}>
              그룹코드명: {item.grpCdNm}
            </Text>
            <Text face={'body'} size={'medium'}>
              공통코드명: {item.comCdNm}
            </Text>
          </>
        )}
        estimatedItemSize={200}
      />
    </>
  );
};
export default Sona;
