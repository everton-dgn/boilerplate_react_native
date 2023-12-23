import { StatusBar, useColorScheme } from 'react-native'

import ManProvider from 'providers/Main'
import Routes from 'routes'

const App = () => {
  const theme = useColorScheme()
  const barStyle = theme === 'dark' ? 'light-content' : 'dark-content'

  return (
    <ManProvider>
      <Routes />
      <StatusBar barStyle={barStyle} />
    </ManProvider>
  )
}

export default App
