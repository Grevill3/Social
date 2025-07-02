import { Typography, Card, CardContent, Box, Button, CardHeader } from '@mui/material';
import Link from 'next/link';
import { UserListClient } from '../../presentation/users/components/UserListClient';

export default function UsersPage() {
	return (
        <Box>
            <Typography variant="h4">Gerenciamento de usuários</Typography>
            <hr />
            <Link href="/users/create">Criar Novo</Link>
      		<UserListClient  />
        </Box>
    );
}