import {gql, useQuery} from "@apollo/client";
import {Book} from "../interfaces/book";

const GET_BOOKS = gql`
    query searchBooks($search:String) {
        searchBooks(title:$search) {
            title
            author
            coverPhotoURL
            readingLevel
        }
    }
`

interface IUseBooks {
  searchTerm?: string;
}

export default function useSearch(props: IUseBooks) {
  const { searchTerm } = props;
  const { loading, data, error } = useQuery(GET_BOOKS, {
    variables: { search: searchTerm || null }
  });
  console.log(data)
  const books: Book[] = data?.searchBooks || [];
  // any transformation on data happens here
  return { loading, books, error }
}