import { type ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'

import { enableReactNativeComponents } from '@legendapp/state/config/enableReactNativeComponents'
import { enableReactTracking } from '@legendapp/state/config/enableReactTracking'
// import Ionicons from 'react-native-vector-icons/Ionicons'

import 'infra/store/configPersist'

enableReactNativeComponents()
enableReactTracking({ auto: true })

const S = StyleSheet.create({
  container: {
    flex: 1
  }
})

const ManProvider = ({ children }: { children: ReactNode }) => {
  return <View style={[S.container, StyleSheet.absoluteFill]}>{children}</View>
}

export default ManProvider
