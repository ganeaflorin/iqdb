import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type='title'>View</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});
