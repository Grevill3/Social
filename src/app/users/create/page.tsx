'use client';

import { Typography, Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import { UserForm } from '../../../presentation/users/components/UserForm';
import { useUsers } from '../../../presentation/users/hooks/useUsers';

export default function UserCreatePage() {
    const { create } = useUsers();
    const router = useRouter();

    async function handleSubmit(data: { name: string; email: string }) {
        await create(data);
        router.push('/');
    }
    
    return (
        <Box>
            <Typography variant="h4">Cadastro de usuários</Typography>
            <hr />
            <UserForm onSubmit={handleSubmit} submitLabel="Criar" />
        </Box>
    );
}