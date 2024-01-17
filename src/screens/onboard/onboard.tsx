import React from 'react';
import tw from 'twrnc';
import {View } from 'react-native'; 
import OnBoardLogo from './onBoardLogo';
import {OnBoardContent} from './OnBoardContent'
import Login from './Login';

const OnBoard: React.FC<{}> = ({ }) => {
  return (
    <View style={tw` flex flex-col gap-22 bg-[#0E0A0F] w-full h-full`}>
        <OnBoardLogo/>
        <OnBoardContent/> 
        <Login/>
      </View>
  );
};
 

export default OnBoard;
