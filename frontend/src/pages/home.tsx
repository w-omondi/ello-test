import React from 'react';
import useBooks from "../hooks/books";
import PageContent from "../components/page-content/page-content";
import Header from "../components/header/header";
import GridView from "../layouts/grid-view";
import {GridLoader} from "../components/loaders";
import BookCard from "../components/cards/book-card";
import {Alert, AlertTitle} from "@mui/material";

function Home() {
    const {books, loading, error} = useBooks()
    return (
        <PageContent>
            <Header/>
            {loading && <GridLoader/>}
            {error &&
                <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    Request failed
                </Alert>
            }
            <GridView>
                {!loading && books.map(book => <BookCard key={book.title} book={book}/>)}
            </GridView>
        </PageContent>
    );
}

export default Home;