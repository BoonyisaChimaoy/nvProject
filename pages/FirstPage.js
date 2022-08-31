import { View, Text, Button} from 'react-native'
import React from 'react'
import { style1 } from '../components/styles'

const FirstPage = ({navigation}) => {
  return (
    <View style={style1.container}>
      <Text style={style1.heading}>This is The FirstPage</Text>
      <Button
      title='Go to Second Page' 
      onPress={() => navigation.navigate('SecondPage')}
      />
       <Button
      title='Go to Third Page' 
      onPress={() => navigation.navigate('ThirdPage')}
      />
    </View>
  )
}

export default FirstPage