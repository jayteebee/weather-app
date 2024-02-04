import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

type SearchBarProps = {
  onSearch: (city: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [city, setCity] = useState("");
    console.log("🚀 ~ city:", city)

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(city)
}

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
            value={city}
            onChange={(e) => setCity(e.target.value)}
            />
            <Button
            type="submit"
            >
                Search
            </Button>
        </Box>
    )
}

export default SearchBar;