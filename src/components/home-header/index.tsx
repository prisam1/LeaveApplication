import tw from 'twrnc';
import {Text, View, Image, TouchableOpacity} from 'react-native';
 

const Header = () => {
  return (
    <View>
      <TouchableOpacity>
        <View style={tw`flex flex-col`}>
          <Text style={tw`text-black text-xl font-semibold`}>
            Retentive AI
          </Text>
          <Text style={tw`text-[#6E6E70] text-xs mt-[4px] font-normal`}>
            Active
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
