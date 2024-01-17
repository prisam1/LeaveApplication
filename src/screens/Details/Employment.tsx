import { useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import tw from 'twrnc';
import DocumentPicker from 'react-native-document-picker';

const EmploymentDetails = () => {
  const [company, setCompany] = useState('');
  const [job, setJob] = useState('');
  const [work, setWork] = useState('');
  const [location, setLocation] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  return (

    <View style={tw`h-full`}>
      <ScrollView>
      <View>
          <Text style={tw`mt-[20px]`}>💼</Text>
          <Text style={tw`text-black text-xl font-bold mt-[5px]`}>Employment Details</Text>
          <Text style={tw`text-[#6E6E70] text-xs mt-[5px]`}>
            Ut eget pulvinar nulla, a pharetra sem. Proin dapibus bibendum augue.  </Text>
      </View>
      <View>
        <View style={tw`flex flex-col`}>
          <Text style={tw`text-black mt-[20px]`}>Company Name</Text>
          <TextInput
            style={tw`mt-[7px]  bg-[#fff] w-full border-[1px] border-gray-400  rounded-md pl-4 pt-2 pb-2 pr-2 text-black`}
            placeholder="Enter your company name"
            placeholderTextColor="gray"
            onChangeText={text => setCompany(text)}
          />
        </View>
        <View style={tw`flex flex-col`}>
          <Text style={tw`text-black mt-[20px]`}>Job Title</Text>
          <TextInput
            style={tw`mt-[7px] bg-[#fff] w-full  border-[1px] border-gray-400 rounded-md pl-4 pt-2 pb-2 pr-2 text-black`}
            placeholder="HR"
            placeholderTextColor="gray"
            onChangeText={text => setJob(text)}
          />
        </View>
        <View style={tw`flex flex-col`}>
          <Text style={tw`text-black mt-[20px]`}>Type of Work</Text>
          <TextInput
            style={tw`mt-[7px] bg-[#fff] w-full  border-[1px] border-gray-400 rounded-md pl-4 pt-2 pb-2 pr-2 text-black`}
            placeholder="Select option"
            placeholderTextColor="gray"
            onChangeText={text => setWork(text)}
          />
        </View>
        <View style={tw`flex flex-col`}>
          <Text style={tw`text-black mt-[20px]`}>College Name</Text>
          <TextInput
            style={tw`mt-[7px] bg-[#fff] w-full  border-[1px] border-gray-400 rounded-md pl-4 pt-2 pb-2 pr-2 text-black`}
            placeholder="Enter Location "
            placeholderTextColor="gray"
            onChangeText={text => setLocation(text)}
          />
        </View>
        <View style={tw`flex flex-row gap-[18px]`}>
          <View style={tw`flex flex-col`}>
            <Text style={tw`text-black mt-[20px]`}>Start Date</Text>
            <TextInput
              style={tw`mt-[7px] bg-[#fff] w-[151px] border-[1px] border-gray-400  rounded-md pl-4 pt-2 pb-2 pr-2 text-black`}
              placeholder="MM/YY"
              placeholderTextColor="gray"
              onChangeText={text => setStart(text)}
            />
          </View>
          <View style={tw`flex flex-col`}>
            <Text style={tw`text-black mt-[20px]`}>End Date</Text>
            <TextInput
              style={tw`mt-[7px] bg-[#fff] w-[151px]  border-[1px] border-gray-400  rounded-md pl-4 pt-2 pb-2 pr-2 text-black`}
              placeholder="MM/YY"
              placeholderTextColor="gray"
              onChangeText={text => setEnd(text)}
            />
          </View>
        </View>
    </View>
    </ScrollView>
    </View>

  )}

export default EmploymentDetails

