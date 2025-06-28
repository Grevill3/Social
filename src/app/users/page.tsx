'use client';

import { Typography, Card, CardContent, Box, Button, CardHeader } from '@mui/material';
import Link from 'next/link';
import { UserList } from '../../presentation/users/components/UserList';
import { useUsers } from '../../presentation/users/hooks/useUsers';

export default function UsersPage() {
  const { users, remove } = useUsers();
  
	return (
        <Box>
            <Typography variant="h4">Gerenciamento de usuários</Typography>
            <hr />
            <Link href="/users/create">Criar Novo</Link>
      		<UserList users={users} onDelete={remove} />
        </Box>
    );
}