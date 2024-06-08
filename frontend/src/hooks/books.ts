import {gql, useQuery} from "@apollo/client";
import {Book} from "../interfaces/book";

const GET_BOOKS = gql`
    query Books {
        books {
            title
            author
            coverPhotoURL
            readingLevel
        }
    }
`
export default function useBooks() {
    const {loading, data, error} = useQuery(GET_BOOKS);
    const books: Book[] = data?.books || []
    // any transformation on data happens here
    return {loading, books, error}
}