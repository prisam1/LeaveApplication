import tw from 'twrnc';
import HomeHeader from '../Home/home-header';
import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native';
import LeaveApplication from '../../components/chatbot/leave-application'
import Drawer from 'react-native-drawer'
import LeaveStatus from '../../components/chatbot/leave-status'
import LeaveCancel from '../../components/chatbot/leave-cancel'
import SideBar from '../../navigation/SideBar'
import SidebarRightModal from '../../components/sidebar/sideBarComponent';
import PendingLeave from '../../components/chatbot/pending-leave';
import CompanyHoliday from '../../components/chatbot/company-holiday';
import { useAppSelector } from '../../store/store';
import { setLeaveManagement } from '../../store/reducer/ui-controller';
import { useDispatch } from 'react-redux';
import { setUserInput } from '../../store/reducer/ui-controller';
import { setReferenceNumber, setLeaveVisible, setLeaveRequest } from '../../store/reducer/leave'

const Chatbot = () => {
  const dispatch = useDispatch();
  const [chatHistory, setChatHistory] = useState<any>([]);
  const [userInputs, setUserInputs] = useState<any>('');
  const [currentPage, setCurrentPage] = useState<any>(null);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const { leaveManagement, userInput } = useAppSelector(state => state.uiController);
  const { referenceNumber } = useAppSelector(state => state.leave)

  const handleAutomaticSend = () => {
    if (leaveManagement === 'Leave Management') {
      handleSend();
    }
  };

  useEffect(() => {
    handleAutomaticSend();
  }, [leaveManagement]);

  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const handleSend = () => {
    const message = userInputs ? userInputs : leaveManagement.trim().toLowerCase()
    dispatch(setLeaveManagement(''))
    setUserInputs('');
    // if (userInputs.startsWith('#')) {
    //   setReferenceNumber(userInputs);
    // } else {
    //   setReferenceNumber('');
    // }
    // dispatch(userInput(userInputs))

    setChatHistory((prevChat: any) => [...prevChat,
    { type: 'user', message },
    ]);

    if (message === 'Leave Management' || message === 'leave management') {
      addBotResponse('👋 Hello, my name is Retentive');
      addBotResponse('How can I help you today with leave management?');
      showOptions();
    }
    // else {
    //   addBotResponse("I'm sorry, I didn't understand that.");
    //   // showOptions();
    // }
  };

  const addBotResponse = (message: any) => {
    setChatHistory((prevChat: any) => [...prevChat, { type: 'bot', message }]);
  };

  const showOptions = () => {
    const options = ['Leave Application', 'Leave Status', 'Pending Leave Summary', 'Company Holiday Sheet', 'Leave Cancellation'];
    options.forEach((option) => {
      setChatHistory((prevChat: any) => [...prevChat, { type: 'option', message: option }]);
    });
  };

  const handleOptionClick = (option: any) => {
    switch (option) {
      case 'Leave Application':
        setCurrentPage('Leave Application');
        dispatch(setLeaveVisible(true))
        dispatch(setLeaveRequest(false))
        break;
      case 'Leave Status':
        setCurrentPage('Leave Status');
        break;
      case 'Leave Cancellation':
        setCurrentPage('Leave Cancellation');
        break;
      case 'Pending Leave Summary':
        setCurrentPage('Pending Leave Summary');
        break;
      case 'Company Holiday Sheet':
        setVisible(true);
        break;
      default:
        setCurrentPage(null);
        break;
    }

    setChatHistory((prevChat: any) => [
      ...prevChat,
      { type: 'user', message: option },
    ]);
  };
  console.log('ref', referenceNumber)
  return (
    <>
      <Drawer
        type="overlay"
        content={<SideBar onClose={closeSidebar} />}
        open={sidebarOpen}
        tapToClose
        openDrawerOffset={0.78}
        onClose={() => setSidebarOpen(false)}
        side="left"
      >
        <View style={{ flex: 1, backgroundColor: '#ffffff', padding: 20, height: 'full' }}>
          <HomeHeader
            key="chat-header"
            page="chatbot"
          />
          <ScrollView>
            {chatHistory.map((chat: any, index: any) => (
              <View key={index} style={{ alignItems: chat.type === 'user' ? 'flex-end' : 'flex-start' }}>
                {chat.type === 'bot' ? (
                  <Text style={{ backgroundColor: '#F4F4F4', color: 'black', padding: 10, borderRadius: 10, maxWidth: '80%', marginTop: '2%' }}>
                    {chat.message}
                  </Text>
                ) : (
                  chat.type !== 'user' ? (
                    <TouchableOpacity onPress={() => handleOptionClick(chat.message)}
                      style={{ backgroundColor: '#F4F4F4', padding: 10, borderRadius: 10, maxWidth: '60%', marginTop: '2%' }}
                    >
                      <Text style={{ backgroundColor: '#F4F4F4', color: 'black', }}>
                        {chat.message}
                      </Text>
                    </TouchableOpacity>
                  ) : (
                    <Text
                      style={{
                        backgroundColor: '#7E55F1',
                        color: 'white',
                        padding: 10,
                        borderBottomLeftRadius: 8,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        maxWidth: '80%',
                        marginTop: '2%'
                      }}
                    >
                      {chat.message}
                    </Text>
                  )
                )}

              </View>
            ))}
            {currentPage === 'Leave Application' && <LeaveApplication />}
            {currentPage === 'Leave Status' && <LeaveStatus />}
            {currentPage === 'Leave Cancellation' && <LeaveCancel />}
            {currentPage === 'Pending Leave Summary' && <PendingLeave />}
            <CompanyHoliday visible={visible} setVisible={setVisible} />
          </ScrollView>
          <View style={tw`ml-0 w-[90%] mt-[20px] flex flex-row gap-[11px] `}>
            <TextInput
              style={tw`w-[90%]  bg-[#F4F4F4] text-black h-[50px] rounded-xl pl-4`}
              value={userInputs}
              onChangeText={(text) => {
                if ('company holiday sheet' === text.toLocaleLowerCase()) {
                  setVisible(true)
                } setUserInputs(text)
                if (text.startsWith('#')) {
                  dispatch(setReferenceNumber(text))
                } else {
                  dispatch(setReferenceNumber(''))
                }
              }}
              placeholder="Send message"
              placeholderTextColor="#7A7A7A"
            />
            <TouchableOpacity onPress={handleSend} >
              <Image
                source={require('../../assets/send.png')}
                style={tw`mt-[0px] `}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={openSidebar} style={tw`absolute top-0 w-[20px] mt-[38px] -ml-[4px] border-[0.5px] border-gray-200 h-[20px] rounded bg-white`}>
            <Image
              source={require('../../assets/close-sidebar.png')}
              style={[tw`mt-[1px] ml-[4px]`, { transform: [{ rotate: '180deg' }] }]}
            />
          </TouchableOpacity>
        </View>
        <SidebarRightModal
          visible={showModal}
          setShowModal={setShowModal}
          onClose={() => setShowModal(false)}
        />
      </Drawer>
    </>
  );
};
export default Chatbot;

