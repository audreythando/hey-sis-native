import React from 'react'
import { View, Text } from 'react-native'

const HeadingText = ({heading}:{heading:string}) => {
    return (
        <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
             {heading}
            </Text>
          </View>
    )
}

export default HeadingText