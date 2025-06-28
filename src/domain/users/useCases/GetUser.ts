import { IUserRepository } from '../repositories/IUserRepository';
import { User } from '../entities/User';

export class GetUser {
    constructor(private repo: IUserRepository) { }
    async execute(id: string): Promise<User | null> {
        return this.repo.findById(id);
    }
}