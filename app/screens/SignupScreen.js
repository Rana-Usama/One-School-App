import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react';
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
import InputField from './../components/common/InputField';
import MyAppButton from './../components/common/MyAppButton';

//config
import Colors from '../config/Colors';

export default function SignupScreen() {

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
    return (
        <Screen style={styles.screen}>

            {/* Heading */}
            <View style={{ width: '90%', justifyContent: 'flex-start', flexDirection: 'row', alignSelf: 'center' }} >
                <Text style={{ fontSize: RFPercentage(5), marginTop: RFPercentage(4), fontWeight: 'bold', color: "#291380" }} >
                    Sign Up
                </Text>
            </View>

            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    {/* Input field */}
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        {inputField.map((item, i) => (
                            <View key={i} style={{ marginTop: i == 0 ? RFPercentage(5) : RFPercentage(1.6) }} >
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(2), left: RFPercentage(1.1), marginBottom: RFPercentage(0.6) }}>
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
                            // onPress={() => handleLogin()}
                            gradient={true}
                            bold={false}
                            borderColor={Colors.primary}
                            color={Colors.white}
                            fontSize={RFPercentage(2.2)}
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
    }
})