import React from 'react'
import {ImageBackground, StyleSheet, View, Image, Text} from 'react-native'
import AppButton from '../components/AppButton'
function WelcomeScreen(props){
    return(
        <ImageBackground blurRadius={3} style={styles.background} source={require('../assets/background.jpg')}>
           <View style={styles.taglineLogoContainer}>

            <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
           
           <Text style={styles.tagline}>Sell what you don't need</Text>

           </View>
           <View style={styles.buttonsContainer}>
            <AppButton title="login" color="primaryColor"/>
            <AppButton title="Register" color="secondaryColor"/>

           </View>

           


        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: "center"
    },
    buttonsContainer:{
        padding: 20,
        width: '100%'
    },
    logo: {
        width: 100,
        height: 100,
    },
    taglineLogoContainer: {
        position: "absolute",
        top: 70,
        alignItems: 'center'
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20
    }
})

export default WelcomeScreen