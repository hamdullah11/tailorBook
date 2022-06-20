import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import { Card } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");
const kurtaSubImages = [
  {
    id: 1,
    image: require("../../assets/kurtaImages/kurta1.png"),
  },
  {
    id: 2,
    image: require("../../assets/kurtaImages/kurta2.png"),
  },
  {
    id: 3,
    image: require("../../assets/kurtaImages/kurta3.png"),
  },
  {
    id: 4,
    image: require("../../assets/kurtaImages/kurta4.png"),
  },
  {
    id: 5,
    image: require("../../assets/kurtaImages/kurta5.png"),
  },
  {
    id: 6,
    image: require("../../assets/kurtaImages/kurta6.png"),
  },
  {
    id: 7,
    image: require("../../assets/kurtaImages/kurta7.png"),
  },
];
const GallaryItems = [
  {
    id: 1,
    image: require("../../assets/Kurta.png"),
    name: "Kurta",
  },
  {
    id: 2,
    image: require("../../assets/Salwar.png"),
    name: "Salwar",
  },
  {
    id: 3,
    image: require("../../assets/Blouse.png"),
    name: "Blouse",
  },
  {
    id: 4,
    image: require("../../assets/Burka.png"),
    name: "Burka",
  },
  {
    id: 5,
    image: require("../../assets/Saree.png"),
    name: "Saree",
  },
  {
    id: 6,
    image: require("../../assets/UnderSkirt.png"),
    name: "Under Skirt",
  },
  {
    id: 7,
    image: require("../../assets/NightGown.png"),
    name: "Night Gown",
  },
  {
    id: 8,
    image: require("../../assets/frock.png"),
    name: "Frock",
  },
  {
    id: 9,
    image: require("../../assets/Churidar.png"),
    name: "Churidar",
  },
  {
    id: 10,
    image: require("../../assets/Shorts.png"),
    name: "Shorts",
  },
  {
    id: 11,
    image: require("../../assets/Jeans.png"),
    name: "Jeans",
  },
  {
    id: 12,
    image: require("../../assets/shirt.png"),
    name: "Shirt",
  },
  {
    id: 13,
    image: require("../../assets/pant.png"),
    name: "Pants",
  },
  {
    id: 14,
    image: require("../../assets/coat.png"),
    name: "Coat",
  },
  {
    id: 15,
    image: require("../../assets/Pajama.png"),
    name: "Pajama",
  },
  {
    id: 16,
    image: require("../../assets/ShalwarKameez.png"),
    name: "Shalwar Kameez",
  },
  // {
  //   id: 17,
  //   image: require("../../assets"),
  //   name: "Add New Folder",
  // },
];
const GallaryItemsList = (navigation, item) => {
  return (
    <View
      style={{
        flex: 1,
        // alignItems: "center",
        width: 180,
        height: 180,
        marginHorizontal: width * 0.03,
      }}
    >
      <Card>
        {/* <Image source={item.image} />
         */}
        <Card.Cover source={item.image} />
        <Text style={{ textAlign: "center" }}>{item.name}</Text>
      </Card>
    </View>
  );
};
const Gallary = ({ navigation }) => {
  return (
    // <FlatList
    //   data={GallaryItems}
    //   renderItem={({ item }) => GallaryItemsList(navigation, item)}
    //   keyExtractor={(item) => item.id}
    //   numColumns={2}
    //   // horizontal={true}
    // />
    <ScrollView>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",

          marginVertical: height * 0.01,
          marginHorizontal: width * 0.03,
        }}
      >
        {GallaryItems.map((item) => {
          return (
            <View
              key={item.id}
              style={{
                width: width * 0.45,
                height: width * 0.48,
                backgroundColor: "white",
                marginVertical: width * 0.02,
                paddingVertical: height * 0.01,
              }}
            >
              <Card style={{ alignItems: "center" }}>
                <Card.Content
                  style={{
                    width: width * 0.39,
                    height: width * 0.41,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(195, 197, 214, 0.3)",
                    // margin: 4,
                    elevation: 0,
                    borderWidth: 0,
                  }}
                >
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("GallerySubTypes", {
                        itemId: 86,
                        otherParam: kurtaSubImages,
                        Type: item.name,
                      })
                    }
                  >
                    <Image
                      source={item.image}
                      style={{ resizeMode: "cover" }}
                    />
                  </TouchableOpacity>
                </Card.Content>
                <Text style={{ textAlign: "center" }}>{item.name}</Text>
              </Card>
            </View>
          );
        })}
        <View
          style={{
            width: width * 0.45,
            height: width * 0.48,
            backgroundColor: "white",
            marginVertical: width * 0.01,
            paddingVertical: height * 0.01,
          }}
        >
          <Card style={{ alignItems: "center" }}>
            <Card.Content
              style={{
                width: width * 0.39,
                height: width * 0.47,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(195, 197, 214, 0.3)",
                marginBottom: height * 0.01,
              }}
            >
              <TouchableOpacity
              // onPress={() =>
              //   navigation.navigate("GallerySubTypes", {
              //     itemId: 86,
              //     otherParam: kurtaSubImages,
              //     Type: item.name,
              //   })
              // }
              >
                <Image
                  source={require("../../assets/kurtaImages/createfolder.png")}
                  style={{ resizeMode: "cover" }}
                />
              </TouchableOpacity>
            </Card.Content>
          </Card>
        </View>
      </View>
    </ScrollView>
  );
};

export default Gallary;

const styles = StyleSheet.create({});
