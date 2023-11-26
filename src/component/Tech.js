import '../styles/tech.css';

const Tech = () => {
    return (
        <div className='tech-stack grid'>
            <label className='tech-label'>Expertise</label>
            <div className='tech-wrapper'>
                <h1>HTML/CSS <span>2+year</span></h1>
                <div className="tech-description">
                    Proficiency in markup and style sheet language. Usage involves cycles of layout development
                    and structuring visual elements in webpages. 
                </div>
            </div>
            <div className='tech-wrapper'>
                <h1>Javascript <span>2+year</span></h1>
                <div className="tech-description">
                    Proficiency in Javascript as the web programming language. The language provides
                    control for user interactions and calculations to dynamic changes in webpages.
                </div>
            </div>
            <div className='tech-wrapper'>
                <h1>React <span>2+year</span></h1>
                <div className="tech-description">
                    Proficiency in React as the primary frontend framework. Usage of this framework
                    covers data propagation and state management between webpages. Additional libraries 
                    such as Material Design are used to integrate popular assets.
                </div>
            </div>
            <div className='tech-footer'/>
        </div>  
    )
}

export default Tech;