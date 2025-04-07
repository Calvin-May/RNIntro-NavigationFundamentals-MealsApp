import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function IconButton({ icon, colour, onPress }) {
  return (
    <Pressable 
        onPress={onPress}
        style={({pressed}) => pressed && styles.pressed}
    >
      <Ionicons name={icon} size={30} color={colour} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    }
});