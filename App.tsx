import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Home } from './src/components/Home/Home';
import { styles } from "./AppStyle";


export default function App() {
  return (
    <View style={styles.FullAppContent}>
      <Home></Home>
      <StatusBar  translucent={true} style="auto" />
    </View>
  );
}

