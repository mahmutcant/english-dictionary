import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native'
import { FIREBASE_AUTH } from '../../FirebaseConfig'

interface RouterProps {
    navigation: NavigationProp<any, any>
}
const Main = ({navigation}: RouterProps) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text>Dear {FIREBASE_AUTH.currentUser?.email}</Text>
        <Button onPress={() => navigation.navigate('details')} title='Open Details'/>
        <Button onPress={() => FIREBASE_AUTH.signOut()} title='Logout'/>
    </View>
  )
}

export default Main