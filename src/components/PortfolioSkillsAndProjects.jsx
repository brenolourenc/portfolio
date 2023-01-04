import './PortfolioSkillsAndProjects.css'
import Project from '../components/PortfolioProject'

function SkillsAndProjects({ database, handleModal}) {

    return (
        <div className='skills-and-projects padding-screen' >
            <div data-aos="fade-down" className='skills'>
                <h1 className='sub-title-size'>
                    { database.home.skills_title }
                </h1>
                <ul className='border-gradient'>
                    { database.skills.map((skill, index) => (
                        <li 
                            key={ index } 
                            title={ skill.name }
                            onClick={(event) => handleModal(event, index)}
                        >
                            <img src={ skill.img } alt={ skill.name }/>
                        </li>
                    ))}
                </ul>
            </div>
            <div data-aos="fade-down" className='projects'>
                <h1 className='sub-title-size'>
                    { database.home.projects_title }
                </h1>
                <ul className='border-gradient'>
                    { database.projects.map((project, index) => (
                        <Project 
                            key={ index }
                            index={ index } 
                            img={ project.img } 
                            name={ project.name } 
                            resume={ project.resume } 
                            link ={ project.link }
                            database={ database }
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SkillsAndProjects