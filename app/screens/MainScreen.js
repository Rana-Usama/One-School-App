import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { AntDesign } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';
import { TextInput } from 'react-native-gesture-handler';

export default function MainScreen() {
    return (
        <Screen style={styles.screen}>

            {/* Nav */}
            <View style={{ justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center', height: RFPercentage(50), width: '100%', borderBottomLeftRadius: RFPercentage(6), borderBottomRightRadius: RFPercentage(6), backgroundColor: '#291380' }} >
                {/* Name and profile */}
                <View style={{ marginTop: RFPercentage(10), width: '90%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', alignSelf: 'center' }} >
                    <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }} >
                        <Text style={{ color: Colors.white, fontSize: RFPercentage(4.5), fontWeight: 'bold' }} >
                            Hello
                        </Text>
                        <Text style={{ color: Colors.white, fontSize: RFPercentage(6.5), fontWeight: 'bold', marginTop: RFPercentage(2) }} >
                            Alex Cane
                        </Text>
                    </View>

                    <TouchableOpacity activeOpacity={0.9} style={{ position: 'absolute', right: 0 }} >
                        <Image source={require('../../assets/images/f5.png')} style={{ width: RFPercentage(12), height: RFPercentage(12) }} />
                    </TouchableOpacity>
                </View>

                {/* Search input Field */}
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: RFPercentage(10), width: '90%', height: RFPercentage(12.5), backgroundColor: Colors.white, borderRadius: RFPercentage(3) }} >
                    <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', alignSelf: 'center' }} >
                        <AntDesign name="search1" style={{ fontSize: RFPercentage(4) }} color="#2B217F" />
                        <View style={{ marginLeft: RFPercentage(2.4), width: RFPercentage(0.2), height: RFPercentage(5), backgroundColor: '#2B217F' }} />
                        <TextInput placeholder='Serach your topic' placeholderTextColor={"#2B217F"} style={{ color: Colors.black, width: '80%', marginLeft: RFPercentage(2.4), fontSize: RFPercentage(3.2) }} />
                        <TouchableOpacity activeOpacity={0.8} style={{ position: 'absolute', right: 0 }} >
                            <Image source={require('../../assets/images/voice.png')} style={{ width: RFPercentage(3), height: RFPercentage(6) }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={{ marginTop: RFPercentage(5), width: '90%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', alignSelf: 'center' }} >
                <Text style={{ color: Colors.black, fontSize: RFPercentage(5.2), fontWeight: 'bold' }} >
                    Features
                </Text>
                <TouchableOpacity activeOpacity={0.8} style={{ position: 'absolute', right: 0 }} >
                    <Text style={{ color: Colors.black, fontSize: RFPercentage(3.4), fontWeight: 'bold' }} >
                        See All
                    </Text>
                </TouchableOpacity>
            </View>

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