/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author cuonghdc@bkav.com on 07/07/2018.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  View,
  Image,
  CameraRoll,
  StatusBar,
  BackHandler,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import requestPhotoPermission from '../../utils/requestPhotoPermission';


import styles from './style/CameraOpen.css';

export default class CameraOpen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBackCamera: true,
      isflash: true,
      images: {},
    };
    this.takePicture = this.takePicture.bind(this);
  }
  componentDidMount() {
    requestPhotoPermission(() => {
        CameraRoll.getPhotos({
            first: 1,
            // groupTypes: 'All',
            assetType: 'Photos',
        }).then((r) => {
            this.setState({images: r.edges[0]});
        }).catch(() => {});
    });
    BackHandler.addEventListener('hardwareBackPress', this.onBack);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBack);
  }

  takePicture = async() => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      CameraRoll.saveToCameraRoll(data.uri, 'photo');
      this.props.navigation.navigate('ShowImage', {uriImage: data});
    }
  };

  onBack = () => {
    this.props.navigation.goBack();
    return true;
  };

  setCameraRef = (ref) => {
    this.camera = ref;
  };

  // chuyen camera
  onSwitchCamera = () => {
      this.state.isBackCamera ? this.setState({isBackCamera: false}) : this.setState({isBackCamera: true});
  };

  // bat tat flash
  onFlashMode = () => {
      this.state.isflash ? this.setState({isflash: false}) : this.setState({isflash: true});
  };

  // an vao chon anh
  onRollPicker = () => {
    this.props.navigation.navigate('ImagePicker');
  };

  render() {
    const {isBackCamera, isflash, images} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar
          hidden={true}
        />
        <RNCamera
          ref={this.setCameraRef}
          style = {styles.preview}
          type = {
            isBackCamera ? RNCamera.Constants.Type.back : RNCamera.Constants.Type.front
          }
          flashMode={
            isflash ? RNCamera.Constants.FlashMode.on : RNCamera.Constants.FlashMode.off
          }
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
        />
        <TouchableOpacity
          style = {styles.btnBack}
          onPress = {this.onBack}
        >
          <Image
            style={{width: 30, height: 30, position: 'absolute', top: 5, left: 5}}
            source={require('./style/img/icons-multiply-filled-50.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress = {this.takePicture}
          style = {styles.capture}
        />

        <TouchableOpacity
          onPress = {this.onSwitchCamera}
          style = {styles.diffirentCamera}
        >
          <Image
            style={{width: 30, height: 30, position: 'absolute', top: 5, left: 5}}
            source={require('./style/img/icons-switch-camera-50.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress = {this.onFlashMode}
          style = {styles.FlashMode}
        >
          <Image
            style={{width: 30, height: 30, position: 'absolute', top: 5, left: 5}}
            source={isflash ?
                require('./style/img/icons-flash-on-50.png') :
                require('./style/img/icons-flash-off-50.png')
            }
          />
        </TouchableOpacity>

        <TouchableOpacity
          style = {styles.rollPicker}
          onPress = {this.onRollPicker}
        >
          { images && images.node ?
            <Image
              style = {styles.imgRollPicker}
              source = {{ uri: images.node.image.uri}}
            /> : null
          }
        </TouchableOpacity>
      </View>
    );
  }
}

CameraOpen.propTypes = {
  navigation: PropTypes.object,
  updateRouterNavigator: PropTypes.func,
};


