import { View, Text } from 'react-native'
import React from 'react'
import Search from '../Search/Search'

const MainPage = () => {
  return (
    <View style={{flex:1,alignItems:"center",backgroundColor:"#fff"}}>
      <Search/>
    </View>
  )
}

export default MainPage