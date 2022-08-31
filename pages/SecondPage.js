import { Text, View,Button } from 'react-native'
import React from 'react'
import { style1 } from '../components/styles'


const SecondPage = ({navigation}) => {
  return (
    <View style={style1.container}>
      <Text style={style1.heading}>This is The SecondPage</Text>
      <Button
      title='Go to FirstPage' 
      onPress={() => navigation.navigate('FirstPage')}
      />
       <Button
      title='Go to Third Page' 
      onPress={() => navigation.navigate('ThirdPage')}
      />
    </View>
  )
}

export default SecondPage