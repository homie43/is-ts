import React from 'react';
import { IUser } from '../types/types';

interface UserListProps {
    users: IUser[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
    return (
        <div>
            {users.map((user) => (
                <div
                    style={{
                        marginTop: 10,
                        padding: 15,
                        border: '3px solid gray',
                    }}
                    key={user.id}
                >
                    {user.name} живет в {user.address.city} на улице{' '}
                    {user.address.street}
                </div>
            ))}
        </div>
    );
};

export default UserList;
