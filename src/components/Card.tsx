interface CardProps {
    width?: string;
    height?: string;
}

const Card = ({ width, height }: CardProps) => {
    return <div style={{ width, height, border: '3px solid grey' }}></div>;
};

export default Card;
