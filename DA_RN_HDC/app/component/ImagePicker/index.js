/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 19/04/18.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    View,
    ScrollView,
    Image,
    CameraRoll,
    TouchableOpacity,
    Platform,
    StatusBar,
    BackHandler,
} from 'react-native';
import {
    SafeAreaView,
} from 'react-navigation';
import ImagePickerItem from './ImagePickerItem';
import requestPhotoPermission from '../../utils/requestPhotoPermission';
import styles from './styles/index.css';

export default class ImagePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            selected: [],
        };
    }
    componentDidMount() {
        StatusBar.setHidden(true);
        requestPhotoPermission(() => {
            CameraRoll.getPhotos({
                first: 100,
                // groupTypes: 'All',
                assetType: 'Photos',
            }).then((r) => {
                this.setState({images: r.edges});
            }).catch(() => {});
        });
        BackHandler.addEventListener('hardwareBackPress', this.onBack);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBack);
    }
    onChooseImage = (image) => {
        const data = image.node.image;
        debugger;
        this.props.navigation.navigate('ShowImage', {uriImage: data});
    };
    // handleOnScroll = (event) => {
    //     const {type} = this.props;
    //     const {layoutMeasurement, contentOffset, contentSize} = event.nativeEvent;
    //     if(type !== 'ImagePicker') {
    //         if (layoutMeasurement.height + contentOffset.y >= contentSize.height - 200) {
    //             this.props.decorateGetListRef.getOlder();
    //         }
    //     }
    // };
    // onSending = () => {
    //     this.props.updateRouterNavigator('Conversation');
    // };
    onBack = () => {
        StatusBar.setHidden(false);
        StatusBar.setBackgroundColor(Platform.OS === 'ios' ? '#fafafa' : 'rgba(0, 0, 0, 0.20)', true);
        StatusBar.setTranslucent(true);
        StatusBar.setBarStyle('light-content', true);
        this.props.navigation.goBack();
        return true;
    };

    render() {
        const {selected, images} = this.state;
        debugger;
        return (
            <SafeAreaView style={[styles.container]}>
                <View key={'backBar'} style={styles.navigationBar}>
                    <View style={styles.itemNavigation}>
                        <TouchableOpacity
                            style={styles.btnBack}
                            onPress={this.onBack}
                        >
                            <Image
                                style={{width: 30, height: 30, justifyContent: 'center', alignItems: 'center'}}
                                source={require('./styles/images/icons-multiply-filled-50.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView style={styles.containerScroll} onScroll={this.handleOnScroll}>
                    <View style={styles.hieghtTop} />
                        <View style={styles.imageGrid}>
                        {
                            images.length > 0 && images.map((image) => {
                                // let countImage = null;
                                // if(selected.length > 0) {
                                //     selected.forEach((item, index1) => {
                                //         if(item.image.uri === image.node.image.uri) {
                                //             countImage = index1 + 1;
                                //         }
                                //     });
                                // }
                                return (
                                    <ImagePickerItem
                                        key = {image}
                                        image = {image}
                                        onChooseImage = {this.onChooseImage}
                                    />
                                );
                            })
                        }
                    </View>
                </ScrollView>
                {/* {
                    selected.length > 0 ?
                        (
                        <View style={{position: 'absolute', bottom: 10, right: 10}}>
                            <ButtonImage
                                style={{width: 55, height: 55}}
                                styleTouchable={{justifyContent: 'center'}}
                                imageURL={require('../styles/images/icon_Sendding_Image_Ios.png')}
                                onPress={this.onSending}
                            />
                            <View style={styles.countImage}>
                                <Image
                                    style={{width: 30, height: 30, position: 'absolute', top: 0, right: 0, zIndex: 105}}
                                    source={require('../styles/images/icon_Circle_Check_Ios.png')}
                                />
                                <View style={{width: 30, height: 30, position: 'absolute', top: 0, right: 0, zIndex: 106, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{color: 'white'}}>
                                        {selected.length}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        ) : null
                } */}
            </SafeAreaView>
        );
    }
}

ImagePicker.propTypes = {
    navigation: PropTypes.object,
    threadId: PropTypes.object,
    selected: PropTypes.array,
    uploadImage: PropTypes.func,
    updateRouterNavigator: PropTypes.func,
    type: PropTypes.string,
    idMessPhoto: PropTypes.List,
    decorateGetListRef: PropTypes.func,
};
