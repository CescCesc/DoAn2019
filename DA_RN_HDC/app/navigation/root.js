import MainApp from "../component/mainApp/index";
import CameraOpen from '../component/Camera/CameraOpen';
import ImagePicker from '../component/ImagePicker/index';
import ShowImage from '../component/Camera/ShowImage';
import { createStackNavigator } from 'react-navigation';


export const RootStack = createStackNavigator(
    {
        MainApp: MainApp,
        CameraOpen: CameraOpen,
        ImagePicker: ImagePicker,
        ShowImage: ShowImage,
    },
    {
        initialRouteName: 'MainApp',
        headerMode: 'none',
    }
);