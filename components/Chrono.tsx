import React, { useState, useEffect, useRef } from 'react';
import { Platform, Text, TouchableHighlight, TouchableNativeFeedback } from 'react-native';
import { parseMillis, parseTime } from '../lib/timer_util';
import styles, { secondaryColor } from './Chrono.styles';
import useInterval from '../hooks/useInterval';

const Chrono = () => {
    const [timer, setTimer] = useState(0);
    const [paused, setPaused] = useState(true);

    const changeTime = () => !paused && setTimer((oldState) => oldState + 100);

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

    return (
        <TouchableHighlight 
            onPress={() => setPaused((isPaused) => !isPaused)}
            onLongPress={reset}
            style={styles.chronoContainer}
            underlayColor={secondaryColor}
        >
            {chronoContent()}
        </TouchableHighlight>
    );
}

export default Chrono;