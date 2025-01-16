import { View, Text, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import _ from 'lodash';
import { Button, TextField } from 'react-native-sj-prime-base';
import { Ionicons } from '@expo/vector-icons';
import { useTokenStorage } from '@/storage/useTokenStorage';

const storageExample = () => {
  const { token, accessToken, refreshToken, clearToken } = useTokenStorage();

  const [accessValue, setAccessValue] = useState<string>('');

  const [refreshValue, setRefreshValue] = useState<string>('');

  useEffect(() => {
    console.log('lodash: ', _.union([1, 2, 3], [4]));
  }, []);

  return (
    <View style={styles.container}>
      <View className={'align-top content-start'}>
        <Text>Tab [Settings]</Text>
        <Text>AccessToken :: {token?.accessToken}</Text>
        <Text>RefreshToken :: {token?.refreshToken}</Text>
      </View>

      <TextField
        label={{
          text: 'accessToken',
          className: 'text-sm'
        }}
        input={{
          mode: 'default',
          placeholder: 'access token 입력',
          border: 'solid 1px transparent',
          height: 'h-[40px]',
          value: accessValue
        }}
        onChangeText={(text: string) => {
          console.log('accessValue:', text);
          setAccessValue(text);
        }}
        onClear={() => setAccessValue('')}
      />
      <Button
        className={'mt-2 max-w-80'}
        text={'엑세스토큰적용'}
        variant={'primary'}
        shape={'round'}
        height={'h-[30px]'}
        leftIcon={{
          icon: <Ionicons name="checkmark-circle" size={20} color="red" />,
          gap: 4
        }}
        onPress={() => {
          accessToken(accessValue);
        }}
      />

      <TextField
        label={{
          text: 'refreshToken',
          className: 'text-sm'
        }}
        input={{
          mode: 'default',
          placeholder: 'refresh token 입력',
          height: 'h-[40px]',
          value: refreshValue
        }}
        onChangeText={(text: string) => {
          console.log('refreshValue:', text);
          setRefreshValue(text);
        }}
        onClear={() => setRefreshValue('')}
      />

      <Button
        className={'m-2 max-w-80'}
        text={'리프레시토큰적용'}
        variant={'primaryLow'}
        shape={'round'}
        height={'h-[30px]'}
        leftIcon={{
          icon: <Ionicons name="checkmark-circle" size={20} color="red" />,
          gap: 4
        }}
        onPress={() => {
          refreshToken(refreshValue);
        }}
      />
      <Button
        className={'max-w-80 mt-4'}
        text={'clearToken'}
        variant={'danger'}
        shape={'round'}
        height={'h-[30px]'}
        leftIcon={{
          icon: <Ionicons name="checkmark-circle" size={20} color="yellow" />,
          gap: 4
        }}
        onPress={() => {
          clearToken();
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
});

export default storageExample;
