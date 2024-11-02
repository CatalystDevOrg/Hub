/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
  Linking
} from 'react-native';

import Button from './components/button'

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function openBlog() {
  Linking.openURL("https://blog.jdev.eu.org")
}

function App(): React.JSX.Element {
  return (
    <>
      <Text style={styles.Heading}>Catalyst Hub</Text>
      <Button title="Blog" onPress={openBlog}></Button>
    </>
  );
}

const styles = StyleSheet.create({
  Heading: {
    fontSize: 44,
    color: 'white',
    textAlign: 'center',
    marginTop: 12
  },
  Text: {
    fontSize: 24,
    textAlign: 'center',
    color: 'white'
  }
});

export default App;
