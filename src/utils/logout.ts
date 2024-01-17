import {deleteKey} from './storage-setup';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const logout = async () => {
  try {
    await deleteKey('user');
    await GoogleSignin.signOut();
    await GoogleSignin.revokeAccess();
  } catch (error: any) {
    console.log('Error occurred while logout', error.message);
  }
};
