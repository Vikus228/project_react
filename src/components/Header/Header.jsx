import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./Header.scss";

export default function Header() {
    return (
        <header className='header'>
            <div className='logoContainer'>
                <NavLink to="/" className='logoLink'>
                    <img src={logo} alt="Logo" />
                </NavLink>
                <div className='naiming'>
                    <h1>Словарь</h1>
                    <p>Изучай слова легко и увлекательно!</p>
                </div>
            </div>
            <nav className='nav'>
                <NavLink to={'/'} className="navButton">Home</NavLink>
                <NavLink to={'/Game'} className="navButton">Game</NavLink>
            </nav>
            <div className='account'>
                <NavLink to={'/SignIn'} className="accountButton">SignIn</NavLink>
                <NavLink to={'/LogIn'} className="accountButton">LogIn</NavLink>
            </div>
        </header>
    );
}