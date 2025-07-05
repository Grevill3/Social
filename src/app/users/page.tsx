import { Typography, Box } from '@mui/material';
import Link from 'next/link';
import { UserListClient } from '../../presentation/users/clients/UserListClient';

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