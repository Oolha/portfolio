import { ReactNode } from "react";


export interface Tool {
  name: string;
  icon: ReactNode;
}

export interface LanguageItem {
  language: string;
  level: string;
}

export interface StackCategory {
  category: string;
  tools?: Tool[];
  items?: string[] | LanguageItem[];
}
