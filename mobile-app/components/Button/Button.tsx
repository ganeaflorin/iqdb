import React from 'react';
import { Pressable } from 'react-native';
import { ThemedText } from '../ThemedText';
import { styles } from './Button.styles';

interface Props {
  text: string;
  onPress: () => void;
  style?: Record<string, unknown>;
}

const Button = ({ text, onPress, style }: Props) => {
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <ThemedText>{text}</ThemedText>
    </Pressable>
  );
};

export default Button;
