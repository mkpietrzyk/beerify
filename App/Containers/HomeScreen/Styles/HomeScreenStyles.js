import {StyleSheet} from "react-native";
import {Colors, Fonts} from '../../../Theme';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.main,
    },
    title: {
        fontSize: Fonts.size.title,
        textAlign: 'center',
        fontWeight: '700',
        margin: 10,
        color: Colors.secondary
    }
});

export default styles