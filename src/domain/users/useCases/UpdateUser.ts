import { IUserRepository } from '../repositories/IUserRepository';
import { User } from '../entities/User';

export class UpdateUser {
    constructor(private repo: IUserRepository) { }
    async execute(user: User): Promise<User> {
        // validações podem ser adicionadas aqui
        return this.repo.update(user);
    }
}