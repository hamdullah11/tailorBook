import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Card, Title } from "react-native-paper";
// import {  } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");
const GallerySubTypes = ({ route, navigation }) => {
  const { itemId, otherParam, Type } = route.params;
  return (
    <ScrollView>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          marginVertical: height * 0.01,
        }}
      >
        {otherParam.map((item, i) => (
          <View
            key={item.id}
            style={{
              width: width * 0.45,
              height: width * 0.48,
              //   backgroundColor: "white",
              marginVertical: width * 0.04,
              paddingVertical: height * 0.01,
            }}
          >
            <Card>
              <Card.Cover source={item.image} />
            </Card>
          </View>
        ))}
        <Card
          style={{
            width: width * 0.45,
            height: width * 0.54,
            // backgroundColor: "white",
            marginVertical: width * 0.06,
            paddingVertical: height * 0.01,
            elevation: 0,
            // opacity: 0.5,
          }}
        >
          <TouchableOpacity onPress={() => {}}>
            <Card.Content>
              <Text style={{ color: "#868696" }}>Add Custom</Text>
            </Card.Content>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: width * 0.05,
              }}
            >
              <Image source={require("../../../assets/addNew.png")} />
            </View>
          </TouchableOpacity>
        </Card>
      </View>
    </ScrollView>
  );
};

export default GallerySubTypes;

const styles = StyleSheet.create({});
