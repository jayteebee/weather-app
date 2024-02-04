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
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="city"
            label="City Name"
            name="city"
            autoComplete="city"
            autoFocus
            value={city}
            onChange={(e) => setCity(e.target.value)}
            />
            <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            color="secondary"
            >
                Search
            </Button>
        </Box>
    )
}

export default SearchBar;