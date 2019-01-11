
import {PermissionsAndroid} from 'react-native';

export default async function requestPhotoPermission(callback) {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            {
                'title': 'Cool Photo App Camera Permission',
                'message': 'Cool Photo App needs access to your camera ' +
                'so you can take awesome pictures.',
            }
        );
        if (granted === true || granted === PermissionsAndroid.RESULTS.GRANTED) {
            // eslint-disable-next-line no-console
            console.log('You can use the camera');
            callback();
        } else {
            // eslint-disable-next-line no-console
            console.log('Camera permission denied');
        }
    } catch (err) {
        // eslint-disable-next-line no-console
        console.warn(err);
    }
}