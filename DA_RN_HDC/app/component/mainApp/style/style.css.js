import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d6d6d6',
    },
    txtWellCome: {
        fontSize: 20,
        marginTop: 50,
        textAlign: 'center',
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
    },
    avatar: {
        alignItems: 'center',
        marginTop: 100,
    },
    img: {
        width: 40,
        height: 40,
    },
    viewImg: {
        width: 70,
        height: 70,
        borderRadius: 70,
        borderWidth: 3,
        borderColor: '#7e7b7f',
        justifyContent: 'center',
    },
});

export default styles;