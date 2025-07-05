import { IUserRepository } from '../repositories/IUserRepository';
import { User } from '../entities/User';

export class UpdateUser {
    constructor(private repo: IUserRepository) { }

    async execute(id: string, data: Partial<Omit<User, 'id' | 'createdAt'>>): Promise<User> {
        // validações podem ser adicionadas aqui
        return this.repo.update(id, data);
    }
}