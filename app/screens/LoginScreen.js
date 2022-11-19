import { View, Text, StyleSheet, ScrollView, Platform, Image } from 'react-native'
import React, { useState } from 'react';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native-gesture-handler';

//components
import Screen from './../components/Screen';
import InputField from './../components/common/InputField';
import MyAppButton from './../components/common/MyAppButton';
import LoadingModal from './../components/common/LoadingModal';

//config
import Colors from '../config/Colors';

export default function LoginScreen(props) {

    // Input fields
    const [indicator, showIndicator] = useState(false);

    const [inputField, SetInputField] = useState([
        {
            placeholder: "",
            text: "Email Address",
            value: "",
        },
        {
            placeholder: "",
            text: "Password",
            value: "",
        }
    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };

    const handleLogin = () => {
        showIndicator(true);
        let tempfeilds = [...inputField];

        if (tempfeilds[0].value === "" || tempfeilds[1].value === "") {
            alert("Please fill all the feilds");
            showIndicator(false);
            return true;
        }

        try {
            // API INTEGRATION WILL COME HERE
        } catch (error) {
            alert("Error");
        }

        showIndicator(false);
    };
    return (
        <Screen style={styles.screen}>
            <LoadingModal show={indicator} />

            {/* Heading */}
            <View style={{ width: '90%', justifyContent: 'flex-start', flexDirection: 'row', alignSelf: 'center' }} >
                <Text style={{ fontSize: RFPercentage(5), marginTop: RFPercentage(4), fontWeight: 'bold', color: "#EC459F" }} >
                    Login
                </Text>
            </View>

            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    {/* Input field */}
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        {inputField.map((item, i) => (
                            <View key={i} style={{ marginTop: i == 0 ? RFPercentage(5) : RFPercentage(1.6) }} >
                                <Text style={{ color: '#424649', fontSize: RFPercentage(1.9), left: RFPercentage(1.1), marginBottom: RFPercentage(0.6), }}>
                                    {item.text}
                                </Text>
                                <InputField
                                    placeholder={item.placeholder}
                                    placeholderColor={Colors.white}
                                    height={RFPercentage(7)}
                                    backgroundColor={Colors.blue}
                                    borderWidth={RFPercentage(0.1)}
                                    borderColor={"#2B217F"}
                                    borderRadius={RFPercentage(2)}
                                    color={Colors.black}
                                    fontSize={RFPercentage(2)}
                                    handleFeild={(text) => handleChange(text, i)}
                                    value={item.value}
                                    width={"95.5%"}
                                />
                            </View>
                        ))}
                    </View>

                    <View style={{ marginTop: RFPercentage(1), width: '90%', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', alignSelf: 'center' }} >
                        <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate("ForgetScreen")} >
                            <Text style={{ color: '#2B217F', fontWeight: Platform.OS == 'android' ? 'bold' : '600', }} >
                                Forgot Password?
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Submit Button */}
                    <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(7) }}>
                        <MyAppButton
                            title="Login"
                            onPress={() => handleLogin()}
                            gradient={true}
                            bold={false}
                            borderColor={Colors.primary}
                            color={Colors.white}
                            fontSize={RFPercentage(2.1)}
                            borderRadius={RFPercentage(2)}
                            width={"94.5%"}
                        />
                    </View>

                    {/* Social Media Saperation Line */}
                    <View style={{ marginTop: RFPercentage(4), width: '90%', flexDirection: 'row', alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }} >
                        <View style={{ width: '30%', height: RFPercentage(0.1), backgroundColor: Colors.black, marginRight: RFPercentage(2) }} />
                        <Text style={{ color: Colors.black, fontSize: RFPercentage(1.9) }} >
                            Continue With
                        </Text>
                        <View style={{ width: '30%', height: RFPercentage(0.1), backgroundColor: Colors.black, marginLeft: RFPercentage(2) }} />
                    </View>

                    {/* Logos links */}
                    <View style={{ marginTop: RFPercentage(3), width: '90%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} >
                        <TouchableOpacity activeOpacity={0.8} >
                            <Image source={require('../../assets/images/gg.png')} style={{ width: RFPercentage(3.7), height: RFPercentage(3.7) }} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={{ marginLeft: RFPercentage(2.5) }} >
                            <Image source={require('../../assets/images/fb.png')} style={{ width: RFPercentage(3.7), height: RFPercentage(3.7) }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: Colors.white
    }
})