import React, { useEffect, useState } from 'react';
import { ToastAndroid } from 'react-native';
import LogoButton from '../button/logo-button';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { useAuth } from '../../screens/context/auth-context';
import { useNavigation } from '@react-navigation/native';

const GOOGLE_CLIENT_ID = '2';

const GoogleSignIn = () => {
  const [userinfo, setUserInfo] = useState<any>([])
  const { onLogin } = useAuth();
  const navigation = useNavigation();
  useEffect(() => {
    GoogleSignin.configure({
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signOut();
      const userInfo = await GoogleSignin.signIn();
      setUserInfo(userInfo)
      console.log('userInfo--', userInfo);

      const result = await onLogin!(
        userInfo.user.email,
        GOOGLE_CLIENT_ID,
        userInfo.user.name,
        userInfo.user.photo,
      );
      console.log('result--', result);
      if (result) {
        navigation.navigate('Welcome' as never);
      }


    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {

        ToastAndroid.show('Sign-in failed', ToastAndroid.LONG);
      } else if (error.code === statusCodes.IN_PROGRESS) {

        ToastAndroid.show('Sign-in process is in progress', ToastAndroid.LONG);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {

        ToastAndroid.show('Play Services are not available', ToastAndroid.LONG);
      } else {
        console.error('Google Sign-in Error:', error);
        ToastAndroid.show('Sign-in failed', ToastAndroid.LONG);
      }
    }
  };

  return (
    <LogoButton
      color="default"
      disabled={false}
      onPress={() => signIn()}
      title="Sign in with Google"
      logo={require('../../assets/google.png')}
    />
  );
};

export default GoogleSignIn;
