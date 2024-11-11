// src/SignUp.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignUp = () => {
  const [studentId, setStudentId] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSignUp = () => {
    setMessage('회원가입 시도 중입니다...');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>회원가입</Text>

      <Text style={styles.label}>학번</Text>
      <TextInput
        style={styles.input}
        value={studentId}
        onChangeText={setStudentId}
        placeholder="학번을 입력하세요"
      />

      <Text style={styles.label}>이름</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="이름을 입력하세요"
      />

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>회원가입</Text>
      </TouchableOpacity>

      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontFamily: 'SMUSnowflake-Bold',
    color: '#b93234',
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 5,
    fontFamily: 'SMUSnowflake-Regular',
    color: '#333',
  },
  input: {
    width: '90%',
    padding: 10,
    marginBottom: 15,
    borderWidth: 1.5,
    borderColor: '#ddd',
    borderRadius: 4,
    fontSize: 16,
  },
  button: {
    width: '95%',
    padding: 15,
    backgroundColor: '#b93234',
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'SMUSnowflake-Bold',
  },
  message: {
    color: '#b93234',
    fontFamily: 'SMUSnowflake-Regular',
    marginTop: 20,
  },
});

export default SignUp;
