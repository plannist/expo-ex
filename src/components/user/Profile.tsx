import React from 'react';
import { View, Text, Image } from 'react-native';
import useUserStore from '@/store/userStore';

interface ProfileData {
  followers?: number;
  following?: number;
  location?: string;
  company?: string;
  twitter?: string;
  linkedin?: string;
}

const Profile = (props: ProfileData) => {
  const { user } = useUserStore();

  return (
    <>
      <Image className="w-24 h-24 rounded-full mb-4" source={{ uri: user.profileUrl }} />

      <Text className="text-lg font-bold text-gray-800">{user.name}</Text>
      <Text className="text-base text-gray-600">@{user.id}</Text>
      <Text className="text-sm text-gray-500 mb-4">{user.name}</Text>

      <View className="flex-row justify-between w-3/5 my-4">
        <Text className="text-sm font-semibold text-gray-800">{props.followers} Followers</Text>
        <Text className="text-sm font-semibold text-gray-800">{props.following} Following</Text>
      </View>

      <Text className="text-sm text-gray-600 my-1">📍 {props.location}</Text>
      <Text className="text-sm text-gray-600 my-1">🏢 {props.company}</Text>
      <Text className="text-sm text-gray-600 my-1">🐦 {props.twitter}</Text>
      <Text className="text-sm text-gray-600 my-1">🔗 {props.linkedin}</Text>
    </>
  );
};

export default Profile;
