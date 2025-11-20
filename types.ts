export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  year: string;
  stats: { label: string; value: string }[];
}

export interface Position {
  x: number;
  y: number;
}

export enum CursorType {
  DEFAULT = 'DEFAULT',
  HOVER = 'HOVER',
  TEXT = 'TEXT',
  MAGNETIC = 'MAGNETIC'
}

export type Page = 'HOME' | 'WORK';