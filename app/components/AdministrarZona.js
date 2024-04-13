import React, {useState, useEffect} from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

const AdministrarZona = ({ route }) => {
  const { zona } = route.params || {};
  const [zonaData, setZonaData] = useState(null);
  const [accesosData, setAccesosData] = useState([]);

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

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{zonaData ? zonaData.nombre : 'Cargando...'}</Text>
        <Button style={styles.offButton} title="Apagar" onPress={handleApagar} />
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
    marginTop: 20, 
    marginBottom: 10, 
  },
  offButton:{
    padding:10,
    borderRadius: 5,

  },
  textRandom:{
    color:'rgba(255,255,255,0.7)'
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.7)',
  },
});

export default AdministrarZona;
