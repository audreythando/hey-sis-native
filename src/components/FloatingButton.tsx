import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {Feather as Icon} from '@expo/vector-icons';
const FloatingButton = () => {
    return (
        <TouchableOpacity style={{ position: "absolute",
        bottom: 20,
        right: 20,}}>
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 10,
        right: 10,
        backgroundColor: "#300F34",
        height: 50,
        width: 50,
        borderRadius: 25,
      }}
    >
      <Icon name="edit" size={20} color={"#ffffff"} />
    </View>
  </TouchableOpacity>
    )
}

export default FloatingButton