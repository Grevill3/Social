import { IUserRepository } from '../repositories/IUserRepository';

// UseCase para verificar unicidade de login.
export class CheckLoginUnique {
    constructor(private repo: IUserRepository) { }

    async execute(login: string, ignoreId?: string): Promise<boolean> {
        const all = await this.repo.findAll();
        return !all.some(u => u.login === login && u.id !== ignoreId);
    }
}
