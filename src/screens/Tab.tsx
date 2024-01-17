import tw from 'twrnc';
import {View} from 'react-native';
import HomeHeader from '../screens/Home/home-header'; 
import React, {useEffect, useState} from 'react';
 

const Tab = () => { 

  return (
    <View style={tw`w-full h-full bg-white p-[20px]`}>   
        <HomeHeader
          key="chat-header"
          page="chat"
        />
    </View>
  );
};

export default Tab;
