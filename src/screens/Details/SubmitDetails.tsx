import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import tw from 'twrnc';
import ModalComponent from '../../components/modal/TermsCondition'

const SubmitDetails = () => {
  const navigation = useNavigation();
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);

  const toggleCheckbox1 = () => setIsChecked1(!isChecked1);
  const toggleCheckbox2 = () => setIsChecked2(!isChecked2);
  const toggleCheckbox3 = () => setIsChecked3(!isChecked3);
  const [isVisible, setIsVisible] = useState(false);
  const toggleModal = () => setIsVisible(!isVisible);

  const toggleCheck = () => {
    if (isChecked1 && isChecked2 && isChecked3) {
      toggleModal()
    }
    else {
      Alert.alert('Please select all the options');
    }
  }
  return (
    <>
      <View style={tw`h-full `}>
        <View>
          <Text style={tw`mt-[20px]`}>✅</Text>
          <Text style={tw`text-black text-xl font-bold mt-[5px]`}>Submit Details</Text>
          <Text style={tw`text-[#6E6E70] text-xs mt-[5px]`}>Tell us about your company. You will be able to invite your teammates in the further steps
          </Text>
        </View>
        <View style={tw`flex flex-col gap-5 mt-[40px] pr-[20px]`}>
          <TouchableOpacity onPress={toggleCheckbox1} style={tw`flex-row `}>
            <View style={[tw`w-5 h-5 border-0 bg-gray-200 rounded-sm`, isChecked1 && tw`bg-gray-200 border-blue-500`,]}>
              {isChecked1 && <Text style={tw`text-white text-xs text-center`}>✔️</Text>}
            </View>
            <Text style={tw`text-black mt-[0px] ml-[10px] text-xs`}>Praesent vel vulputate elit, et tincidunt lectus.</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={toggleCheckbox2} style={tw`flex-row mt-[10px]`}>
            <View style={[tw`w-5 h-5 border-0 bg-gray-200 rounded-sm mt-[12px]`, isChecked2 && tw`bg-gray-200 border-blue-500`]}>
              {isChecked2 && <Text style={tw`text-white text-xs text-center`}>✔️</Text>}
            </View>
            <Text style={tw`text-black -mt-[3px] ml-[10px] text-xs`}>Sed facilisis eros eget nunc pharetra, mattis tincidunt diam scelerisque. Ut eget pulvinar nulla, a pharetra sem. Proin dapibus bibendum augue.
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={toggleCheckbox3} style={tw`flex-row mt-[10px]`}>
            <View style={[tw`w-5 h-5 border-0 bg-gray-200 rounded-sm`, isChecked3 && tw`bg-gray-200 border-blue-500`]}>
              {isChecked3 && <Text style={tw`text-white text-xs text-center`}>✔️</Text>}
            </View>
            <Text style={tw`text-black mt-[0px] ml-[10px] text-xs`}>Nullam aliquet risus vitae dui sodales lobortis.</Text>
          </TouchableOpacity>
        </View>
        <View style={[tw`p-[2px] mt-[10px] h-[50%]`]}>
          <TouchableOpacity
            onPress={toggleCheck}>
            <Text style={tw`p-[15px] flex -bottom-[320px] left-[168px] text-white font-bold text-center bg-[#7E55F1] rounded-md w-[150px] h-[48px]`}>
              Save
            </Text>
          </TouchableOpacity>
        </View>
        <ModalComponent
          isVisible={isVisible}
          onClose={toggleModal}
          onSave={() => { toggleModal() }} />
      </View>
    </>
  )
}

export default SubmitDetails

