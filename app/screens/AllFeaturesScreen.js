import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';

export default function AllFeaturesScreen(props) {

    const cartData = [
        {
            image1Source: require('../../assets/images/g1.png'),
            title1: 'Students',
            image2Source: require('../../assets/images/g2.png'),
            title2: 'Classroom',
        },
        {
            image1Source: require('../../assets/images/g3.png'),
            title1: 'Grade',
            image2Source: require('../../assets/images/g4.png'),
            title2: 'Subjects',
        },
        {
            image1Source: require('../../assets/images/g5.png'),
            title1: 'Department',
            image2Source: require('../../assets/images/g6.png'),
            title2: 'Employee',
        },
        {
            image1Source: require('../../assets/images/g7.png'),
            title1: 'Balance',
            image2Source: require('../../assets/images/g8.png'),
            title2: 'Amount',
        },
        {
            image1Source: require('../../assets/images/g3.png'),
            title1: 'Grade',
            image2Source: require('../../assets/images/g4.png'),
            title2: 'Subjects',
        },
        {
            image1Source: require('../../assets/images/g7.png'),
            title1: 'Balance',
            image2Source: require('../../assets/images/g8.png'),
            title2: 'Amount',
        },

    ]

    return (
        <Screen style={styles.screen}>

            <View style={{ marginTop: RFPercentage(3.1), width: '90%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', alignSelf: 'center' }} >

                <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate("MainScreen")} >
                    <Ionicons name="ios-arrow-back-outline" style={{ fontSize: RFPercentage(3.4) }} color={"black"} />
                </TouchableOpacity>
                <Text style={{ marginLeft: RFPercentage(1.2), color: Colors.black, fontSize: RFPercentage(2.7), fontWeight: 'bold' }} >
                    Features
                </Text>
            </View>

            {/* Carts */}
            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    {cartData.map((item, i) => (
                        <View key={i} style={{ marginTop: i == 0 ? RFPercentage(3) : RFPercentage(2.5), width: '90%', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center', flexDirection: 'row' }} >
                            <TouchableOpacity activeOpacity={0.8} style={{ width: '48%', height: RFPercentage(18), backgroundColor: Colors.white, borderRadius: RFPercentage(3), justifyContent: 'center', alignItems: 'center' }} >
                                <Image source={item.image1Source} style={{ width: RFPercentage(10), height: RFPercentage(10) }} />
                                <Text style={{ marginTop: RFPercentage(2), color: "#2B217F", fontSize: RFPercentage(2), fontWeight: 'bold' }} >
                                    {item.title1}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8} style={{ position: 'absolute', right: 0, width: '48%', height: RFPercentage(18), backgroundColor: Colors.white, borderRadius: RFPercentage(3), justifyContent: 'center', alignItems: 'center' }} >
                                <Image source={item.image2Source} style={{ width: RFPercentage(10), height: RFPercentage(10) }} />
                                <Text style={{ marginTop: RFPercentage(2), color: "#2B217F", fontSize: RFPercentage(2), fontWeight: 'bold' }} >
                                    {item.title2}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
                <View style={{ marginBottom: RFPercentage(6) }} />
            </ScrollView>

        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: '#EAE9F2'
    },
})