import { TextInput, StyleSheet } from "react-native";

export default function AuthInput({ placeHolder, hideText, value, setValue }) {
    return (
        <TextInput 
            value={value} 
            onChangeText={newValue => setValue(newValue)} 
            style={styles.input} 
            placeholder={placeHolder} 
            secureTextEntry={hideText} 
        />
    );
}

const styles = StyleSheet.create({
    input: {
        marginVertical: 10,
        paddingHorizontal: 12,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#EEEEEE',
        color: '#222831',
        fontSize: 18
    },
});