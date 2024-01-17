import {useEffect, useState} from 'react';
import InputBox from './inputBox';
import SendButton from './senButton';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  BackHandler,
  Image,
  ScrollView,
} from 'react-native'; 
import tw from 'twrnc'; 

 
 

const ChatInputBox: React.FC<{}> = ( ) => {
  let [file, setFile] = useState<any>({});
  let [message, setMessage] = useState<string>('');
  let [isVisible, setIsVisible] = useState<boolean>(false);  
 
   
  return (
    <>
      <View>
        <View style={[styles.message]}>
            <View style={styles.messageInput}>
            <InputBox
              message={message}
              setMessage={setMessage}
            />   
          </View>
          <SendButton message={message} setMessage={setMessage} />
         </View>      
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  message: {
    gap: 8,
    display: 'flex',
    marginBottom: 20,
    marginLeft: '5%',
    marginRight: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageInput: {
    width: 233,
    height: 'auto',
    paddingTop: 13,
    display: 'flex',
    gap: 8,
    paddingLeft: 18,
    borderRadius: 35,
    paddingRight: 20,
    paddingBottom: 9,
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#303133',
  },
  emojiContainer: {
    marginLeft: 0,
    flexWrap: 'wrap',
    height: 200,
    width: '100%',
    backgroundColor: '#292929',
  },
  emoji: {
    fontSize: 25,
    margin: 7,
  },
  emojiActionButton: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    marginRight: 0,
  },
  tabButton: {
    paddingRight: 40,
    paddingLeft: 50,
    marginRight: 10,
    padding: 10,
  },
  activeTabButton: {},
  tabSeparator: {
    width: 1,
    height: '60%',
    backgroundColor: '#636366',
    marginRight: 10,
  },
  tabButtonText: {
    fontSize: 18,
  },
});

export default ChatInputBox;
