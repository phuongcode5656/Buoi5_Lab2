import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { signOut } from 'firebase/auth'; // Đảm bảo đã import signOut
import { useNavigation } from '@react-navigation/native';
import { auth } from '../config/firebaseConfig';


const AuthenticatedScreen = ({ route}) => {
  const navigation = useNavigation();
  const { user } = route.params; // Nhận thông tin người dùng từ params

  const handleAuthentication = async () => {

    try {
      await signOut(auth); // Đăng xuất người dùng
 
      navigation.navigate('Login'); // Chuyển hướng về màn hình đăng nhập
    } catch (error) {
      console.error('Error signing out: ', error); // Xử lý lỗi nếu có
      Alert.alert('Logout Error', error.message); // Hiển thị thông báo lỗi
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.authContainer}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.emailText}>{user.email}</Text>
        <Button title="Logout" onPress={handleAuthentication} color="#e74c3c" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Đảm bảo container chiếm toàn bộ chiều cao
    justifyContent: 'center', // Căn giữa theo chiều dọc
    alignItems: 'center', // Căn giữa theo chiều ngang
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  authContainer: {
    width: '80%',
    maxWidth: 400,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  emailText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default AuthenticatedScreen;
