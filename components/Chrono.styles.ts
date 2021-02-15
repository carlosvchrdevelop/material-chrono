import { Dimensions, StyleSheet } from 'react-native';

export const dimension = 1.08 * Dimensions.get('screen').width;
const primaryTextSize = dimension / 5;
const secondaryTextSize = dimension / 15;
const millisTextSize = dimension / 20;

// light mode
const lightModeTextColor = '#424242';
const lightResetColor = '#FF5A00';
const lightResumeColor = '#1D2F43';
export const lightPressColor = '#ededed';
const lightChronoBgColor = '#ffffff';
const lightButtonPadBgColor = '#ffffff';
const lightPausedChronoBgColor = '#ffffff';
export const lightPressButtonPadBgColor = '#ededed';

// dark mode
const darkModeTextColor = '#dedede';
const darkResetColor = '#ff9b64';
const darkResumeColor = '#7197c3';
export const darkPressColor = '#232323';
const darkChronoBgColor = '#272727';
const darkButtonPadBgColor = '#2e2e2e';
const darkPausedChronoBgColor = '#272727';
export const darkPressButtonPadBgColor = '#2c2c2c';

const styles = (paused: boolean = false, darkMode: boolean = true) => StyleSheet.create({
    chronoContainer: {
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: dimension / 2,
        height: dimension,
        justifyContent: 'center',
        width: dimension,
        elevation: 4,
        backgroundColor: paused ? (darkMode ? darkPausedChronoBgColor : lightPausedChronoBgColor) : (darkMode ? darkChronoBgColor : lightChronoBgColor),
    },
    dateTimeContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    days: {
        color: darkMode ? darkModeTextColor : lightModeTextColor,
        fontSize: secondaryTextSize,
        textAlign: 'center',
    },
    chronoText: {
        color: darkMode ? darkModeTextColor : lightModeTextColor,
        fontSize: primaryTextSize,
        textAlign: 'center',
        marginTop: 0,
        marginBottom: secondaryTextSize,
    },
    chronoMillis: {
        color: darkMode ? darkModeTextColor : lightModeTextColor,
        fontSize: millisTextSize,
        marginLeft: 6,
        textAlign: 'center'
    },
    resumeResetContainerParent: {
        display: 'flex',
        elevation: 4,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0
    },
    resumeResetContainer: {
        backgroundColor: darkMode ? darkButtonPadBgColor : lightButtonPadBgColor,
        borderRadius: dimension,
        display: 'flex',
        elevation: 4,
        flexDirection: 'row',
        padding: 4,
        width: (dimension / 5 + 4 + 4) * 2,
        marginTop: primaryTextSize * 1.5 + (dimension / 5 + 8),
    },
    resumeResetBtn: {
        borderRadius: dimension / 10,
        margin: 2
    },
    resumeResetBtnTextResume: {
        color: darkMode ? darkResumeColor : lightResumeColor,
        margin: (dimension / 5 - dimension / 5.5) / 2
    },
    resumeResetBtnTextReset: {
        color: darkMode ? darkResetColor : lightResetColor,
        margin: (dimension / 5 - dimension / 7) / 2
    },
    bgImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
    },
});

export default styles;