import { IUserRepository } from '../repositories/IUserRepository';

export class DeleteUser {
    constructor(private repo: IUserRepository) { }
    async execute(id: string): Promise<void> {
        return this.repo.delete(id);
    }
}