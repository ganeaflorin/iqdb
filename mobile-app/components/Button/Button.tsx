import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ThemedText } from '../ThemedText';
import { styles } from './Button.styles';

interface Props {
  text: string;
  onPress: () => void;
  style?: Record<string, unknown>;
}

const Button = ({ text, onPress, style }: Props) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <ThemedText style={styles.text}>{text}</ThemedText>
    </TouchableOpacity>
  );
};

export default Button;
