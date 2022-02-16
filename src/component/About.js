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
                    I Am A Self-Taught <span>Developer</span> Who Loves Video Games. My Goal
                    Is To Develop Web Applications At A Professional Level In The Future.
                    Always Looking To Learn New <span>Trending Technologies</span> And Explore 
                    <span> Creativities</span> On Building Websites.
                </p>
            </div>
        </div>
    )
}

export default About;