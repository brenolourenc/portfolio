import './PortfolioHeader.css'
import { useState, useRef } from 'react'

function Header({ switchTheme, database, switchLang }) {
    let [menuClass, setMenuClass] = useState('menu-default')
    let menu = useRef()
    let width

    setInterval(() => {
        width = window.innerWidth
        if (width > 825 && menuClass === 'menu-active') { setMenuClass('menu-default') }
    }, 50);

    const handleMenu = () => {
        if (menuClass === 'menu-default') { 
            setMenuClass('menu-active') 
        } else { 
            setMenuClass('menu-default') 
        }
    }
    
    return (
        <header>
            <nav className='nav-menu hf-padding-screen'>
                <h2><a className='sub-title-size' href='#'>{ database.home.profile.title }</a></h2>
                <i onClick={ handleMenu }>
                    <svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2,9 L2,7 L14,7 L14,9 L2,9 Z M2,13 L2,11 L14,11 L14,13 L2,13 Z M2,5 L2,3 L14,3 L14,5 L2,5 Z" fillRule="evenodd"/>
                    </svg>
                </i>
                <ul className={ menuClass } ref={ menu }> 
                    <li><a className='text-size' href='#aboutMe'>{ database.header.about }</a></li>
                    <li><a className='text-size' href='#portfolio'>{ database.header.portfolio }</a></li>
                    <li className='lang'>
                        <select onChange={ (event) => switchLang(event.target.value) }>
                            <option value="ptbr">Portuguese</option>
                            <option value="eng">English</option>
                        </select>
                    </li>
                    <li className="theme" onClick={ switchTheme }>
                        <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20Z" fill="#212121"/>
                        </svg>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header