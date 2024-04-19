import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const IndexScreen = () => {
    const navigation = useNavigation();
    const handleLoginPress = () => {
        navigation.navigate('LoginScreen');
    };
  return (
    <View style={styles.banner}>
      <View style={styles.nav}>
        <Image source={require('../../assets/images/codev.png')} style={styles.logo}/>
      </View>
      <View style={styles.bannerContent}>
        <Text style={styles.subtitle}>Seguridad y software en un solo lugar</Text>
        <Text style={styles.description}>Desarrollo de software que funciona en conjunto con tus herramientas de seguridad.</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
            <Text style={styles.buttonText}>Iniciar sesion</Text>
          </TouchableOpacity>
        </View>
      </View>

    <View style={styles.divInfo}>
      <Image source={require('../../assets/images/subscribe.svg')} style={styles.logo}/>
      <View>
        <Text style={styles.divInfoTitle}>¿Deseas conseguir nuestros servicios?</Text>
        <TouchableOpacity style={styles.buttonWeb} onPress={() => console.log('test')} >
            <Text style={styles.buttonTextWeb}>Visita nuestra web</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'hsl(228 39% 23%)',
    paddingVertical: 20,
  },
  nav: {
    display: 'flex',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  divInfo: {
    color: 'rgba(0,0,0,0.7)',
    padding: 40,
    marginTop: 20,
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'hsl(228 39% 20%)',
  },
  divInfoTitle: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 19
  },
  divInfoText: {
    color: 'rgba(0,0,0,0.7)'
  },
  logo: {
    width:120,
    height: 120,
    resizeMode: 'contain'
  },
  navElements: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  navLink: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 20,
  },
  bannerContent: {
    paddingHorizontal: 20,
  },
  title: {
    color: '#fff',
    fontSize: 32,
    marginBottom: 10,
  },
  subtitle: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 10,
  },
  description: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginRight: 20,
  },
  buttonText: {
    color: 'rgba(0,0,0,9)',
    fontSize: 16,
  },
  buttonWeb: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
    marginRight: 20,
    marginTop:20
  },
  buttonTextWeb: {
    color: 'rgba(0,0,0,9)',
    fontSize: 14,
  },
});

export default IndexScreen;
