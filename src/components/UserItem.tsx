import React from 'react';
import { IUser } from '../types/types';

interface UserItemProps {
    user: IUser;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
    return (
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
    );
};

export default UserItem;
