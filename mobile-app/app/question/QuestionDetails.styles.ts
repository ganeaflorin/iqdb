import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: 50,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 50,
    alignItems: 'center',
    alignContent: 'center',
  },
  metaInfo: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 5,
  },
  text: {
    marginTop: 50,
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 25,
    marginBottom: 50,
  },
  button: {
    width: 160,
    paddingLeft: 10,
    paddingRight: 10,
  },
  answerSection: {},
  alignRow: {
    flexDirection: 'row',
  },
  image: { height: 300, width: 300, marginTop: 10, marginBottom: 10 },
});
