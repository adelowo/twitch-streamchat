import React, {Component} from 'react';
import {Alert, StyleSheet, View, SafeAreaView} from 'react-native';
import {StreamChat} from 'stream-chat';
import Signup from './Signup';
import VideoPlayer from './VideoPlayer';
import Chat from './Chat';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      id: '',
    };

    this.chatClient = new StreamChat('u8x26aqytmec');
  }

  onLoginCallBack = user => {
    if (user.email.length === 0) {
      Alert.alert('Login', 'Please provide your email');
      return;
    }

    if (user.password.length === 0) {
      Alert.alert('Login', 'Please provide your password');
      return;
    }

    user = {
      ...user,
      name: {
        first: 'Bot',
        last: 'Last Name',
      },
    };

    axios
      .post('http://localhost:5200/v1/auth/init', user, {
        headers: {Authorization: 'ieueojdkdj39fkddd'},
      })
      .then(res => {
        console.log(res.data.token);
        this.chatClient.setUser(
          {
            id: res.data.user._id,
            username: res.data.user.email,
            image:
              'https://stepupandlive.files.wordpress.com/2014/09/3d-animated-frog-image.jpg',
          },
          res.data.token
        );
        this.setState({
          isAuthenticated: true,
          id: res.data.user._id,
        });
      })
      .catch(err => {
        console.log(err);
        Alert.alert('Login', 'Could not log you in');
      });
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          {!this.state.isAuthenticated || this.state.currentUser === null ? (
            <View style={styles.container}>
              <Signup cb={this.onLoginCallBack} />
            </View>
          ) : (
            <View style={[{flex: 1}]}>
              <View style={{flex: 0.4}}>
                <VideoPlayer />
              </View>
              <View style={{flex: 0.6}}>
                <Chat userID={this.state.id} chatClient={this.chatClient} />
              </View>
            </View>
          )}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
