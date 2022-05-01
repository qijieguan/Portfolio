import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className='about flex'>
            <Link to='/'><button className="back-btn">Go Back</button></Link>
            <div className='about-content flex'>
                <div className='about-profile'/>
                <div className='about-name'>Qi Jie Guan</div>
                <div className='about-skills'>
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
                <p className='about-me'>
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