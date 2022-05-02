import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';


const GoalItem = props => {
    return (
        <TouchableOpacity  onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem} on>
                <Text >{props.title} </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 11,
        marginVertical: 5,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 2,
        borderBottomRightRadius: 16,
        borderBottomLeftRadius: 16,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        elevation: 5
    }

});
export default GoalItem;