import {Book, readingListDataPath} from '../data/books';
import {readFileSync} from 'fs';
import {writeFileSync} from 'node:fs';

export const readReadingList = (): Book[] => {
  const data = readFileSync(readingListDataPath, 'utf-8');
  return JSON.parse(data);
};

export const writeReadingList = (data: Book[]) => {
  writeFileSync(readingListDataPath, JSON.stringify(data, null, 2), 'utf-8');
};