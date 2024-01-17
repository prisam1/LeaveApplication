import {debounce} from 'lodash';
import {useMemo} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  
} from 'react-native';

const InputBox: React.FC<{
  message: string;
  setMessage: any;
  
}> = ({
  message,
  setMessage,
   
}) => {
  const handleInputMessage = (message: string) => {
    setMessage(message);
  };

  const debouncedResults = useMemo(() => {
    return debounce(handleInputMessage, 100);
  }, []);

  return (
    <View style={[styles.inputLeft]}>
      <TextInput
        multiline
        style={styles.input}
        defaultValue={message}
        placeholder="Send Message"
        placeholderTextColor={'#fff'}
        onChangeText={text => debouncedResults(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 1,
    color: 'white',
  },
  inputLeft: {
    gap: 6,
    width: '78%',
    display: 'flex',
    maxHeight: 'auto',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: -4,
  },
});

export default InputBox;
