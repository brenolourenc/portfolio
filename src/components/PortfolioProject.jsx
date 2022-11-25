import './PortfolioProject.css'
import { useState } from 'react'

function Project({img, name, resume, link}){
    let [display, setDisplay] = useState('none')

    return(
        <li 
        className='project-item' 
        style={{ backgroundImage: `url(${img})`}}
        onMouseOver={ () => setDisplay('block')}
        onMouseOut={ () => setDisplay('none')}>
            <div
            onMouseOver={(event) => {event.currentTarget.style.opacity = 1}}
            onMouseOut={(event) => {event.currentTarget.style.opacity = 0}}>
                <h2 className='.sub-title-size'>{ name }</h2>
                <p className='text-size' >{ resume }</p>
                <a className='text-size' href={ link } target='_blank' style={{ color: '#ffffffd5' }}>
                    <button style={{ display: display}}>Ver Projeto</button>
                </a>
            </div>
        </li>
    )
}

export default Project