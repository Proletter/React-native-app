import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../config/colors'
const AppButton = ({title, onPress, color="primaryColor"}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, {backgroundColor: colors[color]}]}>
            <Text style={styles.text}>{title}</Text>
        
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primaryColor,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
        marginVertical: 10
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})
export default AppButton;
