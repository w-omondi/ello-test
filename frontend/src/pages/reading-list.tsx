import React from 'react';
import PageContent from "../components/page-content/page-content";
import Header from "../components/header/header";
import useReadingList from "../hooks/readling-list";
import {Alert, AlertTitle, Typography} from "@mui/material";
import GridView from "../layouts/grid-view";
import {GridLoader} from "../components/loaders";
import BookCard from "../components/cards/book-card";


export default function ReadingList() {
    const {books, loading, error} = useReadingList()
    return (
        <PageContent>
            <Header/>
            <Typography>Reading List</Typography>

            {loading && <GridLoader/>}

            {error &&
                <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    Request failed
                </Alert>
            }
            <GridView>
                {!loading && books.map(book => <BookCard key={book.title} readingList book={book}/>)}
            </GridView>

        </PageContent>
    );
}
