import React, { useState, useEffect, useRef } from 'react';
import { Platform, Text, TouchableHighlight, TouchableNativeFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { parseMillis, parseTime } from '../lib/timer_util';
import styles from './Chrono.styles';
import useInterval from '../hooks/useInterval';

const Chrono = () => {
    const [timer, setTimer] = useState(0);
    const [paused, setPaused] = useState(false);

    const changeTime = () => !paused && setTimer((oldState) => oldState + 100);

    useInterval(changeTime, 100);

    const reset = () => {
        setTimer(0);
        setPaused(true);
    };

    const chronoContent = () => {
        if (timer === 0) {
            return <Ionicons name='timer' size={172} color='white' />;
        }else{
            return (
                <Text style={styles.chronoText}>
                    {parseTime(timer)}
                    <Text style={styles.chronoMillis}>
                        {parseMillis(timer)}
                    </Text>
                </Text>
            );
        }
    };

    const timerComponent = () => {
        if(Platform.OS === 'android'){
            return (
                <TouchableNativeFeedback 
                    onPress={() => setPaused((isPaused) => !isPaused)}
                    onLongPress={reset}
                    style={styles.chronoContainer}
                >
                    {chronoContent()}
                </TouchableNativeFeedback>
            );
        }else{
            return (
                <TouchableHighlight 
                    onPress={() => setPaused((isPaused) => !isPaused)}
                    onLongPress={reset}
                    style={styles.chronoContainer}
                >
                    {chronoContent()}
                </TouchableHighlight>
            );
        }
    };

    return <>{timerComponent()}</>;
}

export default Chrono;