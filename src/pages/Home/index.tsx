import { View } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { Text, TouchableOpacity } from 'components/atoms'

import S from './styles'

export const Home = () => {
  const { navigate } = useNavigation()

  return (
    <View style={S.container}>
      <Text>Page Home</Text>
      <TouchableOpacity
        label="Go to Example"
        onPress={() => {
          navigate('Example')
        }}
      />
    </View>
  )
}