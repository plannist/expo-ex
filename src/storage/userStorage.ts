import { MMKVLoader, useMMKVStorage } from 'react-native-mmkv-storage';

interface User {
    id:string,
    name:string,
    age:string,
    sex:string,
    profileUrl:string
}

// MMKV 인스턴스 생성
const storage = new MMKVLoader().initialize();

const [user, setUser] = useMMKVStorage<User>('user', storage, {id:null,name:null,age:null,sex:null,profileUrl:null});

const setUserData = async (userData :User) => {
    setUser(userData);
};

const getUserData = async () => {
    return user;
};

const removeUserData = async () => {
    storage.removeItem('user');
}
