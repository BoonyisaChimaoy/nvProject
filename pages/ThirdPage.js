import {Text, View,Button } from 'react-native'
import React from 'react'
import { style1 } from '../components/styles'

const ThirdPage = ({navigation}) => {
  return (
    <View style={style1 .container}>
    <Text style={style1 .heading}>This is The ThirdPage</Text>
    <Button
    title='Go to FirstPage' 
    onPress={() => navigation.navigate('FirstPage')}
    />
     <Button
      title='Go to Second Page' 
      onPress={() => navigation.navigate('SecondPage')}
      />
  </View>
  )
}

export default ThirdPage