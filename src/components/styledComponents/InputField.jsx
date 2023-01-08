import React from 'react';
import { TextField } from '@mui/material';

export const InputField = ({...props}) => {
    return (
        <TextField id="filled-basic" 
                        label="Add Task" 
                        variant="outlined" 
                        color="success"
                        helperText="Enter the task's description"
                        size= "small"
                        style={{marginRight: '10px'}}
                        type='text' 
                        {...props}

                        />
    );
}

