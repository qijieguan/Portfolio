import travel_img from './images/travel.jpeg';
import furniture_img from './images/furniture.jpg';
import grocery_img from './images/grocery.jpeg';
import chat_img from './images/chat.webp';
import wings_img from './images/wings.jpeg';
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
                                The major challenge was developing a backend to store
                                media content. Most media content required different storages 
                                and data manipulation to be usable.
                                <br/><br/>
                                The other challenge was implementing a frontend design and 
                                content presentation. The task required some web design skills to
                                develop a web theme and UI layouts.
                            </p>
                            <p className='project-solution paragraph'>
                                <h1>Solutions
                                    <AiOutlineCheck size={25} color="green" style={{margin: ' 0 0 3px 5px'}}/>
                                </h1>
                                The approach to store different media data was through a database and cloud API. 
                                The solution used Javascript and file management to 
                                convert media data until it was valid for storage.
                                <br/><br/>
                                The approach to build a frontend design was from exploring visual concepts and  
                                social media layouts. The designs and concepts were executed
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
                                <li>Node</li>
                                <li>MongoDB</li>
                            </ul>
                        </p>
                    </li>
                    <div className='line'/>

                    <li className="project-li grid">
                        <img className='project-img' src={travel_img} alt=""/>
                        <div className='project-content'>
                            <p className='project-difficulty paragraph'>
                                <h1>Difficulties
                                    <AiOutlineClose size={25} color="red" style={{margin: ' 0 0 3px 5px'}}/>
                                </h1>
                                The early stage of this project was to recreate flight searching functions. It involved
                                aggregation of real flight airlines and prices.
                                <br/><br/>
                                There was a limitation working with Free plans of the API services.
                                It was difficult to find suitable flight data to build this app.
                            </p>
                            <p className='project-solution paragraph'>
                                <h1>Solutions
                                    <AiOutlineCheck size={25} color="green" style={{margin: ' 0 0 3px 5px'}}/>
                                </h1>
                                The approach was to go through continuous testing and analysis of multiple API services.
                                <br/><br/>
                                It required analysing over 300 API requests to narrow down to a free flight API service 
                                that provided reliable flight data.  
                            </p>
                        </div>
                        <div className='project-name'>
                            <h1>Travel App</h1>
                            <div className='project-btns flex'>
                                <button className='demo-btn' 
                                    onClick={()=>window.open("https://travel-app-prod-5e426aff57d6.herokuapp.com/")}
                                >View Demo<div className="btn-overlay"/></button>
                                <button className='code-btn'
                                    onClick={()=>window.open('https://github.com/qijieguan/Travel_App')}
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
                                <li>Node</li>
                                <li>Flight Api</li>
                            </ul>
                        </p>
                    </li>
                    <div className='line'/>

                    <li className="project-li grid">
                        <img className='project-img' src={wings_img} alt=""/>
                        <div className='project-content'>
                            <p className='project-difficulty paragraph'>
                                <h1>Difficulties
                                    <AiOutlineClose size={25} color="red" style={{margin: ' 0 0 3px 5px'}}/>
                                </h1>
                                The project contained two complex tasks that required more advanced solutions.
                                <br/><br/>
                                The first challenge was implementing a slideshow that allowed looping.
                                <br/><br/>
                                The second challenge was building a map that located nearby food places.
                            </p>
                            <p className='project-solution paragraph'>
                                <h1>Solutions
                                    <AiOutlineCheck size={25} color="green" style={{margin: ' 0 0 3px 5px'}}/>
                                </h1>
                                The approach to build a simple slideshow was identify older solutions. 
                                The solution was to develop loop logic for both scrolling   
                                and slide objects.
                                <br/><br/>
                                The approach on building a map to locate nearby locations was using 
                                Google Map service. The final solution integrated various Google Map APIs
                                to fulfill the map functions.
                            </p>
                        </div>
                        <div className='project-name'>
                            <h1>Food App</h1>
                            <div className='project-btns flex'>
                                <button className='demo-btn' 
                                    onClick={()=>window.open("https://food-app-prod.herokuapp.com/")}
                                >View Demo<div className="btn-overlay"/></button>
                                <button className='code-btn'
                                    onClick={()=>window.open('https://github.com/qijieguan/Food_App')}
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
                                <li>Node</li>
                                <li>Google Map Api</li>
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
                                The frontend challenge was handling data management using the Ag-Grid 
                                tool. The tabled data required additional functions to update cart data globally to the 
                                user.
                                <br/><br/>
                                The backend challenge required an in-depth 
                                knowledge of database language to select target user and update their cart.
                            </p>
                            <p className='project-solution paragraph'>
                                <h1>Solutions
                                    <AiOutlineCheck size={25} color="green" style={{margin: ' 0 0 3px 5px'}}/>
                                </h1>
                                The frontend solution was to build a custom component 
                                with functions to display cart data. Making changes to cart 
                                item would trigger Javascript code to handle cart data on both 
                                frontend and backend. 
                                <br/><br/>
                                The approach for the backend challenge was research and test possible database queries. 
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
                                The major complexity of this project was creating an interactive design for users.
                                The project design focuses on creating visual elements such as 
                                interactive animations.
                            </p>
                            <p className='project-solution paragraph'>
                                <h1>Solutions
                                    <AiOutlineCheck size={25} color="green" style={{margin: ' 0 0 3px 5px'}}/>
                                </h1>
                                The solution to fulfill the UI design was adding scrolling animations 
                                to visual content presentation. Through using a tracking API,
                                CSS animations were applied to visual elements scrolling into the screen.
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
                                <li>Express</li>
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