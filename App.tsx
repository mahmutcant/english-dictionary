import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from './app/screens/Login';
import Main from './app/screens/Main';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword, User } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';
import { ExamIcon, HomeIcon, ReportsIcon, SettingsIcon } from './Icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import EducationContext from './app/screens/EducationContext/EducationContext';
import MainPage from './app/screens/MainPage/MainPage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Platform, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ExamPage from './app/screens/ExamPage/ExamPage';
const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
function InsideLayout() {
  return (
    <Tab.Navigator barStyle={{ height: 80, backgroundColor: "#4A3AFF" }} sceneAnimationType='shifting' activeColor="#fff" inactiveColor='#fff' activeIndicatorStyle={{ height: 7, marginTop: 100, backgroundColor: "#D9D9D9" }}>
      <Tab.Screen name="Home" component={MainPage} options={{
        title: "Anasayfa",
        tabBarIcon: (() => {
          return <HomeIcon />
        })
      }} />
      <Tab.Screen name="Context" component={EducationContext} options={{
        title: "Eğitim İçeriği",

        tabBarIcon: (() => {
          return <ReportsIcon />
        })
      }} />
      <Tab.Screen name="Exam" component={ExamPage} options={{
        title: "Sınav",
        tabBarIcon: (() => {
          return <ExamIcon />
        })
      }} />
      <Tab.Screen name="Settings" component={Main} options={{
        title: "Ayarlar",
        tabBarIcon: (() => {
          return <SettingsIcon />
        })
      }} />
    </Tab.Navigator>
  )
}
export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const auth = FIREBASE_AUTH;
  interface LSInfo {
    email: string,
    password: string
}
  const redirectLogin = async() => {
    try {
        const userInfoString = await AsyncStorage.getItem("user-info");
        if (userInfoString !== null) {
          const lsInfo: LSInfo = JSON.parse(userInfoString);
          const lsEmail = lsInfo.email;
          const lsPassword = lsInfo.password;
          try{
            const response = await signInWithEmailAndPassword(auth,lsEmail,lsPassword);
          }catch(error) {
            console.error("hata : ", error)
          }
        }
      } catch (error) {
        console.error("Kullanıcı bilgileri alınamadı:", error);
      }
}
useEffect(() => {
    redirectLogin()
}, [])
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user)
    })
  }, [])
  return (
    <SafeAreaView style={{
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight! - 60 : 0
    }}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        {user ? (<Stack.Screen name='Inside' component={InsideLayout} options={{ headerShown: false }} />) : (
          <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
}