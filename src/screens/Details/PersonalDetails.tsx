import { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native"; 
import tw from 'twrnc';
import {  setName, setEmail, setJobTitle, setOwnership, setGender, setDOB, setAadhar, setPAN, setCity,setState, setZipCode, setCountry, setAddress  } from '../../store/reducer/employee-details'
import { useDispatch } from "react-redux";

  const PersonalDetails = () => {
    const dispatch = useDispatch();
  return (
    
    <View style={tw`h-full`}>
      <ScrollView>
      <View>
      <Text style={tw`mt-[20px]`}>🧑</Text>
      <Text style={tw`text-black text-xl font-bold mt-[5px]`}>Personal Details</Text>
      <Text style={tw`text-[#6E6E70] text-xs mt-[5px]`}>Tell us about your company. You will be able to invite your teammates in the further steps
      </Text>
      </View>
      <View>
      <View>
      <Text style={tw`text-black mt-[20px]`}>Full Name</Text>
      <TextInput
          style={tw`mt-[7px] bg-[#fff] w-full border-[1px] border-gray-400 rounded-md pl-4 pt-2 pb-2 pr-2 text-black`}
          placeholder="Enter your name here"
          placeholderTextColor="gray"
          onChangeText={text => dispatch(setName(text))}
        />
        <Text style={tw`text-black mt-[20px]`}>Enter Email</Text>
        <TextInput
          style={tw`mt-[7px] bg-[#fff] w-full border-[1px] border-gray-400 rounded-md pl-4 pt-2 pb-2 pr-2 text-black`}
          placeholder="Enter your email address"
          placeholderTextColor="gray"
          onChangeText={text =>  dispatch(setEmail(text))}
        />
        <Text style={tw`text-black mt-[20px]`}>Job Title</Text>
        <TextInput
          style={tw`mt-[7px] bg-[#fff] w-full border-[1px] border-gray-400 rounded-md pl-4 pt-2 pb-2 pr-2 text-black`}
          placeholder="HR"
          placeholderTextColor="gray"
          onChangeText={text =>  dispatch(setJobTitle(text))}
        />
        <Text style={tw`text-black mt-[20px]`}>Ownership Percentage</Text>
        <TextInput
          style={tw`mt-[7px] bg-[#fff] w-full border-[1px] border-gray-400 rounded-md pl-4 pt-2 pb-2 pr-2 text-black`}
          placeholder="10%"
          placeholderTextColor="gray"
          onChangeText={text =>  dispatch(setOwnership(text))}
        />
        </View>
        <View style={tw`items-center justify-center w-full `}>     
        <View style={tw`flex flex-row gap-[18px] items-center justify-center`}>
        <View style={tw`flex flex-col`}>   
        <Text style={tw`text-black mt-[20px]`}>Gender</Text>
        <TextInput
          style={tw`mt-[7px] bg-[#fff] border-[1px] border-gray-400 w-[151px] rounded-md pl-4 pt-2 pb-2 pr-2 text-black`}
          placeholder="Female"
          placeholderTextColor="gray"
          onChangeText={text =>  dispatch(setGender(text))}
        /> 
        </View>
        <View style={tw`flex flex-col`}>
        <Text style={tw`text-black mt-[20px]`}>Date of Birth</Text>
        <TextInput
        style={tw`mt-[7px] bg-[#fff] border-[1px] border-gray-400 w-[151px] rounded-md pl-4 pt-2 pb-2 pr-2 text-black`}
        placeholder="11/04/1998"
        placeholderTextColor="gray"
        onChangeText={text =>  dispatch(setDOB(text))}
      />
      </View>
        </View>
        <View style={tw`flex flex-row gap-[18px]`}>
        <View style={tw`flex flex-col`}>  
        <Text style={tw`text-black mt-[20px]`}>Aadhar Number</Text>
        <TextInput
          style={tw`mt-[7px] bg-[#fff] border-[1px] border-gray-400 w-[151px] rounded-md pl-4 pt-2 pb-2 pr-2 text-black`}
          placeholder="Enter Aadhar"
          placeholderTextColor="gray"
          onChangeText={text =>  dispatch(setAadhar(text))}
        />
        </View>
        <View style={tw`flex flex-col`}>  
        <Text style={tw`text-black mt-[20px]`}>PAN Card Number</Text>
         <TextInput
          style={tw`mt-[7px] bg-[#fff] border-[1px] border-gray-400 w-[151px] rounded-md pl-4 pt-2 pb-2 pr-2 text-black`}
          placeholder="Enter Pan"
          placeholderTextColor="gray"
          onChangeText={text =>  dispatch(setPAN(text))}
        /> 
        </View>
        </View>
        </View>   
      </View>
      </ScrollView>
    </View>

  )}
  export default PersonalDetails
  
 