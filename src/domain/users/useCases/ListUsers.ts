import { IUserRepository } from '../repositories/IUserRepository';
import { User } from '../entities/User';

export class ListUsers {
    constructor(private repo: IUserRepository) { }
    async execute(): Promise<User[]> {
        return this.repo.findAll();
    }
}