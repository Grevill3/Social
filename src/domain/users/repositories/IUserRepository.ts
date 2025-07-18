import { User } from '../entities/User';

export interface IUserRepository {
    create(data: Omit<User, 'id' | 'createdAt'>): Promise<User>;
    findById(id: string): Promise<User | null>;
    findAll(): Promise<User[]>;
    update(id: string, data: Partial<Omit<User, 'id' | 'createdAt'>>): Promise<User>;
    delete(id: string): Promise<void>;
}