import React, {Component} from 'react';
import {SafeAreaView, View} from 'react-native';
import {
  Chat,
  Channel,
  MessageList,
  MessageInput,
} from 'stream-chat-react-native';

export default class ChatView extends Component {
  render() {
    const channel = this.props.chatClient.channel('messaging', 'General');
    channel.watch();

    return (
      <Chat client={this.props.chatClient}>
        <Channel channel={channel}>
          <View style={{display: 'flex', height: '100%'}}>
            <MessageList />
            <MessageInput />
          </View>
        </Channel>
      </Chat>
    );
  }
}
