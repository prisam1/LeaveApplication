import { useNavigation } from "@react-navigation/native";
import React from "react";
import {StyleSheet, Text, TouchableOpacity, View } from "react-native"; 
import tw from 'twrnc';

const Login: React.FC = () => {
   const navigation = useNavigation();

  return (
        <View style={tw`flex flex-row items-center justify-center`}>
        <Text style={tw`text-[#F0F0F0]`}>
          Have an account?    
          </Text>      
          <TouchableOpacity 
            onPress={async () => navigation.navigate('UserLogin' as never)}>
           <Text style={tw`ml-[5px] text-[#8357E5]`}>
            Login
           </Text>
           </TouchableOpacity>       
        </View>
  );
};

const styles = StyleSheet.create({

  text:{
    color:'#F0F0F0',
    marginTop:0,
    display:'flex',
    justifyContent:'center',
    flexDirection:'row'
 },
  
 
  
});

export default Login;
