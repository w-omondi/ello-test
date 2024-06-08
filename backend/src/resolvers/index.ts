import {booksData} from '../data/books';
import {readReadingList, writeReadingList} from '../helpers/file-helpers';

export interface BooksArgs {
    title?: string;
}


export const resolvers = {
  Query: {
    books: () => booksData,
    searchBooks: (_parent: unknown, args: BooksArgs,) => {

      const {title} = args || {};

      if (!title) {
        return [];
      }

      return booksData.filter((book) =>
        book.title.toLowerCase().includes(title.toLowerCase())
      );
    },
    readingList: () => {
      return readReadingList();
    }
  },
  Mutation: {
    addBookToReadingList: (_parent: unknown, args: BooksArgs) => {
      const books = booksData.filter(book =>
        book.title.toLowerCase().trim() === args.title?.toLowerCase().trim()
      );

      if (!books.length) return {};

      const readingListData = readReadingList();

      const bookExists = readingListData.some(book => book.title === books[0].title);
      if (bookExists) return readingListData;

      readingListData.push(books[0]);

      writeReadingList(readingListData);

      return readingListData;
    },
    removeBookFromReadingList: (_parent: unknown, args: BooksArgs) => {

      let readingListData = readReadingList();

      readingListData = readingListData.filter(
        book => book.title.toLowerCase().trim() !== args.title?.toLowerCase().trim()
      );

      writeReadingList(readingListData);

      return readingListData;
    },
  },
};