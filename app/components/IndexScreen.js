import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const IndexScreen = () => {
    const navigation = useNavigation();
    const handleLoginPress = () => {
        navigation.navigate('LoginScreen');
    };
    return (
      <ScrollView style={styles.banner}>
          <View style={styles.nav}>
              <Image source={require('../../assets/images/codev.png')} style={styles.logo} />
              <View style={styles.navElements}>
                  <Text style={styles.navLink} onPress={handleLoginPress}>Inicia sesion</Text>
              </View>
          </View>
          <View style={styles.bannerContent}>
              <Text style={styles.subtitle}>Seguridad y software en un solo lugar</Text>
              <Text style={styles.description}>Desarrollo de software que funciona en conjunto con tus herramientas de seguridad.</Text>
              <View style={styles.buttonsContainer}>
                  <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
                      <Text style={styles.buttonText}>Visita la web!</Text>
                  </TouchableOpacity>
              </View>
          </View>

          <View style={styles.info}>
              <View style={styles.about}>
                  <View>
                      <Text style={styles.divInfoTitle}>¿Quienes somos?</Text>
                      <Text style={styles.divInfoText}>Somos un equipo de desarrollo enfocado en la combinacion de la tecnologia con la seguridad, logrando asi llevar la seguridad al siguiente nivel, implementando funcionalidades utiles y faciles de administrar para el usuario.</Text>
                  </View>
              </View>

              <View style={styles.weDo}>
                  <View>
                      <Text style={styles.divInfoTitle}>¿Que hacemos?</Text>
                      <Text style={styles.divInfoText}>Creamos proyectos combinando el software con la seguridad, logrando asi proyectos avanzados con funcionalidades superiores a las convencionales, dando ell siguiente paso en la seguridad.</Text>
                  </View>
              </View>

              <View style={styles.contact}>
                  <View>
                      <Text style={styles.divInfoTitle}>Contactanos</Text>
                      <Text style={styles.divInfoText}>Contactanos para realizar una consulta acerca de el proyecto que tienes planeado y asi poder ayudarte proporcionandote una cotizacion</Text>
                      <View style={styles.buttonsWContainer}>
                          <TouchableOpacity style={styles.buttonW}>
                              <Text style={styles.buttonWText}>Whatsapp</Text>
                          </TouchableOpacity>
                      </View>
                  </View>
              </View>
          </View>

          <View style={styles.footer}>
            <Text style={styles.navLink}>Facebook</Text>
            <Text style={styles.navLink}>Instagram</Text>
          </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  banner: {
      flex: 1,
      backgroundColor: 'hsl(228 39% 23%)',
  },
  nav: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 20,
      display:'flex',
      alignItems: 'center',
  },
  logo: {
    width:120,
    height: 120,
    resizeMode: 'contain'
  },
  navElements: {
      flexDirection: 'row',
  },
  navLink: {
      color: '#fff',
      fontSize: 18,
      marginLeft: 20,
  },
  bannerContent: {
      padding: 20,
      paddingBottom: 50,
      paddingTop: 0,
  },
  subtitle: {
      color: '#fff',
      fontSize: 28,
      marginBottom: 10,
      fontFamily: 'Rubik',
      fontWeight: '500',
  },
  description: {
      color: 'rgba(255, 255, 255, 0.7)',
      fontSize: 16,
      marginBottom: 20,
  },
  buttonsContainer: {
      flexDirection: 'row',
  },
  buttonsWContainer: {
      display: 'flex',
      alignItems: 'center'
  },
  button: {
      backgroundColor: '#fff',
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 25,
      marginRight: 20,
  },
  buttonW: {
      backgroundColor: 'hsl(228 39% 23%)',
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 25,
  },
  buttonWText: {
      color: 'rgba(255,255,255,0.9)',
      fontSize: 16,
  },
  buttonText: {
      color: 'rgba(0,0,0,9)',
      fontSize: 16,
  },
  info: {
      padding: 20,
      backgroundColor: 'white'
  },
  about: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
  },
  weDo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
  },
  contact: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
  },
  divInfoTitle: {
    textAlign: 'center',
      color: 'rgba(0,0,0,0.9)',
      fontSize: 24,
      marginBottom: 10,
  },
  divInfoText: {
    color: 'rgba(0,0,0,0.7)',
    textAlign: 'center',
      fontSize: 16,
      marginBottom: 20,
  },
  footer: {
      margin: 40,
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
  },
  footerLinks: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
  },
});

export default IndexScreen;
