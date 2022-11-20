import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

//components
import Screen from './../components/Screen';

//config
import Colors from '../config/Colors';

const { height } = Dimensions.get("window");

export default function DetailScreen(props) {

    const [pickerModel, setPickerModel] = useState(false);

    return (
        <Screen style={styles.screen}>
            <View style={{ marginTop: RFPercentage(3.1), width: '90%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', alignSelf: 'center' }} >
                <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate("MainScreen")} >
                    <Ionicons name="ios-arrow-back-outline" style={{ fontSize: RFPercentage(3.4) }} color={"black"} />
                </TouchableOpacity>
                <Text style={{ marginLeft: RFPercentage(1.2), color: Colors.black, fontSize: RFPercentage(2.7), fontWeight: 'bold' }} >
                    Detail
                </Text>
            </View>

            {/* Cart */}
            <View style={{ marginTop: RFPercentage(20), width: RFPercentage(44), height: RFPercentage(35), backgroundColor: Colors.white, borderRadius: RFPercentage(2), justifyContent: 'center', alignItems: 'center' }} >
                <View style={{ position: 'absolute', right: RFPercentage(2), top: RFPercentage(2), justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} >
                    <TouchableOpacity activeOpacity={0.8} onPress={() => setPickerModel(true)} >
                        <AntDesign name="edit" style={{ fontSize: RFPercentage(2.8) }} color="#2B217F" />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} >
                        <MaterialIcons name="delete" style={{ marginLeft: RFPercentage(1.4), fontSize: RFPercentage(2.8) }} color="#2B217F" />
                    </TouchableOpacity>
                </View>
                <Image source={require('../../assets/images/g1.png')} style={{ width: RFPercentage(14), height: RFPercentage(14) }} />
                <Text style={{ marginTop: RFPercentage(2), color: "#2B217F", fontSize: RFPercentage(2.8), fontWeight: 'bold' }} >
                    Students
                </Text>
            </View>


            {/* Model */}
            <Modal visible={pickerModel} transparent={true}>
                <View style={styles.modalContainer} >
                    <View style={styles.mdalSubContainer} >
                        <Image source={require('../../assets/images/dl.png')} style={{ marginTop: RFPercentage(6), width: RFPercentage(8), height: RFPercentage(8) }} />

                        <Text style={{ marginTop: RFPercentage(3), color: '#EC459F', fontSize: RFPercentage(2.4), fontWeight: 'bold' }} >
                            Attention!
                        </Text>

                        <View style={{ marginTop: RFPercentage(2), width: '100%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                            <Text style={{ opacity: 0.7, color: '#868686', fontSize: RFPercentage(2), fontWeight: 'bold' }} >
                                Are you sure you want to delete
                            </Text>
                            <Text style={{ opacity: 0.7, color: '#868686', fontSize: RFPercentage(2), fontWeight: 'bold', marginTop: RFPercentage(0.8) }} >
                                this Feature ?
                            </Text>
                        </View>

                        <View style={{ marginTop: RFPercentage(5), flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                            <TouchableOpacity onPress={() => props.navigation.navigate("MainScreen")} activeOpacity={0.8} style={{ backgroundColor: '#EC459F', width: RFPercentage(18), height: RFPercentage(5.5), borderRadius: RFPercentage(1.1), justifyContent: 'center', alignItems: 'center' }} >
                                <Text style={{ fontSize: RFPercentage(1.9), color: Colors.white }} >
                                    Yes
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setPickerModel(false)} activeOpacity={0.8} style={{ marginLeft: RFPercentage(2), backgroundColor: '#DFDEEC', width: RFPercentage(18), height: RFPercentage(5.5), borderRadius: RFPercentage(1.1), justifyContent: 'center', alignItems: 'center' }} >
                                <Text style={{ fontSize: RFPercentage(1.9), color: Colors.black }} >
                                    No
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

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
    modalContainer: {
        justifyContent: "center",
        flex: 1,
        height: height,
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.6)"
    },
    mdalSubContainer: {
        alignSelf: 'center',
        alignItems: "center",
        justifyContent: 'flex-start',
        borderRadius: RFPercentage(2),
        backgroundColor: Colors.white,
        width: "90%",
        height: RFPercentage(42)
    }
})