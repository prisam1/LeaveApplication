import AsyncStorage from '@react-native-async-storage/async-storage';

export const add = async (key: string, value: string) => {
  return AsyncStorage.setItem(key, value);
};

export const getByKey = async (key: string) => {
  return AsyncStorage.getItem(key);
};

export const deleteKey = async (key: string) => {
  return AsyncStorage.removeItem(key);
};
