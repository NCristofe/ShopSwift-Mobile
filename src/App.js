import { Button, Image, Pressable, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import Illustration from '../assets/android-icon-foreground.png'
import { Login } from './screens/Login';
import { Cadastro } from './screens/Cadastro';

export default function App() {
  return (
    <SafeAreaView>
      <Cadastro/>     
    </SafeAreaView>
  );
}