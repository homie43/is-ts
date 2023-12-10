import React from 'react';
import Card, { CardVariant } from './components/Card';
import { ITodo, IUser } from './types/types';
import axios from 'axios';
import List from './components/List';
import UserItem from './components/UserItem';
import TodoItem from './components/TodoItem';
import EventsExample from './components/EventsExample';
const App = () => {
    const [users, setUsres] = React.useState<IUser[]>([]);
    const [todos, setTodos] = React.useState<ITodo[]>([]);

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

        const fetchTodos = async () => {
            try {
                const response = await axios.get<ITodo[]>(
                    'https://jsonplaceholder.typicode.com/todos?_limit=10'
                );
                setTodos(response.data);
            } catch (e) {
                alert(e);
            }
        };
        fetchTodos();
    }, []);

    return (
        <div>
            <EventsExample />
            <Card
                onClick={(num) => console.log('ddsds', num)}
                variant={CardVariant.outlined}
                height='150px'
                width='150px'
            >
                <button>Кнопка</button>
            </Card>
            <List
                items={users}
                renderItem={(user: IUser) => (
                    <UserItem key={user.id} user={user} />
                )}
            />

            <List
                items={todos}
                renderItem={(todo: ITodo) => (
                    <TodoItem key={todo.id} todo={todo} />
                )}
            />
        </div>
    );
};

export default App;
