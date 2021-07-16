import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { Instance } from "../../../services";
import Colors from "../../../colors";

export default function SignUp() {
    const createUser = () => {
        Instance.post("/addUser", {

        }).then(res => {

        }).catch(ex => console.log(ex))
    }
    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: 'https://media.giphy.com/media/ce25E3A7b9FusjS6DH/giphy.gif',
                }}
                style={styles.logo}
            />
            <Text style={styles.slogan}>All your newest movies with one click <Text style={{ fontStyle: 'normal' }}>🍿</Text></Text>
            <TextInput
                style={[styles.input, { marginTop: 30 }]}
                placeholder="Firtname"
            />
            <TextInput
                style={[styles.input, { marginTop: 10 }]}
                placeholder="Lastname"
            />
            <TextInput
                style={[styles.input, { marginTop: 10 }]}
                placeholder="Email"

            />
            <TextInput
                style={[styles.input, { marginTop: 10 }]}
                placeholder="Password"
            />
            <TextInput
                style={[styles.input, { marginTop: 10 }]}
                placeholder="Confirm Password"
            />
            <TouchableOpacity
                style={styles.submit}>
                <Text style={styles.submitText}>Confirm</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        textAlign: 'center',
        backgroundColor: Colors.primary_blue,
    },
    input: {
        //marginTop: 10,
        borderColor: 'white',
        width: '80%',
        height: 50,
        color: 'white',
        backgroundColor: '#918f89',
        //outline: 'none',
        borderRadius: 100,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 5,
        //placeholderTextColor: "#dfe2e8"
    },
    submit: {
        width: "40%",
        height: 40,
        backgroundColor: '#12448a',
        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 'auto', borderRadius: 100
    },
    submitText: {
        color: "white",
        padding: 10,
        fontWeight: "bold",
        textAlign: "center"
    },
    logo: {
        width: 150,
        height: 150,
        marginTop: '10%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    slogan: {
        marginTop: 20,
        color: "white",
        fontWeight: "bold",
        fontStyle: 'italic',
        textAlign: "center"
    }
});
