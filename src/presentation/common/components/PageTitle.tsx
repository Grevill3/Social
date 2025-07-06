'use client';

import { Typography, Box } from '@mui/material';

type TitleProps = {
    text: string;
};

export function PageTitle({ text }: TitleProps) {
    return (
        <Box>
            <Typography variant="h4">{text}</Typography>
            <hr style={{margin: '5px 0 25px'}} />
        </Box>
    );
}