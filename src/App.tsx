import React from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';
import axios from 'axios';
const App = () => {
    const [users, setUsres] = React.useState<IUser[]>([]);

    React.useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get<IUser[]>(
                    'https://jsonplaceholder.typicode.com/users'
                );
                setUsres(response.data);
            } catch (e) {
                alert(e);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div>
            <Card
                onClick={(num) => console.log('ddsds', num)}
                variant={CardVariant.outlined}
                height='150px'
                width='150px'
            >
                <button>Кнопка</button>
            </Card>
            <UserList users={users} />
        </div>
    );
};

export default App;
