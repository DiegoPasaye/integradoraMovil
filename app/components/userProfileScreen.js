import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

const userProfileScreen = ({ route }) => {
  const { usuario } = route.params;
  const [userPhoto, setUserPhoto] = useState(require('../../assets/images/userImage.webp'));
  const navigation = useNavigation();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  useEffect(() => {
  }, [userPhoto]);

  const handleChoosePhoto = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    if (!result.cancelled) {
      setUserPhoto({ uri: result.assets[0].uri });

      const body = {
        usuario: usuario,
        photoUrl: result.assets[0].uri,
      };
      console.log('Cuerpo de la solicitud:', body);
      try {
        const response = await fetch('http://127.0.0.1:8000/api/update-photo', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });

      } catch (error) {
        console.error('Error al actualizar la foto:', error);
        alert('Error al actualizar la foto');
      }
    }
};

  
const handleChangePassword = async () => {
  if (newPassword !== confirmNewPassword) {
    alert('La nueva contraseña y la confirmación no coinciden');
    return;
  }

  const body = {
    usuario: usuario,
    oldPassword: oldPassword,
    newPassword: newPassword,
  };

  console.log('Cuerpo de la solicitud:', body);

  try {
    const response = await fetch('http://127.0.0.1:8000/api/change-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    // Resto del código...
  } catch (error) {
    console.error('Error al cambiar la contraseña:', error);
    alert('Error al cambiar la contraseña');
  }
};


useEffect(() => {
  const getUserProfile = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/user-profile?usuario=${usuario}`);
      const data = await response.json();

      const userPhoto = { uri: data.photoUrl };

      setUserPhoto(userPhoto);
    } catch (error) {
      console.error('Error al recuperar el perfil del usuario:', error);
      alert('Error al recuperar el perfil del usuario');
    }
  };

  getUserProfile();
}, []);


  
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <Ionicons name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
      <Image source={userPhoto} style={styles.userPhoto} />

      <TouchableOpacity style={styles.modifyButton} onPress={handleChoosePhoto}>
        <Ionicons name="camera-outline" size={20} color="white" />
        <Text style={styles.modifyButtonText}>Modificar foto</Text>
      </TouchableOpacity>

      <Text style={styles.changePasswordText}>¿Deseas cambiar tu contraseña?</Text>
      <TextInput
      style={styles.input}
      placeholder="Introduce tu contraseña"
      secureTextEntry={true}
      placeholderTextColor="white"
      value={oldPassword}
      onChangeText={setOldPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Repite la nueva contraseña"
        secureTextEntry={true}
        placeholderTextColor="white"
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirma la nueva contraseña"
        secureTextEntry={true}
        placeholderTextColor="white"
        value={confirmNewPassword}
        onChangeText={setConfirmNewPassword}
      />

      <TouchableOpacity style={styles.modifyButton2} onPress={handleChangePassword}>
        <Text style={styles.modifyButtonText}>Guardar cambios</Text>
      </TouchableOpacity>


    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'hsl(228, 39%, 23%)',
  },
  userPhoto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderBlockColor: 'rgba(0,0,0,0.1)',
    borderColor: 'rgba(255,255,255,0.3)',
    borderWidth: 1,
  },
  modifyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 9,
    borderRadius: 5,
    marginBottom: 20,
  },
  modifyButton2: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  modifyButtonText: {
    marginLeft: 5,
    color:'rgba(255,255,255,0.8)'
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  changePasswordText: {
    marginBottom: 10,
    color:'rgba(255,255,255,0.8)'
  },

  backButton: {
    position: 'absolute',
    top: 40,
    left: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default userProfileScreen;
