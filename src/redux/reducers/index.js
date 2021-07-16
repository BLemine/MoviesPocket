import AsyncStorage from '@react-native-async-storage/async-storage';


let auxUser={}
const initState = {
    logged: false,
    darkMode: false,
    user: {
        login: "kevin",
        password: "",
        avatar:""
    }
}
const logIn = async (user) => {
    clearStore()
    await AsyncStorage.setItem("loggedUser", JSON.stringify(user))
}
const clearStore = async () => {
    await AsyncStorage.removeItem("loggedUser")
}
const getStorage=()=>{
    AsyncStorage.getItem('loggedUser').then(
        (value) =>{
            console.log("getStorage called")
            auxUser=JSON.parse(value)
        }
      )
}
const setStorage=(user)=>{
    console.log("setstorage called")
    AsyncStorage.setItem("loggedUser",JSON.stringify(user))
}

export default  (state = initState, action) => {
    switch (action.type) {
        case "SIGN_IN": {
            console.log("SIGN_IN here ..")
            return {
                user: action.user
            }
        }
        case "SIGN_UP": return state;
        case "DISCONNECT": {
            console.log(state)

            return state};
        case "ADD_TO_LIST": return state;
        default: {
            // const aa = getStore();
            //getStorage()
            console.log('default state ...')
            /*AsyncStorage.getItem('loggedUser').then(
                (value) =>auxUser=JSON.parse(value)
              )*/
            console.log(state)
            return state;
        }
    }
}