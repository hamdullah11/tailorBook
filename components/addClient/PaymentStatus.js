import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { Card, TextInput } from "react-native-paper";
const { width, height } = Dimensions.get("screen");
const PaymentStatus = () => {
  return (
    <View>
      <Card
        style={{
          marginTop: width * 0.09,
          paddingHorizontal: width * 0.07,
          paddingVertical: width * 0.07,
        }}
      >
        <Text
          style={{
            color: "#181059",
            fontSize: 16,
          }}
        >
          Payment Status
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: width * 0.04,
          }}
        >
          <Text style={{ color: "#2B2B2B" }}>Total amount</Text>
          <TextInput
            placeholder="00"
            outlineColor="red"
            activeOutlineColor="red"
            style={{ backgroundColor: "#FFFFFF", height: height * 0.02 }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: width * 0.04,
          }}
        >
          <Text style={{ color: "#2B2B2B" }}>Advanced Amount</Text>
          <TextInput
            placeholder="00"
            outlineColor="red"
            activeOutlineColor="red"
            style={{ backgroundColor: "#FFFFFF", height: height * 0.02 }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: width * 0.04,
          }}
        >
          <Text style={{ color: "#2B2B2B" }}>Due Amount</Text>
          <TextInput
            placeholder="00"
            outlineColor="red"
            activeOutlineColor="red"
            style={{ backgroundColor: "#FFFFFF", height: height * 0.02 }}
          />
        </View>
      </Card>
    </View>
  );
};

export default PaymentStatus;

const styles = StyleSheet.create({});
