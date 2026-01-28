import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button} from "react-native-paper";
import React from 'react';

function HomeScreen({ navigation}: NativeStackScreenProps<any, any>) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
}

//      <Button onPress={() => navigation.navigate("Second")}> To second </Button>
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomeScreen;