import tw from 'twrnc';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, Image } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store/store';
import { setLeaveRequest, setStartDate, setEndDate, setLeaveReason, setLeaveType, setLeaveId, setLeave, setCompID, setCreatedBy, setYear, setLeaveVisible, setLeaveAproved } from '../../store/reducer/leave';
import { LeaveDetails, insertLeaveData } from '../../services/leave';

const LeaveApplication = () => {
  const dispatch = useDispatch();
  const { leaveRequest, startDate, endDate, leaveReason, leaveType, leave, leaveId, compID, createdBy, year, leaveVisible, referenceNumber, leaveAproved } = useAppSelector(state => state.leave);
  const { user } = useAppSelector((state) => state.user);

  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [selectedType, setSelectedType] = useState<any>(null);
  const [isChecked1, setIsChecked1] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<any>(moment());
  const [request, setRequest] = useState<boolean>(false);
  const [startDates, setStartDates] = useState<any>();
  const [endDates, setEndDates] = useState<any>();

  const toggleCheckbox1 = () => setIsChecked1(!isChecked1);

  const handleTypeSelection = (type: any, LeaveID: any, CompID: any, CreatedBy: any, Year: any) => {
    setSelectedType(type)
    dispatch(setLeaveType(type))
    dispatch(setLeaveId(LeaveID))
    dispatch(setCompID(CompID))
    dispatch(setCreatedBy(CreatedBy))
    dispatch(setYear(Year))
    console.log('id-', leaveId, compID, createdBy, year)
  }
  const handleCancel = () => {
    setShowCalendar(false);
    setStartDates('')
    setEndDates('')
  };
  const handleMonthChange = (date: any) => {
    setSelectedDate(moment(date));
  };
  const handleSelect = () => {
    if (startDate && endDate) {
      // dispatch(setStartDate(startDate));
      // dispatch(setEndDate(endDate));
      // console.log('Selected start date:', startDate.toString());
      // console.log('Selected end date:', endDate.toString());
      setShowCalendar(false);
    } else {
      console.log('Please select a start and end date');
    }
  };
  useEffect(() => {
    getleaveDetail();
  }, []);

  const getleaveDetail = async () => {
    try {
      const payload = {
        "LeaveID": 0,
        "CompID": 0,
        "LeaveType": "string",
        "Leave": "string",
        "Year": "string",
        "CreatedBy": "string",
        "IsActive": true
      }
      const response = await LeaveDetails(payload);
      console.log('res', response)
      if (response.ok) {
        let leaveData = (response.data as any).Table;
        dispatch(setLeave(JSON.parse(JSON.stringify(leaveData))))
      }
    } catch (error) {
      console.log('Error occurred while getting leave detail');
    }
  };

  const handleOnSubmit = async () => {
    const payload = {
      LeaveDetID: leave.LeaveID,
      CompanyID: leave.CompID,
      EmpID: user.EmpID,
      LeaveID: leave.LeaveID,
      No_of_leave: 0,
      StartDate: startDate,
      EndDate: endDate,
      Reason: leaveReason,
      Reject_Reason: "string",
      CreatedBy: leave.CreatedBy,
    };
    const response = await insertLeaveData(payload)
    console.log('response', response)
    // setStartDates('')
    // setEndDates('')
    dispatch(setLeaveVisible(false))
    dispatch(setLeaveRequest(true))
    dispatch(setLeaveReason(''))
    setStartDates('')
    setEndDates('')
    dispatch(setStartDate(''))
    dispatch(setEndDate(''))
  };

  const onChange = (dates: any) => {
    if (dates) {
      const currentDate = moment()
      if (dates) {
        if (dates.isSameOrAfter(currentDate)) {
          let formattedStartDate = dates ? moment(dates).format('DD/MM/YYYY') : '';
          setStartDates(formattedStartDate)
          console.log('Start1', startDates, '  ', endDates);
          dispatch(setStartDate(formattedStartDate));

          if (dates.isAfter(startDates)) {
            const formattedEndDate = dates ? moment(dates).format('DD/MM/YYYY') : '';
            setEndDates(formattedEndDate)
            console.log('Start2', startDates, '  ', endDates);
            dispatch(setEndDate(formattedEndDate));
          }
        }
      }
    }
  }
  console.log('Start.', startDates, '  ', endDates);
  console.log('Final', endDate, '  ', endDate);
  console.log('id--', user.EmpID)
  return (
    <View>
      {leaveVisible &&
        <View style={tw`mt-[6px] h-[450px] border-[1px] border-gray-200 rounded p-2`}>
          <View style={tw`mt-2 flex-row gap-2`}>
            {leave.map((leaveItem: any, index: any) => (
              <TouchableOpacity key={index}
                onPress={() => handleTypeSelection(leaveItem.LeaveType, leaveItem.LeaveID, leaveItem.CompID, leaveItem.CreatedBy, leaveItem.Year)}>
                <Text style={[
                  tw`text-black rounded-full p-2 bg-[#F4F4F4]`,
                  selectedType === leaveItem.LeaveType && tw`bg-[#7E55F1]`
                ]}>
                  {leaveItem.LeaveType}
                </Text>
              </TouchableOpacity>
            ))}

          </View>
          <Text style={tw`text-black mt-[4px]`}>Specify Reason</Text>
          <View style={tw`mt-[5px] w-[100%]`}>
            <TextInput
              style={tw`w-[100%] h-[100px] border-[1px] border-gray-200 rounded-xl text-gray-400 p-2`}
              value={leaveReason}
              onChangeText={text => dispatch(setLeaveReason(text))}
              placeholder="Type reason for your leave"
              placeholderTextColor="#7A7A7A"
            />
          </View>

          <View style={tw`ml-[16px] flex-row mt-[8px] gap-[15px] justify-center items-center`}>
            <View style={tw`flex-col`}>
              <Text style={tw`mt-[8px] text-black`}>Start Date</Text>
              <TextInput
                style={tw`w-[144px] h-[20%] mt-[10px] bg-white border-[1px] border-gray-200 text-black h-[50px] rounded-xl pl-4`}
                value={startDates}
                onChangeText={(text) => {
                  setStartDate(text)
                }}
                placeholder="06/2024"
                placeholderTextColor="#7A7A7A"
              />
              <TouchableOpacity onPress={() => setShowCalendar(true)}
                style={tw` `}>
                <Image source={require('../../assets/calendar-2.png')} style={tw`absolute right-[12px] bottom-[15px]`} />
              </TouchableOpacity>
            </View>

            <View style={tw` mt-[8px]`}>
              <Text style={tw`flex-col text-black`}>End Date</Text>
              <TextInput
                style={tw`w-[144px] h-[20%] mt-[10px] bg-white border-[1px] border-gray-200 text-black h-[50px] rounded-xl pl-4`}
                value={endDates}
                onChangeText={(text) => {
                  setEndDate(text)
                }}
                placeholder="06/2024"
                placeholderTextColor="#7A7A7A"
              />
            </View>
            <TouchableOpacity onPress={() => setShowCalendar(true)}
              style={tw` `}>
              <Image source={require('../../assets/calendar-2.png')} style={tw`absolute right-[27px] top-[7px]`} />
            </TouchableOpacity>
          </View>
          <View style={tw`mt-[12px] flex-row gap-48`}>
            <Text style={tw`text-black mt-[0px] ml-[0px] text-xs`}>
              Is it half a day?
            </Text>
            <TouchableOpacity onPress={toggleCheckbox1} style={tw`flex-row`}>
              <View style={[tw`w-5 h-5 border-[1px] border-gray-300 bg-gray-200 rounded-sm`, isChecked1 && tw`bg-[#8357E5] border-purple-500`,]}>
                {isChecked1 && <Text style={tw`text-white text-xs text-center`}>✔️</Text>}
              </View>
            </TouchableOpacity>
          </View>
          <View style={tw`mt-[20px] flex-row gap-[21px] items-center justify-center`}>
            <TouchableOpacity onPress={handleCancel}>
              <Text style={tw`bg-white text-black p-2 w-[140px] text-center rounded border-[1px] border-gray-200 `} >Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleOnSubmit}>
              <Text style={tw`bg-[#7F56D9] p-2 w-[140px] text-white text-center text-center rounded`}>Apply</Text>
            </TouchableOpacity>
          </View>

          <Modal visible={showCalendar} transparent={true}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
              <View style={{ width: '94%', height: '50%', backgroundColor: 'white', borderRadius: 10, padding: 10 }}>
                <View style={tw`flex-row justify-between items-center px-4`}>
                  <TouchableOpacity onPress={() => handleMonthChange(selectedDate.clone().subtract(1, 'months'))}>
                    <Image source={require('../../assets/arrow-left.png')} style={tw`w-6 h-6 -mb-[40px] ml-[0px]`} />
                  </TouchableOpacity>
                  <Text style={tw`font-bold text-lg`}>{selectedDate.format('MMMM YYYY')}</Text>
                  <TouchableOpacity onPress={() => handleMonthChange(selectedDate.clone().add(1, 'months'))}>
                    <Image source={require('../../assets/arrow-left.png')} style={[tw`w-6 h-6 -mb-[40px]`, { transform: [{ rotate: '180deg' }] }]} />
                  </TouchableOpacity>
                </View>
                <CalendarPicker
                  startFromMonday={true}
                  allowRangeSelection={true}
                  todayBackgroundColor="#f4f4f4"
                  selectedDayColor="#7E55F1"
                  selectedDayTextColor="#FFFFFF"
                  onDateChange={onChange}
                />
                <View style={tw`mt-[20px] flex-row gap-[20px] items-center justify-center`}>
                  <TouchableOpacity onPress={handleCancel}>
                    <Text style={tw`bg-white text-black p-2 w-[140px] text-center rounded border-[1px] border-gray-200 `} >Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleSelect}>
                    <Text style={tw`bg-[#7F56D9] p-2 w-[140px] text-white text-center text-center rounded`}>Apply</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>}
      {leaveRequest &&
        <View style={tw`mt-[10px]`}>
          <Text style={tw`w-[240px] text-black rounded-tl-lg rounded-tr-lg rounded-br-lg p-[10px] bg-[#F4F4F4]`}>
            Your request has been generated. Your reference number is{' '}
            <Text style={tw`${referenceNumber ? 'text-[#7E55F1]' : 'text-white'}`}>
              {referenceNumber}
            </Text>
          </Text>
        </View>}
      {leaveRequest &&
        <View style={tw`mt-[10px]  w-[240px] bg-[#F4F4F4] rounded-tl-lg rounded-tr-lg rounded-br-lg p-[10px]`}>
          <View style={tw`flex-row gap-[85px]`}>
            <Text style={tw`text-black font-semibold `}>
              {leaveType} Leave
            </Text>
            <Text style={tw`text-black font-semibold `}>
              8 days
            </Text>
          </View>
          <View style={tw`mt-[8px] flex-col`}>
            <Text style={tw`text-[#9A9A9A]`}>
              {startDate}{'  '} -{'  '} {endDate}
            </Text>
            <Text style={tw`mt-[8px]  w-[225px] text-[#9A9A9A]`}>
              Lorem ipsum dolor sit amet consectetur.
              Quisque ornare velit turpis duis porttitor.
              Sed vestibulum iaculis posuere elit pellentesque metus arcu.
            </Text>
          </View>
        </View>}
    </View>
  );
};

export default LeaveApplication;
