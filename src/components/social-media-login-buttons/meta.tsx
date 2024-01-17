import React from 'react'; 
import LogoButton from '../button/logo-button'; 

const MetaSignIn: React.FC = () => {
  return (
    <LogoButton
      logo={require('../../assets/facebook.png')}
      color="default"
      disabled={true}
      title="Continue with Facebook"
      style={{marginBottom: 10}}
    />
  );
};

export default MetaSignIn;
