// src/Main.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Main = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sideBar}>
        <Text style={styles.sideBarText}>사이드바</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>내 스케줄 표시 영역</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  sideBar: {
    width: '15%',
    backgroundColor: '#b93234',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sideBarText: {
    color: '#fff',
    fontFamily: 'SMUSnowflake-Bold',
    fontSize: 18,
  },
  content: {
    width: '85%',
    paddingTop: 20,
    paddingHorizontal: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 24,
    fontFamily: 'SMUSnowflake-Regular',
  },
});

export default Main;
