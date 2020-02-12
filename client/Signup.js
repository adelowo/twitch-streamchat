import React, {Component} from 'react';
import {Alert, Button, TextInput, View, StyleSheet} from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.email}
          onChangeText={email => this.setState({email: email.trim()})}
          placeholder={'Email address'}
          style={styles.input}
        />

        <TextInput
          value={this.state.password}
          onChangeText={password => this.setState({password: password.trim()})}
          placeholder={'Password'}
          style={styles.input}
          secureTextEntry={true}
        />
        <Button
          title={'Login'}
          style={styles.input}
          onPress={() => {
            this.props.cb(this.state);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});
