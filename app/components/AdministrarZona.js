import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AdministrarZona = ({ route }) => {
  const { zona } = route.params || {};

  const handleApagar = () => {
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{zona}</Text>
        <Button title="Apagar" onPress={handleApagar} />
      </View>

      {/* Contenido */}
      <Text style={styles.textRandom}>Tabla de la base de datos con su CRUD</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hsl(228, 39%, 23%)',
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
