import '../App.css'
import { NavLink } from 'react-router-dom'
export const Header = () => {
    return (
        <header className='header'>

            <div className='logo'>
                
                <NavLink to="/">ShoppingMart</NavLink>
            </div>
            <nav className='nav'>
                <NavLink 
                    to='/cart' 
                    className={({ isActive }) => isActive ? 'active' : ''}>
                    Cart
                </NavLink>

                <NavLink 
                    to='/orders' 
                    className={({ isActive }) => isActive ? 'active' : ''}>
                    Orders
                </NavLink>
            </nav>
        </header>
    )
}
