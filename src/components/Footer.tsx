'use client';

import { Box, Typography } from '@mui/material';

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#f5f5f5',
                textAlign: 'center',
                py: 2,
                mt: 2,
            }}
        >
            <Typography variant="body2" color="textSecondary">
                © {new Date().getFullYear()} Meu App
            </Typography>
        </Box>
    );
}
