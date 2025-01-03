import {View, Text, StyleSheet, Button} from 'react-native';
import {Link, useRouter} from "expo-router";
import React from "react";

const index = () => {
    const router = useRouter();
    return (
        <View className="flex-1">
            <View className="py-12 md:py-24 lg:py-32 xl:py-48">
                <View className="px-4 md:px-6">
                    <View className="flex flex-col items-center gap-4 text-center">
                        <Text
                            role="heading"
                            className="text-3xl text-center native:text-5xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
                        >
                            Welcome to Project Framework
                        </Text>
                        <Text className="mx-auto max-w-[700px] text-lg text-center text-gray-500 md:text-xl dark:text-gray-400">
                            Discover and collaborate on acme. Explore our services now.
                        </Text>

                        <View className="gap-4">
                            <Link
                                suppressHighlighting
                                className="flex h-9 items-center justify-center overflow-hidden rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 web:shadow ios:shadow transition-colors hover:bg-gray-900/90 active:bg-gray-400/90 web:focus-visible:outline-none web:focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                href="/pages/Sona"
                            >
                                공통코드조회
                            </Link>

                            <Button title={'사용자정보'} onPress={() => router.push('/pages/Test')}/>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default index;
