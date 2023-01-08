import { Checkbox } from '@mui/material';
import React from 'react';

/**
 * A variant checkbox for a toggle options of success/unsuccess, green color in the active prop
 * @param {props} param0 Any prop for funcional checkbox
 * @returns Green interactive checkbox with a fontSize of 28px
 */
export const ActiveBox = ({...props}) => {
    return (
        <Checkbox 
                        color="success"
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                        {...props}
                        />
    );
}

