import React from 'react'
import { View, Text, Image } from 'react-native'

const ProfileView = ({name}:{name:string}) => {
    return (
        <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              style={{ height: 25, width: 25, borderRadius: 10 }}
              source={require("../../assets/sislogo.jpg")}
            />
            <Text style={{ marginHorizontal: 20 }}>{name}</Text>
          </View>
    )
}

export default ProfileView