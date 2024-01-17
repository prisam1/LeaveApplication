import { Image, Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../screens/context/auth-context";
import tw from 'twrnc';

export const LogoutButton = () => {
    const { onLogout } = useAuth();
    return (
        <TouchableOpacity onPress={async () => onLogout()}>
            <View style={tw`flex flex-row items-center gap-[13px]`}>
                <Image source={require('../assets/x-close.png')} />
                <Text
                    style={tw`text-[#FF2121] text-center text-sm font-normal leading-normal`}>
                    Logout
                </Text>
            </View>
        </TouchableOpacity>
    );
};