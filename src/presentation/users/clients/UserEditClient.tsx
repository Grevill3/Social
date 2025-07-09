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
		get(params.id).then(setUser);
	}, [params.id]);

	if (!user) return <p>Carregando...</p>;

	const handle = async (data: { name: string; email: string }) => {
		try {
            await update(user.id, data);
			router.push('/users');
        }
		catch (err: any) {
            console.log(err.message); // exibe snackbar, alert, etc. - TRATAR AQUI
        }
	};

	return (
		<Box>
			<UserForm initialValues={user} onSubmit={handle} submitLabel="Atualizar" />
		</Box>
	);
}