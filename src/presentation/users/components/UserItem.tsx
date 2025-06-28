import Link from 'next/link';
import { User } from '../../../domain/users/entities/User';

type Props = {
    user: User;
    onDelete: (id: string) => void;
};

export function UserItem({ user, onDelete }: Props) {
    return (
        <div style={{ border: '1px solid #ccc', padding: 8, marginBottom: 4 }}>
            <p><strong>{user.name}</strong> ({user.email})</p>
            <div>
                <Link href={`/users/${user.id}`}>Detalhes</Link>{' '}
                <Link href={`/users/${user.id}/edit`}>Editar</Link>{' '}
                <button onClick={() => onDelete(user.id)}>Excluir</button>
            </div>
        </div>
    );
}
