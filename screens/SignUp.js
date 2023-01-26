import { StyleSheet, Text, View, Image } from 'react-native';
import { useState } from 'react';
import AuthButton from '../components/AuthButton';
import AuthInput from '../components/AuthInput';

const Logo = require('../assets/favicon.png');

export default function SignUp() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <View style={styles.inputContainer}>
        {console.log(name)}
        <AuthInput placeHolder="Name" hideText={false} value={name} setValue={setName} />
        <AuthInput placeHolder="Email" hideText={false} value={email} setValue={setEmail} />
        <AuthInput placeHolder="Password" hideText={true} value={password} setValue={setPassword} />
        <AuthInput placeHolder="Re-enter Password" hideText={true} value={confirmPassword} setValue={setConfirmPassword} />
      </View>
      <AuthButton text="Register"/>
      <Text style={styles.signin}>Already registered. Sign In</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 35,
    padding: 0
  },
  logo: {
    position: 'absolute',
    alignSelf: 'center',
    top: 110,
  },
  inputContainer: {
    marginBottom: 70,
    marginTop: 220,
  },
  signin: {
    alignSelf: 'center',
    margin: 12
  }
});
