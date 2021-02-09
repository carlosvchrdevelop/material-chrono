import { Dimensions, StyleSheet } from 'react-native';

const dimension = Math.min(Dimensions.get('screen').height, Dimensions.get('screen').width);
export const primaryColor = '#424242';
export const secondaryColor = '#F5F5F5';

const styles = StyleSheet.create({
    chronoContainer: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderColor: primaryColor,
        borderRadius: dimension,
        height: dimension * 1.08,
        justifyContent: 'center',
        width: dimension * 1.08
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
    }
});

export default styles;