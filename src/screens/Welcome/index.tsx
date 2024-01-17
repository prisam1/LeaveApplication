import { View } from "react-native";
import tw from 'twrnc'; 
import Social from "./social-media-signin"
import UserLogin from '../login/index'
import Register from "./register"

const Welcome = () => {

  return (
    <View style={tw`p-[20px] bg-[#FFFFFF] h-full`}>
      <UserLogin />
      <Social />
      <Register />
    </View>
  )
}

export default Welcome