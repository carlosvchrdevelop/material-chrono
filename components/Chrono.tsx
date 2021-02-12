import React, { useState } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { parseMillis, parseTime } from '../lib/timer_util';
import styles, { secondaryColor, dimension } from './Chrono.styles';
import useInterval from '../hooks/useInterval';
import { useKeepAwake } from 'expo-keep-awake';

const Chrono = () => {
    const [timer, setTimer] = useState(0);
    const [paused, setPaused] = useState(true);

    const changeTime = () => !paused && setTimer((oldState) => oldState + 100);

    useKeepAwake();
    useInterval(changeTime, 100);

    const reset = () => {
        setTimer(0);
        setPaused(true);
    };

    const chronoContent = () => {
        return (
            <Text style={styles.chronoText}>
                {parseTime(timer)}
                <Text style={styles.chronoMillis}>
                    {parseMillis(timer)}
                </Text>
            </Text>
        );
    };

    const resumeResetButtons = () => {
        if(!paused) return <></>;
        return(
            <View style={styles.resumeResetContainer}>
                <TouchableHighlight
                    onPress={() => setPaused(false)}
                    style={styles.resumeResetBtn}
                    underlayColor={secondaryColor}
                >
                    <Entypo name="controller-play" size={dimension/5.5} style={styles.resumeResetBtnTextResume} />
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => setTimer(0)}
                    style={styles.resumeResetBtn}
                    underlayColor={secondaryColor}
                >
                    <Entypo name="ccw" size={dimension/7} style={styles.resumeResetBtnTextReset} />
                </TouchableHighlight>
            </View>
        );
    }

    return (<>
        <TouchableHighlight 
            onPress={() => setPaused(true)}
            style={[styles.chronoContainer, {backgroundColor: paused ? secondaryColor : '#ffffff'}]}
            underlayColor={secondaryColor}
        >
            {chronoContent()}
        </TouchableHighlight>
        {resumeResetButtons()}</>
    );
}

export default Chrono;