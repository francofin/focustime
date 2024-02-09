import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import {RoundedButton} from '../components/RoundedButton';


export const Focus = ({addSubject}) => {
  const [focusItem, setFocusItem] = useState(null);
  console.log(focusItem);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
        style = {styles.textInput}
          label="What would you like to focus on"
          onChangeText={setFocusItem}
        />
        <View style = {styles.button} >
        <RoundedButton title="+" onPress={() => addSubject(focusItem)}/>
        
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button:{
    justifyContent: 'center'
  },
  textInput:{
    flex:1,
    marginRight: 10,
  },
  inputContainer: {
    padding: 25,
    justifyContent: 'top',
    flexDirection:'row'
  }
});
