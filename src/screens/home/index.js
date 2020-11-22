/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Image,
    ActivityIndicator
} from 'react-native';

import { Instance } from "../../services";
import MoviesList from "../../components/MoviesList";
import { Icon } from 'native-base';
import styles from "./styles";

export default function App({navigation}) {
    const [trending, setTrending] = React.useState([]);
    const [mostPopular, setMostPopular] = React.useState([]);
    const [topRated, setTopRated] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    const fetchMovies = async () => {
        await Instance.get("/trending").then(async (res) => {
            setTrending(res.data)
            await Instance.get("/most_popular").then(async (res) => {
                setMostPopular(res.data.results);
                await Instance.get("/top_rated").then(res => {
                    setTopRated(res.data.results);
                }).catch(ex => console.log(ex))
            }).catch(ex => console.log(ex))
        }).catch(ex => console.log(ex))
        setLoading(false)
    }
    React.useEffect(() => {
        fetchMovies();
    }, [])

    if (loading) return <View style={styles.loadingContainer}><ActivityIndicator size="large" color="white" style={styles.loading} /></View>
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <Image source={{ uri: "https://image.tmdb.org/t/p/original/eLT8Cu357VOwBVTitkmlDEg32Fs.jpg" }} style={styles.topMovieSelected} />
                    <View style={styles.popcornImageContainer}>
                        <Image source={{ uri: 'https://freepngimg.com/thumb/popcorn/23443-2-popcorn-image.png' }} style={styles.popcornImage} />
                    </View>
                    <View style={styles.typesContainer}>
                        <TouchableOpacity><Text style={styles.types}>Series</Text></TouchableOpacity>
                        <TouchableOpacity><Text style={styles.types}>Films</Text></TouchableOpacity>
                        <TouchableOpacity><Text style={styles.types}>My List</Text></TouchableOpacity>
                    </View>
                    <View style={styles.optionsContainer}>
                        <TouchableOpacity style={styles.optionsAddMyList}>
                            <Icon name="plus" type="AntDesign" style={{ color: "white", }} />
                            <Text style={{ color: "white", textAlign: "center" }}>My List</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionsPlay}>
                            <Icon name="caretright" type="AntDesign" style={{ color: "black", }} />
                            <Text style={{ color: "black", padding: 7 }}>Play</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionsInfo}>
                            <Icon name="infocirlce" type="AntDesign" style={{ color: "white", }} />
                            <Text style={{ color: "white", textAlign: "center" }}>Info</Text>
                        </TouchableOpacity>
                    </View>
                    <MoviesList navigation={navigation} data={trending} listTitle="Trending" />
                    <MoviesList navigation={navigation} data={mostPopular} listTitle="Most Popular" />
                    <MoviesList navigation={navigation} data={topRated} listTitle="Top Rated" />
                </ScrollView>
            </SafeAreaView>
        </>
    );
};


