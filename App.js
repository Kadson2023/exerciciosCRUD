
import { StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';

import DrawerRouter from './src/routes/DrawerRouter';


export default function App() {
  return (
   <PaperProvider>
     <DrawerRouter></DrawerRouter>
   </PaperProvider>
  );
}

const styles = StyleSheet.create({
});