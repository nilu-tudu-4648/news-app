import 'expo-dev-client';
import { NativeNavigation } from 'app/navigation/native'
import { Provider } from 'app/provider'

export default function App() {
    // eas build -p android --profile preview
  // eas update --branch preview --message "Updating the app"

  // npx expo  start --dev-client
  // eas build --profile development --platform android
  return (
    <Provider>
      <NativeNavigation />
    </Provider>
  )
}
