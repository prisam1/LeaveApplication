import tw from 'twrnc';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { LeaveDetails } from '../../services/leave';

interface BarComponentProps {
    percentage?: any;
    text?: any;
    fraction?: any;
}
const BarComponent: React.FC<BarComponentProps> = ({
    percentage,
    text,
    fraction,
}) => {
    let [leaveData, setLeaveData] = useState<any>()
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
            if (response.ok) {
                leaveData = (response.data as any).Table;
                setLeaveData(JSON.parse(JSON.stringify(leaveData)));
            }
        } catch (error) {
            console.log('Error occurred while getting leave detail');
        }
    };

    return (
        <View style={tw`flex flex-col  justify-between mt-[10px]`}>
            <View style={[tw`flex-row gap-2`]}>
                <Text style={[tw`text-black font-semibold`]}>{text}</Text>
                <Text style={[tw`text-black text-[#9A9A9A]`]}>
                    {fraction}
                </Text>
            </View>
            <View style={[tw`h-[16px] w-[240px] bg-gray-300 rounded`]}>
                <View style={[tw`h-full rounded bg-[#8357E5]`, { width: `${percentage}%` }]} />
            </View>
        </View>
    );
};

const PendingLeave = () => {

    return (
        <View style={tw`mt-[4px] w-[260px] h-[260px] bg-[#F4F4F4] rounded-tl-lg rounded-tr-lg rounded-br-lg p-[10px] `}>
            <View style={tw`flex-col`}>
                <Text style={[tw`text-black font-bold text-base `]}>
                    Pending Leaves
                </Text>
                <Text style={[tw`text-black text-xs text-[#9A9A9A] `]}>
                    2022-2023
                </Text>
            </View>
            <View style={tw`mt-[12px]`}>
                <BarComponent percentage={100} text="Privileged" fraction="12/12" />
                <BarComponent percentage={65} text="Casual" fraction="06/12" />
                <BarComponent percentage={25} text="Sick" fraction="04/12" />
                <BarComponent percentage={10} text="Cultural" fraction="04/12" />
            </View>
        </View>
    );
};

export default PendingLeave;
