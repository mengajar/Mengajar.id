import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { router, useNavigation } from 'expo-router';
import { useRouter } from 'expo-router';

const nav = ({ navigation } : any) => {
  const handleMitraPress = () => {
    
   
    console.log('Navigasi ke halaman MITRA');
    const router = useRouter();
  };

  const handleSiswaPress = () => {
    // Tambahkan navigasi atau aksi yang diinginkan di sini
    console.log('Navigasi ke halaman SISWA');
    // Contoh navigasi:
    // navigation.navigate('SiswaScreen');
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/images/logo_m.png')} // Pastikan path dan nama file logo sesuai
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.subtitle}>Register Sebagai:</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/register_mitra')}>
        <Text style={styles.buttonText}>MITRA</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/register_siswa')}>
        <Text style={styles.buttonText}>SISWA</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1E90FF',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default nav;