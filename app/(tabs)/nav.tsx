import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const Nav: React.FC = () => {
  const router = useRouter();

  const handleMitraPress = () => {
    console.log('Navigasi ke halaman MITRA');
    router.push('/register_mitra');
  };

  const handleSiswaPress = () => {
    console.log('Navigasi ke halaman SISWA');
    router.push('/register_siswa');
  };

  const handleBackPress = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.push('')}>
        <FontAwesome name="chevron-left" size={20} color="black" />
      </TouchableOpacity>
      <Image 
        source={require('../../assets/images/logo_m.png')} // Pastikan path dan nama file logo sesuai
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.subtitle}>Register Sebagai:</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/register_mitra')}>
        <LinearGradient
          colors={['#1E90FF', '#87CEFA']}
          style={styles.gradientButton}
          start={[0, 0]}
          end={[1, 1]}
        >
          <Text style={styles.buttonText}>MITRA</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/register_siswa')}>
      <LinearGradient
          colors={['#1E90FF', '#87CEFA']}
          style={styles.gradientButton}
          start={[0, 0]}
          end={[1, 1]}
        >
        <Text style={styles.buttonText}>SISWA</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  logo: {
    width: 300,
    height: 100,
    marginTop:200,
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  gradientButton: {
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Nav;
