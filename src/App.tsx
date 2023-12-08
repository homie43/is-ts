import Card, { CardVariant } from './components/Card';
const App = () => {
    return (
        <div>
            <Card variant={CardVariant.outlined} height='150px' width='150px'>
                <button>Кнопка</button>
            </Card>
        </div>
    );
};

export default App;
