import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '../../features/home/screen'
import { UserDetailScreen } from '../../features/user/detail-screen'
import NewsDetailScreen from '../../../../apps/next/pages/latest-news/[id]'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { BluetoothScan } from 'app/features/bluetooth/bluetoothScan'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator<{
  home: undefined
  'user-detail': {
    id: string
  }
  'latest-news': {
    id: string
  }
}>()

export const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="user-detail"
        component={UserDetailScreen}
        options={{
          title: 'User',
        }}
      />
      <Stack.Screen
        name="latest-news"
        component={NewsDetailScreen}
        options={{
          title: 'News',
        }}
      />
    </Stack.Navigator>
  )
}
export function NativeNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeN"
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        component={StackNav}
      />
      <Tab.Screen
        name="BluetoothScan"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="bluetooth"
              color={color}
              size={size}
            />
          ),
        }}
        component={BluetoothScan}
      />
    </Tab.Navigator>
  )
}
