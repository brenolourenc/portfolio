import './PortfolioTimeline.css'
import { useRef, useState } from 'react'

function Timeline({ database }) {
    let timelineBarRef = useRef()
    let [elementClass, setElementClass] = useState('low-timeline-element')

    setTimeout(() => {
        timelineBarRef.current.style.width = `calc(400px * ${database.timeline.length}  - 55px)`
    }, 200);
    setInterval(() => {
        let height = window.innerHeight
        
        if (height <= 600) { setElementClass('timeline-element') }
        else { setElementClass('low-timeline-element') }
    }, 50);
    
    return(
        <div className='timeline padding-screen' data-aos="fade-down">
            <h2 className='sub-title-size'>{ database.home.timeline_title }</h2>
            <div className='horizontal-timeline border-gradient'>
                <div className="timeline-bar" ref={ timelineBarRef }/>
                { database.timeline.map( (element, index) => (
                    <div key={ index } className={ index%2 == 0 ? 'timeline-element' : elementClass}>
                        <span className="timeline-element-ico">{ element.data }</span>
                        <div>
                            <h3 className='sub-title-size'>{ element.title }</h3>
                            <p className='text-size'>{ element.text }</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Timeline