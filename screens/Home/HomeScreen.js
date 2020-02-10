import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


function HomeScreen() {
    
    return(
        <View style={styles.container}>
            <Text>THIS IS MY HOME SCREEN</Text>
        </View>
    );

    
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#00443C",
        justifyContent: "center",
        alignItems: "center"
    }
});

export default HomeScreen;