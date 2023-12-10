import React from 'react';

const EventsExample = () => {
    const [value, setValue] = React.useState<string>('');
    const inputRef = React.useRef<HTMLInputElement>(null);

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        // собтия связанные с onChange указываем ChangeEvent
        // дженериком указываем HTMLInputElement, тк мы работаем с текстом
        setValue(e.target.value);
    };

    const onClickInput = (e: React.MouseEvent<HTMLButtonElement>) => {
        // собтия связанные с мышкой указываем MouseEvent
        // дженериком указываем HTMLButtonElement, тк мы работаем с кнопкой
        console.log(inputRef.current?.value);
    };

    return (
        <div style={{ margin: '50px' }}>
            <input
                value={value}
                onChange={onChangeInput}
                placeholder='Управляемый'
            />
            <input ref={inputRef} placeholder='Не управляемый' />
            <button onClick={onClickInput}>Click</button>
        </div>
    );
};

export default EventsExample;
