import React, { useState } from 'react';
import { SafeAreaView, ScrollView, TextInput } from 'react-native';
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';
import { styles } from './QuestionForm.styles';
import DropDownPicker from 'react-native-dropdown-picker';
import { themeColor } from '@/constants/Colors';
import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';

interface Props {
  propSource?: string;
  propRound?: string;
  propQuestion?: string;
  propAnswer?: string;
  propComment?: string;
}

const QuestionForm = ({
  propSource,
  propRound,
  propQuestion,
  propAnswer,
  propComment,
}: Props) => {
  const [source, setSource] = useState(propSource ?? '');
  const [round, setRound] = useState(propRound);
  const [question, setQuestion] = useState(propQuestion);
  const [answer, setAnswer] = useState(propAnswer);
  const [comment, setComment] = useState(propComment);

  return (
    <ThemedView style={styles.container}>
      <ThemedText>Sursa</ThemedText>
      <SafeAreaView style={{ flex: 1 }}>
        <Dropdown value={source} setValue={setSource} />
      </SafeAreaView>
      <ThemedText style={styles.label}>Runda</ThemedText>
      <TextInput style={styles.input} value={round} onChangeText={setRound} />
      <ThemedText style={styles.label}>
        Textul întrebării
        <ThemedText style={styles.mandatoryLabel}>*</ThemedText>
      </ThemedText>
      <TextInput
        style={[styles.input, styles.textarea]}
        value={question}
        onChangeText={setQuestion}
        multiline
        numberOfLines={10}
      />
      <ThemedText style={styles.label}>
        Răspuns
        <ThemedText style={styles.mandatoryLabel}>*</ThemedText>
      </ThemedText>
      <TextInput style={styles.input} value={answer} onChangeText={setAnswer} />
      <ThemedText style={styles.label}>Comentariu</ThemedText>
      <TextInput
        style={styles.input}
        value={comment}
        onChangeText={setComment}
      />
      <Button text='Trimite' onPress={() => {}} style={styles.button} />
    </ThemedView>
  );
};

export default QuestionForm;
