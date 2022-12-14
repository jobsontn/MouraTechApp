import React from "react";

import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import InputWithIcon from "../components/InputWithIcon";


function LoginScreen({ navigation }) {
    return (
        <View style={styles.App}>
            <View style={styles.Header}>
                <Image style={styles.Logo} source={require("../img/logo.png")}/>
                <Image style={styles.Title} source={require("../img/mouratech.png")}/>
            </View>
            <View style={styles.Body}>
                <Text style={styles.h2}>Entre com sua conta</Text>
                <InputWithIcon icon="envelope" placeholder="E-mail" type="email-address" password={false} />
                <InputWithIcon icon="lock" placeholder="Senha" type="default"  password={true}/>
                <TouchableOpacity>
                    <Text style={styles.link}>Esqueceu sua senha?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonOK}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonGoogle}>
                    <Text style={styles.buttonText}>Entrar com o google</Text>
                </TouchableOpacity>
                <Text style={styles.h3}>Não possui cadastro?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.buttonOKOutline}>
                    <Text style={styles.buttonTextBlue}>Crie uma nova conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    App: {
        backgroundColor: "#ffffff",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    Header: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 30,
    },
    Body: {
        backgroundColor: "#00247d66",
        width: "100%",
        alignItems: "center",
        flexGrow: 1,
        justifyContent: "flex-start",
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },
    Logo: {
        width: 100,
        height: 100,
    },
    Title: {
        height: 60,
        width: 260,
        resizeMode: "contain",
    },
    h2: {
        margin: 10,
        color: "black",
        fontWeight: "bold",
        fontSize: 20,
    },
    h3: {
        margin: 10,
        color: "black",
        fontWeight: "bold",
        fontSize: 18,
    },
    link: {
        margin: 10,
        color: "#00247d",
        fontWeight: "bold",
        fontSize: 14,
    },
    buttonOK: {
        backgroundColor: "#00247d",
        borderRadius: 10,
        marginTop: 10,
        height: 50,
        width: "80%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonGoogle: {
        backgroundColor: "#cf4332",
        borderRadius: 10,
        marginTop: 10,
        height: 50,
        width: "80%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 20,
    },
    buttonOKOutline: {
        borderColor: "#00247d",
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10,
        height: 50,
        width: "80%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonTextBlue: {
        color: "#00247d",
        fontSize: 20,
    }
});

export default LoginScreen;