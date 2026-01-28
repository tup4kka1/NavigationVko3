import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { Button} from "react-native-paper";
import React from 'react';

function SecondScreen({ navigation}: NativeStackScreenProps<any, any>) {
  return (
    <View style={styles.container}>
      <Text>Second Screen !!!!!!!!!!</Text>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SecondScreen;