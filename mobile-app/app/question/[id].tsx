import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { styles } from './QuestionDetails.styles';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';
import { Image } from 'react-native';
import Button from '@/components/Button/Button';
import {
  GestureHandlerRootView,
  ScrollView,
} from 'react-native-gesture-handler';

const QuestionDetails = () => {
  const { slug } = useLocalSearchParams();
  const [answerIsShown, setAnswerIsShown] = useState<boolean>(false);

  const question = {
    id: 0,
    text: 'La sfarsitul anilor 1970, David Bowie a mers intr-o capitala din Europa centrala pentru a urma un tratament contra dependentei de droguri. Acolo lui Bowie i-a venit ideea piesei “Heroes”, in care 2 indragostiti sunt despartiti de EL. EL nu i-a impedicat pe cei care au dorit sa asculte melodia “Heroes” in 1987, pe care Bowie a interpretat-o in acelasi oras. Numiti-l ',
    difficulty: 'EASY',
    source: 'CMJI',
    answer: 'Zidul Berlinului',
    round: 'diverse',
    comment: 'a cazut zidul berlinului in 1989',
    image: 'https://reactnative.dev/img/tiny_logo.png',
    answerImage: 'https://reactnative.dev/img/tiny_logo.png',
  };

  const changeAnswerIsShown = () => {
    setAnswerIsShown((prev) => !prev);
  };

  const showNumberOfLetters = () => {};

  return (
    <GestureHandlerRootView>
      <ScrollView>
        <ThemedView style={styles.container}>
          <ThemedView style={styles.metaInfo}>
            <ThemedText>Întrebarea {question.id + 1}</ThemedText>
            {question.round && (
              <ThemedText>
                , runda {capitalizeFirstLetter(question.round)}
              </ThemedText>
            )}
          </ThemedView>
          <ThemedView style={styles.metaInfo}>
            <ThemedText>Dificultate {question.difficulty}</ThemedText>
            {question.source && (
              <ThemedText>
                , sursa {capitalizeFirstLetter(question.source)}
              </ThemedText>
            )}
          </ThemedView>
          <ThemedText style={styles.text}>{question.text}</ThemedText>
          {question.image && (
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
                <ThemedText>{question.answer}</ThemedText>
              </ThemedView>
              {question.answerImage && (
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
              {question.comment && (
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
