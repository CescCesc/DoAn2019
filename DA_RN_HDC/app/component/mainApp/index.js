/**
 * Đồ án Học Viện Kỹ Thuật Quân sự
 * React-native
 * Hoàng Đình Cường
 * CPNM 13
 * 10/12/2018
 * 
 */

import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, BackHandler, Alert} from 'react-native';
import styles from './style/style.css';
export default class Main extends Component {

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onExit);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onExit);
    }
    onRollPicker = () => {
        this.props.navigation.navigate('ImagePicker');
    }
    onOpenCamera = () => {
        this.props.navigation.navigate('CameraOpen');
    }
    onExit = () => {
        Alert.alert(
            'Thoát ứng dụng?',
            'Bạn có chắc chắn không?',
            [
                {text: 'Cancel', onPress: () => {}},
                {text: 'OK', onPress: () => {BackHandler.exitApp();}},
            ]
        );
        return true;
    }
    render() {
        debugger;
        return (
          <View style={styles.container}>
            <View style = {styles.avatar}>
                <Image
                    source = {require('./style/image/avatar-1577909_960_720.png')}
                    style = {{width: 150, height: 150}}
                />
            </View>
            <Text style = {styles.txtWellCome}>Chọn Phương Thức Nhập Ảnh</Text>
            <View style = {{marginHorizontal: 70}}>
                <View style = {styles.icons}>
                    <View style = {styles.viewImg}>
                        <TouchableOpacity
                            style = {{justifyContent: 'center', alignItems: 'center'}}
                            onPress = {this.onRollPicker}
                        >
                            <Image
                                source = {require('./style/image/icons8-photo-gallery-filled-50.png')}
                                style = {styles.img}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.viewImg}>
                        <TouchableOpacity
                            style = {{justifyContent: 'center', alignItems: 'center'}}
                            onPress = {this.onOpenCamera}
                        >
                            <Image
                                source = {require('./style/image/icons8-slr-back-side-filled-50.png')}
                                style = {styles.img}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.viewImg}>
                        <TouchableOpacity
                            style = {{justifyContent: 'center', alignItems: 'center'}}
                            onPress = {this.onExit}
                        >
                            <Image
                                source = {require('./style/image/icons8-delete-filled-50.png')}
                                style = {styles.img}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
          </View>
        );
    }
}
