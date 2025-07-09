import { IUserRepository } from '../repositories/IUserRepository';
import { User } from '../entities/User';
import { CheckLoginUnique } from '../validators/CheckLoginUnique';
import { validateUserForm, UserFormData } from '../validators/validateUserForm';
import { v4 as uuidv4 } from 'uuid';

export class CreateUser {
    private checkLogin: CheckLoginUnique;

    constructor(private repo: IUserRepository) {
        this.checkLogin = new CheckLoginUnique(repo);
    }

    async execute(data: Omit<User, 'id' | 'createdAt'>): Promise<User> {
        const validacoesObrigatoriedade = validateUserForm(data as UserFormData);
        if (Object.keys(validacoesObrigatoriedade).length) {
            const msg = Object.values(validacoesObrigatoriedade).join(' ');
            throw new Error(msg);
        }

        const unique = await this.checkLogin.execute(data.login);
        if (!unique) throw new Error('Login já está em uso.');

        const newUser: User = {
            id: uuidv4(),
            createdAt: new Date(),
            ...data,
        };
        return this.repo.create(newUser);
    }
}