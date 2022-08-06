import Application from './src/index';
import { Text, View } from 'react-native';
import HomePage from './src/Screens/HomePage/index';

const App = () => {
  return (
    <View>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Application />
      <HomePage />
    </View>
  );
}

export default App


