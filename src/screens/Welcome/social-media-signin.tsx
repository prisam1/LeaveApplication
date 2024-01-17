import React from "react";
import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import OnBoardIntroduction from "../../components/on-board-intro/introduction";
import AppleSignIn from "../../components/social-media-login-buttons/apple";
import GoogleSignIn from "../../components/social-media-login-buttons/google";
import MetaSignIn from "../../components/social-media-login-buttons/meta";
import Register from './register'
import tw from 'twrnc';

const OnBoard: React.FC = () => {
  // const navigation = useNavigation();

  return (
    <View style={tw`flex gap-2 flex-row bg-[#FFFFFF] -mt-[155px] `}>
      <MetaSignIn />
      <GoogleSignIn />
      <AppleSignIn />
    </View>
  );
};

export default OnBoard;

