import './PortfolioModal.css'

function Modal({skillRef, certificateRef, className, skillName, text, text2, certImg}) {
    
    if (skillRef) {
        return(
            <dialog ref={ skillRef } title='Clique no x ou aperte Esc para fechar'>
                <div className={ className }>
                    <div className='btn'>
                        <button onClick={ () => { 
                            skillRef.current.style.opacity = 0
                            setTimeout(() => {
                                skillRef.current.close() 
                            }, 300);
                            }}
                        > 
                            x 
                        </button>
                    </div>
                    <div className='skill-info'>
                        <h1>{ skillName }</h1>
                        <p>{ text }</p>
                        <p> { text2 } </p>
                    </div>
                </div>
            </dialog>
        )
    }
    else if (certificateRef) {
        return(
            <dialog ref={certificateRef} title='Clique no x ou aperte Esc para fechar'>
                <div className={ className }>
                    <div>
                        <button 
                        onClick={ () => { 
                            certificateRef.current.style.opacity = 0
                            setTimeout(() => {
                                certificateRef.current.close() 
                            }, 300);
                        }}> 
                            x 
                        </button>
                    </div>
                    <img src={certImg} alt="" />
                </div>
            </dialog>
        )
    }
}

export default Modal