import { Link } from "react-router-dom";

const About = () => {
    return (
        <div id='about'>
            <Link to='/'><button id="back-btn">Go Back</button></Link>
            <div id='about-content'>
                <div id='about-profile'/>
                <div id='about-name'>Qi Jie Guan</div>
                <div id='about-skills'>
                    <h1>Tech Stack</h1>
                    <div style={{display: 'flex'}}>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>React</li> 
                        </ul>
                        <ul>
                            <li>Express</li>
                            <li>MongoDB</li>
                            <li>MySQL</li>
                            <li>Heroku</li>
                        </ul>
                    </div>
                </div>
                <p id='about-me'>
                    I am a self-taught <span>developer</span> who loves video games. My goal
                    is to develop web applications at a professional level in the future.
                    Always looking to learn new <span>trending technologies</span> and explore 
                    <span> creativities</span> on building websites.
                </p>
            </div>
        </div>
    )
}

export default About;