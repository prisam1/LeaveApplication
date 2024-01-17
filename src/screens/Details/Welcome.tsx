import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import tw from 'twrnc';
import { useAppSelector } from "../../store/store";
import { setOrganization } from "../../store/reducer/employee-details";
import { useDispatch } from "react-redux";
import { LogoutButton } from "../../components/logOut";


const Sectiontop = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <View style={tw`p-[20px] bg-[#FFFFFF] h-full`}>
      <View style={tw`items-center`}>
        <Text style={tw`mt-[40px] mb-[10px]`} >👋</Text>
        <Text style={tw`text-black text-xl font-bold`} >
          Welcome to Amy!
        </Text>
        <Text style={tw`mt-[10px] text-[#6E6E70] text-xs font-semibold items-center`}>
          It's great to have you with us! To help us optimize your experience, tell us how you plan to use Retentive.
        </Text>
      </View>
      <Text style={tw`mt-[70px] text-[#6E6E70] text-xs`}>
        💼 Organization
      </Text>
      <View style={tw``}>
        <TextInput
          style={tw`mt-[20px] bg-[#F3F3F5] rounded-md pl-4 pt-2 pb-2 pr-2 text-black`}
          placeholder="🧑‍💼 Employee/HR"
          placeholderTextColor="gray"
          onChangeText={text => dispatch(setOrganization(text))}
        />
        <TouchableOpacity onPress={async () => navigation.navigate('Personal' as never)}>
          <Image
            source={require('../../assets/arrow-right.png')}
            style={tw`ml-[280px] -mt-[36px] w-[30px] h-[30px]`}
          />
        </TouchableOpacity>
      </View>
      <LogoutButton />
    </View>
  )
}

export default Sectiontop