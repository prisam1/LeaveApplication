import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import tw from 'twrnc';
import { setCity, setState, setZipCode, setCountry, setAddress  } from '../../store/reducer/employee-details'
import { useDispatch } from "react-redux";


  const PersonalDetails2 = () => {
    const dispatch = useDispatch();
  return (
    
    <View style={tw`h-full`}>
      <View>
      <Text style={tw`mt-[20px]`}>📍</Text>
      <Text style={tw`text-black text-xl font-bold mt-[5px]`}>Personal Details</Text>
      <Text style={tw`text-[#6E6E70] text-xs mt-[5px]`}>Tell us about your company. You will be able to invite your teammates in the further steps
      </Text>
      </View>
      <View>
      <View>
      <Text style={tw`text-black mt-[20px]`}>Address (Landmark)</Text>
      <TextInput
          style={tw`mt-[7px]  bg-[#fff] w-full border-[1px] border-gray-400  rounded-md pl-4 pt-2 pb-2 pr-2 text-black`}
          placeholder="Type of address"
          placeholderTextColor="gray"
          onChangeText={text => dispatch(setAddress(text))}
        />
        </View>
        <View style={tw`items-center justify-center w-full`}>     
        <View style={tw`flex flex-row gap-[18px] items-center`}>
        <View style={tw`flex flex-col`}>   
        <Text style={tw`text-black mt-[20px]`}>Postal Code</Text>
        <TextInput
          style={tw`mt-[7px] bg-[#fff] w-[151px]  border-[1px] border-gray-400 rounded-md pl-4 pt-2 pb-2 pr-2 text-black`}
          placeholder="560064"
          placeholderTextColor="gray"
          onChangeText={text => dispatch(setZipCode(text))}
        /> 
        </View>
        <View style={tw`flex flex-col`}>
        <Text style={tw`text-black mt-[20px]`}>Country</Text>
        <TextInput
        style={tw`mt-[7px]  bg-[#fff] w-[151px]  border-[1px] border-gray-400  rounded-md pl-4 pt-2 pb-2 pr-2 text-black`}
        placeholder="India"
        placeholderTextColor="gray"
        onChangeText={text => dispatch(setCountry(text))}
      />
      </View>
        </View>
        <View style={tw`flex flex-row gap-[18px]`}>
        <View style={tw`flex flex-col`}>  
        <Text style={tw`text-black mt-[20px]`}>City</Text>
        <TextInput
          style={tw`mt-[7px] bg-[#fff] w-[151px] border-[1px] border-gray-400  rounded-md pl-4 pt-2 pb-2 pr-2 text-black`}
          placeholder="City"
          placeholderTextColor="gray"
          onChangeText={text => dispatch(setCity(text))}
        />
        </View>
        <View style={tw`flex flex-col`}>  
        <Text style={tw`text-black mt-[20px]`}>State</Text>
         <TextInput
          style={tw`mt-[7px] bg-[#fff] w-[151px]  border-[1px] border-gray-400  rounded-md pl-4 pt-2 pb-2 pr-2 text-black`}
          placeholder="Karnataka"
          placeholderTextColor="gray"
          onChangeText={text => dispatch(setState(text))}
        />
        </View>
        </View>
        </View>
      </View>
    </View>

  )}
  export default PersonalDetails2
  
 