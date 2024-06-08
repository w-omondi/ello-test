import React from 'react';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import {Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {gql, useMutation} from "@apollo/client";
import {toast} from "react-toastify";
import {GET_READING_LIST_BOOKS} from "../../hooks/readling-list";
import {Book} from "../../interfaces/book";

const ADD_TO_READING_LIST = gql`
    mutation addBookToReadingList($title:String!) {
        addBookToReadingList(title: $title) {
            title
        }
    }
`

const REMOVE_BOOK_FROM_READING_LIST = gql`
    mutation removeBookFromReadingList($title:String!) {
        removeBookFromReadingList(title: $title) {
            title
        }
    }
`

interface IBookCard {
    readingList?: boolean;
    book: Book
}

export default function BookCard(props: IBookCard) {
    const [addToReadingList, {loading}] = useMutation(ADD_TO_READING_LIST);
    const [removeBookFromReadingList, {loading: _loading,}] = useMutation(REMOVE_BOOK_FROM_READING_LIST);

    const {author, title, readingLevel, coverPhotoURL} = props.book;

    const addToList = async () => {
        try {
            await addToReadingList({
                variables: {title},
                refetchQueries: [{query: GET_READING_LIST_BOOKS}],
                onCompleted: () => {
                    toast.success("Added Successfully")
                }
            })
        } catch (e) {
            console.error(e)
        }
    }

    const removeFromTheReadingList = async () => {
        try {
            await removeBookFromReadingList({
                variables: {title},
                refetchQueries: [{query: GET_READING_LIST_BOOKS}],
                onCompleted: () => {
                    toast.success("Removed Successfully")
                }
            })
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <Grid item xs={2} sm={4} md={4}>
            <Card sx={{height: "100%", boxShadow: "none"}}>
                <CardMedia
                    component="img"
                    image={require(`../../${coverPhotoURL}`)}
                    alt="book cover"
                    sx={{
                        width: "100%",
                        height: {
                            xs: 150,
                            sm: 200,
                            md: 250,
                        }
                    }}
                />
                <CardContent sx={{padding: "10px 0"}}>
                    <Typography>{title}</Typography>
                    <Typography>by {author}</Typography>
                    <Typography>by {readingLevel}</Typography>
                </CardContent>
                <CardActions sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 0"
                }}>
                    <Box>{loading || _loading ? "Loading..." : ""}</Box>

                    {!props.readingList &&
                        <Button aria-label="delete" variant="outlined"
                                startIcon={<PlaylistAddIcon sx={{width: "20px", height: "20px"}}/>}
                                onClick={addToList}
                                disabled={loading}>
                            add
                        </Button>}

                    {props.readingList &&
                        <Button
                            aria-label="delete"
                            variant="outlined"
                            startIcon={_loading ? <Box sx={{width: "20px", height: "20px"}}>...</Box> :
                                <PlaylistRemoveIcon sx={{width: "20px", height: "20px"}}/>}
                            onClick={removeFromTheReadingList}
                            disabled={_loading}
                            color={"error"}
                        >
                            remove
                        </Button>}

                </CardActions>
            </Card>
        </Grid>
    );
}