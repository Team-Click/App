// App.js
import React from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.projectName}>프로젝트 제목(미정)</Text>
      <Text style={styles.subtitle}>세종대학교 시간표 협업 사이트</Text>

      <Image
      source={require('./asset/images/세종대마크.png')} // 이미지 확장자가 .png임을 가정
      style={styles.image}
      />

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.buttonText}>로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.buttonText}>회원 가입</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.buttonText}>로그인 없이 시작하기</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>&copy;Team Click</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 60,
  },
  projectName: {
    fontSize: 60,
    color: '#b93234',
    fontFamily: 'SMUSnowflake-Bold',
    textAlign: 'center',
    marginTop: 60,
  },
  subtitle: {
    color: '#b93234',
    fontSize: 35,
    textAlign: 'center',
    fontFamily: 'SMUSnowflake-Bold',
    marginBottom: 30,
  },
  image: {
    width: 200,
    height: 200,
  },
  buttons: {
    marginTop: 40,
  },
  startButton: {
    width: 250,
    height: 45,
    borderRadius: 10,
    borderColor: '#b93234',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#b93234',
    fontSize: 15,
    fontFamily: 'SMUSnowflake-Bold',
  },
  footer: {
    textAlign: 'center',
    marginTop: 100,
    color: '#333',
  },
});

export default App;
