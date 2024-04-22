import React, {useState, useEffect} from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const AdministrarZona = ({ route }) => {
  const { zona } = route.params || {};
  const [zonaData, setZonaData] = useState(null);
  const [accesosData, setAccesosData] = useState([]);
  const navigation = useNavigation();


  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/zonas?ids=${zona}`)
      .then(response => response.json())
      .then(data => setZonaData(data.zonas[0]))
      .catch(error => console.error('Error:', error));
  }, [zona]);
  const handleApagar = () => {
  };
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/accesos?idZona=${zona}`)
      .then(response => response.json())
      .then(data => setAccesosData(data.accesos))
      .catch(error => console.error('Error:', error));
  }, [zona]);

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
        <Ionicons style={styles.icon} name="arrow-back" size={28} color="white" />
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{zonaData ? zonaData.nombre : 'Cargando...'}</Text>
        <Button style={styles.offButton} title="Apagar" onPress={handleApagar} />
      </View>

      <View style={styles.row}>
        <Text style={styles.cell}>ID</Text>
        <Text style={styles.cell}>Fecha</Text>
        <Text style={styles.cell}>ID de la Zona</Text>
      </View>

      <FlatList
        data={accesosData}
        keyExtractor={item => item._id.toString()}
        renderItem={({ item }) => {
          const fecha = new Date(parseInt(item.fecha.$date.$numberLong));
          return (
            <View style={styles.row}>
              <Text style={styles.cell}>{item._id}</Text>
              <Text style={styles.cell}>{fecha.toLocaleString()}</Text>
              <Text style={styles.cell}>{item._idZona}</Text>
            </View>
          );
        }}
      />

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hsl(228, 39%, 23%)',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    color:'rgba(255,255,255,0.9)',
  },
  header: {
    width: '80%', 
    alignSelf: 'center', 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40, 
    marginBottom: 30, 
  },
  offButton:{
    padding:10,
    borderRadius: 5,

  },
  textRandom:{
    color:'rgba(255,255,255,0.7)'
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.7)',
  },
});

export default AdministrarZona;

