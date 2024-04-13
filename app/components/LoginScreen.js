import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = () => {
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
          console.log('Inicio de sesión exitoso');
          navigation.navigate('ZonasScreen', { usuario: data.usuario });
      } else {
        setErrorMessage('Woops, credenciales incorrectas');
      }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
};

  return (
      <View style={styles.container}>

        <Text style={styles.title}>Iniciar Sesión</Text>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          onChangeText={text => setEmail(text)}
          value={email}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
      </View>
  );
};

const styles = StyleSheet.create({
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
    marginBottom: 20,
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
    color: 'whiblackte',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
