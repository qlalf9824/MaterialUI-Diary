import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/system';

const MyMenuItem = styled(MenuItem)(({theme}) => ({
    '&.Mui-selected': {
        backgroundColor: "rgba(129, 25, 210, 0.08)",
        '&:hover': {
            backgroundColor: "rgba(129, 25, 210, 0.08)",
        },
        '&:focus': {
            backgroundColor: "rgba(129, 25, 210, 0.08)",
        },
    },
    '&:active': {
        backgroundColor: "rgba(129, 25, 210, 0.08)",
    },
    '&:hover': {
        backgroundColor: "rgba(129, 25, 210, 0.08)",
    }
}));

const ComponentUI = () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <FormControl sx={{ m: 2, minWidth: 120 }}>
            <Select
            value={age}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            >
                <MyMenuItem value="">
                    None
                </MyMenuItem>
                <MyMenuItem value={10}>Ten</MyMenuItem>
                <MyMenuItem value={20}>Twenty</MyMenuItem>
                <MyMenuItem value={30}>Thirty</MyMenuItem>
            </Select>
        </FormControl>
    );
}

export default ComponentUI;