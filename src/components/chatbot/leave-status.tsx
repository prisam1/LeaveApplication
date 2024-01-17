import tw from 'twrnc';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { LeaveDetail, LeaveDetails } from '../../services/leave';
import { useAppSelector } from '../../store/store';

const LeaveStatus = () => {

  let [leaveStatus, setLeaveStatus] = useState<any>([]);
  const [lastMonthOff, setLastMonthOff] = useState<boolean>(false);
  const { referenceNumber } = useAppSelector(state => state.leave)

  useEffect(() => {
    getleaveDetail();
  }, [referenceNumber]);

  const getleaveDetail = async () => {
    try {
      const response = await LeaveDetails(referenceNumber);
      if (response.ok) {
        leaveStatus = (response.data as any).data;
        setLeaveStatus(JSON.parse(JSON.stringify(leaveStatus)));
      }
    } catch (error) {
      console.log('Error occurred while getting group detail');
    }
  };
  console.log(' up detail', referenceNumber);

  return (
    <View style={tw`mt-[4px] w-[265px] border-gray-200 `}>
      <View style={tw`  `}>
        <Text style={[tw`text-black rounded-tl-lg rounded-tr-lg rounded-br-lg p-3 bg-[#F4F4F4] `]}>
          To assist you better, can you provide the reference number?
        </Text>
      </View>
      {referenceNumber &&
        <View style={tw`mt-[10px]`}>
          <Text style={[tw`text-black rounded-tl-lg rounded-tr-lg rounded-br-lg p-3 bg-[#F4F4F4]`]}>
            Your leave request with number {referenceNumber} is approved.
          </Text>
        </View>}
      {referenceNumber && lastMonthOff &&
        <View style={tw`mt-[10px] `}>
          <Text style={[tw`text-black rounded-tl-lg rounded-tr-lg rounded-br-lg p-3 bg-[#F4F4F4]`]}>
            Your leave request with number was approved and you took days off last month from
          </Text>
        </View>}
    </View>
  );
};

export default LeaveStatus;
