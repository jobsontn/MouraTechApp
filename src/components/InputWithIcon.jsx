import React from "react";
import { View, TextInput, StyleSheet } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';

function InputWithIcon(props) {
    const { icon, placeholder, type, password } = props;

    return (
        <View style={styles.Container}>
            <Icon name={icon} size={30} color="#00247d66" />
            <TextInput style={styles.Input}
                placeholder={placeholder}
                placeholderTextColor="#00247d66"
                keyboardType={type}
                secureTextEntry={password}
                spellCheck={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: "#ffffff",
        overflow: "hidden",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        height: 50,
        width: "80%",
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
    },
    Input: {
        backgroundColor: "#ffffff",
        marginLeft: 5,
        flexGrow: 1,
        flexShrink: 1,
        height: 40,
        color: "#000",
    }
});

export default InputWithIcon;