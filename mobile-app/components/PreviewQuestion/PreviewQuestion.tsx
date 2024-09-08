import { Question } from '@/types/question';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';
import { router } from 'expo-router';
import React from 'react';
import { Pressable } from 'react-native';
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';
import { styles } from './PreviewQuestion.style';

const PreviewQuestion = ({ text, id, round }: Question) => {
  return (
    <Pressable
      onPress={() => {
        router.push(`/question/${id}`);
      }}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.8 : 1,
        },
      ]}
    >
      <ThemedView style={styles.metaInfo}>
        <ThemedText>Întrebarea {id + 1}</ThemedText>
        {round && (
          <ThemedText>, runda {capitalizeFirstLetter(round)}</ThemedText>
        )}
      </ThemedView>
      <ThemedView style={styles.question}>
        <ThemedText numberOfLines={6} style={styles.text}>
          {text}
        </ThemedText>
      </ThemedView>
    </Pressable>
  );
};

export default PreviewQuestion;
