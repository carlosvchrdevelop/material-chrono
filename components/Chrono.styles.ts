import { Dimensions, StyleSheet } from 'react-native';

export const dimension = Math.min(Dimensions.get('screen').height, Dimensions.get('screen').width);
export const primaryColor = '#424242';
export const secondaryColor = '#F5F5F5';
const resetColor = '#FF5A00';
const resumeColor = '#1D2F43';

const styles = StyleSheet.create({
    chronoContainer: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: dimension,
        height: dimension * 1.08,
        justifyContent: 'center',
        width: dimension * 1.08,
        elevation: 4,
    },
    chronoText: {
        color: primaryColor,
        fontSize: dimension/5,
        textAlign: 'center'
    },
    chronoMillis: {
        color: primaryColor,
        fontSize: 24,
        marginLeft: 6,
        textAlign: 'center'
    },
    resumeResetContainer: {
        backgroundColor: '#ffffff',
        borderRadius: dimension,
        display: 'flex',
        elevation: 8,
        flexDirection: 'row',
        padding: 4,
        position: 'absolute',
        top: Dimensions.get('window').height / 2 - dimension / 10 + dimension / 4,
        right: Dimensions.get('window').width / 2 - dimension / 5 - 4
    },
    resumeResetBtn: {
        borderRadius: dimension / 10,
        margin: 2
    },
    resumeResetBtnTextResume: {
        color: resumeColor,
        margin: (dimension / 5 - dimension / 5.5) / 2
    },
    resumeResetBtnTextReset: {
        color: resetColor,
        margin: (dimension / 5 - dimension / 7) / 2
    }
});

export default styles;