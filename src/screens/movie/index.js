import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import { Instance } from "../../services";
import YouTube from 'react-native-youtube';

export default ({ navigation, route }) => {
    const [trailerMessage, setTrailerMessage] = React.useState("");
    const [loading, setLoading] = React.useState(true);
    const [movie, setMovie] = React.useState(route.params.movie)
    React.useEffect(() => {
        Instance.post("/movie_trailer",
            {
                movie_id: movie.id
            })
            .then(res => {
                let aux = movie;
                aux.trailer = res.data
                setMovie(aux);
                setLoading(false)
            }).catch(ex => {
                setTrailerMessage("No trailer Available");
                setLoading(false);
            });
    }, [])
    return (
        <ScrollView style={{ backgroundColor: "#282c34", height: "100%" }}>
            <View>
                <Image style={{ width: "100%", height: 200 }} defaultSource={require("../../../assets/media/spinner.gif")} source={{ uri: "https://image.tmdb.org/t/p/original" + movie.backdrop_path }} />
            </View>
            <View>
                <Text style={{ color: "white", }}>Title : {movie.title ? movie.title : movie.name} </Text>
                <Text style={{ color: "white", }}>Release Date : {movie.release_date ? movie.release_date : movie.first_air_date} </Text>
                <Text style={{ color: "white", }}>Type : {movie.media_type} </Text>
                <Text style={{ color: "white", }}>Rating : {movie.vote_average + "/10"}  </Text>
                <Text style={{ color: "white", }}>Original Language : {movie.original_language}</Text>
                <Text style={{
                    width: "100%",
                    color: "white",
                }}>Overview : {movie.overview} </Text>
            </View>
            <View>
                {loading && <View style={{ flex: 1 }}><ActivityIndicator size="large" color="white" style={styles.loading} /></View>}
                {!loading && movie.trailer &&
                    <YouTube
                        apiKey="AIzaSyDX6FS6_Y_F1b-1ScX9hBga7Ecr8G2jwog"
                        videoId={movie.trailer.replace("/", "")} // The YouTube video ID
                        play // control playback of video with true/false
                        onReady={() => { }}
                        onChangeState={() => { }}
                        onChangeQuality={() => { }}
                        onError={() => { }}
                        style={{ marginTop:20, alignSelf: 'stretch', height: 300 }}
                    />
                }
                {!loading && !movie.trailer && <Text style={{ textAlign: "center", color: "white", fontSize: 20, fontWeight: "bold" }}>{trailerMessage}</Text>}

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'relative',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});