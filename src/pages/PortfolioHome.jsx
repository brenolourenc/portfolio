import './PortfolioHome.css'
import { useState, useEffect, useRef } from 'react'
import { db } from '../db'
import Aos from 'aos'
import 'aos/dist/aos.css'

import Curriculum from '../assets/curriculum-vitae-breno-lourenço.pdf'

import Header from '../components/PortfolioHeader'
import Footer from '../components/PortfolioFooter'
import Modal from '../components/PortfolioModal'
import SkillsAndProjects from '../components/PortfolioSkillsAndProjects'
import Certificates from '../components/PortfolioCertificates'
import Timeline from '../components/PortfolioTimeline'

function Home() {

    let [database, setDatabase] = useState(db.ptbr)
    let [Class, setClass] = useState()
    let [skillName, setSkillName] = useState()
    let [skillText, setSkillText] = useState()
    let [certImg, setCertImg] = useState()
    let skillRef = useRef(null);
    let certificateRef = useRef(null)

    const getTheme = () => JSON.parse(localStorage.getItem('theme')) ?? [];
    const setTheme = (database) => localStorage.setItem('theme', JSON.stringify(database));
    let theme = getTheme()

    const attClass = (index, idx, className) => {
        const att = (skill, currentClass) => {
            if (skill.class === currentClass) {
                setSkillName(skillName = skill.name)
                setSkillText(skillText = skill.text)
            }
        }

        database.skills.forEach(skill => {
            if (index === idx) { 
                setClass(Class = className)
                att(skill, className)
            }
        })
    }
    const attImage = (index, idx, className) => {
        const att = (certificate, currentClass) => {
            if (certificate.class === currentClass) {
                setCertImg(certImg = certificate.img)
            }
        }
        database.certificates.forEach(certificate => {
            if (index === idx) {
                setClass(Class = className)
                att(certificate, className)
            }
            
        })
    }

    const openModal = (event) => {
        if(event.target.title === "Ver certificado") {
            certificateRef.current.showModal()
            certificateRef.current.style.opacity = 1
        } else {
            skillRef.current.showModal()
            skillRef.current.style.opacity = 1
        } 
    }

    const handleModal = (event, index) => {
        database.skills.forEach((skill, idx) => {
            if (event.target.alt === skill.name ) {
                attClass(index, idx, skill.class)
            } 
        })
        database.certificates.forEach((certificate, idx) => {
            if(event.target.title === "Ver certificado") {
                attImage(index, idx, certificate.class)
            }
        })
        openModal(event)
    }

    const switchLang = (value) => setDatabase(db[value])

    const switchTheme = () => {
        if (document.body.className === '') { setTheme(theme = 'dark-mode')} 
        else { setTheme(theme = '') }
        document.body.className = theme
    }

    useEffect(() => {
        Aos.init({duration: 400})
        document.body.className = theme
    }, [])
    return (
        <>
            <Header 
                switchTheme={ switchTheme } 
                database={ database } 
                switchLang={ switchLang }
            />
            <main>
                <section className="subject" id='subject'>
                    <div className='profile'>
                        <img className='me' src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQgMjQ7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGcgaWQ9ImluZm8iLz48ZyBpZD0iaWNvbnMiPjxwYXRoIGQ9Ik0xMiwwQzUuNCwwLDAsNS40LDAsMTJjMCw2LjYsNS40LDEyLDEyLDEyczEyLTUuNCwxMi0xMkMyNCw1LjQsMTguNiwwLDEyLDB6IE0xMiw0YzIuMiwwLDQsMi4yLDQsNXMtMS44LDUtNCw1ICAgcy00LTIuMi00LTVTOS44LDQsMTIsNHogTTE4LjYsMTkuNUMxNi45LDIxLDE0LjUsMjIsMTIsMjJzLTQuOS0xLTYuNi0yLjVjLTAuNC0wLjQtMC41LTEtMC4xLTEuNGMxLjEtMS4zLDIuNi0yLjIsNC4yLTIuNyAgIGMwLjgsMC40LDEuNiwwLjYsMi41LDAuNnMxLjctMC4yLDIuNS0wLjZjMS43LDAuNSwzLjEsMS40LDQuMiwyLjdDMTkuMSwxOC41LDE5LjEsMTkuMSwxOC42LDE5LjV6IiBpZD0idXNlcjIiLz48L2c+PC9zdmc+" alt="Subject photo" />
                        <h1 className='main-title-size'>
                            { database.home.profile.title }
                        </h1>
                        <p className='text-size' >
                            { database.home.profile.profession }
                        </p>
                    </div>
                    <ul className='social-media'>
                        {database.socialMedia.map((item, index) => (
                            <li key={ index } title={ item.name }>
                                <a href={item.link} target='_blank'>
                                    <img src={ item.img } alt={ item.name }/>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a className='curriculum-vitae' href={ Curriculum } download>
                        <i><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIxOXB4IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxNCAxOSIgd2lkdGg9IjE0cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48dGl0bGUvPjxkZXNjLz48ZGVmcy8+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSI+PGcgZmlsbD0iIzAwMDAwMCIgaWQ9IkNvcmUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zODMuMDAwMDAwLCAtMjEzLjAwMDAwMCkiPjxnIGlkPSJmaWxlLWRvd25sb2FkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzODMuMDAwMDAwLCAyMTMuNTAwMDAwKSI+PHBhdGggZD0iTTE0LDYgTDEwLDYgTDEwLDAgTDQsMCBMNCw2IEwwLDYgTDcsMTMgTDE0LDYgTDE0LDYgWiBNMCwxNSBMMCwxNyBMMTQsMTcgTDE0LDE1IEwwLDE1IEwwLDE1IFoiIGlkPSJTaGFwZSIvPjwvZz48L2c+PC9nPjwvc3ZnPg==" alt="Download" /></i>
                        <p className='text-size'>Curriculum</p>
                    </a>
                    <i className='arrow'> <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cGF0aCBkPSJNMzgzLjYsMzIyLjdMMjc4LjYsNDIzYy01LjgsNi0xMy43LDktMjIuNCw5Yy04LjcsMC0xNi41LTMtMjIuNC05TDEyOC40LDMyMi43Yy0xMi41LTExLjktMTIuNS0zMS4zLDAtNDMuMiAgYzEyLjUtMTEuOSwzMi43LTExLjksNDUuMiwwbDUwLjQsNDguMnYtMjE3YzAtMTYuOSwxNC4zLTMwLjYsMzItMzAuNmMxNy43LDAsMzIsMTMuNywzMiwzMC42djIxN2w1MC40LTQ4LjIgIGMxMi41LTExLjksMzIuNy0xMS45LDQ1LjIsMEMzOTYuMSwyOTEuNCwzOTYuMSwzMTAuNywzODMuNiwzMjIuN3oiLz48L3N2Zz4=" alt="Down arrow" /></i>
                </section>
                <section className="about-me" id='aboutMe'>
                    <div className='padding-screen'>
                        <h1 className='sub-title-size' data-aos="fade-down">
                            { database.home.about_me.hello }
                        </h1>
                        <p data-aos="fade-down">
                            { database.home.about_me.text_1 }
                            <br />
                            { database.home.about_me.text_2 }
                        </p>
                    </div>
                </section>
                <section id='portfolio' className="portfolio">
                    <div className='title-container'>
                        <h1 className='main-title-size padding-screen' >
                            { database.header.portfolio }
                        </h1>
                    </div>
                    <SkillsAndProjects database={ database } handleModal={ handleModal }/>
                    <Certificates database={ database } handleModal={ handleModal }/>
                    <Timeline database={ database } />
                </section>
            </main>
            <Footer switchTheme={ switchTheme }  database={ database }/>
            <Modal 
                certificateRef={ certificateRef } 
                className={ Class } 
                certImg={ certImg }
                lang={ database } 
                />
            <Modal 
                skillRef={ skillRef } 
                className={ Class } 
                skillName={ skillName} 
                text={ skillText }
            />
        </>
    )
}

export default Home