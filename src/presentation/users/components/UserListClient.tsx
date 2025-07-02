'use client';

import { UserList } from './UserList';
import { useUsers } from '../hooks/useUsers';

export function UserListClient() {
    const { users, remove } = useUsers();

    return (
        <div>
            <UserList users={users} onDelete={remove} />
        </div>
    );
}
