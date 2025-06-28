// app/layout.tsx
'use client';

import { ReactNode, useState } from 'react';
import { CssBaseline, ThemeProvider, Box, Toolbar } from '@mui/material';
import theme from '../theme';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import '../styles/globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const drawerWidth = sidebarOpen ? 240 : 60;

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
                                p: 3,
                                marginLeft: `${drawerWidth}px`,
                                marginTop: '64px',
                                minHeight: 'calc(100vh - 64px)', // total - AppBar
                                transition: 'margin-left 0.3s ease',
                                boxShadow: 'inset 0 0 10px rgba(0,0,0,0.05)',
                            }}
                        >
                            {children}
                        </Box>
                    </Box>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
