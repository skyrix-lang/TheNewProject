/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {FunctionComponent, useEffect, useState} from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import {HelloText} from './src/components/HelloText';

const message = Platform.select({
  android: 'Une application Android conçue avec React Native',
  ios: 'Une application iOS conçue avec React Native',
  web: 'Une application Web conçue avec React Native Web',
});

const App: FunctionComponent = () => {
  const [t, setT] = useState(0);

  useEffect(() => {
    //setInterval(() => setT(state => ({ t: state.t + 0.1 })), 1000 / 60);
    setInterval(
        () => setT(t + 0.1 ),
        1000 / 60
    );
  });

    const translateY = Math.sin(t) * 15;
    const opacity = (Math.sin(t / 2) + 1) / 2;
    return (
        <View style={styles.container}>
          <HelloText
              text="Open up App.tsx to start working on your app!"
              color="#000"
          />
          <Image
              source={require('./party.png')}
              style={[styles.image, { transform: [{ translateY }] }]}
          />
          <Text style={[styles.text, { opacity }]}>{message}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    margin: 40,
    textAlign: 'center',
    fontSize: 20,
    color: '#333344',
  },
  image: {
    width: 80,
    height: 80,
  },
});

export default App;
