import Button from '@/components/Button/Button';
import Dropdown from '@/components/Dropdown/Dropdown';
import PreviewQuestionList from '@/components/PreviewQuestionList/PreviewQuestionList';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { themeColor } from '@/constants/Colors';
import { endpoints, httpGet } from '@/http/http';
import { difficultiesMappings, Filter, sourcesMappings } from '@/types/filters';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const [source, setSource] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [sources, setSources] = useState<Filter[]>([]);
  const [difficulties, setDifficulties] = useState<Filter[]>([]);

  const setFilters = async () => {
    setSources(await httpGet(endpoints.sources));
    setDifficulties(await httpGet(endpoints.difficulties));
  };

  useEffect(() => {
    setFilters();
  }, []);

  return (
    <ScrollView>
      <ThemedView style={styles.container}>
        {/* <ThemedView style={[styles.filtersAlignment, styles.buttonsContainer]}> */}
        {/* <Button text='Caută' onPress={() => {}} style={styles.button} /> */}
        {/* </ThemedView> */}
        <ThemedView style={styles.filtersAlignment}>
          <ThemedView>
            <ThemedText>Sursa</ThemedText>
            <Dropdown
              value={source}
              setValue={setSource}
              style={styles.dropdown}
              options={sources}
              getMapping={(optionName) => sourcesMappings[optionName]}
            />
          </ThemedView>
          <ThemedView>
            <ThemedText>Dificultate</ThemedText>
            <Dropdown
              value={difficulty}
              setValue={setDifficulty}
              style={styles.dropdown}
              options={difficulties}
              getMapping={(optionName) => difficultiesMappings[optionName]}
            />
          </ThemedView>
        </ThemedView>

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
