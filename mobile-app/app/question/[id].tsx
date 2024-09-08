import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';

const QuestionDetails = () => {
  const { slug } = useLocalSearchParams();
  console.log('🚀  slug:', slug);
  return (
    <ThemedView>
      <ThemedText>id</ThemedText>
    </ThemedView>
  );
};

export default QuestionDetails;
