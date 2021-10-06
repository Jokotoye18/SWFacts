import React from 'react';
import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';

import {images} from '../../constants';
import {useHomeHelper} from '../../hooks';
import {styles} from './styles';

export const Home = () => {
  const {name, films} = useHomeHelper();

  return (
    <SafeAreaView style={styles.wrapper}>
      <Image source={images.bgImg} style={StyleSheet.absoluteFillObject} />
      <View style={styles.container}>
        <Text style={styles.planet}>{name}</Text>
        {films.length > 0 ? (
          <View style={styles.episodes}>
            <Text style={styles.episode}>Episodes</Text>
            {films.map(filmEpisodeId => {
              const {episodeID} = filmEpisodeId;
              const isLastItem = films.slice(-1)[0].episodeID === episodeID;

              return (
                <View key={episodeID}>
                  <Text style={styles.episode}>
                    {isLastItem ? `and ${episodeID}` : `${episodeID},`}
                  </Text>
                </View>
              );
            })}
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
};
