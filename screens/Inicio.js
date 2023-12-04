import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, PaperProvider } from 'react-native-paper'

const Inicio = () => {
  return (
    <PaperProvider>
        <View>
             <Text>Inicio</Text>
{/*              <Button icon={alpha-m-box}></Button> */}
        </View>
    </PaperProvider>
  )
}

export default Inicio

const styles = StyleSheet.create({})