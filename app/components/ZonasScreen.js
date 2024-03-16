import React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native'; 

const ZonasScreen = () => {
  const navigation = useNavigation();

  const zonas = [
    'Edificio A',
    'Edificio B',
    'Edificio C',
    'Edificio D',
    'Pesado 1',
    'Pesado 2',
    'Rectoria'
  ];

  const handleAdministrar = (zona) => {
    navigation.navigate('AdministrarZona',  {zona} );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Zonas</Text>
          <Image source={require('../../assets/images/codev.png')} style={styles.headerImage} />
        </View>

        {zonas.map((zona, index) => (
            <Card key={index} containerStyle={styles.cardContainer}>
                <Card.Title style={styles.cardTitle}>{zona}</Card.Title>
                <TouchableOpacity onPress={() => handleAdministrar(zona)} style={styles.administrarButton}>
                    <Text>Administrar</Text>
                </TouchableOpacity>
            </Card>
        ))}
      </ScrollView>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: 'hsl(228, 39%, 23%)',
    },
    header: {
        display:'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width:'80%',
      marginLeft:'10%',
      marginBottom: 10,
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      padding:20,
      color: 'rgba(255, 255, 255, 0.7)', 
    },
    headerImage: {
      width: 70,
      height: 70,
      resizeMode: 'contain',
    },
    cardContainer: {
      width: '80%', 
      alignSelf: 'center', 
      borderRadius: 10, 
      backgroundColor: 'hsl(228, 39%, 23%)',
      shadowColor: '#000',
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 50,
      elevation: 5,
      marginBottom: 20,
    },
    cardTitle: {
      color: 'rgba(255, 255, 255, 0.7)', 
      padding: 0,
    },
    administrarButton: {
      backgroundColor: '#fff',
      borderRadius: 10, 
      color: '#000', 
      padding: 10,
    },
  });
  
  

export default ZonasScreen;
