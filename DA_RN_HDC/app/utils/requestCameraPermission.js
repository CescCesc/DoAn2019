import { PermissionsAndroid } from 'react-native';

export default async function requestCameraPermission(callback) {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        'title': 'Cool Photo App Camera Permission',
        'message': 'Cool Photo App needs access to your camera ' +
                   'so you can take awesome pictures.',
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
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