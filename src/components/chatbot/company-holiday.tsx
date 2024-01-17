import React, { useEffect, useState } from 'react';
import { View, Modal, Text, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import tw from 'twrnc';
import moment from 'moment';

const CompanyHoliday = ({ visible, setVisible }) => {
    const [selectedDate, setSelectedDate] = useState(moment());

    const holidayList = [
        { date: '2023-12-25', name: 'Christmas' },
        { date: '2023-12-31', name: 'New Year Eve' },
        { date: '2023-12-31', name: 'New Year Eve' },
        { date: '2023-12-31', name: 'New Year Eve' },
        { date: '2023-12-31', name: 'New Year Eve' },
        { date: '2023-12-31', name: 'New Year Eve' },
    ];

    const handleMonthChange = (date: any) => {
        setSelectedDate(moment(date));
    };

    const renderHolidayBoxes = () => {
        return holidayList.map((holiday, index) => (
            <View key={index} style={tw` p-2 m-[10px] rounded flex-row gap-[10px] `}>
                <Text style={tw`mt-[17px] text-black font-bold w-[27px]`}>{moment(holiday.date).format('DD MMM ')}</Text>
                <View style={tw` p-2 m-2 rounded flex-col bg-[#9E7BEA] p-2 m-2 rounded-xl w-[270px] h-[54px] `}>
                    <Text style={tw` `}>{holiday.name}</Text>
                    <Text style={tw``}>Full DAY</Text>
                </View>
            </View>
        ));
    };

    return (
        // <View style={tw`flex-1 justify-center items-center p-2 `}>
        <Modal visible={visible} transparent={true}>
            <ScrollView>
                <View style={tw`mt-20 h-[80%] bg-white `}>
                    <TouchableOpacity onPress={() => setVisible(false)}>
                        <Image source={require('../../assets/x-close.png')} style={tw`w-6 h-6 absolute right-[15px] bottom-[0px]`} />
                    </TouchableOpacity>
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
                        startFromMonday={false}
                        allowRangeSelection={false}
                        todayBackgroundColor="#f4f4f4"
                        selectedDayColor="#9E7BEA"
                        selectedDayTextColor="#FFFFFF"
                        onDateChange={() => { }}
                        selectedStartDate={selectedDate}
                        onMonthChange={(date) => handleMonthChange(date)}
                    />
                    <ScrollView>
                        <View style={tw`mt-2 h-[250px]`}>
                            <View style={tw`mt-2`}>{renderHolidayBoxes()}</View>
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
        </Modal>
        // </View>
    );
};

export default CompanyHoliday;
