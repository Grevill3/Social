import { IUserRepository } from '../../../domain/users/repositories/IUserRepository';
import { User } from '../../../domain/users/entities/User';
import { httpClient } from '../http/httpClient';

export class UserApiRepository implements IUserRepository {
    async create(data: Omit<User, 'id' | 'createdAt'>): Promise<User> {
        const res = await httpClient.post<User>('/users', data);
        return res.data;
    }

    async findById(id: string): Promise<User | null> {
        try {
            const res = await httpClient.get<User>(`/users/${id}`);
            return res.data;
        } catch {
            return null;
        }
    }

    async findAll(): Promise<User[]> {
        const res = await httpClient.get<User[]>('/users');
        return res.data;
    }

    async update(id: string, data: Partial<Omit<User, 'id' | 'createdAt'>>): Promise<User> {
        const res = await httpClient.patch<User>(`/users/${id}`, data);
        return res.data;
    }

    async delete(id: string): Promise<void> {
        await httpClient.delete(`/users/${id}`);
    }
}