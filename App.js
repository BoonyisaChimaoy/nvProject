import { View, Text, Button, TextInput } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem, DrawerContent } from '@react-navigation/drawer';

function HomeScreen ({ navigation }) {
  return (
    <View style = {{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  )
}

function Feed ({ navigation }){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Feed Screen</Text>
    </View>
  )
}

function Article ({ navigation }){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Article Screen</Text>
    </View>
  )
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props}/>
      <DrawerItem label='Help' onPress={() => alert('Link to help')} />
    </DrawerContentScrollView>
  )
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 240,
        },
      }}
      drawerContent={(props) => <CustomDrawerContent{...props} />}
      >
        <Drawer.Screen name="Feed" component={Feed} />
        <Drawer.Screen name="Article" component={Article} />
        </Drawer.Navigator>
        );
      }


const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation>
        <Drawer.Screen name = "Home" component={HomeScreen}/>
        <Drawer.Screen name = "Notifications" component={Notifications} />
      </Drawer.Navigator>
    </NavigationContainer> 
  )
  
}

export default App;
  
