// Stylesheet
import './FoodList.module.scss'

// Data
const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
];

// Component Function
export default function FoodList() {
    const listItems = products.map(product => <li key={product.id}>{product.title}</li>);

    return (
        <ul>{listItems}</ul>
    );
}