/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 23/04/18.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity, Text, Animated, Dimensions } from 'react-native';

import styles from './styles/index.css';

class ImagePickerItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opacity: new Animated.Value(0),
        };
    }
    componentDidMount() {
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 1000,
        }).start();
    }
    onChooseImage = () => {
        const {image} = this.props;
        this.props.onChooseImage(image);
    }
    render() {
        const {image} = this.props;
        const {opacity} = this.state;
        const screenWidth = Dimensions.get('window').width;
        const widthImage = ((screenWidth - (screenWidth * (1.2 * 8 / 100)))) / 3;
        const uri =  image.node.image.uri;
        debugger;
        return (
            <View style={{flexDirection: 'column', marginBottom: 10}}>
                <TouchableOpacity
                    // style={styleImageItem}
                    onPress={this.onChooseImage}
                >
                    <View style={{position: 'relative', backgroundColor: '#000000'}}>
                        <Animated.Image
                            source={{ uri: uri }}
                            style={[styles.image, {width: widthImage, height: widthImage}, {opacity: opacity}]}
                            resizeMode={'cover'}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

ImagePickerItem.propTypes = {
    image: PropTypes.string,
    onPress: PropTypes.func,
    countImage: PropTypes.number,
    type: PropTypes.string,
    urlImage: PropTypes.string,
    onSelectImage: PropTypes.func,
};

export default ImagePickerItem;
