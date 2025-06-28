import { User } from '../../../domain/users/entities/User';
import { UserItem } from './UserItem';

type Props = {
    users: User[];
    onDelete: (id: string) => void;
};

export function UserList({ users, onDelete }: Props) {
    return (
        <div>
            {users.map(user => (
                <UserItem key={user.id} user={user} onDelete={onDelete} />
            ))}
        </div>
    );
}
