import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ChannelistProps {
    channelName: string;
}
const ChannelListBox = ({channelName}:ChannelistProps) => {
  return (
    <View style={styles.channelBoxWrapper}>
      <View style={styles.channelBox}>
        <Text style={styles.channelText}>#</Text>
        <Text style={[styles.channelText, styles.marginText]}>
          {channelName}
        </Text>
      </View>
      <View style={styles.bullet}>
        <Text style={{ color: "#ffffff" }}>2</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  channelBoxWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  channelBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  channelText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  marginText: {
    marginHorizontal: 20,
  },
  bullet: {
    backgroundColor: "#CE365C",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
});
export default ChannelListBox;