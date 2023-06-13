/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, ImageBackground, Text} from 'react-native';
import {Button, Header, Profile, ProfileItem, Gap} from '../../components';
import {colors, fonts} from '../../utils';

const News = ({navigation, route}) => {
  const dataNews = route.params;

  return (
    // console.log(dataNews)
    <View style={styles.page}>
      <Header title="News" onPress={() => navigation.goBack()} />
      <ImageBackground source={{uri: dataNews.image}} style={styles.background}>
        <View style={styles.child}>
          <Text style={styles.title}>{dataNews.title}</Text>
          <Text style={styles.desc}>{ dataNews.date }</Text>
        </View>
      </ImageBackground>
      <Gap height={10} />
      <ProfileItem value={dataNews.body} />
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  action: {paddingHorizontal: 40, paddingTop: 23},
  background: {height: 240, paddingTop: 30},
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    marginTop: 6,
    textAlign: 'center',
  },
  child: {
    paddingTop: 80,
    flex: 1,
    marginTop: -30,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
