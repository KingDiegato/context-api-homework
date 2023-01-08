import { Button } from '@mui/material';
import React from 'react';

/**
 * A Red Contained Variant Button from @mui that func like a deletion button on a list
 * @param {children} param0 get the children value from the composition
 * @returns the specific variant of <Button/>
 */
export const DeleteButton = ({ children, ...props }) => {
    return (
                    <Button
                        variant='contained'
                        color='error'
                        {...props}
                        style={{cursor:'pointer'}}
                        >

                        {children}
                        </Button>
    );
}
