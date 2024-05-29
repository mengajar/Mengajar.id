import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

const RegisterMitra: React.FC = () => {
    const [code, setCode] = useState<string[]>(['', '', '', '']);
    const [timer, setTimer] = useState<number>(30);
    const [resendDisabled, setResendDisabled] = useState<boolean>(true);

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

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('./logo.png')} style={styles.logo} />
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
                    />
                ))}
            </View>
            <Text style={styles.message}>Tentukan waktu dan pendapatanmu sendiri bersama mengajar.id</Text>
            <TouchableOpacity
                onPress={handleResendCode}
                disabled={resendDisabled}
                style={[styles.resendButton, resendDisabled && styles.disabledButton]}
            >
                <Text style={styles.buttonText}>
                    Kirim ulang kode: {timer > 0 ? `00:${timer < 10 ? `0${timer}` : timer}` : ''}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleVerification} style={styles.verifyButton}>
                <Text style={styles.buttonText}>Verifikasi</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 20,
    },
    header: {
        textAlign: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    title: {
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
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    resendButton: {
        width: '80%',
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 10,
    },
    disabledButton: {
        backgroundColor: '#ccc',
    },
    verifyButton: {
        width: '80%',
        padding: 10,
        backgroundColor: '#007bff',
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default RegisterMitra;