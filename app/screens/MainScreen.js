import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { AntDesign } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';

export default function MainScreen(props) {

    const cartData = [
        {
            image1Source: require('../../assets/images/g1.png'),
            cart1OnPress: "DetailScreen",
            title1: 'Students',
            image2Source: require('../../assets/images/g2.png'),
            cart2OnPress: "DetailScreen",
            title2: 'Classroom',
        },
        {
            image1Source: require('../../assets/images/g3.png'),
            cart1OnPress: "DetailScreen",
            title1: 'Grade',
            image2Source: require('../../assets/images/g4.png'),
            cart2OnPress: "DetailScreen",
            title2: 'Subjects',
        },
        {
            image1Source: require('../../assets/images/g5.png'),
            cart1OnPress: "DetailScreen",
            title1: 'Department',
            image2Source: require('../../assets/images/g6.png'),
            cart2OnPress: "DetailScreen",
            title2: 'Employee',
        },
        {
            image1Source: require('../../assets/images/g7.png'),
            cart1OnPress: "DetailScreen",
            title1: 'Balance',
            image2Source: require('../../assets/images/g8.png'),
            cart2OnPress: "DetailScreen",
            title2: 'Amount',
        },

    ]

    return (
        <Screen style={styles.screen}>

            {/* Nav */}
            <View style={{ justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center', height: RFPercentage(32), width: '100%', borderBottomLeftRadius: RFPercentage(4), borderBottomRightRadius: RFPercentage(4), backgroundColor: '#291380' }} >
                {/* Name and profile */}
                <View style={{ marginTop: RFPercentage(6), width: '90%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', alignSelf: 'center' }} >
                    <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }} >
                        <Text style={{ color: Colors.white, fontSize: RFPercentage(2.2), fontWeight: 'bold' }} >
                            Hello
                        </Text>
                        <Text style={{ color: Colors.white, fontSize: RFPercentage(3.3), fontWeight: 'bold', marginTop: RFPercentage(1.7) }} >
                            Alex Cane
                        </Text>
                    </View>

                    <TouchableOpacity activeOpacity={0.9} style={{ position: 'absolute', right: 0 }} >
                        <Image source={require('../../assets/images/f5.png')} style={{ width: RFPercentage(6.5), height: RFPercentage(6.5) }} />
                    </TouchableOpacity>
                </View>

                {/* Search input Field */}
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: RFPercentage(5.5), width: '90%', height: RFPercentage(7.2), backgroundColor: Colors.white, borderRadius: RFPercentage(1.8) }} >
                    <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} >
                        <AntDesign name="search1" style={{ fontSize: RFPercentage(2.6) }} color="#2B217F" />
                        <View style={{ marginLeft: RFPercentage(2.4), width: RFPercentage(0.1), height: RFPercentage(4), backgroundColor: '#2B217F' }} />
                        <TextInput placeholder='Serach your topic' placeholderTextColor={"#2B217F"} style={{ color: Colors.black, width: '80%', marginLeft: RFPercentage(2.4), fontSize: RFPercentage(1.8) }} />
                        <TouchableOpacity activeOpacity={0.8} style={{ position: 'absolute', right: 0 }} >
                            <Image source={require('../../assets/images/voice.png')} style={{ width: RFPercentage(2), height: RFPercentage(3.5) }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={{ marginTop: RFPercentage(3.1), width: '90%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', alignSelf: 'center' }} >
                <Text style={{ color: Colors.black, fontSize: RFPercentage(2.7), fontWeight: 'bold' }} >
                    Features
                </Text>
                <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate("AllFeaturesScreen")} style={{ position: 'absolute', right: 0 }} >
                    <Text style={{ color: Colors.black, fontSize: RFPercentage(1.8), fontWeight: 'bold' }} >
                        See All
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Carts */}
            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    {cartData.map((item, i) => (
                        <View key={i} style={{ marginTop: i == 0 ? RFPercentage(3) : RFPercentage(2.5), width: '90%', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center', flexDirection: 'row' }} >
                            <TouchableOpacity onPress={() => props.navigation.navigate(item.cart1OnPress)} activeOpacity={0.8} style={{ width: '48%', height: RFPercentage(18), backgroundColor: Colors.white, borderRadius: RFPercentage(3), justifyContent: 'center', alignItems: 'center' }} >
                                <Image source={item.image1Source} style={{ width: RFPercentage(10), height: RFPercentage(10) }} />
                                <Text style={{ marginTop: RFPercentage(2), color: "#2B217F", fontSize: RFPercentage(2), fontWeight: 'bold' }} >
                                    {item.title1}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.navigation.navigate(item.cart2OnPress)} activeOpacity={0.8} style={{ position: 'absolute', right: 0, width: '48%', height: RFPercentage(18), backgroundColor: Colors.white, borderRadius: RFPercentage(3), justifyContent: 'center', alignItems: 'center' }} >
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