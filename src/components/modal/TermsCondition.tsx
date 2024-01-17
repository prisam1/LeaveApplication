import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import tw from 'twrnc';

const TermsCondition = ({ isVisible, onClose, onSave }) => {
    const navigation = useNavigation();
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false); 
  
    const toggleCheckbox1 = () => setIsChecked1(!isChecked1);
    const toggleCheckbox2 = () => setIsChecked2(!isChecked2); 

    const toggleCheck = () =>{
      if(isChecked1 && isChecked2)
        {
          navigation.navigate('HomePage' as never);
        }
       else {
        Alert.alert('Please select all the options');
      }}

  return (
    <Modal animationType="slide" transparent visible={isVisible} onRequestClose={onClose}>
      <View style={tw`flex-1 justify-center items-center bg-gray-500 bg-opacity-50`}>
        <View style={tw`bg-white p-[22px] rounded-md w-80 h-140`}>
           <View style={tw`flex flex-row gap-[230px]`}> 
        <Image
      source={require('../../assets/check-circle.png')}
      style={tw`mt-[0px]  `}  
      />
      <TouchableOpacity onPress={onClose}>
      <Image
      source={require('../../assets/x-close.png')}
      style={tw`mt-[0px]  `}  
      />  
      </TouchableOpacity>
      </View>
          <Text style={tw` mt-[20px] text-black text-xl font-bold`}>Terms & conditions
          </Text>
          <Text style={tw` mt-[20px] text-black`}> 
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at cursus erat. Curabitur nec nunc mi.
 Suspendisse ultrices pharetra uma sit amet convallis tellus faucibus id. Proin volutpat nulla vel enim 
 sagittis effiatur
        </Text>
          <Text style={tw` mt-[20px] text-black`}>
          Integer euismod dapibus metus, nec scelerisque augue venenatis eu Integer a nibh sit amet ipsum varius hendrerit. Aenean id euismod quam Vestibulum ante ipsum primis in faucibus orca luctus et ultrices posuere cubilia Curae. Ora vanus natoque
           penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque vitae purus est
         </Text>
          <View style={tw`flex flex-col gap-4 mt-[40px] pr-[20px]`}>
        <TouchableOpacity onPress={toggleCheckbox1} style={tw`flex-row`}>
          <View style={[tw`w-5 h-5 border-[1px] border-gray-400 rounded-sm`, isChecked1 && tw`bg-gray-200 border-gray-500`,]}>
            {isChecked1 && <Text style={tw`text-white text-xs text-center`}>✔️</Text>}
          </View> 
          <Text style={tw`text-black mt-[0px] ml-[10px] text-xs`}>
          I accept the terms and conditions of Retentive</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={toggleCheckbox2} style={tw`flex-row mt-[0px]`}>
          <View style={[tw`w-5 h-5 border-[1px] border-gray-400 rounded-sm mt-[0px]`, isChecked2 && tw`bg-gray-200 border-gray-500`]}>
            {isChecked2 && <Text style={tw`text-white text-xs text-center`}>✔️</Text>}
          </View>
          <Text style={tw`text-black mt-[1px] ml-[10px] text-xs`}>
          I accept sil the rules and regulations </Text>
        </TouchableOpacity>
      </View>
          <View style={tw`flex flex-row justify-between items-center mt-4 w-full`}>
            <TouchableOpacity onPress={onClose}>
              <Text style={tw`w-[132px] bg-[#ffffff] text-black border-[1px] border-gray-200 p-2 px-4 rounded-md text-center`}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleCheck()}>
              <Text style={tw`w-[132px] bg-[#7F56D9] text-white p-2 rounded-md text-center`}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TermsCondition;
