import { Colors, themeColor } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 50,
    padding: 10,
    color: '#fff',
  },
  textarea: {
    borderRadius: 20,
  },
  label: {
    marginTop: 20,
  },

  button: {
    marginTop: 40,
  },
  mandatoryLabel: {
    color: Colors.light.secondaryColor,
  },
});
