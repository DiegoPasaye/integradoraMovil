import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

const userProfileScreen = () => {
  const [userPhoto, setUserPhoto] = useState(require('../../assets/images/userImage.webp'));
  const navigation = useNavigation();

  useEffect(() => {
  }, [userPhoto]);

  const handleChoosePhoto = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setUserPhoto({ uri: result.assets[0].uri });
    }    
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <Ionicons name="arrow-back" size={24} color="white" />
          <Text style={styles.backText}>Regresar</Text>
        </TouchableOpacity>
      <Image source={userPhoto} style={styles.userPhoto} />

      <TouchableOpacity style={styles.modifyButton} onPress={handleChoosePhoto}>
        <Ionicons name="camera-outline" size={24} color="white" />
        <Text style={styles.modifyButtonText}>Modificar foto</Text>
      </TouchableOpacity>

      <TextInput style={styles.input} placeholder="Nombre de usuario" placeholderTextColor="white" />

      <Text style={styles.changePasswordText}>¿Deseas cambiar tu contraseña?</Text>
      <TextInput style={styles.input} placeholder="Introduce tu contraseña" secureTextEntry={true} placeholderTextColor="white" />
      <TextInput style={styles.input} placeholder="Nueva contraseña" secureTextEntry={true} placeholderTextColor="white" />
      <TextInput style={styles.input} placeholder="Repite la nueva contraseña" secureTextEntry={true} placeholderTextColor="white" />

      <TouchableOpacity style={styles.modifyButton}>
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
  backText:{
    color: 'rgba(255,255,255,0.8)',
    fontSize:18,
    marginLeft: 5,
  },
  backButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginRight: 250,
    marginBottom: 20
  },
});

export default userProfileScreen;
