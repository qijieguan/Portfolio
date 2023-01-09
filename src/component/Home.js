import furniture_img from './images/furniture.jpg';
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
                    <h1>An Entry Level Web Developer</h1>
                    <span>QI JIE <span style={{color: 'white'}}>GUAN</span></span>
                    <Link to='/About'><button>About Me</button></Link>
                </div>
            </div>
            <div className="projects">
                <ul className="project-ul">
                    <li className="project-li grid">
                        <h1 className='project-label'>Projects</h1>
                        <img className='project-img' src={grocery_img} alt=""/>
                        <div className='project-content'>
                            <p className='project-difficulty paragraph'>
                                <h1>Difficulties
                                    <AiOutlineClose size={25} color="red" style={{margin: ' 0 0 3px 5px'}}/>
                                </h1>
                                The frontend challenge of this project was centered on data management using the Ag-Grid 
                                tool. Cart data displayed in cells may be edited but still required javascript functions 
                                to be updated globally. The backend challenge of the project required in-depth 
                                knowledge of database language to select target user and update their cart.
                            </p>
                            <p className='project-solution paragraph'>
                                <h1>Solutions
                                    <AiOutlineCheck size={25} color="green" style={{margin: ' 0 0 3px 5px'}}/>
                                </h1>
                                The frontend challenge of this project was resolved by writing a custom component 
                                to bind functions to cells displaying cart data. Users may interact cart 
                                item which triggers javascript functions to handle cart data globally. The approach 
                                for the backend challenge was to research and test possible database queries. 
                                The solution required sequencing query operators to look up ID combination of
                                user and cart.
                            </p>
                        </div>
                        <div className='project-name'>
                            <h1>E-Grocer App</h1>
                            <div className='project-btns flex'>
                                <button className='demo-btn' 
                                    onClick={()=>window.open("https://e-grocer-app.herokuapp.com/")}
                                >View Demo<div className="btn-overlay"/></button>
                                <button className='code-btn'
                                    onClick={()=>window.open('https://github.com/qijieguan/E_Grocer_App')}
                                >View Code<div className="btn-overlay"/></button>
                            </div>
                        </div>
                        <p className='project-tech'>
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
                        <img className='project-img' src={chat_img} alt=""/>
                        <div className='project-content'>
                            <p className='project-difficulty paragraph'>
                                <h1>Difficulties
                                    <AiOutlineClose size={25} color="red" style={{margin: ' 0 0 3px 5px'}}/>
                                </h1>
                                The biggest problem of this project was to reduce the amount of
                                API calls to request data between associated users.
                                In extention, there were too many nested queries to select 
                                and compare ungrouped data to complete API requests.
                            </p>
                            <p className='project-solution paragraph'>
                                <h1>Solutions
                                    <AiOutlineCheck size={25} color="green" style={{margin: ' 0 0 3px 5px'}}/>
                                </h1>
                                The solution to the problem involved writing optimized data models 
                                and queries for MongoDB. The implementation of paired data object 
                                models and selectors enabled querying matching entries in one instance.
                            </p>
                        </div>
                        <div className='project-name'>
                            <h1>Message App</h1>
                            <div className='project-btns flex'>
                                <button className='demo-btn' 
                                    onClick={()=>window.open("https://message-app-prod.herokuapp.com/")}
                                >View Demo<div className="btn-overlay"/></button>
                                <button className='code-btn'
                                    onClick={()=>window.open('https://github.com/qijieguan/Message_App')}
                                >View Code<div className="btn-overlay"/></button>
                            </div>
                        </div>
                        <p className='project-tech'>
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
                        <img className='project-img' src={furniture_img} alt=""/>
                        <div className='project-content'>
                            <p className='project-difficulty paragraph'>
                                <h1>Difficulties
                                    <AiOutlineClose size={25} color="red" style={{margin: ' 0 0 3px 5px'}}/>
                                </h1>
                                The biggest task of this project was creating a UI Design for users.
                                There was a strong emphasis in HTML and CSS to create visual elements.
                                It also required an understanding in UI design fundamentals and animation techniques.
                            </p>
                            <p className='project-solution paragraph'>
                                <h1>Solutions
                                    <AiOutlineCheck size={25} color="green" style={{margin: ' 0 0 3px 5px'}}/>
                                </h1>
                                The best solution to achieve the desired UI design was 
                                adding scrolling animations to the main page. Through using 
                                Intersection Observer API, it allowed tracking and application of 
                                CSS animations to visual elements scrolling into the screen.
                            </p>
                        </div>
                        <div className='project-name'>
                            <h1>E-Commerce App</h1>
                            <div className='project-btns flex'>
                                <button className='demo-btn' 
                                    onClick={()=>window.open("https://e-commerce-app-prod.herokuapp.com/")}
                                >View Demo<div className="btn-overlay"/></button>
                                <button className='code-btn'
                                    onClick={()=>window.open('https://github.com/qijieguan/ECommerce_App')}
                                >View Code<div className="btn-overlay"/></button>
                            </div>
                        </div>
                        <p className='project-tech'>
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