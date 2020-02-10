import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


function MessagesScreen() {
    
    return(
        <View style={styles.container}>
            <Text>THIS IS MY MESSAGE SCREEN</Text>
        </View>
    );

    
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#BB456B",
        justifyContent: "center",
        alignItems: "center"
    }
});

export default MessagesScreen;