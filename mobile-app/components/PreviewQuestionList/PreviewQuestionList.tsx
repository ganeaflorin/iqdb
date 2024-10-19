import React, { useEffect, useState } from 'react';
import { ThemedView } from '../ThemedView';
import PreviewQuestion from '../PreviewQuestion/PreviewQuestion';
import { styles } from './PreviewQuestionList.styles';
import { Question } from '@/types/question';
import { endpoints, httpGet } from '@/http/http';
import { ActivityIndicator } from 'react-native';
import { Colors } from '@/constants/Colors';
import { ThemedText } from '../ThemedText';

interface Props {
  source: string;
  difficulty: string;
  isRandom: boolean;
}

const PreviewQuestionList = ({ source, difficulty, isRandom }: Props) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getQuestions = async () => {
    const query = new URLSearchParams({
      source,
      difficulty,
    });
    setQuestions(await httpGet(endpoints.questions, query.toString()));
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getQuestions();
  }, [source, difficulty]);

  if (loading) {
    return (
      <ThemedView style={styles.container}>
        <ActivityIndicator size='large' color={Colors.light.secondaryColor} />
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      {questions.length === 0 && (
        <ThemedText style={styles.noQuestionsText}>
          Nu există întrebări care să îndeplinească condițiile selectate.
        </ThemedText>
      )}
      {questions.map((question) => (
        <PreviewQuestion key={question.id} {...question} />
      ))}
    </ThemedView>
  );
};

export default PreviewQuestionList;
