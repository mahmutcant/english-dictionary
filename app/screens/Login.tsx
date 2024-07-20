import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button, Alert, KeyboardAvoidingView, Dimensions, TouchableHighlight, Pressable } from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_AUTH, FIRESTORE_RT_DB } from '../../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { EyeIcon, FacebookIcon, GoogleIcon } from '../../Icons';
import { child, push, ref, set } from "firebase/database";
import AsyncStorage from '@react-native-async-storage/async-storage';
const screenWidth = Dimensions.get('window').width
const Login = () => {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [isPasswordOpen, setIsPasswordOpen] = useState(true)
    const auth = FIREBASE_AUTH;
    const db = FIRESTORE_RT_DB;
    const { alert } = Alert
    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            const userInfo = {
                email: email,
                password: password
            };
            await AsyncStorage.setItem("user-info", JSON.stringify(userInfo))
        } catch (error) {
            console.log(error);
            alert("Authorization Failed", "Email or password is incorrect")
        } finally {
            setLoading(false);
        }
    }
    
    const signUp = async () => {
        setLoading(true)
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            const newKey = push(child(ref(db), "users")).key;
            set(ref(db, 'users/' + newKey ), {
                username: "Mahmut",
                email: email
              }).then(() => console.log("data update")).catch((err) => console.log(err))
            console.log(response);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }
    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <Text style={styles.title}>Lets Sign you in</Text>
                <KeyboardAvoidingView behavior='padding'>
                    <TextInput cursorColor="#000" placeholderTextColor="#555454" style={styles.input}
                        placeholder='Email' autoCapitalize='none' onChangeText={(text) => setEmail(text)} value={email}></TextInput>
                    <View>
                        <TextInput cursorColor="#000"  placeholderTextColor="#555454" style={styles.input} secureTextEntry={isPasswordOpen}
                            placeholder='Password' autoCapitalize='none' onChangeText={(text) => setPassword(text)} value={password}></TextInput>
                        <TouchableHighlight underlayColor="#fff" onPress={() => setIsPasswordOpen(!isPasswordOpen)} style={styles.showPassword}><EyeIcon /></TouchableHighlight>
                    </View>
                    <TouchableHighlight underlayColor="transparent" style={styles.forgotPasswordContainer} onPress={() => console.log("bastın")}>
                        <Text style={styles.forgotPassword}>Forgot Password ?</Text>
                    </TouchableHighlight>
                    {loading ? <ActivityIndicator size={'large'} color={"#0000ff"} /> : <>
                        <Pressable style={styles.signIn} onPress={() => signIn()}><Text style={styles.signInText}>Sign in</Text></Pressable>
                    </>}
                </KeyboardAvoidingView>
                <View style={{alignItems:"center",flexDirection:"row",justifyContent:"center"}}>
                    <View style={{height:1,backgroundColor:"#000",width:(screenWidth / 2) - 50,marginHorizontal:20,marginTop:20}}></View>
                    <Text style={{marginTop:15,color:"#000", fontWeight:"bold",fontSize:20}}>or</Text>
                    <View style={{height:1,backgroundColor:"#000",width:(screenWidth / 2) - 50,marginHorizontal:20,marginTop:20}}></View>
                </View>
                <View style={{justifyContent:"space-evenly",flexDirection:"row",margin:30}}>
                    <GoogleIcon/>
                    <FacebookIcon/>
                </View>
                <View style={{alignItems:"center",flexDirection:"row",justifyContent:"center"}}>
                    <Text style={{fontSize:16}}>Don't have an account ? <Text style={{fontWeight:"bold"}}>Register Now</Text></Text>
                </View>
            </View>
        </View>
    );
};

export default Login

const styles = StyleSheet.create({
    title: {
        fontWeight: "bold",
        fontSize: 22,
        alignSelf: "center",
        marginBottom: 20
    },
    screen: {
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: "center"
    },
    container: {
        marginHorizontal: 20,
    },
    input: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderColor: "#8e8383",
        borderRadius: 5,
        padding: 10,
        width: "auto",
        backgroundColor: "#fff",
        marginBottom: 10,
        fontSize: 16
    },
    forgotPasswordContainer: {

        alignSelf: "flex-end",
    },
    forgotPassword: {
        fontSize: 16,
        color: "#000",
        fontWeight: "600",
        marginBottom: 20
    },
    signIn: {
        backgroundColor: "#4a3aff",
        alignItems: "center",
        borderRadius: 5
    },
    signInText: {
        fontSize: 18,
        fontWeight: '500',
        color: "#fff",
        padding: 18
    },
    showPassword: {
        position: "absolute",
        right: 0,
        margin: 20,
        backgroundColor: 'transparent'
    }
})