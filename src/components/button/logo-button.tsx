import tw from 'twrnc';
import React, { useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
interface LogoButtonProps {
  style?: any;
  logo?: any;
  color: string;
  onPress?: any;
  title: string;
  disabled?: boolean;
  description?: string;
}

const LogoButton: React.FC<LogoButtonProps> = ({
  logo,
  title,
  style,
  color,
  onPress,
  disabled,
  description,
}) => {
  let buttonColor: any = null;
  if (color === 'default') {
    buttonColor = styles.defaultButton;
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={{ ...buttonColor, ...style }}
      accessibilityLabel={description}>
      <View style={tw`flex justify-center p-8px`}>
        <Image source={logo} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  defaultButton: {
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 4,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#D6D6D6',
    width: '31.7%',
    height: '30%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default LogoButton;
