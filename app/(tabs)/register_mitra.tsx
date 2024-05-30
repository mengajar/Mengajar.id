import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Checkbox from 'expo-checkbox';



const register_mitra: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const router = useRouter();

  const handleRegister = () => {
    if (termsAccepted) {
      router.push('/verifikasi_siswa');
    } else {
      Alert.alert('Error', 'Anda harus menyetujui semua syarat dan ketentuan.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/logo_m.png')} style={styles.logo} />
      <Text style={styles.welcomeText}>Form Pendaftaran Mitra</Text>
      <Text style={styles.subText}>Tingkatkan pendapatan dan majukan pendidikan bersama kami</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Nama Lengkap"
          style={styles.input}
          value={fullName}
          onChangeText={setFullName}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <FontAwesome name="envelope" size={20} color="blue" style={styles.icon} />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <FontAwesome name={showPassword ? "eye-slash" : "eye"} size={20} color="blue" style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="No. HP"
          style={styles.input}
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />
        <FontAwesome name="phone" size={20} color="blue" style={styles.icon} />
      </View>

      <View style={styles.termsContainer}>
        <Checkbox
          value={termsAccepted}
          onValueChange={setTermsAccepted}
        />
        <Text style={styles.termsText}>
          Saya menyetujui semua <Text style={styles.linkText}>syarat</Text> dan <Text style={styles.linkText}>ketentuan</Text>
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.registerButton, !termsAccepted && styles.registerButtonDisabled]}
        onPress={() => router.push('/verifikasi_mitra')}
        disabled={!termsAccepted}
      >
      
        <Text style={styles.registerButtonText}>DAFTAR</Text>
      
      </TouchableOpacity>

      <Text style={styles.registerWithText}>Daftar dengan:</Text>

      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="google" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="facebook" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => router.push('/')}>
        <Text style={styles.loginText}>
          Saya sudah memiliki akun <Text style={styles.linkText}>Login</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ECECEC',
    alignItems: 'center',
  },
  logo: {
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
    textAlign: 'center',
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
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  termsText: {
    fontSize: 14,
    color: 'gray',
    marginLeft: 10,
  },
  linkText: {
    color: 'blue',
    // textDecorationLine: 'underline',
  },
  registerButton: {
    backgroundColor: '#1E90FF',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginVertical: 20,
  },
  registerButtonDisabled: {
    backgroundColor: '#aaa',
  },
  registerButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
 
  registerWithText: {
    fontSize: 16,
    marginBottom: 10,
  },
  
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%',
    marginBottom: 20,
  },
  socialButton: {
    backgroundColor: '#3b5998',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginText: {
    fontSize: 16,
    color: 'gray',
  },
});

export default register_mitra;
