import React, { useState } from 'react';
import tw from 'twrnc';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const Register = () => {
    
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);
  
  // const navigation = useNavigation();

  // const handleRegistration = () => {
  //   navigation.navigate('UserRegister');
  // };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowConfirmPassword = () => {
    setshowConfirmPassword(!showConfirmPassword);
  };
  
  return (
    <View style={styles.main}>
      <View style={styles.form}>
      <View style={styles.names}>
      <View style={styles.alignnames}>
      <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.inputs}
          placeholder="Enter First Name"
          placeholderTextColor="white"
          onChangeText={text => setFirstName(text)}
        />
        </View>
        <View style={styles.alignnames}>
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.inputs}
          placeholder="Enter Last Name"
          placeholderTextColor="white"
          onChangeText={text => setLastName(text)}
        />
        </View>
       </View>
        <Text >E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          placeholderTextColor="white"
          onChangeText={text => setEmail(text)}
        />
        <Text >Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          placeholderTextColor="white"
          onChangeText={text => setPassword(text)}
          secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={toggleShowPassword} style={styles.eyeIcon}>
          <Text style={{ fontSize: 20, color: 'white' }}>
        {showPassword ? '🔓' : '🔒'}
      </Text>
          </TouchableOpacity>
        <Text style={{color:'gray',marginTop:-5, marginLeft:5, marginBottom:10}}>must contain 8 char.</Text>
        <Text>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          placeholderTextColor="white"
          onChangeText={text => setPassword(text)}
          secureTextEntry={!showConfirmPassword}
          />
          <TouchableOpacity onPress={toggleShowConfirmPassword} style={styles.eyeIcons}>
          <Text style={{ fontSize: 20, color: 'white' }}>
        {showConfirmPassword ? '🔓' : '🔒'}
      </Text>
          </TouchableOpacity>  
          <TouchableOpacity>
        <View style={[tw`p-[20px]-mt-[10px] flex justify-center items-center`]}>
        <Text style={tw`p-[15px] text-white font-bold text-center bg-[#7E55F1] rounded-md w-[310px] h-[48px]`}>
          Register
          </Text>
        </View>
        </TouchableOpacity>        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#1B1C20',
    padding: 20,
  },
  title: {
    fontSize: 40,
    color: 'white',
    marginBottom: 30,
  },
  form: {
    width: '100%',
  },
  names: {
    flexDirection:'row',
    justifyContent:'flex-end',
    backgroundColor: '#1B1C20',
    width:'100%',
  },
  alignnames: {
    flexDirection:'column',
    backgroundColor: '#1B1C20',
  },
  label: {
    color: 'white',
    marginBottom: 5,
    marginLeft:10
  },
  input: {
    height: 40,
    marginTop: 8,
    marginBottom:10,
    padding: 10,
    borderRadius:10,
    color: 'white',
    backgroundColor:'gray',
  },
  inputs: {
    height: 40,
    marginVertical: 8,
    padding: 10,
    borderRadius:10,
    color: 'white',
    backgroundColor:'gray',
    width:155,
    marginLeft:10
  },
  register:{  
    top:35,
    left:190,
    width:'40%'
  },
  eyeIcon: {
    position: 'absolute',
    right: 0,
    top:180,
    padding: 10,
  },
  eyeIcons: {
    position: 'absolute',
    right: 0,
    top:280,
    padding: 10,
  },
});

export default Register