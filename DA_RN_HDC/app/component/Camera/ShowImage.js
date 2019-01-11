/* eslint-disable react/prop-types */
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
  StatusBar,
  Text,
  CameraRoll,
} from 'react-native';

import styles from './style/CameraOpen.css';

export default class ShowImage extends Component {
    constructor(props) {
        super(props);
    }

    onBack = () => {
        this.props.navigation.goBack();
    };

    onSend = () => {
        // const {threadId} = this.props;
        // const images = {
        //     group_name: 'DCIM',
        //     image: {
        //         height: 480,
        //         uri: this.props.navigation.state.params.uriImage.uri,
        //         width: 560,
        //     },
        //     type: 'image/jpeg',
        // };
        // this.props.uploadImage([images], threadId);
        // this.props.updateRouterNavigator('Conversation');
    };

    onSave = () => {
    };

    render() {
        const {uriImage} = this.props.navigation.state.params;
        debugger;
        return(
            <View>
                <StatusBar hidden = {true} />
                <Image
                    style = {{width: '100%', height: '100%'}}
                    source = {{ uri: uriImage.uri}}
                />

                <TouchableOpacity
                    style = {styles.btnBack}
                    onPress = {this.onBack}
                >
                    <Image
                        style={{width: 30, height: 30, position: 'absolute', top: 5, left: 5}}
                        source={
                        require('./style/img/icons-multiply-filled-50.png')
                        }
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style = {styles.btnSend}
                    onPress = {this.onSend}
                >
                    <Image
                        style={{width: 50, height: 50, position: 'absolute', top: 10, left: 10}}
                        source={require('./style/img/icon_Sendding_Image_Ios.png')}
                    />
                </TouchableOpacity>
{/* 
                <TouchableOpacity
                    style = {styles.btnSave}
                    onPress = {this.onSave}
                >
                    <Image
                        style={{width: 25, height: 25, position: 'absolute', top: 5, left: 12}}
                        source={
                            require('./style/img/icons-save-Picture-50.png')
                        }
                    />
                    <Text style = {{color: '#ffffff', top: 35, fontSize: 11, position: 'absolute', left: 12}}> Lưu </Text>
                </TouchableOpacity> */}
            </View>
        );
    }
}

ShowImage.PropTypes = {
    navigation: PropTypes.object,
    updateRouterNavigator: PropTypes.func,
    uploadImage: PropTypes.func,
};

