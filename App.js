import "react-native-gesture-handler";
import { View, Text, Image } from "react-native";
import React, { useState } from "react";
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

const App = () => {
  const [isUserLogin, setIsUserLogin] = useState(false);
  const [selectLanguage, setSelectLanguage] = useState(false);
  console.log(isUserLogin);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {!selectLanguage && (
          <Stack.Screen
            name="Home"
            component={SelectLanguage}
            initialParams={{
              isUserLogin: isUserLogin,
              setIsUserLogin: setIsUserLogin,
              setSelectLanguage: setSelectLanguage,
            }}
          />
        )}

        {isUserLogin == true ? (
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
  );
};

export default App;
