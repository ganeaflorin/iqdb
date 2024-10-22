import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 50,
    alignItems: 'center',
    alignContent: 'center',
    minHeight: 750,
  },
  metaInfo: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 5,
  },
  text: {
    marginTop: 30,
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
  alignRow: {
    flexDirection: 'row',
  },
  image: { height: 300, width: 300, marginTop: 10, marginBottom: 10 },
});
