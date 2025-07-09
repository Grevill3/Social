'use client';

import { useRouter } from 'next/navigation';
import { UserForm } from '../../../presentation/users/components/UserForm';
import { useUsers } from '../hooks/useUsers';

export default function UserCreateClient() {
    const { create } = useUsers();
    const router = useRouter();

    async function handle(data: { name: string; email: string; login: string }) {
        try {
            await create(data);
            router.push('/users');
        }
        catch (err: any) {
            console.log(err.message); // exibe snackbar, alert, etc. - TRATAR AQUI
        }
    }

    return <UserForm onSubmit={handle} submitLabel="Cadastrar" />;
}