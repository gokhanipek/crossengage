export interface Question {
  id: number;
  text: string;
  answerId: string;
  category: string;
}

export interface Answers {
  id: string;
  label: string;
}
