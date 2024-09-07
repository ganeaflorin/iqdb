import { ScrollView, StyleSheet } from 'react-native';

import QuestionForm from '@/components/QuestionForm/QuestionForm';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ScrollView>
      <ThemedView style={styles.container}>
        <QuestionForm />
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 50,
    alignItems: 'center',
  },
});
