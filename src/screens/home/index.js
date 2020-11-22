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
    StyleSheet,
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

export default function App() {
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

    if (loading) return <View style={{ backgroundColor: "black", flex: 1 }}><ActivityIndicator size="large" color="white" style={styles.loading} /></View>
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{ height: "100%", backgroundColor: "black" }}>
                <ScrollView>
                    <Image source={{ uri: "https://image.tmdb.org/t/p/original/eLT8Cu357VOwBVTitkmlDEg32Fs.jpg" }} style={{
                        width: "100%",
                        height: 400,
                    }} />
                    <View style={{ position: "absolute", top: 20, left: 10 }}>
                        <Image source={{ uri: 'https://freepngimg.com/thumb/popcorn/23443-2-popcorn-image.png' }} style={{ width: 50, height: 50 }} />
                    </View>
                    <View style={{
                        flexWrap: 'wrap',
                        alignItems: 'flex-start',
                        flexDirection: 'row',
                        marginBottom: 20,
                        justifyContent: "center"
                    }}>
                        <TouchableOpacity style={{ marginTop: 10 }}>
                            <Icon name="plus" type="AntDesign" style={{ color: "white", }} />
                            <Text style={{ color: "white", textAlign: "center" }}>My List</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            width: 100, backgroundColor: "white", marginTop: 10, marginLeft: "10%",
                            flexWrap: 'wrap',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            padding:5
                        }}>
                            <Icon name="caretright" type="AntDesign" style={{ color: "black", }} />
                            <Text style={{ color: "black", padding: 7 }}>Play</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginTop: 10, marginLeft: "10%" }}>
                            <Icon name="infocirlce" type="AntDesign" style={{ color: "white", }} />
                            <Text style={{ color: "white", textAlign: "center" }}>Info</Text>
                        </TouchableOpacity>
                    </View>
                    <MoviesList data={trending} listTitle="Trending" />
                    <MoviesList data={mostPopular} listTitle="Most Popular" />
                    <MoviesList data={topRated} listTitle="Top Rated" />
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: "center"
    }
});
