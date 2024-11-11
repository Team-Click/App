// src/Login.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Login = () => {
  const [studentId, setStudentId] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    // 서버 통신 로직을 여기에 추가할 수 있습니다.
    setMessage('로그인 시도 중입니다...');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>로그인</Text>

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

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>로그인</Text>
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
    fontFamily: 'SMUSnowflake-Bold', // 추가된 폰트 이름
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

export default Login;
