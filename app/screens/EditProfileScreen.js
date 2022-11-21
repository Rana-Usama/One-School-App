import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

//components
import Screen from './../components/Screen';
import InputField from './../components/common/InputField';
import LoadingModal from './../components/common/LoadingModal';
import MyAppButton from './../components/common/MyAppButton';

//config
import Colors from '../config/Colors';

export default function EditProfileScreen(props) {

    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    // Input fields
    const [indicator, showIndicator] = useState(false);

    const [inputField, SetInputField] = useState([
        {
            placeholder: "Edit Password",
            text: "Name",
            value: "",
        },
        {
            placeholder: "Name",
            text: "Last Name",
            value: "",
        },
        {
            placeholder: "Reset Profile",
            text: "Name",
            value: "",
        },
        {
            placeholder: "Reset Profile",
            text: "Name",
            value: "",
        },

    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };

    const handleUpdate = () => {
        showIndicator(true);
        let tempfeilds = [...inputField];

        if (tempfeilds[0].value === "" || tempfeilds[1].value === "" || tempfeilds[2].value === "" || tempfeilds[3].value === "") {
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
            <View style={{ marginTop: RFPercentage(3.1), width: '90%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', alignSelf: 'center' }} >
                <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.goBack()} >
                    <Ionicons name="ios-arrow-back-outline" style={{ fontSize: RFPercentage(3.4) }} color={"black"} />
                </TouchableOpacity>
                <Text style={{ marginLeft: RFPercentage(1.2), color: Colors.black, fontSize: RFPercentage(2.7), fontWeight: 'bold' }} >
                    Edit Profile
                </Text>
            </View>

            {/* Image */}
            <TouchableOpacity onPress={pickImage} activeOpacity={0.7} style={styles.profileImageContainer}>
                {image ?
                    <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
                    :
                    <ImageBackground style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }} source={require('../../assets/images/f5.png')} >
                        {/* empty view for background opacity */}
                        <View style={{ borderRadius: RFPercentage(3), position: 'absolute', top: 0, right: 0, left: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.4)" }} />
                        <Image style={{ width: RFPercentage(4), height: RFPercentage(4) }} source={require('../../assets/images/plus.png')} />
                    </ImageBackground>
                }
            </TouchableOpacity>

            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    {/* input fields */}
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        {inputField.map((item, i) => (
                            <View key={i} style={{ marginTop: i == 0 ? RFPercentage(3) : RFPercentage(1.6) }} >
                                <Text style={{ color: '#868686', fontSize: RFPercentage(1.9), left: RFPercentage(1.1), marginBottom: RFPercentage(0.6), }}>
                                    {item.text}
                                </Text>
                                <InputField
                                    placeholder={item.placeholder}
                                    placeholderColor={'#868686'}
                                    height={RFPercentage(7)}
                                    backgroundColor={Colors.white}
                                    borderRadius={RFPercentage(1.5)}
                                    color={'#868686'}
                                    fontSize={RFPercentage(1.9)}
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
                            title="Update"
                            onPress={() => handleUpdate()}
                            gradient={true}
                            opacity={true}
                            bold={false}
                            color={Colors.white}
                            fontSize={RFPercentage(2.1)}
                            borderRadius={RFPercentage(2)}
                            width={"94.5%"}
                        />
                    </View>

                </View>
                <View style={{ marginBottom: RFPercentage(8) }} />
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
    editProfileText: {
        fontSize: RFPercentage(2.5),
        fontWeight: '700',
        color: Colors.black
    },
    profileImageContainer: {
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: RFPercentage(5),
        backgroundColor: Colors.twoButtons,
        width: RFPercentage(19),
        height: RFPercentage(19),
        borderRadius: RFPercentage(20)
    },
})