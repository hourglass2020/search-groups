import { IconButton, InputBase, Paper } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

import { GroupContext } from './../../context/groupContext';

function SearchForm() {

    const navigate = useNavigate();

    const { groupSearch } = useContext(GroupContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        groupSearch(data.get("search"))
        navigate("/search");
    }

    return (
        <Paper
            elevation={3}
            component="form"
            onSubmit={handleSubmit}
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', mb: 3 }}
        >
            <InputBase
                fullWidth
                name="search"
                sx={{ ml: 1 }}
                placeholder="جست و جو"
                onChange={event => groupSearch(event.target.value)}
            />
            <IconButton type="submit" sx={{ p: '10px' }} >
                <SearchIcon />
            </IconButton>
        </Paper>

    );
}

export default SearchForm;