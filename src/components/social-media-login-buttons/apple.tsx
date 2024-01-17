import React from 'react';
import { } from 'react-native';
import LogoButton from '../button/logo-button';


const AppleSignIn: React.FC = () => {
  return (
    <LogoButton
      color="default"
      logo={require('../../assets/apple.png')}
      disabled={true}
      title="Continue with Apple"
      style={{ marginBottom: 10 }}
    />
  );
};

export default AppleSignIn;
