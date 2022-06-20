import { View, Text, Dimensions } from "react-native";
import React, { useState } from "react";
import { RadioButton, TextInput } from "react-native-paper";

const { height, width } = Dimensions.get("screen");
const ClientMeasurementDetails = ({ item, flag }) => {
  const [checked, setChecked] = useState("checked");
  return (
    <View
      style={{
        marginVertical: width * 0.05,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {flag === true ? (
        <>
          <View>
            <Text>{item}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <RadioButton
              status={checked}
              color="#2B2B2B"
              onPress={() => {
                setChecked("unchecked");
              }}
            />
            <Text>Half</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <RadioButton
              status={!checked}
              color="#2B2B2B"
              onPress={() => {
                setChecked("checked");
              }}
            />
            <Text>Full</Text>
          </View>
        </>
      ) : (
        <>
          <View
            style={{
              width: width * 0.2,
            }}
          >
            <Text> {item} </Text>
          </View>
          <View>
            <TextInput
              placeholder="00"
              outlineColor="red"
              activeOutlineColor="red"
              style={{ backgroundColor: "#FFFFFF", height: height * 0.02 }}
            />
          </View>

          <View
            style={{
              width: width * 0.03,
              height: width * 0.03,
              borderRadius: width * 0.1,
              borderColor: "#2B2B2B",
              borderWidth: 1,
            }}
          ></View>
          <View>
            <Text>Inc</Text>
          </View>
        </>
      )}
    </View>
  );
};

export default ClientMeasurementDetails;
