import tw from 'twrnc';
import {View, StyleSheet, Image} from 'react-native';
import Header from '../../components/home-header/index';  

interface HeaderProps {
  page?: string;
  title?: string;
}

const HomeHeader: React.FC<HeaderProps> = ({
  page,
  title,
}) => {
  

  return (
    <View style={tw`flex flex-row justify-between p-0 bg-white `}>
      <View style={tw`flex flex-row justify-between gap-3`}>
          <View style={tw`mt-0 `}>
          <Image
           source={require('../../assets/logo.png')}
           style={tw`mt-[0px] `}  
             />
            <View style={tw`relative -top-[11px] left-[33px] w-3 h-3 border-2 border-white rounded-full bg-[#4CE417]`}></View> 
          </View>
        <Header key="header-logo" />
      </View>
    </View>
  );
};

export default HomeHeader;
