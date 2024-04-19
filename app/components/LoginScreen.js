import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const [errorMessage, setErrorMessage] = useState(null);

  const handleGoBack = () => {
    navigation.goBack();
  };
//http://127.0.0.1:8081/api/login
  const handleLogin = () => {
    console.log("hola")
    fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            usuario: email,
            contraseña: password,
        }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.message === 'Inicio de sesión exitoso') {
          navigation.navigate('ZonasScreen', { usuario: data.usuario });
      } else {
        setErrorMessage('Woops, credenciales incorrectas');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      console.log('Error message:', error.message);
  });
  
};

const loginTest = () => {
  if (email.trim() === '' || password.trim() === '') {
    setErrorMessage('Por favor, complete todos los campos');
    return;
  }
  if (email === 'diego3' && password === 'diego3') {
    navigation.navigate('ZonasScreen');
  } else {
    setErrorMessage('Credenciales incorrectas');
  }
};
  return (
      <View style={styles.container}>
        <View style={styles.nav}>
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <Ionicons name="arrow-back" size={24} color="white" />
          <Text style={styles.backText}>Regresar</Text>
        </TouchableOpacity>
          <Text style={styles.title}>Iniciar Sesión</Text>
          <Text></Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          onChangeText={text => setEmail(text)}
          value={email}
          keyboardType="email-address"
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry
          placeholderTextColor="white"
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
      </View>
  );
};

const styles = StyleSheet.create({
  nav:{
    display:'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center',
    width:'100%'
  },
  backText:{
    color: 'rgba(255,255,255,0.8)',
    fontSize:18,
    marginLeft: 5,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'hsl(228 39% 23%)', 
    color:'rgba(255,255,255,0.7)',
    padding: 20,
    borderRadius: 10,
    display:'flex',
    justifyContent:'center',
    gap:50
  },
  error: {
    color: 'rgba(255,255,255,0.8)',
    backgroundColor: 'rgb(255,0,0)',
    borderRadius:10,
    marginBottom: 20,
    border: 'none',
    padding:10,
    width:'80%',
    textAlign:'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'rgba(255,255,255,0.7)',
  },
  input: {
    width: '80%',
    height: 50,
    padding:10,
    color:'rgba(255,255,255,0.7)',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.7)',
    color:'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color:'rgba(0,0,0,0.7)',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
