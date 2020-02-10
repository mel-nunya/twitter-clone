import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


function NotificationsScreen() {
    
    return(
        <View style={styles.container}>
            <Text>THIS IS MY NOTIFICATIONS SCREEN</Text>
        </View>
    );

    
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#0E456E",
        justifyContent: "center",
        alignItems: "center"
    }
});

export default NotificationsScreen;