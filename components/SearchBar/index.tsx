import { Box, Button, TextField } from '@mui/material';
import React from 'react';

type SearchBarProps = {
  onSearch: (city: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {

    return (
        <Box>
            <TextField />
            <Button>
                Search
            </Button>
        </Box>
    )
}

export default SearchBar;