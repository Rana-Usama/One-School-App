import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
import InputField from './../components/common/InputField';
import MyAppButton from './../components/common/MyAppButton';
import LoadingModal from './../components/common/LoadingModal';

//config
import Colors from '../config/Colors';

export default function SignupScreen(props) {

    // Input fields
    const [indicator, showIndicator] = useState(false);

    const [inputField, SetInputField] = useState([
        {
            placeholder: "",
            text: "Username",
            value: "",
        },
        {
            placeholder: "",
            text: "Organization",
            value: "",
        },
        {
            placeholder: "",
            text: "Email",
            value: "",
        },
        {
            placeholder: "",
            text: "Password",
            value: "",
        },
        {
            placeholder: "",
            text: "Phone Number",
            value: "",
        },
    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };

    const handleSignup = () => {
        showIndicator(true);
        let tempfeilds = [...inputField];

        if (tempfeilds[0].value === "" || tempfeilds[1].value === "") {
            alert("Please fill all the feilds");
            showIndicator(false);
            return true;
        }
        props.navigation.navigate("LoginScreen")
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
                    Sign Up
                </Text>

                {/* <Image source={require('../../assets/images/su.png')} style={{ marginTop: RFPercentage(4), width: RFPercentage(18.1), height: RFPercentage(4.8) }} /> */}
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

                    {/* Submit Button */}
                    <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(7) }}>
                        <MyAppButton
                            title="Submit"
                            onPress={() => handleSignup()}
                            gradient={true}
                            bold={false}
                            borderColor={Colors.primary}
                            color={Colors.white}
                            fontSize={RFPercentage(2.1)}
                            borderRadius={RFPercentage(2)}
                            width={"94.5%"}
                        />
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
    },
})