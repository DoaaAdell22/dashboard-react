import './Grow.css'
const Grow = () => {

    const marks = [
        {
            image : '/media/after.webp',
            span : 'After sale service'
        },
        {
            image : '/media/development.webp',
            span : 'Development'
            
        },
        {
            image : '/media/qa.webp',
            span : 'QA'
        },
        {
            image : '/media/analysis.webp',
            span : 'Analysis'
        },
        {
            image : '/media/deployment.webp',
            span : 'Deployment'
        },
        {
            image : '/media/collaborators.webp',
            span : 'Collaborators'
        }
    ]


    return (
        <div>
            <div className="contain">
                <div className="text">
                    <h2>Grow More</h2>
                    <p>apps square Your Gateway to Success in the Digital Realm. Accelerate Your Journey with Us</p>
                </div>
                <div className="grow">
                    
                {marks.map((el , index) => (
                        <div className='mark'  key={index}>
                            <img src={el.image} />
                            <span>{el.span}</span>
                        </div>
                )
                )
                }
                </div>
                
            </div>         
        </div>
    )
}

export default Grow
