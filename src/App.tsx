import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';
const App = () => {
    const users: IUser[] = [
        {
            id: 1,
            name: 'Leanne Graham',
            email: 'ssss@sss',
            address: {
                street: 'Kulas Light',
                city: 'Gwenborough',
            },
        },
        {
            id: 2,
            name: 'Ervin Howell',
            email: 'ssss@sss',
            address: {
                street: 'Victor Plains',
                city: 'Wisokyburgh',
            },
        },
        {
            id: 3,
            name: 'Clementine Bauch',
            email: 'ssss@sss',
            address: {
                street: 'Douglas Extension',
                city: 'McKenziehaven',
            },
        },
    ];

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
