import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';

const onBoardLogo: React.FC<{}> = ({ }) => {
  return (
    <>
    <View style={tw`bg-[#0E0A0F] w-full`}>
      <Image
      source={require('../../assets/logo-1.png')}
      style={tw`mt-[20px] w-[200px] h-[250px] `}  
      />
      <Image
      source={require('../../assets/logo-3.png')}
      style={tw`ml-[10px] -mt-[260px] w-[130px] h-[230px]`} 
      />
       <Image
      source={require('../../assets/logo-4.png')}
      style={tw`-mt-[230px] ml-[25px] w-[200px] h-[250px]`} 
      />
      <Image
      source={require('../../assets/logo-5.png')}
      style={tw`ml-[90px] -mt-[170px] w-[60px] h-[70px]`}  
      />
       <Image
      source={require('../../assets/logo-8.png')}
      style={tw`ml-[200px] -mt-[80px] w-[50px] h-[50px]`} 
      />
      <Image
      source={require('../../assets/logo-2.png')}
      style={tw`ml-[155px] -mt-[85px] w-[100px] h-[300px] `} 
      />
        <Image
      source={require('../../assets/logo-7.png')}
      style={tw`ml-[159px] -mt-[328px] w-[110px] h-[280px]`} 
      />
      <Image
      source={require('../../assets/logo-6.png')}
      style={tw`ml-[166px] -mt-[88px] w-[180px] h-[70px] `} 
      />
    </View>
    </>
  );
};
 

export default onBoardLogo;
