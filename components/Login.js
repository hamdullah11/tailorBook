import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import { Checkbox } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");
const Login = ({ navigation, route }) => {
  const [checked, setChecked] = useState(false);
  const [userMail, setUserMail] = useState("");
  const [password, setPassword] = useState("");
  const setUserEmailAddress = (mail) => {
    console.log(mail);
    setUserMail(mail);
  };
  const setUserPassword = (password) => {
    setPassword(password);
  };
  return (
    <ScrollView
      style={{
        marginVertical: width * 0.18,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <View style={styles.container}>
          <Image source={require("../assets/login.png")} />
          <Text style={{ fontSize: 20 }}>Login to Your Account</Text>
          <Text style={{ fontSize: 15 }}>
            Welcome Back,please enter your details.
          </Text>
        </View>
        <View
          style={{
            marginTop: height * 0.03,
          }}
        >
          <Text style={{ marginLeft: 12, color: "#1B2B41" }}>
            Email Address
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Johndoe@gmail.com"
            onChangeText={(mail) => {
              setUserEmailAddress(mail);
            }}
            value={userMail}
          />
          <Text style={{ marginLeft: 12, color: "#1B2B41" }}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Enter your password"
            onChangeText={(password) => {
              setUserPassword(password);
            }}
            value={password}
          />
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
            <Text style={{ color: "#1B2B41" }}>Remember Me</Text>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              <Text style={{ color: "#1B2B41" }}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (userMail == "" || password == "") {
              if (userMail == "") {
                ToastAndroid.showWithGravityAndOffset(
                  "Please Enter Email Address",
                  ToastAndroid.SHORT,
                  ToastAndroid.BOTTOM,
                  25,
                  50
                );
              }
              if (password == "") {
                ToastAndroid.showWithGravityAndOffset(
                  "Please Enter password",
                  ToastAndroid.SHORT,
                  ToastAndroid.BOTTOM,
                  25,
                  50
                );
              }
            } else {
              route.params.setIsUserLogin(true);
              navigation.navigate("MainScreen");
              // console.log(route.params.setIsUserLogin(true));
            }
          }}
        >
          <Text style={{ color: "white" }}>Log in</Text>
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
            marginTop: height * 0.02,
          }}
        >
          <Text style={{ textAlign: "center" }}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={{ color: "#8645FF" }}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  input: {
    height: height * 0.08,
    margin: 12,
    borderWidth: 1,
    padding: 10,

    borderWidth: 1,

    borderRadius: 3,
    borderColor: "#c5c5c5",
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
    borderColor: "rgba(28,52,84,0.26)",
    borderWidth: 1,

    borderRadius: 3,
    padding: height * 0.027,
    marginHorizontal: width * 0.03,
    marginTop: height * 0.01,
  },
});
