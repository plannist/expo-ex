import { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { Text } from 'react-native-sj-prime-base';
import { useSearchComCode } from '@/api/com/comCode';
import { FlashList } from '@shopify/flash-list';
import _ from 'lodash';
import useComCodeStore from '@/store/comCodeStore';

const Sona = () => {
  //react-query-kit
  const { data = { list: [] }, isLoading, error } = useSearchComCode();

  const { comCode, setComCode } = useComCodeStore();

  /*
const DATA = [
    {
      comCdVal: '01',
      comCdValNm: '제휴',
      grpCd: '01',
      grpCdNm: '제휴그룹'
    },
    {
      comCdVal: '02',
      comCdValNm: '자사',
      grpCd: '01',
      grpCdNm: '제휴그룹'
    },
    {
      comCdVal: '03',
      comCdValNm: '용역',
      grpCd: '01',
      grpCdNm: '제휴그룹'
    }
  ];
  */
  useEffect(() => {
    if (!_.isEmpty(data?.list)) {
      // console.log('SONA data.list >> ', data?.list);
      if (!_.isEmpty(comCode)) {
        setComCode(data.list);
      }
    }
  }, [data]);

  useEffect(() => {
    console.log('공통코드 스토어 데이터 저장 확인 :: ', data?.list);
  }, [comCode]);

  //TODO: 로딩바 구현
  if (isLoading) return <ActivityIndicator size="large" />;
  //TODO: alert 구현
  if (error instanceof Error)
    return (
      <Text face={'body'} size={'medium'}>
        Error: {error.message}
      </Text>
    );

  return (
    <>
      {/* flash-list 사용법 */}
      <FlashList
        data={data.list}
        // data={DATA}
        renderItem={({ item }) => (
          <>
            <Text face={'body'} size={'medium'}>
              그룹코드명: {item.grpCdNm}
            </Text>
            <Text face={'body'} size={'medium'}>
              그룹코드명: {item.comCdValNm}
            </Text>
          </>
        )}
        estimatedItemSize={200}
      />
    </>
  );
};
export default Sona;
