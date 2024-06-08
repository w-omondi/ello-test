import {gql, useQuery} from "@apollo/client";
import {Book} from "../interfaces/book";

export const GET_READING_LIST_BOOKS = gql`
    query ReadingList {
        readingList {
            title
            author
            coverPhotoURL
            readingLevel
        }
    }
`
export default function useReadingList() {
    const {loading, data, error} = useQuery(GET_READING_LIST_BOOKS);
    const books: Book[] = data?.readingList || []
    // any transformation on data happens here
    return {loading, books, error}
}