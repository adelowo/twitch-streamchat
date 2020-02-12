import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import Video from 'react-native-video';

export default class VideoPlayer extends Component {
  render() {
    return (
      <Video
        source={{
          uri:
            'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4',
        }}
        ref={ref => {
          this.player = ref;
        }}
        style={styles.backgroundVideo}
        controls={true}
      />
    );
  }
}

var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
