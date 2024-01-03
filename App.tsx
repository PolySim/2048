import {StyleSheet, Text, View} from 'react-native';
import Game from "./Components/Game";

export default function App() {
  return (
    <Game/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
