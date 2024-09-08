import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  question: {
    borderRadius: 20,
    borderColor: '#fff',
    borderWidth: 1,
    padding: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 10000,
      height: 20,
    },
    shadowOpacity: 0.5,
    shadowRadius: 7.62,
    elevation: 20,
  },
  text: {
    overflow: 'hidden',
  },
  metaInfo: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 5,
  },
});
