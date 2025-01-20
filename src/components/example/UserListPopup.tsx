/**
 * @copyright Copyright 2025. SJSoftTech. All rights reserved.
 * @file app/components/example/UserListPopup.tsx
 * @description pages 에서 사용할 components 활용 및 bottom-sheet 사용 예시
 * @author Canal framework
 * @since 2025.01.20
 * ---------------------------------------------------------------------
 * Date                     AUTHOR                  MAJOR_ISSUE
 * ---------------------------------------------------------------------
 * 2025.01.20           park jong-suk        		신규 생성
 */

import { forwardRef, useCallback, useMemo } from 'react';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSearchUser } from '@/api/example/user';

const UserListPopup = forwardRef<BottomSheet, any>((props, ref) => {
  /**
   * =====================================================================
   *	변수 선언부
   * =====================================================================
   */
  const { setId, onClose } = props;

  const snapPoints = useMemo(() => ['3%', '25%', '50%'], []);

  const { data, isLoading, error } = useSearchUser({});

  const render = useCallback((item: any) => {
    return (
      <View key={item.id}>
        <TouchableOpacity
          onPress={() => {
            console.log('item.id >>', item.id);
            setId(item.id);
            onClose();
          }}
        >
          <Text className="m-1 p-1 bg-[#eee]">{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }, []);

  return (
    <BottomSheet ref={ref} snapPoints={snapPoints} maxDynamicContentSize={50}>
      <BottomSheetScrollView
        contentContainerStyle={{
          backgroundColor: 'white'
        }}
      >
        {data?.map(render)}
      </BottomSheetScrollView>
    </BottomSheet>
  );
});

export default UserListPopup;
