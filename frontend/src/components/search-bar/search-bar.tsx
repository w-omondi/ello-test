import React, {useEffect, useRef, useState} from 'react';
import "./search-bar.css"
import SearchIcon from '@mui/icons-material/Search';
import {useSearchParams} from "react-router-dom";
import {Avatar, Box, List, ListItem, ListItemAvatar, ListItemButton, ListItemText} from "@mui/material";
import useSearch from "../../hooks/search";


function SearchBar() {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchTerm = searchParams.get("search")
    const [search, setSearch] = useState("");
    const {loading, books, error} = useSearch({searchTerm: searchTerm || undefined});
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        const debounceId = setTimeout(() => {
            if (!search) return
            const newSearch = new URLSearchParams();
            newSearch.set("search", search)
            setSearchParams(newSearch);
        }, 700);
        return () => {
            clearInterval(debounceId)
        }
    }, [search, setSearchParams]);


    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const handleOutsideClick = (event: MouseEvent) => {
        if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
            setSearch("")
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);


    return (
        <Box className={"search"}>
            <input ref={inputRef} className={"search-input"} placeholder={"search a book"} onChange={handleSearchChange}
                   value={search}/>
            <SearchIcon/>
            {search && <Box className={"search-dropdown"}>
                <List>

                    {loading && <ListItem> <ListItemText primary={"Searching ..."}/></ListItem>}
                    {error && <ListItem><ListItemText primary={"Encountered problem while searching"}/></ListItem>}

                    {!loading && !books.length && <ListItem> <ListItemText primary={"No books found"}/></ListItem>}

                    {!loading && books.map((book, index) =>
                        <ListItem alignItems={"flex-start"} key={book.title + index}>
                            <ListItemButton href={"#"}>
                                <ListItemAvatar>
                                    <Avatar alt="book cover" src={require(`../../${book.coverPhotoURL}`)}
                                            sx={{borderRadius: "0"}}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={book.title}
                                    secondary={`By ${book.author}`}
                                />
                            </ListItemButton>
                        </ListItem>
                    )}
                </List>
            </Box>}
        </Box>
    );
}

export default SearchBar;