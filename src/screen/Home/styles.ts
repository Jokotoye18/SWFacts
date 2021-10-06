import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  planet: {
    fontSize: 40,
    fontWeight: '700',
    color: '#000',
  },
  episodes: {
    flexDirection: 'row',
    marginTop: 10,
  },
  episode: {
    fontSize: 25,
    paddingRight: 5,
    fontWeight: '500',
    color: '#000',
  },
});
