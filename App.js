import "react-native-gesture-handler";
import {
  View,
  Text,
  Image,
  BackHandler,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createSwitchNavigator } from "react-navigation";

import SelectLanguage from "./components/SelectLanguage";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import CreateNewPassword from "./components/CreateNewPassword";
import PasswordResetSuccess from "./components/PasswordResetSuccess";
import MainScreen from "./components/MainScreen";
import AddNewClient from "./components/addClient/NewClient";
import OrderDetails from "./components/orders/OrderDetails";
import GallerySubTyps from "./components/mainScreenComponents/gallerySubTypes/GallerySubTypes";
import AddNewClientDetails from "./components/addClient/AddClientDetails";
import { Ionicons } from "@expo/vector-icons";
const Stack = createNativeStackNavigator();
import { Provider } from "react-redux";
import { Store } from "./redux/store";

const App = () => {
  const [isUserLogin, setIsUserLogin] = useState(false);
  const [selectLanguage, setSelectLanguage] = useState(false);
  const state = Store.getState();
  console.log(state);
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Alert", "Are you sure you want to Exit ?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        { text: "YES", onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {!selectLanguage && (
            <Stack.Screen name="Home" component={SelectLanguage} />
          )}

          {state.userLogin == true ? (
            <>
              <Stack.Screen name="MainScreen" component={MainScreen} />
              <Stack.Screen name="AddNewClient" component={AddNewClient} />
              <Stack.Screen
                options={{
                  headerShown: true,
                  headerTitle: "Gallery",
                }}
                name="OrderDetails"
                component={OrderDetails}
              />
              <Stack.Screen
                options={{
                  headerShown: true,
                  headerTitle: "Kurta",
                  headerTitleAlign: "center",
                }}
                name="GallerySubTypes"
                component={GallerySubTyps}
              />
              <Stack.Screen
                options={{
                  headerShown: true,
                  headerTitle: "Zakir Ullah",
                  headerTitleAlign: "center",
                }}
                name="AddNewClientDetails"
                component={AddNewClientDetails}
              ></Stack.Screen>
            </>
          ) : (
            <>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} />
              <Stack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={{
                  headerShown: true,
                  headerTitle: "",
                  // headerBackTitleVisible: false,
                  headerBackVisible: false,
                  headerBlurEffect: false,
                  headerShadowVisible: false,
                  headerStyle: {
                    headerLeft: ({ onPress, focused }) => <Text>Haskldhf</Text>,
                  },
                }}
              />
              <Stack.Screen
                name="CreateNewPassword"
                component={CreateNewPassword}
                options={{
                  headerShown: true,
                }}
              />
              <Stack.Screen
                name="PasswordResetSuccess"
                component={PasswordResetSuccess}
              />

              <Stack.Screen name="MainScreen" component={MainScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
