import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
import MyAppButton from './../components/common/MyAppButton';

//config
import Colors from '../config/Colors';

const { height } = Dimensions.get("window");

export default function ProfileScreen(props) {

    const [pickerModel, setPickerModel] = useState(false);

    return (
        <Screen style={styles.screen}>

            {/* profile */}
            <View style={{ marginTop: RFPercentage(6), justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                <View style={{ backgroundColor: Colors.white, justifyContent: 'center', alignItems: 'center', width: RFPercentage(15), height: RFPercentage(15), borderRadius: RFPercentage(20) }} >
                    <TouchableOpacity activeOpacity={0.8} >
                        <Image source={require('../../assets/images/f5.png')} style={{ width: RFPercentage(14), height: RFPercentage(14) }} />
                    </TouchableOpacity>
                </View>
                <Text style={{ color: Colors.black, fontSize: RFPercentage(2.6), fontWeight: 'bold', marginTop: RFPercentage(3) }} >
                    Zeeshan Ali
                </Text>
            </View>

            {/* Buttons */}
            <TouchableOpacity onPress={() => props.navigation.navigate("EditProfileScreen")} style={{ marginTop: RFPercentage(5), width: '90%', height: RFPercentage(8), borderRadius: RFPercentage(1.6), backgroundColor: Colors.white, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }} >
                <Text style={{ marginLeft: RFPercentage(2), color: '#000', fontWeight: 'bold', fontSize: RFPercentage(2.2) }} >
                    Edit Profile
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: RFPercentage(3), width: '90%', height: RFPercentage(8), borderRadius: RFPercentage(1.6), backgroundColor: Colors.white, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }} >
                <Text style={{ marginLeft: RFPercentage(2), color: '#000', fontWeight: 'bold', fontSize: RFPercentage(2.2) }} >
                    Reset Password
                </Text>
            </TouchableOpacity>

            {/* Submit Button */}
            <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(7) }}>
                <MyAppButton
                    title="Log out"
                    onPress={() => setPickerModel(true)}
                    gradient={true}
                    opacity={true}
                    bold={false}
                    color={Colors.white}
                    fontSize={RFPercentage(2.1)}
                    borderRadius={RFPercentage(2)}
                    width={"94.5%"}
                />
            </View>


            {/* Model */}
            <Modal visible={pickerModel} transparent={true}>
                <View style={styles.modalContainer} >
                    <View style={styles.mdalSubContainer} >

                        <View style={{ marginTop: RFPercentage(2), justifyContent: 'center', alignItems: 'center', backgroundColor: '#F9F9F9', borderRadius: RFPercentage(20), width: RFPercentage(12), height: RFPercentage(12) }} >
                            <Image source={require('../../assets/images/lg.png')} style={{ width: RFPercentage(4), height: RFPercentage(5) }} />
                        </View>

                        <Text style={{ marginTop: RFPercentage(3), color: '#000', fontSize: RFPercentage(2.4), fontWeight: 'bold' }} >
                            Logout!
                        </Text>

                        <View style={{ marginTop: RFPercentage(2), width: '100%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                            <Text style={{ opacity: 0.7, color: '#868686', fontSize: RFPercentage(2), fontWeight: 'bold' }} >
                                Are you sure you want to
                            </Text>
                            <Text style={{ opacity: 0.7, color: '#868686', fontSize: RFPercentage(2), fontWeight: 'bold', marginTop: RFPercentage(0.8) }} >
                                Logout?
                            </Text>
                        </View>

                        <View style={{ marginTop: RFPercentage(5), flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                            <TouchableOpacity onPress={() => { props.navigation.navigate("LoginScreen"), setPickerModel(false) }} activeOpacity={0.8} style={{ backgroundColor: '#2B217F', width: RFPercentage(18), height: RFPercentage(5.5), borderRadius: RFPercentage(1.1), justifyContent: 'center', alignItems: 'center' }} >
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