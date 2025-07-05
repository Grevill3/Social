'use client';

import { Typography, Box } from '@mui/material';
import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { UserForm } from '../components/UserForm';
import { useUsers } from '../hooks/useUsers';
import { User } from '../../../domain/users/entities/User';

export default function UserEditClient() {
    const { get, update } = useUsers();
    const router = useRouter();
    const params = useParams<{ id: string }>();
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        if (params.id) get(params.id).then(setUser);
    }, [params?.id]);

    if (!user) return <p>Carregando...</p>;

    async function handleSubmit(data: { name: string; email: string }) {
        await update({ ...user, ...data });
        console.log('VERIFICAR ERRO E ARRUMAR');
        router.push('/');
    }

    return (
        <Box>
            <Typography variant="h4">Detalhes do usuário</Typography>
            <hr />
            <UserForm initialValues={user} onSubmit={handleSubmit} submitLabel="Atualizar" />
        </Box>
    );
}