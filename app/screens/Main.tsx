import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native'
import { FIREBASE_AUTH } from '../../FirebaseConfig'
import AsyncStorage from '@react-native-async-storage/async-storage';

interface RouterProps {
    navigation: NavigationProp<any, any>
}
const logOut = async() => {
  AsyncStorage.clear();
  FIREBASE_AUTH.signOut()
}
const Main = ({navigation}: RouterProps) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text>Dear {FIREBASE_AUTH.currentUser?.email}</Text>
        <Button onPress={() => navigation.navigate('details')} title='Open Details'/>
        <Button onPress={() => logOut()} title='Logout'/>
    </View>
  )
}

export default Main