import { useState } from "react";
import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import tw from 'twrnc';
import { setLeaveManagement } from '../../store/reducer/ui-controller'

// interface SidebarRightModalProps {
//     visible:any;
//     setShowModal: any;
//     onClose: any;
//     onSelectOption:any
//   }

const SidebarRightModal = ({
    visible, setShowModal, onClose,
}) => {
    const dispatch = useDispatch();
    const [selectedType, setSelectedType] = useState(null);
    const handleTypeSelection = (type: any) => {
        setSelectedType(type)
        setShowModal(false)
        onClose()
        if (type === 'Leave Management') {
            console.log(type)
            dispatch(setLeaveManagement(type))
        }
    };

    return (
        <>
            <Modal
                visible={visible}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setShowModal(false)}
            >
                <View>
                    <View style={tw`flex-col p-4 gap-4 mt-[0px] ml-[79.1px] bg-white w-[70%] h-[95.8%]`}>
                        <TouchableOpacity onPress={() => { setShowModal(false); onClose }}
                            style={tw`w-[20px] mt-[22px] -ml-[30px] border-[0.5px] border-gray-200 h-[20px] rounded bg-white`}>
                            <Image source={require('../../assets/close-sidebar.png')}
                                style={tw`mt-[2px]`} />
                        </TouchableOpacity>
                        <View >
                            <Text style={tw`mt-[55px] text-gray-300 text-xs`}>OPERATIONS</Text>
                        </View>
                        <View style={tw`flex-col gap-2`}>
                            <TouchableOpacity onPress={() => handleTypeSelection('Payroll')}>
                                <Text style={[tw`text-black rounded-xl p-3 w-[100%]  bg-white   `,
                                selectedType === 'Payroll' && tw`w-[100%] bg-[#7E55F1]`,]}
                                >
                                    Payroll
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleTypeSelection('Attendance')}>
                                <Text style={[tw`text-black rounded-xl p-3 w-[100%]  bg-white  `,
                                selectedType === 'Attendance' && tw`w-[100%] bg-[#7E55F1]`,]}
                                >
                                    Attendance
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleTypeSelection('Leave Management')}>
                                <Text style={[tw`text-black rounded-xl p-3 w-[100%] bg-white  `,
                                selectedType === 'Leave Management' && tw`w-[100%]  bg-[#7E55F1]`,]}
                                >
                                    Leave Management
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    )
}
export default SidebarRightModal;

