import { View } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'

import { Text, TouchableOpacity } from 'components/atoms'

import S from './styles'

export const Home = () => {
  const { navigate } = useNavigation()

  return (
    <View style={S.container}>
      <Icon name="home" size={30} color="#900" />
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
