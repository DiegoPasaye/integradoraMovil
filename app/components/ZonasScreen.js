import { View, Text, Button, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native'; 
import { useState, React, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';

const ZonasScreen = ({ route }) => {
  const { usuario, zonas } = route.params;
  const navigation = useNavigation();
  const [zonas2, setZonas2] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/zonas?ids=${zonas.join(',')}`)
      .then(response => response.json())
      .then(data => setZonas2(data.zonas))
      .catch(error => console.error('Error:', error));
  }, [zonas]);
  

  const handleAdministrar = (zona) => {
    navigation.navigate('AdministrarZona', { zona: zona.id });
  };
  const handleUserProfile = () => {
    console.log(usuario)
    navigation.navigate('userProfileScreen', { usuario: usuario });
  };  
  

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Zonas</Text>
          <Image source={require('../../assets/images/codev.png')} style={styles.headerImage} />
          <TouchableOpacity onPress={handleUserProfile}>
          <Ionicons name="person-circle-outline" size={35} color="white" />
          </TouchableOpacity>
        </View>

        {zonas.map((zonaId, index) => {
        const zona = zonas2.find(z => z.id === zonaId);
        return (
          <Card key={index} containerStyle={styles.cardContainer}>
            <Card.Title style={styles.cardTitle}>{zona ? zona.nombre : 'Zona no encontrada'}</Card.Title>
            <TouchableOpacity onPress={() => handleAdministrar(zonaId)} style={styles.administrarButton}>
              <Text style={styles.administrarText}>Administrar</Text>
            </TouchableOpacity>
          </Card>
        );
      })}


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
    marginTop:30
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    padding:0,
    color: 'rgba(255, 255, 255, 0.7)', 
  },
  headerImage: {
    width: 90,
    height: 90,
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
    textAlign:'center'
  },
  administrarText: {
    textAlign:'center'
  },
});
  
  

export default ZonasScreen;
