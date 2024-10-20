import Button from '@/components/Button/Button';
import { Filters } from '@/components/Filters/Filters';
import PreviewQuestionList from '@/components/PreviewQuestionList/PreviewQuestionList';
import { ThemedView } from '@/components/ThemedView';
import { filterDefaultOption } from '@/types/filters';
import { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const [source, setSource] = useState<string>(filterDefaultOption.value);
  const [difficulty, setDifficulty] = useState<string>(
    filterDefaultOption.value
  );

  return (
    <ScrollView>
      <ThemedView style={styles.container}>
        {/* <ThemedView style={[styles.filtersAlignment, styles.buttonsContainer]}> */}
        {/* <Button text='Caută' onPress={() => {}} style={styles.button} /> */}
        {/* </ThemedView> */}
        <Filters
          source={source}
          setSource={setSource}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          addDefaultOption
        />
        <Button text='Aleatoriu' onPress={() => {}} style={styles.button} />

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
    padding: 25,
    paddingTop: 50,
  },
  filtersAlignment: {
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 20,
    zIndex: 1,
    elevation: 1,
  },
  dropdown: {
    width: 140,
  },
  button: {
    width: 120,
    marginTop: 30,
    alignSelf: 'center',
  },
  buttonsContainer: {
    marginTop: 20,
  },
});
