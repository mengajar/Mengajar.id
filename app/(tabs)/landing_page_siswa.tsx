import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modal';

const PopupPelajaran: React.FC<{ isVisible: boolean; onClose: () => void }> = ({ isVisible, onClose }) => {
    return (
        <Modal isVisible={isVisible} onBackdropPress={onClose} backdropOpacity={0.5}>
            <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Pelajaran</Text>
                {/* Konten Pelajaran */}
                <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                    <Text style={styles.closeButtonText}>Tutup</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

const PopupTutorPopuler: React.FC<{ isVisible: boolean; onClose: () => void }> = ({ isVisible, onClose }) => {
    return (
        <Modal isVisible={isVisible} onBackdropPress={onClose} backdropOpacity={0.5}>
            <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Tutor Populer</Text>
                {/* Konten Tutor Populer */}
                <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                    <Text style={styles.closeButtonText}>Tutup</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

const PopupKelasPopuler: React.FC<{ isVisible: boolean; onClose: () => void }> = ({ isVisible, onClose }) => {
    return (
        <Modal isVisible={isVisible} onBackdropPress={onClose} backdropOpacity={0.5}>
            <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Kelas Populer</Text>
                {/* Konten Kelas Populer */}
                <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                    <Text style={styles.closeButtonText}>Tutup</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

const LandingPage: React.FC = () => {
    const [isPelajaranModalVisible, setPelajaranModalVisible] = useState(false);
    const [isTutorPopulerModalVisible, setTutorPopulerModalVisible] = useState(false);
    const [isKelasPopulerModalVisible, setKelasPopulerModalVisible] = useState(false);

    const openPelajaranModal = () => setPelajaranModalVisible(true);
    const closePelajaranModal = () => setPelajaranModalVisible(false);

    const openTutorPopulerModal = () => setTutorPopulerModalVisible(true);
    const closeTutorPopulerModal = () => setTutorPopulerModalVisible(false);

    const openKelasPopulerModal = () => setKelasPopulerModalVisible(true);
    const closeKelasPopulerModal = () => setKelasPopulerModalVisible(false);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
              <View style={styles.headerTop}>
                  <TouchableOpacity style={styles.locationButton}>
                      <Image source={require('../../assets/images/location.png')} style={styles.locationIcon} />
                      <Text style={styles.locationText}>Kos Eksklusif Pandega 101</Text>
                      <Image source={require('../../assets/images/navigation.png')} style={styles.navigationIcon} />
                  </TouchableOpacity>
              </View>
              <View style={styles.headerContent}>
                  <View style={styles.greetingContainer}>
                      <Text style={styles.greeting}>Halo, Nasution</Text>
                      <Text style={styles.subGreeting}>Pilih pelajaran dan mulai bersenang-senang</Text>
                  </View>
                  <View style={styles.notificationContainer}>
                      <TouchableOpacity style={styles.notificationButton}>
                          <Image source={require('../../assets/images/document.png')} style={styles.notificationIcon} />
                          <View style={styles.notificationDot} />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.notificationButton}>
                          <Image source={require('../../assets/images/notifications.png')} style={styles.notificationIcon} />
                          <View style={styles.notificationDot} />
                      </TouchableOpacity>
                  </View>
              </View>
              <View style={styles.searchBar}>
                  <Image source={require('../../assets/images/search.png')} style={styles.searchIcon} />
                  <TextInput placeholder="Pencarian" style={styles.searchInput} />
                  <TouchableOpacity style={styles.searchButton}>
                      <Image source={require('../../assets/images/arrow.png')} style={styles.searchButtonIcon} />
                  </TouchableOpacity>
              </View>
          </View>
            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Pelajaran</Text>
                    <TouchableOpacity onPress={openPelajaranModal}>
                        <Text style={styles.seeAll}>Lihat semua</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.lessonItem}>
                        <View style={styles.lessonIconBackground}>
                            <Image source={require('../../assets/images/komputer.png')} style={styles.lessonIcon} />
                        </View>
                        <Text style={styles.lessonText}>Komputer</Text>
                    </View>
                    <View style={styles.lessonItem}>
                        <View style={styles.lessonIconBackground}>
                            <Image source={require('../../assets/images/kesenian.png')} style={styles.lessonIcon} />
                        </View>
                        <Text style={styles.lessonText}>Kesenian</Text>
                    </View>
                    <View style={styles.lessonItem}>
                        <View style={styles.lessonIconBackground}>
                            <Image source={require('../../assets/images/kimia.png')} style={styles.lessonIcon} />
                        </View>
                        <Text style={styles.lessonText}>Kimia</Text>
                    </View>
                    <View style={styles.lessonItem}>
                        <View style={styles.lessonIconBackground}>
                            <Image source={require('../../assets/images/kesehatan.png')} style={styles.lessonIcon} />
                        </View>
                        <Text style={styles.lessonText}>Kesehatan</Text>
                    </View>
                    <View style={styles.lessonItem}>
                        <View style={styles.lessonIconBackground}>
                            <Image source={require('../../assets/images/musik.png')} style={styles.lessonIcon} />
                        </View>
                        <Text style={styles.lessonText}>Musik</Text>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Tutor Populer</Text>
                    <TouchableOpacity onPress={openTutorPopulerModal}>
                        <Text style={styles.seeAll}>Lihat semua</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.tutorItem}>
                        <Image source={require('../../assets/images/tutor_populer1.png')} style={styles.tutorImage} />
                        <Text style={styles.tutorText}>Prof. Nasution, M.Cs</Text>
                    </View>
                    <View style={styles.tutorItem}>
                        <Image source={require('../../assets/images/tutor_populer2.png')} style={styles.tutorImage} />
                        <Text style={styles.tutorText}>Nurul Hidayah</Text>
                    </View>
                    <View style={styles.tutorItem}>
                        <Image source={require('../../assets/images/tutor_populer3.png')} style={styles.tutorImage} />
                        <Text style={styles.tutorText}>Riska Aulia</Text>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Kelas Populer</Text>
                    <TouchableOpacity onPress={openKelasPopulerModal}>
                        <Text style={styles.seeAll}>Lihat semua</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.classItem}>
                        <Image source={require('../../assets/images/kelas_populer1.png')} style={styles.classImage} />
                        <Text style={styles.classText}>Kesenian dan Musik</Text>
                    </View>
                    <View style={styles.classItem}>
                        <Image source={require('../../assets/images/kelas_populer2.png')} style={styles.classImage} />
                        <Text style={styles.classText}>Komputer Dasar</Text>
                    </View>
                    <View style={styles.classItem}>
                        <Image source={require('../../assets/images/kelas_populer3.png')} style={styles.classImage} />
                        <Text style={styles.classText}>Sejarah</Text>
                    </View>
                </ScrollView>
            </View>
            <PopupPelajaran isVisible={isPelajaranModalVisible} onClose={closePelajaranModal} />
            <PopupTutorPopuler isVisible={isTutorPopulerModalVisible} onClose={closeTutorPopulerModal} />
            <PopupKelasPopuler isVisible={isKelasPopulerModalVisible} onClose={closeKelasPopulerModal} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f8f8',
    },
    header: {
        backgroundColor: '#1E90FF',
        paddingBottom: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    locationButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 20,
        paddingHorizontal: 10,
    },
    locationText: {
        color: '#000',
        fontSize: 14,
        marginHorizontal: 5,
    },
    locationIcon: {
        width: 16,
        height: 16,
    },
    navigationIcon: {
      width: 16,
      height: 16,
      tintColor: 'green',
    },
    headerContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingTop: 10,
    },
    headerIcons: {
        flexDirection: 'row',
    },
    headerIcon: {
        width: 20,
        height: 20,
        marginLeft: 5,
    },
    headerBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    greeting: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    greetingContainer: {
      flex: 1,
    },
    subGreeting: {
        fontSize: 16,
        color: '#fff',
    },
    notificationContainer: {
      flexDirection: 'row',
    },
    notificationButton: {
        padding: 10,
        marginLeft: 15,
    },
    notificationIcon: {
        width: 24,
        height: 24,
        tintColor: '#fff',
    },
    notificationDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: 'red',
      position: 'absolute',
      top: 5,
      right: 5,
    },
    searchBar: {
      flexDirection: 'row',
      marginVertical: 20,
      backgroundColor: '#fff',
      borderRadius: 30,
      padding: 10,
      alignItems: 'center',
      marginHorizontal: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
    },
    searchInput: {
      flex: 1,
      fontSize: 16,
      marginLeft: 10,
      color: 'gray',
    },
    searchButton: {
        padding: 5,
    },
    searchIcon: {
        width: 20,
        height: 20,
        tintColor: 'gray',
    },
    searchButtonIcon: {
      width: 20,
      height: 20,
      tintColor: '#1E90FF',
    },
    section: {
        marginBottom: 20,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    seeAll: {
        fontSize: 14,
        color: '#1E90FF',
    },
    lessonItem: {
        alignItems: 'center',
        marginHorizontal: 10,
    },
    lessonIconBackground: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#e6f7ff',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
    },
    lessonIcon: {
        width: 20,
        height: 20,
    },
    lessonText: {
        fontSize: 14,
        textAlign: 'center',
    },
    tutorItem: {
        alignItems: 'center',
        marginHorizontal: 10,
    },
    tutorImage: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginBottom: 5,
    },
    tutorText: {
        fontSize: 14,
        textAlign: 'center',
    },
    classItem: {
        alignItems: 'center',
        marginHorizontal: 10,
    },
    classImage: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginBottom: 5,
    },
    classText: {
        fontSize: 14,
        textAlign: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    closeButton: {
        marginTop: 20,
        backgroundColor: '#1E90FF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default LandingPage;
