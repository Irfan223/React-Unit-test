import React from 'react';
import './styles.scss';
import Logo from './../../assets/graphics/logo.png';

const Header = () => {
    return (
        <header data-test='header-component'>
            <div className='wrap'>
                <div className='logo'>
                    <img data-test='header-image' src={Logo} alt="logo"/>
                </div>
            </div>
        </header>
    )

}
export default Header