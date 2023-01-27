import { Link } from 'react-router-dom'
import './style.css';

export default function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/items">Items</Link>
            <Link to="/sales">Sales</Link>
        </nav >
    )
}