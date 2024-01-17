import React from "react";
import tw from 'twrnc';
import {Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const OnBoard: React.FC = () => {
  // const navigation = useNavigation();

  return (
    <View style={tw`flex flex-row items-center justify-center -mt-[40px]`}>
        <Text style={tw`text-black`}>
        Don't have an account?   
          </Text>      
          <TouchableOpacity // onPress={async () => navigation.navigate('UserRegister' as never)}
           >
           <Text style={tw`ml-[5px] text-[#8357E5]`}>
           Sign up
           </Text>
           </TouchableOpacity>       
        </View>
  );
};

export default OnBoard;
