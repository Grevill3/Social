'use client';

import { useState, useEffect } from 'react';
import { CreateUser } from '../../../domain/users/useCases/CreateUser';
import { ListUsers } from '../../../domain/users/useCases/ListUsers';
import { GetUser } from '../../../domain/users/useCases/GetUser';
import { UpdateUser } from '../../../domain/users/useCases/UpdateUser';
import { DeleteUser } from '../../../domain/users/useCases/DeleteUser';
import { LocalStorageUserRepository } from '../../../infrastructure/users/repositories/LocalStorageUserRepository'; // LocalStorage usado para teste, substituir pela API real quando houver
import { User } from '../../../domain/users/entities/User';

const repo = new LocalStorageUserRepository(); // LocalStorage usado para teste, substituir pela API real quando houver
const createUserUC = new CreateUser(repo);
const listUsersUC = new ListUsers(repo);
const getUserUC = new GetUser(repo);
const updateUserUC = new UpdateUser(repo);
const deleteUserUC = new DeleteUser(repo);

export function useUsers() {
    const [users, setUsers] = useState<User[]>([]);

    async function fetchAll() {
        const data = await listUsersUC.execute();
        setUsers(data);
    }

    async function create(data: Omit<User, 'id' | 'createdAt'>) {
        try {
            // await createUserUC.execute(data);
            // await fetchAll();
            const user = await createUserUC.execute(data);
            setUsers(prev => [...prev, user]);
        }
        catch (err: any) {
            throw err; // erro será capturado pela UI
        }
    }

    async function get(id: string): Promise<User | null> {
        return getUserUC.execute(id);
    }

    async function update(id: string, data: Partial<Omit<User, 'id' | 'createdAt'>>) {
        try {
            const updated = await updateUserUC.execute(id, data);
            setUsers(prev => prev.map(u => (u.id === id ? updated : u)));
        }
        catch (err: any) {
            throw err;
        }
    }

    async function remove(id: string) {
        await deleteUserUC.execute(id);
        setUsers(prev => prev.filter(u => u.id !== id));
    }

    useEffect(() => { fetchAll(); }, []);

    return { users, fetchAll, create, get, update, remove };
}