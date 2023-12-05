import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import React from 'react';
import Wrapper from '../components/Wrapper/Wrapper';
import Avatar from '../assets/avatar.png';
import Filter from '../assets/filter.png';
import Next from '../assets/next.png';
import Phone from '../assets/phone.png';
import ChangePassword from '../assets/key.png';
import Signout from '../assets/logout.png';
import {Divider} from 'react-native-paper';

const {width, height} = Dimensions.get('window');

const UserPanel = ({navigation}) => {
  const handleLogout = () => {
    Alert.alert('Previous Order', "There was no previous order. Let's buy", [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {text: 'OK', onPress: () => navigation.navigate('Home')},
    ]);
  };

  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();
  const formattedTime = currentDate.toLocaleTimeString();

  return (
    <Wrapper header={false}>
      <SafeAreaView style={styles.container}>
        <View style={styles.avatar}>
          <Image
            source={require('../assets/avatar.png')}
            style={{width: 43, marginTop: 32, height: 43}}
          />
        </View>
        <Text
          adjustsFontSizeToFit
          style={{
            marginTop: 8,
            fontFamily: 'Neue Einstellung Bold',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: 16,
            textAlign: 'center',
            color: '#1D2128',
          }}>
          Scarlett
        </Text>
        <Text
          adjustsFontSizeToFit
          style={{
            width: width * 0.8,
            fontSize: 12,
            marginTop: 8,
            textAlign: 'center',
            fontFamily: 'Inter-Regular',
            alignSelf: 'center',
            color: '#1D2128',
            fontWeight: '400',
          }}>
          dummy@gmail.com
        </Text>
        <Text
          adjustsFontSizeToFit
          style={{
            width: width * 0.5,
            fontSize: 12,
            marginTop: 10,
            textAlign: 'center',
            fontFamily: 'Inter-Regular',
            fontWeight: '400',
            alignSelf: 'center',
            color: 'rgba(0, 0, 0, 0.5)',
          }}>
          Time Zone in India (GMT+5:30) {formattedDate}, {formattedTime}
        </Text>
        </SafeAreaView>
        <Divider />
        <View style={styles.ordersContainer}>
        <TouchableOpacity onPress={()=>handleLogout()} >
          <Text style={styles.ordersTitle}>Previous Orders</Text>
          {/* Add your code here to display the user's previous orders */}
          </TouchableOpacity>
        </View>
      
    </Wrapper>
  );
};

export default UserPanel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FA',
    margin:'5%'
  },
  avatar: {
    alignSelf: 'center',
    marginTop: 20,
  },
  logoutContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  logoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  ordersContainer: {
    paddingHorizontal: 16,
    margin:'4%'
  },
  ordersTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
