import { useSearchUser } from '@/api/user/user';
import { useEffect, useState } from 'react';
import { Text, TopNavigation } from 'react-native-sj-prime-base';
import { View } from 'react-native';
import useUserStore from '@/store/userStore';

const StoreExample = () => {
  const [id, setId] = useState<string>('1');

  const { setUser, user } = useUserStore();
  //유저 정보조회
  const { data, isLoading, error } = useSearchUser({
    variables: { id: id } //userId가 변경되면 api 호출됨
  });

  useEffect(() => {
    console.log('userData: ', data);
    if (data) {
      setUser(data);
    }
  }, [data]);

  useEffect(() => {
    console.log('user store data : ', user);
  }, [user]);

  return (
    <TopNavigation backgroundColor="#596E8E" barStyle="light-content">
      <View className="items-center justify-center pt-[100px]">
        <Text face={'body'} size={'small'}>
          Tab [Store Example]
        </Text>
      </View>
    </TopNavigation>
  );
};

export default StoreExample;
