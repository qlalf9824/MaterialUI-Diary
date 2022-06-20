import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/system';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const MyCheckbox = styled(Checkbox)({
    '&.Mui-checked': {
        color: "grey",
    },
  });

const ComponentUI = () => {
    return (
        <div>
            <MyCheckbox
                {...label}
                defaultChecked
            />
        </div>
    );
}

export default ComponentUI;