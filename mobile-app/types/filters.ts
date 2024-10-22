export interface Filter {
  id: number;
  name: string;
}

export const difficultiesMappings: Record<string, string> = {
  EASY: 'Ușoară',
  MEDIUM: 'Medie',
  HARD: 'Grea',
  IMPOSSIBLE: 'Imposibilă',
};

export const sourcesMappings: Record<string, string> = {
  FLO: 'Flo',
  CMJI: 'CMJI',
  PLANET_QUIZ: 'Planet Quiz Iași',
  PUB_QUIZ_IASI: 'Pub Quiz Iași',
  PUB_QUIZ_BY_IDIOT: 'Pub Quiz by IDIOT',
};

export const filterDefaultOption = { label: 'Toate', value: 'ALL' };
