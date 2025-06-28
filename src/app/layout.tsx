'use client';

import { ReactNode, useState } from 'react';
import { CssBaseline, ThemeProvider, Box } from '@mui/material';
import theme from '../theme';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import '../styles/globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <html lang="pt-BR">
            <body>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Header onMenuClick={() => setSidebarOpen(prev => !prev)} />
                    <Box sx={{ display: 'flex' }}>
                        <Sidebar open={sidebarOpen} />
                        <Box
                            component="main"
                            sx={{
                                flexGrow: 1,
                                bgcolor: '#f2f2f2',
                                p: 2,
                                marginTop: '64px',
                                minHeight: 'calc(100vh - 64px)',
                                boxShadow: 'inset 0 0 10px rgba(0,0,0,0.05)',
                            }}
                        >
                            <Box sx={{bgcolor: 'white', p: 1.5, borderRadius: '5px', boxShadow: '0px 0px 20px 3px rgba(0,0,0,0.1);'}}>{children}</Box>
                        </Box>
                    </Box>
                </ThemeProvider>
            </body>
        </html>
    );
}
