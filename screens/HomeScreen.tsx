import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

import { Feather as Icon } from "@expo/vector-icons";
import {
  ChannelListBox,
  Divider,
  FloatingButton,
  HeadingText,
  ProfileView,
  SearchBox,
} from "../src/components";

const HomeScreen = () => {
  const handleAddChannel = () => {
    return true;
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.wrapper}>
          <SearchBox />
          <HeadingText heading="Unreads" />
          <ChannelListBox channelName="announcement" />
          <View style={styles.channelWrapper}>
            <TouchableOpacity onPress={handleAddChannel}>
              <View style={styles.addChannelBtn}>
                <Icon size={20} name="plus" />
                <Text
                  style={{
                    marginHorizontal: 10,
                    fontSize: 20,
                    color: "grey",
                  }}
                >
                  Add Channel
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Divider />
        <View style={{ marginHorizontal: 10, marginVertical: 20 }}>
          <HeadingText heading="Direct Message" />
          <ProfileView name="aditya kumar (you)" />
        </View>
        <Divider />
      </ScrollView>
      <FloatingButton />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    marginHorizontal: 10,
    marginVertical: 10,
  },

  box: {
    marginVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "rgb(242, 15, 181)",
  },
  addChannelBtn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  channelWrapper: {
    marginTop: 10,
  },
});
export default HomeScreen;