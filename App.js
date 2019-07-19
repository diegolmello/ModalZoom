import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert, Image, Scroll, SafeAreaView} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class ModalExample extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <SafeAreaView>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
              maximumZoomScale={2}
              minimumZoomScale={1}
              style={{ flex: 1 }}
            >
              <Image
                style={{width: 300, height: 300}}
                source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
              />

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </ScrollView>
          </SafeAreaView>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </SafeAreaView>
    );
  }
}