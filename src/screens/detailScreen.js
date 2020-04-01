import React, {Component} from 'react';
import {Text, View, Button, TextInput} from 'react-native';
import {styles} from '../styles/detailStyle';
import {firebase} from '@react-native-firebase/database';
const firebaseConfig = {
  apiKey: 'AIzaSyAe8ymZ9TAAkZLezuMIzNSUT76SXHYDJUA',
  authDomain: 'samp-91a33.firebaseapp.com',
  databaseURL: 'https://samp-91a33.firebaseio.com',
  projectId: 'samp-91a33',
  storageBucket: 'samp-91a33.appspot.com',
  messagingSenderId: '657834171984',
  appId: '1:657834171984:web:7c73faf9df49ed1428fb55',
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default class Detail extends Component {
  writeuserdata(name, age) {
    firebase
      .database()
      .ref('entry/')
      .push({
        name,
        age,
      })
      .then(data => {
        console.log('data', data);
      })
      .catch(error => {
        console.log('error', error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="ENTER NAME"
          onChangeText={name => this.setState({name})}
          style={styles.textstyle}
        />
        <TextInput
          placeholder="ENTER AGE"
          onChangeText={age => this.setState({age})}
          style={styles.textstyle}
        />
        <Button
          title="SAVE"
          onPress={() => this.writeuserdata(this.state.name, this.state.age)}
        />
      </View>
    );
  }
}
