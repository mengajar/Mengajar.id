import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import verifikasi_mitra from './verifikasi_mitra';

const verifikasi_siswa: React.FC = () => {
    const [code, setCode] = useState<string[]>(['', '', '', '']);
    const [timer, setTimer] = useState<number>(60);
    const [resendDisabled, setResendDisabled] = useState<boolean>(true);
    const router = useRouter();
    const inputRefs = useRef<(TextInput | null)[]>([]);

    useEffect(() => {
        if (timer > 0) {
            const intervalId = setInterval(() => {
                setTimer(prev => prev - 1);
            }, 1000);
            return () => clearInterval(intervalId);
        } else {
            setResendDisabled(false);
        }
    }, [timer]);

    const handleInputChange = (index: number, value: string) => {
        if (/^\d$/.test(value) || value === '') {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);

            // Move to the next input if the value is valid and not the last input
            if (value !== '' && index < inputRefs.current.length - 1) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };

    const handleResendCode = () => {
        // Logic to resend code
        setTimer(30);
        setResendDisabled(true);
    };

    const handleVerification = () => {
        const verificationCode = code.join('');
        // Logic to verify the code
    };

    const handleBack = () => {
        router.back();
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                <FontAwesome name="chevron-left" size={20} color="black" />
            </TouchableOpacity>
            <View style={styles.header}>
                <Image source={require('../../assets/images/logo_m.png')} style={styles.logo} />
                <Text style={styles.title}>Verifikasi Diri Anda</Text>
            </View>
            <Text style={styles.message}>Kode verifikasi telah dikirim ke email</Text>
            <View style={styles.codeInputs}>
                {code.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={styles.input}
                        maxLength={1}
                        value={digit}
                        onChangeText={(text) => handleInputChange(index, text)}
                        keyboardType="numeric"
                        ref={(el) => (inputRefs.current[index] = el)}
                    />
                ))}
            </View>
            <Text style={styles.message}>Menjadi generasi berkualitas bersama Mengajar.ID</Text>
            <TouchableOpacity
                onPress={handleResendCode}
                disabled={resendDisabled}
                style={[
                    styles.resendButton,
                    resendDisabled ? styles.disabledButton : styles.enabledButton
                ]}
            >
                <Text style={[styles.buttonverifikasi, !resendDisabled && styles.enabledButtonText]}>
                    Kirim ulang kode {timer > 0 ? `00:${timer < 10 ? `0${timer}` : timer} ` : ''}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleVerification} style={styles.verifyButton}>
                <LinearGradient
                    colors={['#007bff', '#00d4ff']}
                    style={styles.gradientButton}
                    start={[0, 0]}
                    end={[1, 1]}
                >
                    <Text style={styles.buttonText}>Verifikasi</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ECECEC',
        padding: 20,
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 0,
    },
    header: {
        textAlign: 'center',
        marginBottom: 20,
    },
    logo: {
        marginTop: 30,
        width: 300,
        height: 80,
        resizeMode: 'contain',
        marginVertical: 20,
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    message: {
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 10,
    },
    codeInputs: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
    },
    input: {
        width: 40,
        height: 40,
        fontSize: 24,
        textAlign: 'center',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    resendButton: {
        width: '80%',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    disabledButton: {
        // backgroundColor: '#f0f0f0',
    },
    enabledButton: {
        borderWidth: 1,
        // backgroundColor: '#ccc',
    },
    enabledButtonText: {
        color: '#007bff',
    },
    verifyButton: {
        width: '80%',
        alignItems: 'center',
        marginVertical: 10,
    },
    gradientButton: {
        width: '100%',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    buttonverifikasi: {
        color: 'black',
        fontSize: 16,
    },
});

export default verifikasi_siswa;
