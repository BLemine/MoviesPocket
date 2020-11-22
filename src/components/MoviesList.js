import React from "react";
import { View, ScrollView, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';


export default (props) => {
    return (
        <View>
            <Text style={styles.listTitle}>{props.listTitle}</Text>
            <ScrollView horizontal={true}>
                {props.data.map((movie, index) => {
                    return <TouchableOpacity key={index} style={{ height: 200 }}>
                        <Image source={{ uri: "https://image.tmdb.org/t/p/original" + movie.backdrop_path }} style={styles.movie} />
                    </TouchableOpacity>
                })}
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    listTitle: {
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
    }
});
