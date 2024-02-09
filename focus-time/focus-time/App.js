import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Platform,
  StatusBar,
} from 'react-native';
import React, { useState } from 'react';
// You can import supported modules from npm
import { Card } from 'react-native-paper';
import { colors } from './src/utils/colors';
// or any files within the Snack
import AssetExample from './src/components/AssetExample';
import { Focus } from './src/features/Focus';
import {Timer} from './src/features/Timer'

export default function App() {
  const [focusItem, setFocusItem] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      {!focusItem ? (
        <Focus addSubject={setFocusItem}/>
      ) : (
        <Timer 
          focusSubject={focusItem}
          onTimerEnd={(subject) => {
            setHistory([...history, subject])
          }}
          clearSubject={() => setCurrentSubject(null)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'android' ? StatusBar.currentHeight : 10,
    backgroundColor: colors.darkGreen,
  },
  
});

// Platform.OS === 'ios' ? 50 :100
