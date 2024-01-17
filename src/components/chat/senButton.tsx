import {View, StyleSheet, TouchableOpacity, Image} from 'react-native'; 
import tw from 'twrnc'; 

interface SendButtonProps {
  message: string;
  setMessage: any;
}

const SendButton: React.FC<SendButtonProps> = ({ message, setMessage}) => { 

  const handleSend = () => {
    setMessage('');
  };

  return (
    <View>
      <TouchableOpacity onPress={() => handleSend()}>
        <View style={styles.sendIconContainer}>
          <Image source={require('../../assets/send.png')}
             style={tw`w-[50px] h-[50px]`} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  sendIconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#315FF3',
    borderRadius: 24,
    width: 50,
    height: 50,
    overflow: 'hidden',
  },
});

export default SendButton;
