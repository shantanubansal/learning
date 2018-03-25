// Import a library to help create a registerComponent

import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
// create a Component
const App = () => (
  //<Text>We are building First App. Heya!, Shantanu Here.</Text>
  <View>
      <Header headerText={'Shantanu Bansal'} />
      <AlbumList />
  </View>
  );
// Render Component to device
AppRegistry.registerComponent('albums', () => App);

//import { AppRegistry } from 'react-native';
//import App from './App';

//AppRegistry.registerComponent('albums', () => App);
