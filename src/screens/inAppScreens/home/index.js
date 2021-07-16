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
    ActivityIndicator,
    RefreshControl
} from 'react-native';
import { Icon } from 'native-base';
import styles from "./styles";
import Trending from "../../components/Trending";
import TopRated from "../../components/TopRated";
import MostPopular from "../../components/MostPopular";

export default function App({ navigation, state,dispatch}) {

    const [loading, setLoading] = React.useState(true);
    const [refreshing, setRefreshing] = React.useState(false);
    const wait = (timeout) => {
        return new Promise(resolve => {
          setTimeout(resolve, timeout);
        });
      }
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        wait(2000).then(() => setRefreshing(false));
    }, []);
    React.useEffect(() => {
        console.log(state)
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [])

    if (loading) return <View style={styles.loadingContainer}><ActivityIndicator size="large" color="white" style={styles.loading} /></View>
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <ScrollView refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>
                    <Image source={{ uri: "https://image.tmdb.org/t/p/original/eLT8Cu357VOwBVTitkmlDEg32Fs.jpg" }} style={styles.topMovieSelected} />
                    <View style={styles.popcornImageContainer}>
                        <Image source={{ uri: 'https://freepngimg.com/thumb/popcorn/23443-2-popcorn-image.png' }} style={styles.popcornImage} />
                    </View>
                    <View style={styles.typesContainer}>
                        <TouchableOpacity onPress={() =>{
                            dispatch({type:"DISCONNECT"})
                            navigation.navigate("Login")
                        }}><Text style={styles.types}>Discover</Text></TouchableOpacity>
                        <TouchableOpacity><Text style={styles.types}>TV shows</Text></TouchableOpacity>
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

                    <Trending navigation={navigation} />
                    <MostPopular navigation={navigation} />
                    <TopRated navigation={navigation} />

                </ScrollView>
            </SafeAreaView>
        </>
    );
};


