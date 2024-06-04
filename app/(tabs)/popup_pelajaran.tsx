import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import Modal from 'react-native-modal';

interface PopupPelajaranProps {
    isVisible: boolean;
    onClose: () => void;
}

const PopupPelajaran: React.FC<PopupPelajaranProps> = ({ isVisible, onClose }) => {
    const subjects = [
        { name: 'Komputer', icon: require('../../assets/images/komputer.png') },
        { name: 'Kesenian', icon: require('../../assets/images/kesenian.png') },
        { name: 'Kimia', icon: require('../../assets/images/kimia.png') },
        { name: 'Kesehatan', icon: require('../../assets/images/kesehatan.png') },
        { name: 'Musik', icon: require('../../assets/images/musik.png') },
        { name: 'Bahasa Indonesia', icon: require('../../assets/images/bahasa.png') },
        { name: 'Desain', icon: require('../../assets/images/desain.png') },
        { name: 'Geografi', icon: require('../../assets/images/geografi.png') },
        { name: 'Fisika', icon: require('../../assets/images/fisika.png') },
        { name: 'Sosiologi', icon: require('../../assets/images/sosial.png') },
        { name: 'Sejarah', icon: require('../../assets/images/sejarah.png') },
        { name: 'Ekonomi', icon: require('../../assets/images/ekonomi.png') },
        { name: 'Bahasa Inggris', icon: require('../../assets/images/inggris.png') },
        { name: 'PPKN', icon: require('../../assets/images/ppkn.png') },
        { name: 'Matematika', icon: require('../../assets/images/matematika.png') },
    ];

    return (
        <Modal isVisible={isVisible} onBackdropPress={onClose} backdropOpacity={0.5}>
            <View style={styles.modalContent}>
                <View style={styles.header}>
                    <Text style={styles.title}>Pelajaran</Text>
                    <TouchableOpacity onPress={onClose}>
                        <Text style={styles.closeButton}>Tutup</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    <View style={styles.subjectsContainer}>
                        {subjects.map((subject, index) => (
                            <View key={index} style={styles.subjectItem}>
                                <Image source={subject.icon} style={styles.subjectIcon} />
                                <Text style={styles.subjectText}>{subject.name}</Text>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        maxHeight: '80%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    closeButton: {
        color: '#1E90FF',
    },
    scrollViewContent: {
        alignItems: 'center',
    },
    subjectsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    subjectItem: {
        alignItems: 'center',
        margin: 10,
    },
    subjectIcon: {
        width: 50,
        height: 50,
        marginBottom: 5,
    },
    subjectText: {
        fontSize: 14,
        textAlign: 'center',
    },
});

export default PopupPelajaran;
