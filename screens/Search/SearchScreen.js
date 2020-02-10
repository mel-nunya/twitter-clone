import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


function SearchScreen() {
    
    return(
        <View style={styles.container}>
            <Text>THIS IS MY SEARCH SCREEN</Text>
        </View>
    );

    
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#FE223E",
        justifyContent: "center",
        alignItems: "center"
    }
});

export default SearchScreen;