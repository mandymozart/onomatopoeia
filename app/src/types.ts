export type ICategory = {
  category: string;
  description?: string;
  children: ICategory | IWord;
};

export type IDictionary = {
  language: string; // example: "enUS" | "enGB" | "deDE" | "deAT" | "jpJP"
  description?: string;
  categories: ICategory[] | IWord[];
};

export type IWord = {
  word: string;
  description?: string;
  onomatopoeia: string[];
};
