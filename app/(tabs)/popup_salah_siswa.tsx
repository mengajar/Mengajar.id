import React from "react"
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native"
import Modal from "react-native-modal"

interface PopupSalahSiswaProps {
  isVisible: boolean
  onClose: () => void
}

const PopupSalahSiswa: React.FC<PopupSalahSiswaProps> = ({
  isVisible,
  onClose,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      backdropOpacity={0.5}
    >
      <View style={styles.modalContent}>
        <Text style={styles.errorMessage}>Maaf Kode Verifikasi Salah</Text>
        <Image
          source={require("../../assets/images/dangerous.png")}
          style={styles.errorIcon}
        />
        <Text style={styles.subMessage}>Harap Verifikasi Ulang</Text>
        <TouchableOpacity onPress={onClose} style={styles.button}>
          <Text style={styles.buttonText}>Ulangi</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  errorIcon: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  errorMessage: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subMessage: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#1E90FF",
    padding: 10,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
})

export default PopupSalahSiswa
