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

import { Instance } from "./src/services";

function App() {
  const [trending, setTrending] = React.useState([]);
  const [mostPopular, setMostPopular] = React.useState([]);
  const [topRated, setTopRated] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    Instance.get("/trending").then(res => {
      setTrending(res.data)
    }).catch(ex => console.log(ex))
    Instance.get("/most_popular").then(res => {
      setMostPopular(res.data.results);
    }).catch(ex => console.log(ex))
    Instance.get("/top_rated").then(res => {
      setTopRated(res.data.results);
      setLoading(false)
    }).catch(ex => console.log(ex))
  }, [])
  if (loading) return <ActivityIndicator size="large" color="red" style={styles.loading} />

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
          <View>
            <Text style={[styles.listTitle,{marginTop:20}]}>Trending</Text>
            <ScrollView horizontal={true}>
              {trending.map((movie, index) => {
                return <TouchableOpacity key={index} style={{ height: 200 }}>
                  <Image source={{ uri: "https://image.tmdb.org/t/p/original" + movie.backdrop_path }} style={styles.movie} />
                </TouchableOpacity>
              })}
            </ScrollView>
          </View>
          <View>
            <Text style={styles.listTitle}>Most Popular</Text>
            <ScrollView horizontal={true}>
              {mostPopular.map((movie, index) => {
                return <TouchableOpacity key={index} style={{ height: 200 }}>
                  <Image source={{ uri: "https://image.tmdb.org/t/p/original" + movie.backdrop_path }} style={styles.movie} />
                </TouchableOpacity>
              })}
            </ScrollView>
          </View>
          <View>
            <Text style={styles.listTitle}>Top Rated</Text>
            <ScrollView horizontal={true}>
              {topRated.map((movie, index) => {
                return <TouchableOpacity key={index} style={{ height: 200 }}>
                  <Image source={{ uri: "https://image.tmdb.org/t/p/original" + movie.backdrop_path }} style={styles.movie} />
                </TouchableOpacity>
              })}
            </ScrollView>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({

  loading: {
    flex: 1,
    justifyContent: "center"
  },
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

export default App;
