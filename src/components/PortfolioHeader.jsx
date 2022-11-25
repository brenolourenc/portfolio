import './PortfolioHeader.css'
import { useState, useEffect, useRef } from 'react'

function Header({ switchTheme }) {
    let [menuClass, setMenuClass] = useState('menu-default')
    let menu = useRef()
    let width

    setInterval(() => {
        width = window.innerWidth
        if (width > 768 && menuClass === 'menu-active') { setMenuClass('menu-default') }
    }, 50);
    
    return (
        <header>
            <nav className='nav-menu hf-padding-screen'>
                <h2><a className='sub-title-size' href='#'>Breno Lourenço</a></h2>
                <i onClick={() => {
                    if (menuClass === 'menu-default') { 
                        setMenuClass('menu-active') 
                    }
                    else if (menuClass === 'menu-active') { 
                        setMenuClass('menu-default') 
                    }
                    }
                }>
                    <svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2,9 L2,7 L14,7 L14,9 L2,9 Z M2,13 L2,11 L14,11 L14,13 L2,13 Z M2,5 L2,3 L14,3 L14,5 L2,5 Z" fillRule="evenodd"/>
                    </svg>
                </i>
                <ul className={ menuClass } ref={ menu }> 
                    <li><a className='text-size' href='#aboutMe'>Sobre min</a></li>
                    <li><a className='text-size' href='#portfolio'>Portfolio</a></li>
                    <li className='lang'>
                        <svg height="24" viewBox="0 0 48 48" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h48v48h-48z" fill="none"/><path d="M25.74 30.15l-5.08-5.02.06-.06c3.48-3.88 5.96-8.34 7.42-13.06h5.86v-4.01h-14v-4h-4v4h-14v3.98h22.34c-1.35 3.86-3.46 7.52-6.34 10.72-1.86-2.07-3.4-4.32-4.62-6.7h-4c1.46 3.26 3.46 6.34 5.96 9.12l-10.17 10.05 2.83 2.83 10-10 6.22 6.22 1.52-4.07zm11.26-10.15h-4l-9 24h4l2.25-6h9.5l2.25 6h4l-9-24zm-5.25 14l3.25-8.67 3.25 8.67h-6.5z"/>
                        </svg>
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