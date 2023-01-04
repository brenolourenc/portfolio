import './PortfolioProject.css'
import { useState } from 'react'

function Project({img, name, resume, link, database}){
    let [display, setDisplay] = useState('none')

    return(
        <li 
            className='project-item' 
            style={{ backgroundImage: `url(${img})`}}
            >
            <div
                onMouseOver={(event) => {
                    event.currentTarget.style.opacity = 1
                    setDisplay('block')
                }}
                onMouseOut={(event) => {
                    event.currentTarget.style.opacity = 0
                    setDisplay('none')
                }}
            >
                <h2 className='.sub-title-size'>{ name }</h2>
                <p className='text-size' >{ resume }</p>
                <a className='text-size' href={ link } target='_blank' style={{ color: '#ffffffd5' }}>
                    <button style={{ display: display}}>{ database.home.view }</button>
                </a>
            </div>
        </li>
    )
}

export default Project