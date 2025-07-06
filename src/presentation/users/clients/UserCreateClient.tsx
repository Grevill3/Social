'use client';

import { useRouter } from 'next/navigation';
import { UserForm } from '../../../presentation/users/components/UserForm';
import { useUsers } from '../hooks/useUsers';

export default function UserCreateClient() {
    const { create } = useUsers();
    const router = useRouter();

    async function handle(data: { name: string; email: string; login: string }) {
        await create(data);
        router.push('/users');
    }
    
    return <UserForm onSubmit={handle} submitLabel="Cadastrar" />;
}