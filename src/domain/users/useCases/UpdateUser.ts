import { IUserRepository } from '../repositories/IUserRepository';
import { User } from '../entities/User';
import { CheckLoginUnique } from '../validators/CheckLoginUnique';
import { validateUserForm, UserFormData } from '../validators/validateUserForm';

export class UpdateUser {
    private checkLogin: CheckLoginUnique;

    constructor(private repo: IUserRepository) {
        this.checkLogin = new CheckLoginUnique(repo);
    }

    async execute(id: string, data: Partial<Omit<User, 'id' | 'createdAt'>>): Promise<User> {
        const existing = await this.repo.findById(id);
        if (!existing) throw new Error('Usuário não encontrado.');

        const dados = { ...existing, ...data } as UserFormData;

        const validacoesObrigatoriedade = validateUserForm(dados);
        if (Object.keys(validacoesObrigatoriedade).length) {
            const msg = Object.values(validacoesObrigatoriedade).join(' ');
            throw new Error(msg);
        }

        const unique = await this.checkLogin.execute(dados.login, id);
        if (!unique) throw new Error('Login já está em uso.');

        return this.repo.update(id, data);
    }
}