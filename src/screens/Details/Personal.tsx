import * as React from 'react';
import tw from 'twrnc';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import EmploymentDetails from './Employment'
import EducationDetails from './Education'
import DocumentUpload from './Document'
import SubmitDetails from './SubmitDetails'
import PersonalDetails from './PersonalDetails'
import PersonalDetails2 from './PersonalDetails_2'
import EmploymentDetails2 from './EmploymentDetails_2';
import { useNavigation } from '@react-navigation/native';
import { employeePersonalinsert } from '../../services/employee';
import { useAppSelector } from '../../store/store';

const Personal = () => {
  const navigation = useNavigation();
  const [currentTab, setCurrentTab] = React.useState(0);
  const { user } = useAppSelector(state => state.user)
  const { name, email, jobTitle, ownership, gender, dob, aadhar, pan, city, state, zipCode, country, address } = useAppSelector(state => state.employee)
  const tabs = [
    { title: 'PersonalDetails', component: PersonalDetails },
    { title: 'PersonalDetails2', component: PersonalDetails2 },
    { title: 'EducationDetails', component: EducationDetails },
    { title: 'Employment', component: EmploymentDetails },
    { title: 'Employment', component: EmploymentDetails2 },
    { title: 'Document', component: DocumentUpload },
    { title: 'Document', component: SubmitDetails },
  ];

  const uniqueTabs = tabs.reduce((unique: any, tab) => {
    if (!unique.some((u: any) => u.title === tab.title)) {
      unique.push(tab);
    }

    if (tab.title == 'EducationDetails') {
      const handleOnContinue = async () => {
        try {
          const payload = {
            "EmpID": user,
            "CompID": '',
            "EmpName": name,
            "EmpPhoto": '',
            "EmpEmailID": email,
            "EmpMobile": '',
            "EmpGender": gender,
            "EmpDOB": dob,
            "EmpPanNo": pan,
            "EmpAadharNo": aadhar,
            "EmpRole": jobTitle,
            "EmpAddStreet": address,
            "EmpAddLandmark": address,
            "EmpCity": city,
            "EmpState": state,
            "EmpCountry": country,
            "EmpZipcode": zipCode,
            "JoinedOn": "2023-12-23T08:13:53.052Z",
            "ConfirmOn": "2023-12-23T08:13:53.052Z",
            "CurrentStatus": '',
            "SeperatedOn": "2023-12-23T08:13:53.052Z",
            "Agree_declartion": true,
            "CreatedBy": user,
            "IsActive": true
          }
          const response = await employeePersonalinsert(payload)
          console.log(' up detail', response);
        }
        catch (error) {
          console.log('Error occurred while sending personal detail');
        }
      }; handleOnContinue()

    }
    return unique;
  }, []);

  const skipToNextTab = () => {
    if (currentTab < tabs.length - 1) {
      setCurrentTab(currentTab + 1);
    }
  };
  const goToPreviousTab = () => {
    if (currentTab > 0) {
      setCurrentTab(currentTab - 1);
    }
  };

  return (
    <View style={tw`flex bg-white p-[20px] h-full`}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#ffffff', }}>
        {uniqueTabs.map((tab: any, index: any) => (
          <TouchableOpacity
            key={index}
            // onPress={() => setCurrentTab(index)}
            style={{
              width: 59,
              borderRadius: 4,
              borderWidth: 1,
              borderColor: index <= currentTab ? '#8357E5' : '#1013171A',
            }}
          >
          </TouchableOpacity>
        ))}
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
        {currentTab >= 1 && <TouchableOpacity onPress={goToPreviousTab}>
          <Image
            source={require('../../assets/arrow-left.png')}
            style={tw` `}
          />
        </TouchableOpacity>
        }
        {currentTab === 0 && <TouchableOpacity onPress={() => navigation.navigate('Welcome' as never)}>
          <Image
            source={require('../../assets/arrow-left.png')}
            style={tw` `}
          />
        </TouchableOpacity>
        }
        <TouchableOpacity onPress={skipToNextTab}>
          <Text style={{ color: '#8357E5' }}>Skip</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        {React.createElement(tabs[currentTab].component)}
      </View>
      <View style={tw`absolute bottom-[25px] right-[20px]`}>
        {currentTab < tabs.length - 1 && (
          <TouchableOpacity onPress={skipToNextTab}>
            <View style={tw` `}>
              <Text style={tw`p-[15px] flex text-white font-bold text-center bg-[#7E55F1] rounded-md w-[151px] h-[48px]`}>
                Continue
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Personal
