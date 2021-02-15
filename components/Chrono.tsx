import React, { useState } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { parseDays, parseMillis, parseTime } from '../lib/timer_util';
import styles, { dimension, lightPressColor, darkPressColor, lightPressButtonPadBgColor, darkPressButtonPadBgColor } from './Chrono.styles';
import useInterval from '../hooks/useInterval';
import { useKeepAwake } from 'expo-keep-awake';

export interface ChronoProps {
    darkMode: boolean
}

const Chrono = ({darkMode}:ChronoProps) => {
    const [timer, setTimer] = useState(0);
    const [paused, setPaused] = useState(true);
    const [absoluteTime, setAbsoluteTime] = useState(Date.now());
    const myStyles = styles(paused, darkMode);

    const changeTime = () => {
        const currentTime = Date.now();
        const deltaTime = currentTime - absoluteTime;
        !paused && setTimer((oldState) => oldState + deltaTime);
        setAbsoluteTime(currentTime);
    }

    useKeepAwake();
    useInterval(changeTime, 100);

    const chronoContent = () => {
        return (
            <Text style={myStyles.chronoText}>
                {parseTime(timer)}
                <Text style={myStyles.chronoMillis}>
                    {parseMillis(timer)}
                </Text>
            </Text>
        );
    };

    const resumeResetButtons = () => {
        if(!paused) return <></>;
        return(
            <View style={myStyles.resumeResetContainerParent} >
                <View style={myStyles.resumeResetContainer}>
                    <TouchableHighlight
                        onPress={() => setPaused(false)}
                        style={myStyles.resumeResetBtn}
                        underlayColor={darkMode ? darkPressButtonPadBgColor : lightPressButtonPadBgColor}
                    >
                        <Entypo name="controller-play" size={dimension/5.5} style={myStyles.resumeResetBtnTextResume} />
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => setTimer(0)}
                        style={myStyles.resumeResetBtn}
                        underlayColor={darkMode ? darkPressButtonPadBgColor : lightPressButtonPadBgColor}
                    >
                        <Entypo name="ccw" size={dimension/7} style={myStyles.resumeResetBtnTextReset} />
                    </TouchableHighlight>
                </View>
            </View>
        );
    };

    return (
        <>
            <TouchableHighlight 
                onPress={() => setPaused(true)}
                style={myStyles.chronoContainer}
                underlayColor={darkMode ? darkPressColor : lightPressColor}
            >
                <View style={myStyles.dateTimeContainer}>
                    <Text style={myStyles.days}>{parseDays(timer)}</Text>
                    {chronoContent()}
                </View>
            </TouchableHighlight>
            {resumeResetButtons()}
        </>
    );
}

export default Chrono;