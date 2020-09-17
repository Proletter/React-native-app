import React from 'react';
import  {StyleSheet, Image, View} from 'react-native'
import colors from '../config/colors'
import AppText from './AppText';
const Card = ({title, subTitle, image}) => {
    return (
        <View style={styles.card}>
            <Image  style={styles.image} source={image}/>
            <View styles={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: "hidden"
    },
    image: {
        width: '100%',
        height: 200
    },
    detailsContainer: {
        padding: 20,
        // justifyContent: "flex-start"
    },
    title:{
        marginBottom: 7
    },
    subTitle:{
        color: colors.secondaryColor,
        fontWeight: "bold"
    }
})
export default Card;
