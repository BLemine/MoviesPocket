import React from "react";
import { View, ScrollView, TouchableOpacity, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { Instance } from "../services";
import Colors from "../colors";
import {most_popular} from "../../scripts";

export default (props) => {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        /*Instance.get("/default_most_popular").then((res) => {
            //setData(res.data.results);
            setData(res.data)
            setLoading(false);
        }).catch(ex => console.log(ex))*/
        most_popular.then(res=>{
            setData(res.data.results);
            setLoading(false)
        }).catch(ex => console.log(ex))
    }, [])
    return (
        <View>
            <Text style={styles.listTitle}>Most popular</Text>
            {!loading && <ScrollView horizontal={true}>
                {data.map((movie, index) => {
                    return (
                        <TouchableOpacity key={index} style={{ height: 200, width: 90 }} onPress={() => props.navigation.navigate("MovieDetails", { movie: movie })}>
                            <Image defaultSource={require("../../assets/media/spinner.gif")} source={{ uri: "https://image.tmdb.org/t/p/original" + movie.backdrop_path }} style={styles.movie} />
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>}
            {loading &&
                <View style={styles.loadingContainer}><ActivityIndicator size="large" color="white" style={styles.loading} /></View>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    listTitle: {
        fontWeight: "bold",
        marginLeft: 20,
        color: '#fff',
        fontFamily: 'Arial',
        fontSize: 16,
    },
    movie: {
        height: 150,
        width: 90,
        borderWidth: 1,
        marginLeft: 8,
        marginTop: 23,
    },
    loadingContainer: {
        backgroundColor: Colors.primary_blue,
        flex: 1
    },
});
