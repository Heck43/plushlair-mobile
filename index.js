import { Platform } from 'react-native'

if (Platform.OS !== 'web') {
  // Expo SDK 55 expects FormData to exist before the Expo runtime patches it.
  require('react-native/Libraries/Core/setUpXHR')
}

const { registerRootComponent } = require('expo')
const App = require('./App').default

// registerRootComponent calls AppRegistry.registerComponent('main', () => App).
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately.
registerRootComponent(App)
