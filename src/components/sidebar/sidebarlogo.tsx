import { Image, TouchableOpacity, View } from "react-native";
import tw from 'twrnc';
import SidebarRightModal from './sideBarComponent'
import { useState } from "react";

const SidebarLogo = ({ onClose }) => {
  const [selectedType, setSelectedType] = useState('Layer');
  let [showModal, setShowModal] = useState<boolean>(true);

  const handleTypeSelection = (type: any) => {
    setSelectedType(type);

    if (type === 'Layer') {
      setShowModal(true);
    }
  }
  
  return (
    <>
      <View>
        <View style={tw`flex-col gap-4 mt-[25px] `}>
          <View style={tw`flex-row  gap-2 `}>
            <Image
              source={require('../../assets/logo.png')}
              style={tw`p-4`}
            />
          </View>
          <View style={tw`flex-col gap-[24px] mt-[40px]`}>
            <TouchableOpacity onPress={() => handleTypeSelection('Layer')}
              style={[tw` rounded-xl ml-[6px] pl-[10px] pt-3 pb-3 w-[40px] bg-white`,
              selectedType === 'Layer' && tw`bg-[#F4F4F4]`,
              ]}>
              <Image
                source={require('../../assets/layers.png')}
                style={tw` ml-[0px]   `}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTypeSelection('check')}
              style={[tw` rounded-xl ml-[6px] pl-[10px] pt-3 pb-3 w-[40px] bg-[#ffffff]`,
              selectedType === 'check' && tw`bg-[#F4F4F4]`,
              ]}>
              <Image
                source={require('../../assets/checklist.png')}
                style={tw`ml-[0px]  `}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTypeSelection('card')}
              style={[tw` rounded-xl ml-[6px] pl-[10px] pt-3 pb-3 w-[40px] bg-[#ffffff]`,
              selectedType === 'card' && tw`bg-[#F4F4F4]`,
              ]}>
              <Image
                source={require('../../assets/card.png')}
                style={tw`ml-[0px]  `}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTypeSelection('heart')}
              style={[tw` rounded-xl ml-[6px] pl-[10px] pt-3 pb-3 w-[40px] bg-[#ffffff]`,
              selectedType === 'heart' && tw`bg-[#F4F4F4]`,
              ]}>
              <Image
                source={require('../../assets/user-heart.png')}
                style={tw`ml-[0px]  `}
              />
            </TouchableOpacity>
          </View>
        </View>
        <SidebarRightModal
          visible={showModal}
          setShowModal={() => setShowModal(false)}
          onClose={onClose}
          
        />
      </View>
    </>
  )
}
export default SidebarLogo;

