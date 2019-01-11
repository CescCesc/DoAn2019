/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 20/04/18.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

'use strict';

import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        width: 'auto',
        paddingLeft: '1.2%',
        paddingRight: '1.2%',
    },
    containerScroll: {
        flex: 1,
        backgroundColor: '#000000',
    },
    imageGrid: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    imageItemCheck: {
        opacity: 0.4,
    },
    imageItem: {
        marginRight: 3,
    },

    scrollUploadImage: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
    },
    oneImage: {
    },
    selectedImage: {
        opacity: 0.5,
    },
    image: {
        zIndex: 99,
        marginLeft: '1.2%',
        marginRight: '1.2%',
    },
    navigationBar: {
        position: 'absolute',
        top: 0,
        flex: 1,
        alignSelf: 'stretch',
        right: 0,
        left: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        zIndex: 100,
        ...Platform.select({
            ios: {
                height: 40,
            },
            android: {
                height: 56,
            },
        }),
    },
    hieghtTop: {
        ...Platform.select({
            ios: {
                height: 56,
            },
            android: {
                height: 56,
            },
        }),
    },
    btnBack: {
        position: 'absolute',
        // flexDirection: 'row',
        // alignItems: 'center',
        // paddingLeft: Platform.OS === 'ios' ? 12 : 16,
        width: 40,
        height: 40,
        left: 15,
        top: 15,
    },
    itemNavigation: {
        flexDirection: 'row',
    },
    textHeader: {
        fontWeight: '500',
        fontSize: 15,
        justifyContent: 'center',
        ...Platform.select({
            ios: {
                color: 'white',
                paddingLeft: 75,
            },
            android: {
                paddingLeft: 37,
                color: 'white',
            },
        }),
    },
    btnCheckImage: {
        position: 'absolute',
        top: 10,
        right: 10,
        width: 30,
        height: 30,
        zIndex: 107,
    },
    btnTick: {
        width: 30,
        height: 30,
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 99,
    },
    countImage: {
        position: 'absolute',
        top: -10,
        right: -2,
        width: 30,
        height: 30,
        zIndex: 107,
    },
    notifi: {
        textAlign: 'center',
        fontSize: 16,
        color: '#ffff',
        fontWeight: '100',
    },
});

export default styles;
