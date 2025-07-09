export type UserFormData = {
    name: string;
    email: string;
    login: string;
};

export type UserFormErrors = Partial<Record<keyof UserFormData, string>>;

// Validação síncrona de campos básicos.
export function validateUserForm(data: UserFormData): UserFormErrors {
    const errors: UserFormErrors = {};

    if (!data.name.trim()) errors.name = 'Nome é obrigatório.';

    if (!data.email.trim()) errors.email = 'E-mail é obrigatório.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'E-mail inválido.';

    if (!data.login.trim()) errors.login = 'Login é obrigatório.';

    return errors;
}
