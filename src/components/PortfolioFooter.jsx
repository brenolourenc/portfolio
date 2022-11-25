import './PortfolioFooter.css'

function Footer({ switchTheme }) {
    
    return (
        <footer>
            <div className='contact-and-site-map hf-padding-screen'>
                <div className="contact" >
                    <h2 className='sub-title'>Contato:</h2>
                    <ul>
                        <li className='text-size'>E-mail:
                            <a 
                            className='text-size'
                            style={{marginLeft: '10px'}} 
                            href="mailto:breno.info002@gmail.com" 
                            target='_blank'>breno.info002@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="site-map">
                    <h2 className='sub-title'>Map:</h2>
                    <div className='map'>
                        <div className='customize'>
                            <div className='lang'>
                                <svg height="24" viewBox="0 0 48 48" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h48v48h-48z" fill="none"/><path d="M25.74 30.15l-5.08-5.02.06-.06c3.48-3.88 5.96-8.34 7.42-13.06h5.86v-4.01h-14v-4h-4v4h-14v3.98h22.34c-1.35 3.86-3.46 7.52-6.34 10.72-1.86-2.07-3.4-4.32-4.62-6.7h-4c1.46 3.26 3.46 6.34 5.96 9.12l-10.17 10.05 2.83 2.83 10-10 6.22 6.22 1.52-4.07zm11.26-10.15h-4l-9 24h4l2.25-6h9.5l2.25 6h4l-9-24zm-5.25 14l3.25-8.67 3.25 8.67h-6.5z"/>
                                </svg>
                            </div>
                            <div className="theme" onClick={ switchTheme }>
                                <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20Z" fill="#212121"/>
                                </svg>
                            </div>
                        </div>
                        <ul> 
                            <li><a className='text-size' href='#'>Inicio</a></li>
                            <li><a className='text-size' href='#aboutMe'>Sobre min</a></li>
                            <li><a className='text-size' href='#portfolio'>Portfolio</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="info">
                <p className='text-size'>© 2022-2023</p>
            </div>
        </footer>
    )
}

export default Footer