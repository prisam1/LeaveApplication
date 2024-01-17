import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import tw from 'twrnc';
import DocumentPicker from 'react-native-document-picker';

  const DocumentUpload = () => {
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
      <View>
      <Text style={tw`mt-[20px]`}>🧑‍🎓</Text>
      <Text style={tw`text-black text-xl font-bold mt-[5px]`}>Document Upload</Text>
      <Text style={tw`text-[#6E6E70] text-xs mt-[5px]`}>
      Ut eget pulvinar nulla, a pharetra sem. Proin dapibus bibendum augue.  </Text>
      </View>
      <View>    
      <View style={tw`w-full`}>
      <Text style={tw`text-black mt-[20px]`}>Aadhar Card</Text>
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
      <View style={tw`w-full`}>
      <Text style={tw`text-black mt-[20px]`}>PAN Card</Text>
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
      <View style={tw`w-full`}>
      <Text style={tw`text-black mt-[20px]`}>Resume</Text>
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
        
      </View>
    </View>

  )} 
 
  export default DocumentUpload
  
 