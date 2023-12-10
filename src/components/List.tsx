import React from 'react';

interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}

export default function List<T>({ items, renderItem }: ListProps<T>) {
    return <div>{items.map(renderItem)}</div>;
}
