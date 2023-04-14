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
                        <img className='project-img' src={chat_img} alt=""/>
                        <div className='project-content'>
                            <p className='project-difficulty paragraph'>
                                <h1>Difficulties
                                    <AiOutlineClose size={25} color="red" style={{margin: ' 0 0 3px 5px'}}/>
                                </h1>
                                The biggest complexity of this project was backend development to organize and store
                                different media content. The task required data manipulation and effective use of API 
                                services.
                                <br/><br/>
                                The other task of this project was implementing a frontend design and 
                                content presentation. The task required some web design skills to
                                develop a web theme and UI layouts.
                            </p>
                            <p className='project-solution paragraph'>
                                <h1>Solutions
                                    <AiOutlineCheck size={25} color="green" style={{margin: ' 0 0 3px 5px'}}/>
                                </h1>
                                The solution was using a database and cloud service synchronously
                                to process media data. The process required Javascript and file management to 
                                convert media data to be usable for the database and cloud storage.
                                <br/><br/>
                                The solution was to learn visual concepts and gain an understanding of 
                                social media layouts and formats. The designs and concepts were executed
                                using HTML, CSS, and Javascript skills.
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
                        <img className='project-img' src={grocery_img} alt=""/>
                        <div className='project-content'>
                            <p className='project-difficulty paragraph'>
                                <h1>Difficulties
                                    <AiOutlineClose size={25} color="red" style={{margin: ' 0 0 3px 5px'}}/>
                                </h1>
                                The frontend task of this project was handling data management using the Ag-Grid 
                                tool. The tabled data required additional functions to update cart data globally to the 
                                user.
                                <br/><br/>
                                The backend task of the project required in-depth 
                                knowledge of database language to select target user and update their cart.
                            </p>
                            <p className='project-solution paragraph'>
                                <h1>Solutions
                                    <AiOutlineCheck size={25} color="green" style={{margin: ' 0 0 3px 5px'}}/>
                                </h1>
                                The frontend task was resolved by building a custom component 
                                to bind functions to displaying cart data. Making changes to cart 
                                item would trigger javascript logic to handle cart data on both 
                                frontend and backend. 
                                <br/><br/>
                                The approach for the backend task was research and test possible database queries. 
                                The solution required sequencing data object properties to find matching
                                user and cart information.
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
                        <img className='project-img' src={furniture_img} alt=""/>
                        <div className='project-content'>
                            <p className='project-difficulty paragraph'>
                                <h1>Difficulties
                                    <AiOutlineClose size={25} color="red" style={{margin: ' 0 0 3px 5px'}}/>
                                </h1>
                                The biggest task of this project was creating a UI design for users.
                                There was a strong emphasis in HTML and CSS to create visual elements.
                                It also required an understanding in UI design fundamentals and animation techniques.
                            </p>
                            <p className='project-solution paragraph'>
                                <h1>Solutions
                                    <AiOutlineCheck size={25} color="green" style={{margin: ' 0 0 3px 5px'}}/>
                                </h1>
                                The best solution to achieve the desired UI design was 
                                adding scrolling animations to the main page. Through using 
                                an observer API, it allowed tracking and application of 
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
                    Response Time is Usually within 12-24 Hours.
                    <h1>Mon-Fri, 10AM-5PM PST</h1>
                </p>
            </div>
        </div>
    );
};

export default Home;