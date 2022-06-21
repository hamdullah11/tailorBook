import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Checkbox } from "react-native-paper";
import { AntDesign, Feather } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");
const Register = ({ navigation }) => {
  const [checked, setChecked] = React.useState(false);
  const [userDetail, setUserDetail] = useState({
    userName: "",
    userEmail: "",
    userContactNo: "",
    userPassword: "",
  });
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          marginTop: width * 0.09,
        }}
      >
        <View style={styles.container}>
          <Image source={require("../assets/login.png")} />
          <Text style={{ fontSize: 20 }}>Create an Account</Text>
          <Text style={{ fontSize: 10 }}>
            Sign up now to get started with an account.
          </Text>
        </View>
        <View
          style={{
            marginTop: height * 0.01,
          }}
        >
          <Text style={{ marginLeft: 12, color: "#8645FF" }}>FullName</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: width * 0.03,
              borderWidth: 1,
              borderColor: "rgba(28,90,55,0.16)",
              padding: width * 0.04,
              borderRadius: width * 0.01,
              justifyContent: "space-between",
            }}
          >
            <TextInput placeholder="Enter your Name" />
          </View>
          <Text
            style={{
              marginLeft: 12,
              color: "#1B2B41",
              marginTop: width * 0.01,
            }}
          >
            Email Address
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: width * 0.03,
              borderWidth: 1,
              borderColor: "rgba(28,90,55,0.16)",
              padding: width * 0.04,
              borderRadius: width * 0.01,
              justifyContent: "space-between",
            }}
          >
            <TextInput placeholder="Enter your Email" />
          </View>
          <Text
            style={{
              marginLeft: 12,
              color: "#1B2B41",
              marginTop: width * 0.01,
            }}
          >
            Phone Number
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: width * 0.03,
              borderWidth: 1,
              borderColor: "rgba(28,90,55,0.16)",
              padding: width * 0.04,
              borderRadius: width * 0.01,
            }}
          >
            <TextInput placeholder="Enter your Phone Number" />
          </View>
          <Text
            style={{
              marginLeft: 12,
              color: "#1B2B41",

              marginTop: width * 0.01,
            }}
          >
            Password
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: width * 0.03,
              borderWidth: 1,
              borderColor: "rgba(28,90,55,0.16)",
              padding: width * 0.04,
              borderRadius: width * 0.01,
              justifyContent: "space-between",
            }}
          >
            <TextInput placeholder="Enter your password" />
            <TouchableOpacity>
              <Feather name="eye" size={24} color="rgba(28,46,69,0.60)" />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginLeft: 5,
            marginRight: 5,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Checkbox
              color="#8645FF"
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text style={{ color: "#1B2B41" }}>
              I have read and agree to the
            </Text>
            <Text style={{ color: "#8645FF", textDecorationLine: "underline" }}>
              Terms Of Services
            </Text>
          </View>

          <View></View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login", { name: "Jane" })}
        >
          <Text style={{ color: "white" }}>Get Started</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: width * 0.08,
            marginVertical: width * 0.02,
          }}
        >
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: "#A5AEBB",
            }}
          />
          <View>
            <Text style={{ width: 50, textAlign: "center", color: "#A5AEBB" }}>
              OR
            </Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: "#A5AEBB" }} />
        </View>
        <TouchableOpacity
          style={styles.googleBtn}
          onPress={() => navigation.navigate("Login", { name: "Jane" })}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <View style={{ marginHorizontal: width * 0.02 }}>
              <Image source={require("../assets/googleLogo.png")} />
            </View>
            <View>
              <Text
                style={{ color: "rgba(27,43,65,0.72)", fontWeight: "bold" }}
              >
                Continue with Google
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: height * 0.01,
          }}
        >
          <Text style={{ textAlign: "center" }}>Already have an account?</Text>
          <TouchableOpacity onPress={navigation.navigate("Login")}>
            <Text style={{ color: "#8645FF" }}> Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    // height: height * 0.23,
  },
  input: {
    height: height * 0.07,
    margin: 12,
    borderWidth: 1,
    padding: 10,

    borderRadius: 3,
    borderColor: "#c5c5c5",
    marginTop: -height * 0.001,
    backgroundColor: "#FBFBFB",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#9B71E8",

    borderRadius: 3,
    padding: height * 0.027,
    marginHorizontal: width * 0.03,
    marginTop: height * 0.01,
  },
  googleBtn: {
    alignItems: "center",
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#617084",
    padding: height * 0.021,
    marginHorizontal: width * 0.03,
    marginTop: height * 0.001,
  },
});
