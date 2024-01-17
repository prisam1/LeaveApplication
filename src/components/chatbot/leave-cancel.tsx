import tw from 'twrnc';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, TurboModuleRegistry } from 'react-native';

const LeaveCancel = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [cancel, setCancel] = useState(false);

  const handleTypeSelection = (type: any) => {
    setSelectedType(type);
  };

  return (
    <View style={tw`mt-[4px] w-[265px] border-gray-200 rounded-xl`}>
      <Text style={[tw`text-black rounded-xl p-3 bg-[#F4F4F4]`]}>
        To assist you better, can you provide the reference number?
      </Text>
      {cancel && (
        <>
          <Text style={[tw`mt-[10px] text-black rounded-xl p-3 bg-[#F4F4F4]`]}>
            Do you want to cancel the leave?
          </Text>

          <View style={[tw`flex-row gap-2 mt-[10px]`]}>
            <TouchableOpacity onPress={() => handleTypeSelection('Yes')}>
              <Text
                style={[
                  tw`text-black rounded-3xl p-3 w-[60px] bg-[#F4F4F4] text-center`,
                  selectedType === 'Yes' && tw`bg-[#7E55F1]`,
                ]}
              >
                Yes
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTypeSelection('No')}>
              <Text
                style={[
                  tw`text-black rounded-3xl p-3 w-[60px] bg-[#F4F4F4] text-center`,
                  selectedType === 'No' && tw`bg-[#7E55F1]`,
                ]}
              >
                No
              </Text>
            </TouchableOpacity>
          </View>
          {selectedType === 'Yes' && (
            <Text
              style={[
                tw`text-black mt-[10px] rounded-xl p-3  bg-[#F4F4F4]`,
                selectedType === 'No' && tw`bg-[#7E55F1]`,
              ]}
            >
              Your leave for the date is Cancelled.
            </Text>
          )}
        </>
      )}
    </View>
  );
};

export default LeaveCancel;
