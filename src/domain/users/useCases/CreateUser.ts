import { IUserRepository } from '../repositories/IUserRepository';
import { User } from '../entities/User';
import { v4 as uuidv4 } from 'uuid';

export class CreateUser {
    constructor(private repo: IUserRepository) { }

    async execute(data: Omit<User, 'id' | 'createdAt'>): Promise<User> {
        // validações podem ser adicionadas aqui
        const newUser: User = {
            id: uuidv4(),
            createdAt: new Date(),
            ...data,
        };
        return this.repo.create(newUser);
    }
}