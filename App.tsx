import { StatusBar } from 'react-native';
import { Routes } from './src/Routes';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <>
      <StatusBar />
      <Routes />
    </>
  );
}