import Button from '@/components/Button/Button';
import Dropdown from '@/components/Dropdown/Dropdown';
import PreviewQuestionList from '@/components/PreviewQuestionList/PreviewQuestionList';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const [source, setSource] = useState('');
  const [difficulty, setDifficulty] = useState('');

  return (
    <ScrollView>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.filtersAlignment}>
          <ThemedView>
            <ThemedText>Sursa</ThemedText>
            <Dropdown
              value={source}
              setValue={setSource}
              style={styles.dropdown}
            />
          </ThemedView>
          <ThemedView>
            <ThemedText>Dificultate</ThemedText>
            <Dropdown
              value={difficulty}
              setValue={setDifficulty}
              style={styles.dropdown}
            />
          </ThemedView>
        </ThemedView>
        <ThemedView style={[styles.filtersAlignment, styles.buttonsContainer]}>
          <Button text='Aleatoriu' onPress={() => {}} style={styles.button} />
          <Button text='Caută' onPress={() => {}} style={styles.button} />
        </ThemedView>
        <PreviewQuestionList
          source={source}
          difficulty={difficulty}
          isRandom={false}
        />
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 25,
    paddingTop: 50,
  },
  filtersAlignment: {
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 20,
  },
  dropdown: {
    width: 140,
  },
  button: {
    width: 120,
  },
  buttonsContainer: {
    marginTop: 20,
  },
});
