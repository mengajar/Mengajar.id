import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { useRouter } from 'expo-router';

interface PopupSalahSiswaProps {
    isVisible: boolean;
    onClose: () => void;
}

const PopupSalahSiswa: React.FC<PopupSalahSiswaProps> = ({ isVisible, onClose }) => {
    return (
        <Modal isVisible={isVisible} onBackdropPress={onClose} backdropOpacity={0.5}>
            <View style={styles.modalContent}>
                <Text style={styles.errorMessage}>Kode Verifikasi Berhasil</Text>
                <Image source={require('../../assets/images/berhasil.png')} style={styles.errorIcon} />
                <Text style={styles.subMessage}>Silahkan Login</Text>
                <TouchableOpacity onPress={() => router.push('/home_page')} style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};
const router = useRouter();
const styles = StyleSheet.create({
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    errorIcon: {
        width: 50,
        height: 50,
        marginBottom: 20,
    },
    errorMessage: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    subMessage: {
        fontSize: 14,
        color: 'gray',
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#1E90FF',
        padding: 10,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default PopupSalahSiswa;
