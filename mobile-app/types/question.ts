export interface Question {
  id: number;
  text: string;
  difficulty: string;
  source: string;
  answer: string;
  comment?: string;
  image?: string;
  answerImage?: string;
  round?: string;
}
