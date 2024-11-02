import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function Button(props) {
    const { onPress, title = 'Save' } = props;
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#a855f7',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 8,
        width: 256,
        height: 46,
    },
    text: {
        fontSize: 24,
        textAlign: 'center',
        color: 'white'
    },
});
