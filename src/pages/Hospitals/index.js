import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {ILHospitalBG} from '../../assets/illustration';
import {fonts, colors, showError} from '../../utils';
import {ListHospital} from '../../components';
import {DummyHospital1, DummyHospital2, DummyHospital3} from '../../assets';
import {Fire} from '../../config';

const Hospitals = ({navigation}) => {
  const [hospital, setHospital] = useState([]);

  useEffect(() => {
    getHospital();
  }, []);

  const getHospital = () => {
    Fire.database()
      .ref('hospital/')
      .once('value')
      .then(res => {
        if (res.val()) {
          const data = res.val();
          const filterData = data.filter(el => el !== null);
          setHospital(filterData);
        }
      })
      .catch(err => {
        showError(err.message);
      });
  };

  return (
    <View style={styles.page}>
      <ImageBackground source={ILHospitalBG} style={styles.background}>
        <Text style={styles.title}>Best Hospitals</Text>
        <Text style={styles.desc}>{hospital.length} tersedia</Text>
      </ImageBackground>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {hospital.map(item => {
          return (
            <ListHospital
              key={item.id}
              type={item.type}
              name={item.name}
              address={item.address}
              maps={item.maps}
              pic={item.pic}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.secondary, flex: 1},
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
  content: {
    backgroundColor: colors.white,
    borderRadius: 20,
    flex: 1,
    marginTop: -30,
    paddingTop: 14,
  },
});
