import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import Colors from "../../colors";
import Home from "../home"
export default function Login({ navigation, state, dispatch }) {
    const [user, setUser] = React.useState({
        login: "", password: ""
    })
    if (false) {
        console.log("from login : ")
        console.log(state.user)
        return <Home state={state} navigation={navigation} dispatch={dispatch} />
    }
    else {
        return (
            <View style={styles.container}>
                <Image
                    source={{
                        uri: 'https://media.giphy.com/media/YkJIuqnI0eNcw5xqUR/giphy.gif',
                    }}
                    style={styles.logo}
                />
                <Text style={{ marginTop: 20, color: "white", textAlign: "center" }}>Login and get some popcorn 🍿</Text>
                <TextInput
                    style={[styles.input, { marginTop: 30 }]}
                    placeholder="Login"
                    onChangeText={(text) => setUser({ ...user, login: text })}
                />
                <TextInput
                    style={[styles.input, { marginTop: 10 }]}
                    placeholder="Password"
                    onChangeText={(text) => setUser({ ...user, password: text })}
                    secureTextEntry={true}
                />
                <TouchableOpacity
                    style={styles.btnContainer} onPress={() => {
                        if (user.login === "gregoire" && user.password === "aaa") {
                            dispatch({ type: "SIGN_IN", user: user })

                            navigation.navigate("Home")
                        } else alert("Wrong information !")
                    }}>
                    <Text style={{ color: "white", padding: 10, textAlign: "center", fontWeight: "bold" }}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                    <Text style={{ marginTop: 20, color: "white", textAlign: "center" }}>Don't have an account ?</Text>
                </TouchableOpacity>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        textAlign: 'center',
        backgroundColor: Colors.primary_blue,
    },
    logo: {
        width: 80,
        height: 140,
        marginTop: '30%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    btnContainer: {
        width: "40%",
        height: 40,
        backgroundColor: '#12448a',
        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 'auto', borderRadius: 100
    },
    input: {
        borderColor: 'white',
        width: '80%',
        height: 50,
        color: 'white',
        backgroundColor: '#918f89',
        //outline: 'none',
        borderRadius: 100,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 5
    }
});

