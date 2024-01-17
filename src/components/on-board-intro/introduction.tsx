import React from 'react';
import tw from 'twrnc';
import { View, Text, Image, StyleSheet } from 'react-native';


const OnBoardIntroduction: React.FC = () => {
  return (
      <View style={tw`flex flex-col justify-center items-center`}>
        <Text  style={tw`p-[40px] w-[340px] text-2xl font-semibold text-center text-[#FFFFFF]`}>Let's simplify your work using our platform!</Text>
        <Text  style={tw`p-[30px] w-[350px] text-xs -mt-[60px] text-center text-[#F0F0F0]`}>
           Tell us about your company. You willl be able to invite your teammates in the further steps.
        </Text>
      </View>
  );
};

export default OnBoardIntroduction;
