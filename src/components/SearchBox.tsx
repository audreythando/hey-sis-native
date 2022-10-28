import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const SearchBox = () => {
    return (
        <View>
            <TextInput style={styles.input} placeholder="Jump to..." />
          </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: "#000000",
        borderWidth: StyleSheet.hairlineWidth,
        borderStyle: "solid",
    
        padding: 10,
        borderRadius: 5,
        fontWeight: "500",
      },
})
export default SearchBox