import React from 'react';
import { ThemedView } from '../ThemedView';
import PreviewQuestion from '../PreviewQuestion/PreviewQuestion';
import { styles } from './PreviewQuestionList.styles';

interface Props {
  source: string;
  difficulty: string;
  isRandom: boolean;
}

const PreviewQuestionList = ({ source, difficulty, isRandom }: Props) => {
  const questions = [
    {
      id: 0,
      text: 'La sfarsitul anilor 1970, David Bowie a mers intr-o capitala din Europa centrala pentru a urma un tratament contra dependentei de droguri. Acolo lui Bowie i-a venit ideea piesei “Heroes”, in care 2 indragostiti sunt despartiti de EL. EL nu i-a impedicat pe cei care au dorit sa asculte melodia “Heroes” in 1987, pe care Bowie a interpretat-o in acelasi oras. Numiti-l ',
      difficulty: 'EASY',
      source: 'CMJI',
      answer: 'Zidul Berlinului',
      round: 'diverse',
    },
    {
      id: 1,
      text: 'Studiile au aratat ca in cazul victoriei echipei favorite, suporterii folosesc cel mai des ACEST cuvant din 3 litere, iar in caz de infrangere, ALT cuvant din 2 litere (in romana ambele). Care sunt cele 2 cuvinte?',
      difficulty: 'EASY',
      source: 'CMJI',
      answer: 'Zidul Berlinului',
    },
  ];
  return (
    <ThemedView style={styles.container}>
      {questions.map((question) => (
        <PreviewQuestion {...question} />
      ))}
    </ThemedView>
  );
};

export default PreviewQuestionList;
