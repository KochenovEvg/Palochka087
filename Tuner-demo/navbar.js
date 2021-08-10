import React from 'react'
import {View} from 'react-native'
export const NavBar = () => {
    return (
          <View style={styles.navbar}>
            <Text style={styles.text}>How are you?</Text>
          </View>
      )
}

const styles = StyleSheet.create({
    text : {
      fontSize: 30,
    },
    navbar : {

    }
  })
  
