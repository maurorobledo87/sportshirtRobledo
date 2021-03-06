import React from 'react';
import Logo from '../../img/logo.png';
import '../navBar/NavBar.css';
import { CartWidget } from '../cartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = ({listaLinks}) => {
    return (
        <NavLink to={'/sportshirtRobledo'}>
            <nav className='navbar'>
                <NavLink to={'/sportshirtRobledo'}><img className='logo' alt='logo' src={Logo} /></NavLink>
            
                {listaLinks.map((elemento)=>{
                    return <NavLink to={elemento.route} key={elemento.id} className='list'>{elemento.name}</NavLink>
                })}
                <NavLink to={"/cart"}>
                    <CartWidget/>
                </NavLink>                                 
            </nav>
        </NavLink>
    );
};
export default NavBar; 