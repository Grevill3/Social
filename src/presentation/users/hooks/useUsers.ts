'use client';

import { useState, useEffect } from 'react';
import { CreateUser } from '../../../domain/users/useCases/CreateUser';
import { ListUsers } from '../../../domain/users/useCases/ListUsers';
import { GetUser } from '../../../domain/users/useCases/GetUser';
import { UpdateUser } from '../../../domain/users/useCases/UpdateUser';
import { DeleteUser } from '../../../domain/users/useCases/DeleteUser';
import { UserApiRepository } from '../../../infrastructure/users/repositories/UserApiRepository';
import { User } from '../../../domain/users/entities/User';

const repo = new UserApiRepository();
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
        await createUserUC.execute(data);
        await fetchAll();
    }

    async function get(id: string): Promise<User | null> {
        return getUserUC.execute(id);
    }

    async function update(user: User) {
        await updateUserUC.execute(user);
        await fetchAll();
    }

    async function remove(id: string) {
        await deleteUserUC.execute(id);
        await fetchAll();
    }

    useEffect(() => { fetchAll(); }, []);

    return { users, fetchAll, create, get, update, remove };
}