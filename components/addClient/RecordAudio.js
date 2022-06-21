import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { Card } from "react-native-paper";
import { Audio } from "expo-av";

const { width, height } = Dimensions.get("screen");
const RecordAudio = () => {
  const [audio, setAudio] = useState();

  const startRecording = async () => {
    try {
      console.log("requesting permission");
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      const { recording } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      setAudio(recording);
    } catch (error) {
      console.error("Failed to start recording", err);
    }
  };

  return (
    <View>
      <Card
        style={{
          marginTop: width * 0.09,
          paddingHorizontal: width * 0.07,
          paddingVertical: width * 0.07,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: width * 0.03,
          }}
        >
          <Text>Record Instructions Audio</Text>
          <TouchableOpacity onPress={startRecording}>
            <FontAwesome name="microphone" size={25} color="#8645FF" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#DAD9E5",
            paddingVertical: width * 0.03,
            paddingHorizontal: width * 0.03,
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: width * 0.01,
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              style={{
                borderColor: "black",
                borderWidth: 2,
                borderRadius: 18,
                padding: 5,
              }}
            >
              <AntDesign name="caretright" size={24} color="#1A293D" />
            </TouchableOpacity>
            <View
              style={{
                borderRightWidth: 2,
                borderRightColor: "#8645FF",
                marginHorizontal: 3,
              }}
            ></View>
          </View>

          <TouchableOpacity>
            <AntDesign name="delete" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </Card>
    </View>
  );
};

export default RecordAudio;

const styles = StyleSheet.create({});
