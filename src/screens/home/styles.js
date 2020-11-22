import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "black"
    },
    loadingContainer: {
        backgroundColor: "black",
        flex: 1
    },
    loading: {
        flex: 1,
        justifyContent: "center"
    },
    typesContainer: {
        position: "absolute",
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        right: 20, top: 20
    },
    types: {
        color: "white",
        marginLeft: 20,
        fontWeight: "bold"
    },
    optionsContainer: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent: "center"
    },
    optionsPlay: {
        width: 100, backgroundColor: "white", marginTop: 10, marginLeft: "10%",
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        padding: 5,
    },
    optionsInfo: {
        marginTop: 10,
        marginLeft: "10%"
    },
    optionsAddMyList: {
        marginTop: 10
    },
    popcornImageContainer: {
        position: "absolute",
        top: 20,
        left: 10
    },
    popcornImage: {
        width: 50,
        height: 50
    },
    topMovieSelected: {
        width: "100%",
        height: 400,
    }
});

export default styles;