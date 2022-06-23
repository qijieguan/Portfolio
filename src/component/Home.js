import shop_img from './images/shop.jpg';
import grocery_img from './images/grocery.jpeg';
import chat_img from './images/chat.webp';
import { Link } from 'react-router-dom';
import { BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

const Home = () => {

    const url = "https://www.linkedin.com/in/qi-jie-guan-002924201/";

    return(
        <div className="home">
            <div className="intro">
                <div className="overlay"/>
                <div className='intro-content'>
                    <h1>A Self-Taught Frontend Developer</h1>
                    <span>QI JIE <span style={{color: 'white'}}>GUAN</span></span>
                    <Link to='/About'><button>About Me</button></Link>
                </div>
            </div>
            <div className="projects">
                <ul className="project-ul">
                    <h1 className='text-label'>Projects</h1>
                    <li className="project-li grid">
                        <img className='project-li-img' src={chat_img} alt=""/>
                        <div className='project-li-content'>
                            <p className='project-li-difficulty'>
                                <h1>Difficulties
                                    <AiOutlineClose size={25} color="red" style={{margin: ' 0 0 3px 5px'}}/>
                                </h1>
                                The biggest problem of this project was to reduce the amount of
                                API calls to request data between associated users.
                                In extention, there were too many nested queries to select 
                                and compare ungrouped data to complete API requests.
                            </p>
                            <p className='project-li-solution'>
                                <h1>Solutions
                                    <AiOutlineCheck size={25} color="green" style={{margin: ' 0 0 3px 5px'}}/>
                                </h1>
                                The solution to the problem involved writing optimized data models 
                                and queries for MongoDB. The implementation of paired data object 
                                models and selectors enabled querying matching entries in one instance.
                            </p>
                        </div>
                        <div className='project-li-name'>
                            <h1>Message App</h1>
                            <div className='project-li-btns'>
                                <button className='demo-btn' 
                                    onClick={()=>window.open("https://message-app-prod.herokuapp.com/")}
                                >View Demo</button>
                                <button className='code-btn'
                                    onClick={()=>window.open('https://github.com/qijieguan/Message_App')}
                                >View Code<div className="btn-overlay"/></button>
                            </div>
                        </div>
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
                    <div className='line'/>
                    <li className="project-li grid">
                        <img className='project-li-img' src={grocery_img} alt=""/>
                        <div className='project-li-content'>
                            <p className='project-li-difficulty'>
                                <h1>Difficulties
                                    <AiOutlineClose size={25} color="red" style={{margin: ' 0 0 3px 5px'}}/>
                                </h1>
                                The biggest challenge of this project was integrating a Data Grid tool to 
                                table data. By default, data were stored in cells limited to raw HTML code. While data 
                                stored in cells were editable, it lacked the usage of methods to update the data outside
                                of the table.
                            </p>
                            <p className='project-li-solution'>
                                <h1>Solutions
                                    <AiOutlineCheck size={25} color="green" style={{margin: ' 0 0 3px 5px'}}/>
                                </h1>
                                The solution to the challenge was to build a custom component supported by the Data Grid 
                                tool. It enabled binding methods to cells containing target data. Thus, those methods
                                handled updates to data globally while they were edited manually from the table. Additionally, 
                                the custom component allowed full style customiztion and HTML markup for cells.
                            </p>
                        </div>
                        <div className='project-li-name'>
                            <h1>E-Grocer App</h1>
                            <div className='project-li-btns'>
                                <button className='demo-btn' 
                                    onClick={()=>window.open("https://e-grocer-app.herokuapp.com/")}
                                >View Demo</button>
                                <button className='code-btn'
                                    onClick={()=>window.open('https://github.com/qijieguan/E_Grocer_App')}
                                >View Code<div className="btn-overlay"/></button>
                            </div>
                        </div>
                        <p className='project-li-technology'>
                            <h1>Technologies</h1>
                            <ul>
                                <li>Angular</li>
                                <li>HTML</li>
                                <li>SCSS</li>
                                <li>Typescript</li>
                                <li>Express</li>
                                <li>Node</li>
                            </ul>
                        </p>
                    </li>
                    <div className='line'/>
                    <li className="project-li grid">
                        <img className='project-li-img' src={shop_img} alt=""/>
                        <div className='project-li-content'>
                            <p className='project-li-difficulty'>
                                <h1>Difficulties
                                    <AiOutlineClose size={25} color="green" style={{margin: ' 0 0 3px 5px'}}/>
                                </h1>
                                The biggest task of this project was creating a UI Design for users.
                                There was a strong emphasis in HTML and CSS to create visual elements.
                                It also required an understanding in UI design fundamentals and animation techniques.
                            </p>
                            <p className='project-li-solution'>
                                <h1>Solutions
                                    <AiOutlineCheck size={25} color="red" style={{margin: ' 0 0 3px 5px'}}/>
                                </h1>
                                The best solution to achieve the desired UI design was 
                                adding scrolling animations to the main page. Through using 
                                Intersection Observer API, it allowed tracking and application of 
                                CSS animations to visual elements scrolling into the screen.
                            </p>
                        </div>
                        <div className='project-li-name'>
                            <h1>E-Commerce App</h1>
                            <div className='project-li-btns'>
                                <button className='demo-btn' 
                                    onClick={()=>window.open("https://e-commerce-app-prod.herokuapp.com/")}
                                >View Demo</button>
                                <button className='code-btn'
                                    onClick={()=>window.open('https://github.com/qijieguan/ECommerce_App')}
                                >View Code<div className="btn-overlay"/></button>
                            </div>
                        </div>
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
                </ul>
            </div>
            <div className="contact grid">
                <h1>
                    <div className='contact-icons'>
                        <span>Contact</span>
                        <div className="contact-email"><MdEmail size={35}/></div>
                        <div className='contact-linkedin'><BsLinkedin size={30} onClick={() => {window.open(url)}}/></div>
                    </div>
                </h1>
                <p>
                    Send Me a Message to Connect with Me. 
                    My Response Time is Usually within 12-24 Hours.
                    <h1>Mon-Fri, 10AM-5PM PST</h1>
                </p>
            </div>
        </div>
    );
};

export default Home;