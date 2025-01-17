import React from 'react';
import { View, ActivityIndicator, StyleSheet, Modal } from 'react-native';
import useLoadingStore from '@/store/loadingStore';

const Loading = () => {
  const { isLoading } = useLoadingStore();

  if (!isLoading) {
    return null;
  }

  return (
    <View className="absolute inset-0 z-50 justify-center items-center bg-black/50">
      <ActivityIndicator size="large" color="#ffffff" />
    </View>
  );
};

export default Loading;
