import shop_img from './images/shop.jpeg';
import group_img from './images/group.jpg';
import chat_img from './images/chat.webp';
import { Link } from 'react-router-dom';
import { BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md'

const Home = () => {

    const url = "https://www.linkedin.com/in/qi-jie-guan-002924201/";

    return(
        <div id="home">
            <div id="intro">
                <div id="overlay"/>
                <div id='intro-content'>
                    <h1>A Self-Taught Frontend Developer</h1>
                    <span>QI JIE <span style={{color: 'white'}}>GUAN</span></span>
                    <Link to='/About'><button>About Me</button></Link>
                </div>
            </div>
            <div id="projects">
                <ul id="project-ul">
                    <h1 className='text-label'>Projects</h1>
                    <li className="project-li">
                        <img className='project-li-img' src={chat_img} alt=""/>
                        <div className='project-li-name'>
                            <h1>Chat App</h1>
                            <div className='project-li-btns'>
                                <button className='demo-btn' 
                                    onClick={()=>window.open("https://still-peak-27529.herokuapp.com/")}
                                >View Demo</button>
                                <button className='code-btn'
                                    onClick={()=>window.open('https://github.com/qijieguan/ChatApp')}
                                >View Code</button>
                            </div>
                        </div>
                        <p className='project-li-difficulty'>
                            <h1>Difficulties</h1>
                            The biggest problem of this project was to reduce the amount of
                            API calls to request data between associated users.
                            In extention, there were too many nested queries to select 
                            and compare ungrouped data to complete API requests.
                        </p>
                        <p className='project-li-solution'>
                            <h1>Solutions</h1>
                            The solution to the problem of this project involved writing 
                            optimized data models and queries for MongoDB. The implementation 
                            of paired data object models and selectors enabled querying data with 
                            matching entries in one instance.
                        </p>
                        <p className='project-li-technology'>
                            <h1>Technologies</h1>
                            <ul>
                                <li>React</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                                <li>Express</li>
                                <li>MongoDB</li>
                                <li>Node</li>
                            </ul>
                        </p>
                    </li>
                    <li className="project-li">
                        <img className='project-li-img' src={shop_img} alt=""/>
                        <div className='project-li-name'>
                            <h1>Shopping App</h1>
                            <div className='project-li-btns'>
                                <button className='demo-btn' 
                                    onClick={()=>window.open("https://desolate-thicket-47298.herokuapp.com/")}
                                >View Demo</button>
                                <button className='code-btn'
                                    onClick={()=>window.open('https://github.com/qijieguan/ShoppingApp')}
                                >View Code</button>
                            </div>
                        </div>
                        <p className='project-li-difficulty'>
                            <h1>Difficulties</h1>
                            The biggest task of this project was create a good UI Design for the website.
                            There is a strong emphasis in HTML and CSS to create visual elements.
                            It also required an understanding in UI design fundamentals and animation techniques.
                        </p>
                        <p className='project-li-solution'>
                            <h1>Solutions</h1>
                            The best solution to achieve the desired UI for this project was 
                            to add scrolling animations to the main page. Through using Intersection 
                            Observer API, I was able to track elements and apply various CSS animations
                            to visual elements scrolling into the screen.
                        </p>
                        <p className='project-li-technology'>
                            <h1>Technologies</h1>
                            <ul>
                                <li>React</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                                <li>Node</li>
                            </ul>
                        </p>
                    </li>
                    <li className="project-li">
                        <img className='project-li-img' src={group_img} alt=""/>
                        <div className='project-li-name'>
                            <h1>Q&A App</h1>
                            <div className='project-li-btns'>
                                <button className='demo-btn' 
                                    onClick={()=>window.open("https://secret-hamlet-60850.herokuapp.com/")}
                                >View Demo</button>
                                <button className='code-btn'
                                    onClick={()=>window.open('https://github.com/qijieguan/ChatroomApp')}
                                >View Code</button>
                            </div>
                        </div>
                        <p className='project-li-difficulty'>
                            <h1>Difficulties</h1>
                            The biggest problem of this project was managing large data 
                            in a relational database. Large data such as image files exceeded
                            the size capacity for most databases. Another limitation of using 
                            relational databases was excluding data object entries.
                        </p>
                        <p className='project-li-solution'>
                            <h1>Solutions</h1>
                            The solution to database capacity limit was using a cloud API
                            to store image files. Image files sent to the cloud API were converted 
                            into unique urls and hosted on the web. The newly generated urls could 
                            then best stored normally in a database as a string.
                        </p>
                        <p className='project-li-technology'>
                            <h1>Technologies</h1>
                            <ul>
                                <li>React</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                                <li>Express</li>
                                <li>MySQL</li>
                                <li>Node</li>
                            </ul>
                        </p>
                    </li>
                </ul>
            </div>
            <div id="contact">
                <h1>Contact</h1>
                <div id='contact-icons'>
                    <div id="contact-email"><MdEmail size={35} /></div>
                    <div id='contact-linkedin'><BsLinkedin size={30} onClick={() => {window.open(url)}}/></div>
                </div>
                <p>
                    Send Me A Message For Work Inquiries. 
                    My Response Time Is Usually Within 24 Hours.
                </p>
            </div>
        </div>
    );
};

export default Home;