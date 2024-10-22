import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { styles } from './QuestionDetails.styles';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';
import { ActivityIndicator, Image } from 'react-native';
import Button from '@/components/Button/Button';
import {
  GestureHandlerRootView,
  ScrollView,
} from 'react-native-gesture-handler';
import { Question } from '@/types/question';
import { endpoints, httpGet } from '@/http/http';
import { Colors } from '@/constants/Colors';

const QuestionDetails = () => {
  const { id } = useLocalSearchParams();
  const [answerIsShown, setAnswerIsShown] = useState<boolean>(false);
  const [question, setQuestion] = useState<Question>();
  const [loading, setLoading] = useState<boolean>(false);

  const getQuestion = async () => {
    setQuestion(await httpGet(`${endpoints.questions}/${id}`));
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getQuestion();
  }, []);

  const changeAnswerIsShown = () => {
    setAnswerIsShown((prev) => !prev);
  };

  const showNumberOfLetters = () => {};

  if (loading) {
    return <ActivityIndicator color={Colors.light.secondaryColor} />;
  }

  return (
    <GestureHandlerRootView>
      <ScrollView>
        <ThemedView style={styles.container}>
          <ThemedView style={styles.metaInfo}>
            {question?.id && (
              <ThemedText>Întrebarea {question.id + 1}</ThemedText>
            )}
            {question?.round && (
              <ThemedText>
                , runda {capitalizeFirstLetter(question.round)}
              </ThemedText>
            )}
          </ThemedView>
          <ThemedView style={styles.metaInfo}>
            <ThemedText>Dificultate {question?.difficulty}</ThemedText>
            {question?.source && (
              <ThemedText>
                , sursa {capitalizeFirstLetter(question.source)}
              </ThemedText>
            )}
          </ThemedView>
          <ThemedText style={styles.text}>{question?.text}</ThemedText>
          {question?.image && (
            <Image style={styles.image} source={{ uri: question.image }} />
          )}
          <ThemedView style={styles.buttonsContainer}>
            <Button
              onPress={changeAnswerIsShown}
              text={answerIsShown ? 'Ascunde răspunsul' : 'Arată răspunsul'}
              style={styles.button}
            />
            <Button
              onPress={showNumberOfLetters}
              text='Numărul de litere'
              style={styles.button}
            />
          </ThemedView>
          {answerIsShown && (
            <ThemedView style={styles.answerSection}>
              <ThemedView style={styles.alignRow}>
                <ThemedText type='defaultSemiBold'>Răspuns: </ThemedText>
                <ThemedText>{question?.answer}</ThemedText>
              </ThemedView>
              {question?.answerImage && (
                <ThemedView>
                  <ThemedText type='defaultSemiBold'>
                    Imaginea originală:
                  </ThemedText>
                  <Image
                    style={styles.image}
                    source={{ uri: question.answerImage }}
                  />
                </ThemedView>
              )}
              {question?.comment && (
                <ThemedView style={styles.alignRow}>
                  <ThemedText type='defaultSemiBold'>Comentariu: </ThemedText>
                  <ThemedText>{question.comment}</ThemedText>
                </ThemedView>
              )}
            </ThemedView>
          )}
        </ThemedView>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default QuestionDetails;
