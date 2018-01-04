import {StyleSheet} from 'react-native'
import {Colors} from '../../../Theme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.main,
    },
    avatarImage: {
        resizeMode: 'contain',
        width: 150,
        height: 150,
    },
    avatarContainer: {
        width: 150,
        height: 150,
    },
    avatarOverlayContainer: {
        backgroundColor: 'rgba(0,0,0,0)'
    },
});

export default styles;
