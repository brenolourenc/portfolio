import './PortfolioModal.css'

function Modal({ dialogRef, className, skillName, text}) {
    
    return (
        <dialog ref={ dialogRef } title='Clique no x ou aperte Esc para fechar'>
            <div className={ className }>
                <div className='btn'>
                    <button onClick={ () => { 
                        dialogRef.current.style.opacity = 0
                        setTimeout(() => {
                            dialogRef.current.close() 
                        }, 300);
                        }}> x </button>
                </div>
                <div className='skill-info'>
                    <h1>{ skillName }</h1>
                    <p>{ text }</p>
                </div>
            </div>
        </dialog>
    )
}

export default Modal