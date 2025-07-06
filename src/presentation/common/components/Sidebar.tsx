// components/Sidebar.tsx
'use client';

import {
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import { usePathname, useRouter } from 'next/navigation';

interface SidebarProps {
    open: boolean;
}

const drawerWidth = 240;
const collapsedWidth = 60;

export default function Sidebar({ open }: SidebarProps) {
    const router = useRouter();
    const pathname = usePathname();

    const handleNavigate = (path: string) => {
        router.push(path);
    };

    return (
        <Drawer
            variant="permanent"
            open={open}
            sx={{
                width: open ? drawerWidth : collapsedWidth,
                flexShrink: 0,
                zIndex: 0,
                '& .MuiDrawer-paper': {
                    width: open ? drawerWidth : collapsedWidth,
                    transition: 'width 0.3s',
                    overflowX: 'hidden',
                    top: '64px', // para não sobrepor o header
                    height: 'calc(100% - 64px)',
                    borderRight: '1px solid #ddd',
                    backgroundColor: '#fff',
                },
            }}
        >
            <List>
                <ListItemButton selected={pathname === '/'} onClick={() => handleNavigate('/')}>
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    {open && <ListItemText primary="Início" />}
                </ListItemButton>
                <ListItemButton selected={pathname.startsWith('/users')} onClick={() => handleNavigate('/users')}>
                    <ListItemIcon><PeopleIcon /></ListItemIcon>
                    {open && <ListItemText primary="Usuários" />}
                </ListItemButton>
            </List>
        </Drawer>
    );
}
