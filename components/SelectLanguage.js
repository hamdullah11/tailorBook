import { StatusBar } from "expo-status-bar";
import { Icon } from "native-base";
import { Store } from "../redux/store";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Button,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ToastAndroid,
} from "react-native";
// import { TextInput } from "react-native-paper";
const { width, height } = Dimensions.get("window");
import SearchBar from "./SearchBar";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const countries = [
  {
    id: "1",
    language: "Arabic",
    flag: require("../assets/arabic.png"),
  },
  {
    id: "2",
    language: "English",
    flag: require("../assets/english.png"),
  },
  {
    id: "3",
    language: "Urdu",
    flag: require("../assets/urdu.png"),
  },
  {
    id: "4",
    language: "Hindi",
    flag: require("../assets/Hindi.png"),
  },
  {
    id: "5",
    language: "Srilanka",
    flag: require("../assets/Srilanka.png"),
  },
  {
    id: "6",
    language: "Italian",
    flag: require("../assets/Italian.png"),
  },
  {
    id: "7",
    language: "Australian",
    flag: require("../assets/Australian.png"),
  },
  {
    id: "8",
    language: "Turkish",
    flag: require("../assets/Turkish.png"),
  },
  {
    id: "9",
    language: "Bangladesh",
    flag: require("../assets/Bangladesh.png"),
  },
  {
    id: "10",
    language: "Bangladesh",
    flag: require("../assets/Bangladesh.png"),
  },
];

export default function SelectLanguage({ navigation }) {
  const [isPressed, setIspress] = useState(null);
  const state = Store.getState();

  const languageSelect = (id) => {
    setIspress(id);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.languageContainer}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Choose Language
          </Text>

          <View style={styles.searchSection}>
            <TextInput
              style={styles.input}
              placeholder="User Nickname"
              underlineColor="transparent"
              backgroundColor="#FBFBFB"
            />
            <TouchableOpacity>
              <Ionicons name="search" size={24} color="#868696" />
            </TouchableOpacity>
          </View>

          <FlatList
            data={countries}
            renderItem={({ item }) => (
              <TouchableOpacity
                showsVerticalScrollIndicator={false}
                style={[
                  styles.dropDownItem,
                  isPressed && isPressed == item.id
                    ? styles.dropDownItemPress
                    : "",
                ]}
                onPress={() => {
                  languageSelect(item.id);
                }}
                key={item.id}
              >
                <View
                  style={{
                    flexDirection: "row",
                    paddingHorizontal: width * 0.01,
                  }}
                >
                  <Image source={item.flag} />
                  <Text
                    style={{
                      marginHorizontal: width * 0.04,
                      color: "#060416",
                    }}
                  >
                    {item.language}
                  </Text>
                </View>

                {isPressed == item.id && (
                  <Feather name="check-circle" size={24} color="black" />
                )}
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
            style={{
              height: width * 1.3,
            }}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if (isPressed == null) {
                ToastAndroid.showWithGravityAndOffset(
                  "Please Select A Language",
                  ToastAndroid.SHORT,
                  ToastAndroid.BOTTOM,
                  25,
                  50
                );
              } else {
                console.log(state.userLogin);
                if (state.userLogin == undefined) {
                  navigation.navigate("Login");
                } else {
                  console.log("mainScreen");
                  navigation.navigate("MainScreen");
                }
              }
            }}
          >
            <Text style={{ color: "white" }}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    justifyContent: "center",
  },
  languageContainer: {
    marginTop: height * 0.09,
    // marginHorizontal: width * 0.01,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#9E78E5",
    padding: 10,
    borderRadius: 5,
    padding: height * 0.03,
    marginVertical: width * 0.07,
    marginHorizontal: width * 0.07,
  },
  searchSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FBFBFB",
    borderColor: "rgba(28,55,90,0.16)",
    borderWidth: 1,
    paddingHorizontal: width * 0.05,
    borderRadius: width * 0.03,
    marginVertical: width * 0.04,
    marginHorizontal: width * 0.04,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "#fff",
    color: "#424242",
  },
  dropDownItem: {
    // flex: 1,
    flexDirection: "row",
    marginTop: 3,
    backgroundColor: "#FAFAFA",
    justifyContent: "space-between",
    paddingVertical: 12,
    elevation: 1,
    borderRadius: 4,
    paddingHorizontal: width * 0.04,
  },
  dropDownItemPress: {
    backgroundColor: "#E1D1FF",
    borderWidth: 1,
    borderColor: "#8645FF",
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },
});
