import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

type SearchBarProps = {
  onSearch: (city: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [city, setCity] = useState("");

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(city)
}

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
            value={city}
            />
            <Button>
                Search
            </Button>
        </Box>
    )
}

export default SearchBar;