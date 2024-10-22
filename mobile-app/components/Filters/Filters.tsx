import { sourcesMappings, difficultiesMappings, Filter } from '@/types/filters';
import React, { useEffect, useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { httpGet, endpoints } from '@/http/http';
import { Colors } from '@/constants/Colors';

interface Props {
  source: string;
  setSource: React.Dispatch<React.SetStateAction<string>>;
  difficulty: string;
  setDifficulty: React.Dispatch<React.SetStateAction<string>>;
  addDefaultOption?: boolean;
}

export const Filters = ({
  source,
  setSource,
  difficulty,
  setDifficulty,
  addDefaultOption,
}: Props) => {
  const [sources, setSources] = useState<Filter[]>([]);
  const [difficulties, setDifficulties] = useState<Filter[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const setFilters = async () => {
    setSources(await httpGet(endpoints.sources));
    setDifficulties(await httpGet(endpoints.difficulties));
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    setFilters();
  }, []);

  if (loading) {
    return (
      <ActivityIndicator size='small' color={Colors.light.secondaryColor} />
    );
  }

  return (
    <ThemedView style={styles.filtersAlignment}>
      <ThemedView>
        <ThemedText>Sursa</ThemedText>
        <Dropdown
          value={source}
          setValue={setSource}
          style={styles.dropdown}
          options={sources}
          getMapping={(optionName) => sourcesMappings[optionName]}
          addDefaultOption={addDefaultOption}
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
          addDefaultOption={addDefaultOption}
        />
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
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
});
