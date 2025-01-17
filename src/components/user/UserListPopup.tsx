import { forwardRef, useCallback, useMemo, useRef } from 'react';
import BottomSheet, { BottomSheetScrollView, BottomSheetView } from '@gorhom/bottom-sheet';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSearchUser } from '@/api/user/user';

const UserListPopup = forwardRef<BottomSheet, any>((props, ref) => {
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
