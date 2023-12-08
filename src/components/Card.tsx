import React, { FC } from 'react';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary',
}

interface CardProps {
    width?: string;
    height?: string;
    children?: React.ReactNode; // отрисовывает то, что мы помещаем в <Card>
    variant: CardVariant;
    onClick: (num: number) => void; // void если функция ничего не возращает
}

const Card: FC<CardProps> = ({ width, height, children, variant, onClick }) => {
    const [state, setState] = React.useState(0);
    return (
        <div
            style={{
                width,
                height,
                border:
                    variant === CardVariant.outlined
                        ? '3px solid grey'
                        : 'none',
                background: variant === CardVariant.primary ? 'lightgray' : '',
            }}
            onClick={() => onClick(state)}
        >
            {children}
        </div>
    );
};

export default Card;
