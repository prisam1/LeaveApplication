import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import tw from 'twrnc';
import SidebarLogo from '../components/sidebar/sidebarlogo'

const Sidebar = ({ onClose }) => {
 
  return (
    <View style={tw`flex-row bg-white h-full pl-[15px]`}>
      <SidebarLogo onClose={onClose}/>
      <TouchableOpacity onPress={onClose} 
      style={tw`w-[20px] mt-[38px] ml-[2px] border-[0.5px] border-gray-200 h-[20px] rounded bg-white`}>
          <Image source={require('../assets/close-sidebar.png')} 
          style={tw`mt-[2px]`}/>
        </TouchableOpacity>  
        <View style={tw`-ml-[6px] h-full border-[0.2px] border-gray-200`}></View>     
    </View>
   
  );
};

export default Sidebar;
