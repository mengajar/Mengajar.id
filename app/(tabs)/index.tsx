import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import Checkbox from 'expo-checkbox';

const index: React.FC = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false); // State for checkbox
  const router = useRouter();
  
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/logo_m.png')} style={styles.logo} />
      <Text style={styles.welcomeText}>Selamat Datang di Mengajar.ID</Text>
      <Text style={styles.subText}>Silahkan Login Terlebih Dahulu</Text>

      <View style={styles.inputContainer}>
        <FontAwesome name="envelope" size={20} color="gray" style={styles.icon} />
        <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={20} color="gray" style={styles.icon} />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <FontAwesome name={showPassword ? "eye-slash" : "eye"} size={20} color="gray" style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.checkboxContainer}>
        <Checkbox
          value={isChecked}
          onValueChange={setIsChecked}
          style={styles.checkbox}
        />
        <Text style={styles.termsText}>
          Saya menyetujui semua <Text style={styles.linkText}>syarat</Text> dan <Text style={styles.linkText}>ketentuan</Text>
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.loginButton, !isChecked && styles.disabledButton]} // Disable button style
        onPress={() => router.push('/home_page')}
        disabled={!isChecked} // Disable button based on checkbox state
      >
        <LinearGradient
          colors={['#1E90FF', '#87CEFA']}
          style={styles.gradientButton}
          start={[0, 0]}
          end={[1, 1]}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </LinearGradient>
      </TouchableOpacity>

      <Text style={styles.loginWithText}>Login dengan:</Text>

      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../../assets/images/google.png')} style={styles.socialButton} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../../assets/images/facebook.png')} style={styles.socialButton} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => router.push('/nav')} >
        <Text style={styles.registerText}>
          Belum punya akun? <Text style={styles.linkText}>Daftar</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  logo: {
    marginTop: 50,
    marginBottom: 50,
    width: 300,
    height: 80,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 20,
    width: '100%',
  },
  icon: {
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkbox: {
    marginRight: 10,
  },
  termsText: {
    fontSize: 14,
    color: 'gray',
  },
  linkText: {
    color: 'blue',
    // textDecorationLine: 'underline',
  },
  loginButton: {
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginVertical: 20,
  },
  disabledButton: {
    opacity: 0.5, // Style for disabled button
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  gradientButton: {
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  loginWithText: {
    fontSize: 16,
    marginBottom: 0,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '30%',
    paddingTop: 30,
    marginBottom: 30,
  },
  socialButton: {
    height: 30,
    width: 30,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  registerText: {
    fontSize: 16,
    color: 'gray',
  },
});

export default index;