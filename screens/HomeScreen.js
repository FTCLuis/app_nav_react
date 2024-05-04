import React from "react";
import { Button, Text, View } from "react-native-web"; 

function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button
                title="Ir para Detalhes"
                onPress={() => navigation.navigate('Details')}
            />
    </View>

    );
}

const styles = {
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    } 
}

export default HomeScreen;