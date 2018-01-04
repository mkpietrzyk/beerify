import { StyleSheet } from 'react-native'
import {Colors, Fonts, Metrics} from '../../../Theme';


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.main,
        alignItems: 'center',
        flex: 1
    },
    headerView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: Metrics.paddings.basePadding,
        paddingBottom: Metrics.paddings.basePadding,
    },
    headerImage: {
        width: 150,
        height: 150,
        resizeMode: 'contain'
    },
    headerTextContainer: {
        flexDirection: 'column',
        flexGrow: 1,
        flex: 1,
    },
    header: {
        fontSize: Fonts.size.header,
        color: Colors.secondary,
        fontWeight: '600',
        paddingBottom: 5,
    },
    tagline: {
        fontStyle: 'italic',
        paddingBottom: Metrics.paddings.basePadding,
    },
    detailsContentView: {
        alignItems: 'center',
        alignSelf: 'stretch',
        paddingTop: Metrics.paddings.basePadding,
        paddingBottom: Metrics.paddings.basePadding,
    },
    detailsContentText: {
        fontSize: Fonts.size.text,
        fontStyle: 'italic',
        textAlign: 'justify',
        marginLeft: Metrics.margins.baseMargin,
        marginRight: Metrics.margins.baseMargin,
        paddingTop: Metrics.paddings.basePadding,
        paddingBottom: Metrics.paddings.basePadding
    },
    avatarImage: {
        resizeMode: 'contain',
        width: 100,
        height: 100,
    },
    avatarContainer: {
        width: 100,
        height: 100,
    },
    avatarOverlayContainer: {
        backgroundColor: 'rgba(0,0,0,0)'
    },
});

export default styles