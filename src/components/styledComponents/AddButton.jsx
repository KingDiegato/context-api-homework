import { Button } from '@mui/material';
import React from 'react';

export const AddButton = ({children, ...props}) => {
    return (
        <Button 
                {...props}
                color="success" 
                variant='contained' 
                type='submit'
                > {children}
            </Button>
    );
}

