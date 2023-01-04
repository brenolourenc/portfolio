import './PortfolioCertificates.css'
import { useState } from 'react'

function Certificates({ database, handleModal }) {
    let [display, setDisplay] = useState('none')

    return (
        <div className='certificates padding-screen' data-aos="fade-down">
            <h2 className='sub-title-size'>
                { database.home.certificates_title }
            </h2>
            <ul className='border-gradient'>
                { database.certificates.map((certificate, index) => (
                    <li 
                        key={ index } 
                        className={ index%2 == 0 ? '' : 'inverted-bg inverted' }
                    >
                        <div className='certificate'>
                            <h2 className={ index%2 == 0 ? 'sub-title-size' : 'sub-title-size inverted' }>
                                { certificate.title }
                            </h2>
                            <div
                                className={ index%2 == 0 ? 'certificate-img' : 'certificate-img inverted' }
                                style={{ backgroundImage: `url(${ certificate.img })`}}
                            >
                                <div
                                onMouseOver={ (event) => {
                                    event.currentTarget.style.opacity = 1
                                    setDisplay('block')
                                }}
                                onMouseOut={ (event) => {
                                    event.currentTarget.style.opacity = 0
                                    setDisplay('none')
                                }}>
                                    <button 
                                    style={{ display: display}} 
                                    title="Ver certificado"
                                    onClick={ (event) => handleModal(event, index) }> 
                                        Ver certificado 
                                    </button>
                                </div>
                            </div>
                        </div>
                        <p className={ index%2 == 0 ? 'text-size' : 'text-size inverted' }>
                            { certificate.description1 }
                            <br/><br/>
                            { certificate.description2 }
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Certificates