import  {Text, TouchableOpacity, View } from "react-native";
import tw from 'twrnc';
import OnBoardIntroduction from "../../components/on-board-intro/introduction";
import { useNavigation } from "@react-navigation/native";
 
export const OnBoardContent = () => {
   
  const navigation = useNavigation();
    return (
      <View>
        <OnBoardIntroduction/> 
        <TouchableOpacity 
        onPress={() => navigation.navigate('onBoards' as never)}>
        <View style={[tw`p-[20px]-mt-[10px] flex justify-center items-center`]}>
        <Text style={tw`p-[15px] text-white font-bold text-center bg-[#7E55F1] rounded-md w-[310px] h-[48px]`}>
          Continue
          </Text>
        </View>
        </TouchableOpacity>
      </View>
    )
  }
   