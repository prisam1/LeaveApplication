import { useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import tw from 'twrnc';
import DocumentPicker from 'react-native-document-picker';

const EducationDetails = () => {
  const [qualification, setQualification] = useState('');
  const [college, setCollege] = useState('');
  const [board, setBoard] = useState('');
  const [yop, setYop] = useState('');
  const [selectedFile, setSelectedFile] = useState(false);

  const pickDocument = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setSelectedFile(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('Document picking cancelled');
      } else {

        console.error('Error while picking a document:', err);
      }
    }
  };
  return (
    <View style={tw`h-full`}>
      <ScrollView>
        <View>
          <Text style={tw`mt-[20px]`}>🧑‍🎓</Text>
          <Text style={tw`text-black text-xl font-bold mt-[5px]`}>Education Details</Text>
          <Text style={tw`text-[#6E6E70] text-xs mt-[5px]`}>
            Ut eget pulvinar nulla, a pharetra sem. Proin dapibus bibendum augue.  </Text>
        </View>
        <View>
          <View style={tw`flex flex-col`}>
            <Text style={tw`text-black mt-[20px]`}>Highest Qualification</Text>
            <TextInput
              style={tw`mt-[7px]  bg-[#fff] w-full border-[1px] border-gray-400  rounded-md pl-4 pt-2 pb-2 pr-2 text-black`}
              placeholder="HSC (Higher secondary school certificate)"
              placeholderTextColor="gray"
              onChangeText={text => setQualification(text)}
            />
          </View>
          <View style={tw`flex flex-col`}>
            <Text style={tw`text-black mt-[20px]`}>College Name</Text>
            <TextInput
              style={tw`mt-[7px] bg-[#fff] w-full  border-[1px] border-gray-400 rounded-md pl-4 pt-2 pb-2 pr-2 text-black`}
              placeholder="Enter college name"
              placeholderTextColor="gray"
              onChangeText={text => setCollege(text)}
            />
          </View>
          <View style={tw`w-full`}>
            <Text style={tw`text-black mt-[20px]`}>Upload Marksheet</Text>
            <TouchableOpacity onPress={pickDocument}>
              <Image
                source={require('../../assets/upload.png')}
                style={tw`mt-[5px] w-full h-[82px] `}
              />
            </TouchableOpacity>
            {selectedFile && (
              <View style={tw`mt-[20px] `} >
                <Text>Selected File Name: {selectedFile.name}</Text>
                <Text>Selected File Size: {selectedFile.size} bytes</Text>
              </View>
            )}
          </View>
          <View style={tw`flex flex-row gap-[18px]`}>
            <View style={tw`flex flex-col`}>
              <Text style={tw`text-black mt-[20px]`}>Board</Text>
              <TextInput
                style={tw`mt-[7px] bg-[#fff] w-[151px] border-[1px] border-gray-400  rounded-md pl-4 pt-2 pb-2 pr-2 text-black`}
                placeholder="Enter board"
                placeholderTextColor="gray"
                onChangeText={text => setBoard(text)}
              />
            </View>
            <View style={tw`flex flex-col`}>
              <Text style={tw`text-black mt-[20px]`}>Year of Passing</Text>
              <TextInput
                style={tw`mt-[7px] bg-[#fff] w-[151px]  border-[1px] border-gray-400  rounded-md pl-4 pt-2 pb-2 pr-2 text-black`}
                placeholder="MM/YY"
                placeholderTextColor="gray"
                onChangeText={text => setYop(text)}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>

  )
}
export default EducationDetails

