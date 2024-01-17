import {TouchableOpacity} from 'react-native'; 

interface BackArrowProps {
  onClick?: any;
  navigation?: any;
}

const BackArrowButton: React.FC<BackArrowProps> = ({navigation, onClick}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onClick ? onClick() : navigation.goBack();
      }}>
    </TouchableOpacity>
  );
};

export default BackArrowButton;
