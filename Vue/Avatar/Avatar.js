import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Alert, ScrollView, Text } from 'react-native';

export default class Avatar extends React.Component {
    render() {
      return (
        <View > 
            <TouchableOpacity>
                <Image source={{uri: this.props.avatar_path}} style={styles.touchable}/>         
            </TouchableOpacity>
        </View>
      );
    }
  }


  const styles = StyleSheet.create({
    boxStyle: {
      height: 200, 
      width: '40%', 
      margin: 5,
    },
    touchable: {
        height: '70%',
        width: '100%',
        justifyContent: 'center'
    },
    vote_button: {
        height: 40, 
        width: '100%', 
        marginTop: 10
    },
    text : {
      textAlign: 'center',
      width: '100%',
    }
  });