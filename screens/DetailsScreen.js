import React from "react";
import { View, Text, Button } from "react-native-web";


function DetailsScreen({navigation}) {
    return (
        <View styles={styles.container}>
            <Text>Details Screen</Text>
            <Button
                title="Detalhes"
                onPress={() => navigation.goBack()}
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
};

export default DetailsScreen;