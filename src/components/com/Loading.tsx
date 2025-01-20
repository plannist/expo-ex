/**
 * @copyright Copyright 2025. SJSoftTech. All rights reserved.
 * @file app/components/Loading.tsx
 * @description 전역 Loading 관리 컴포넌트
 * @author Canal framework
 * @since 2025.01.20
 * ---------------------------------------------------------------------
 * Date                     AUTHOR                  MAJOR_ISSUE
 * ---------------------------------------------------------------------
 * 2025.01.20           park jong-suk        		신규 생성
 */
import React from 'react';
import { View, ActivityIndicator, StyleSheet, Modal } from 'react-native';
import useLoadingStore from '@/store/loadingStore';

const Loading = () => {
  /**
   * =====================================================================
   *	변수 선언부
   * =====================================================================
   */

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
