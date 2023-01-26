import { Pressable, StyleSheet, Text } from 'react-native';

export default function AuthButton({ text }) {
    return (
        <Pressable style={styles.button} onPress={() => console.log('Submit')}>
            <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#222831',
        marginHorizontal: 35,
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
      },
    buttonText: {
        color: '#EEEEEE',
        fontSize: 18,
        fontWeight: 'bold'
    },
});