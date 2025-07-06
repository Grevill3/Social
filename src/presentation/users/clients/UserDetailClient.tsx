'use client';

import { Typography, Box } from '@mui/material';
import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useUsers } from '../hooks/useUsers';
import { User } from '../../../domain/users/entities/User';

export default function UserDetailClient() {
    const { get } = useUsers();
    const router = useRouter();
    const params = useParams<{ id: string }>();
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        if (params?.id) get(params.id).then(setUser);
    }, [params?.id]);

    if (!user) return <p>Carregando...</p>;

    return (
        <Box>
            <p>Pensar em algo, talvez alguns cards para exibir detalhes do usuário</p>
            <p>Email: {user.name}</p>
            <p>Email: {user.email}</p>
            <button onClick={() => router.push(`/users/${user.id}/edit`)}>Editar</button>
        </Box>
    );
}