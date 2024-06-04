import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { useRouter } from 'expo-router';

const LandingPageSiswa: React.FC = () => {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Halo, User</Text>
        <Text style={styles.subGreeting}>Pilih pelajaran dan mulai bersenang-senang</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Pencarian"
        />
      </View>
      
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Pelajaran</Text>
          <TouchableOpacity onPress={() => router.push('/popup_pelajaran')}>
            <Text style={styles.linkText}>Lihat semua</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sectionContent}>
          <View style={styles.iconContainer}>
            <Image source={require('../../assets/images/komputer.png')} style={styles.icon} />
            <Text>Komputer</Text>
          </View>
          <View style={styles.iconContainer}>
            <Image source={require('../../assets/images/kesenian.png')} style={styles.icon} />
            <Text>Kesenian</Text>
          </View>
          <View style={styles.iconContainer}>
            <Image source={require('../../assets/images/kimia.png')} style={styles.icon} />
            <Text>Kimia</Text>
          </View>
          <View style={styles.iconContainer}>
            <Image source={require('../../assets/images/kesehatan.png')} style={styles.icon} />
            <Text>Kesehatan</Text>
          </View>
          <View style={styles.iconContainer}>
            <Image source={require('../../assets/images/musik.png')} style={styles.icon} />
            <Text>Musik</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Tutor Populer</Text>
          <TouchableOpacity onPress={() => router.push('/popup_tutor')}>
            <Text style={styles.linkText}>Lihat semua</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sectionContent}>
          <View style={styles.tutorContainer}>
            <Image source={require('../../assets/images/tutor_populer1.png')} style={styles.tutorImage} />
            <Text>Nasution, MCA</Text>
          </View>
          <View style={styles.tutorContainer}>
            <Image source={require('../../assets/images/tutor_populer2.png')} style={styles.tutorImage} />
            <Text>Nurul Hidayah</Text>
          </View>
          <View style={styles.tutorContainer}>
            <Image source={require('../../assets/images/tutor_populer3.png')} style={styles.tutorImage} />
            <Text>Riska Aulia</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Kelas Populer</Text>
          <TouchableOpacity onPress={() => router.push('/popup_kelas')}>
            <Text style={styles.linkText}>Lihat semua</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sectionContent}>
          <View style={styles.classContainer}>
            <Image source={require('../../assets/images/kelas_populer1.png')} style={styles.classImage} />
            <Text>Kelas 1</Text>
          </View>
          <View style={styles.classContainer}>
            <Image source={require('../../assets/images/kelas_populer1.png')} style={styles.classImage} />
            <Text>Kelas 2</Text>
          </View>
          <View style={styles.classContainer}>
            <Image source={require('../../assets/images/kelas_populer1.png')} style={styles.classImage} />
            <Text>Kelas 3</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.navButton} onPress={() => router.push('/home')}>
          <Text style={styles.navButtonText}>Utama</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => router.push('/kelas')}>
          <Text style={styles.navButtonText}>Kelasku</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => router.push('/pesan')}>
          <Text style={styles.navButtonText}>Pesan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => router.push('/profil')}>
          <Text style={styles.navButtonText}>Profil</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subGreeting: {
    fontSize: 18,
    color: 'gray',
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  linkText: {
    color: 'blue',
  },
  sectionContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  iconContainer: {
    width: 60,
    alignItems: 'center',
    marginRight: 15,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  tutorContainer: {
    width: 100,
    alignItems: 'center',
    marginRight: 15,
  },
  tutorImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 5,
  },
  classContainer: {
    width: 100,
    alignItems: 'center',
    marginRight: 15,
  },
  classImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  navButton: {
    alignItems: 'center',
  },
  navButtonText: {
    fontSize: 16,
    color: 'gray',
  },
});

export default LandingPageSiswa;
