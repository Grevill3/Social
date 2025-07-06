import { IUserRepository } from '../../../domain/users/repositories/IUserRepository';
import { User } from '../../../domain/users/entities/User';

const STORAGE_KEY = 'app_users';

function readStorage(): User[] {
    const json = localStorage.getItem(STORAGE_KEY);
    return json ? JSON.parse(json) : [];
}

function writeStorage(users: User[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

export class LocalStorageUserRepository implements IUserRepository {
    async create(data: Omit<User, 'id' | 'createdAt'>): Promise<User> {
        const users = readStorage();
        const newUser: User = { id: crypto.randomUUID(), createdAt: new Date(), ...data };
        users.push(newUser);
        writeStorage(users);
        return newUser;
    }

    async findById(id: string): Promise<User | null> {
        const users = readStorage();
        return users.find(u => u.id === id) ?? null;
    }

    async findAll(): Promise<User[]> {
        return readStorage();
    }

    async update(id: string, data: Partial<Omit<User, 'id' | 'createdAt'>>): Promise<User> {
        const users = readStorage();
        const idx = users.findIndex(u => u.id === id);
        if (idx === -1) throw new Error('User not found');
        const updated = { ...users[idx], ...data };
        users[idx] = updated;
        writeStorage(users);
        return updated;
    }

    async delete(id: string): Promise<void> {
        const users = readStorage().filter(u => u.id !== id);
        writeStorage(users);
    }
}