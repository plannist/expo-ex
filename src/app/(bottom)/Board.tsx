import { StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import { Button, SubPageHeader, Text, TopNavigation } from 'react-native-sj-prime-base';
import { Ionicons } from '@expo/vector-icons';
import { FlashList } from '@shopify/flash-list';
import { useSearchBoardTest } from '@/api/test/test';
import { useRouter } from 'expo-router';

const Board = () => {
  const router = useRouter();
  const [userId, setUserId] = useState<number>(1);

  const { data, isLoading, error } = useSearchBoardTest({
    variables: { userId: userId } //userId가 변경되면 api 호출됨
  });

  const changeUserId = () => {
    setUserId((prev) => (prev === 1 ? 2 : 1));
    // setId((prev) => (prev === 1 ? 2 : 1));
  };

  useEffect(() => {
    console.log('data: ', data);
  }, [data]);

  return (
    <TopNavigation backgroundColor="#596E8E" barStyle="light-content">
      <SubPageHeader exitEvent={() => router.back()} title={'내정보'} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Board;
