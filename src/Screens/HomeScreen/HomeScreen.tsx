import {View} from 'react-native';
import React, {FC} from 'react';

import Quote from '../../components/Quote/Quote';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './HomeScreen.stylesheet';

const HomeScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Quote />
    </View>
  );
};

export default HomeScreen;
