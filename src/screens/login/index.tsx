
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import tw from 'twrnc';
import { useAuth } from "../context/auth-context";

const UserLogin = () => {
  const navigation = useNavigation();
  const { onLoginUser } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = async () => {
    try {
      console.log('click')
      await onLoginUser!(email, password);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={tw`bg-[#FFFFFF] h-full`}>
      <Text style={tw`mt-[40px] mb-[10px]`} >👋</Text>
      <Text style={tw`text-black text-xl font-bold`} >
        Welcome to Rententive
      </Text>
      <Text style={tw`mt-[10px] text-[#6E6E70] text-xs font-semibold`}>
        Ut eget pulvinar nulla, a pharetra sem. Proin dapibus bibendum augue.
      </Text>
      <View>
        <Text style={tw`mt-[50px] text-black`}>Enter E-mail</Text>
        <TextInput
          style={tw`mt-[5px] border border-gray-300 rounded-md pl-4 pt-2 pb-2 pr-2 text-black`}
          placeholder="Enter email"
          placeholderTextColor="gray"
          onChangeText={text => setEmail(text)}
        />
        <Text style={tw`mt-[25x] text-black`} >Enter Password</Text>
        <TextInput
          style={tw`mt-[5px] border border-gray-300 rounded-md pl-4 pt-2 pb-2 pr-2 text-black`}
          placeholder="Enter password"
          placeholderTextColor="gray"
          onChangeText={text => setPassword(text)}
        />
      </View>
      <Text style={tw`mt-[5x] ml-[206px] text-[#8357E5]`} >Forgot Password?</Text>
      <TouchableOpacity onPress={() => handleSubmit()}>
        {/* // {async () => navigation.navigate('Welcome' as never)}> */}
        <View style={[tw`p-[20px] flex justify-center items-center`]}>
          <Text style={tw`mt-[40px] p-[15px] text-white font-bold text-center bg-[#7E55F1] rounded-md w-[320px] h-[48px]`}>
            Login
          </Text>
        </View>
      </TouchableOpacity>
      <View style={tw`flex flex-row`}>
        <View style={tw`border-b border-[#D6D6D6] w-[137px] h-[20px]`} />
        <Text style={tw`p-4 -mt-[8px] text-[#ACAFB5] `}>
          or
        </Text>
        <View style={tw`border-b border-[#D6D6D6] w-[137px] h-[20px]`} />
      </View>
    </View>
  )
}

export default UserLogin;
