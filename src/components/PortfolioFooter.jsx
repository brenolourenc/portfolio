import './PortfolioFooter.css'

function Footer({ switchTheme, database }) {
    
    return (
        <footer>
            <div className='contact-and-site-map hf-padding-screen'>
                <div className="contact" >
                    <h2 className='sub-title'>{ database.footer.contact }</h2>
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
                        <div className="theme" onClick={ switchTheme }>
                            <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20Z" fill="#212121"/>
                            </svg>
                        </div>
                        <ul> 
                            <li><a className='text-size' href='#'>{ database.footer.home }</a></li>
                            <li><a className='text-size' href='#aboutMe'>{ database.header.about }</a></li>
                            <li><a className='text-size' href='#portfolio'>{ database.header.portfolio }</a></li>
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