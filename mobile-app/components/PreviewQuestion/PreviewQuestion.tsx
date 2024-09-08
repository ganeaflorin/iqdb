import React from 'react';
import { ThemedText } from '../ThemedText';
import { Question } from '@/types/question';
import { ThemedView } from '../ThemedView';
import { styles } from './PreviewQuestion.style';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';

const PreviewQuestion = ({ text, id, round }: Question) => {
  return (
    <ThemedView>
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
    </ThemedView>
  );
};

export default PreviewQuestion;
