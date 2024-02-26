import '../styles/project.css';
import travel_img from '../images/travel.jpeg';
import furniture_img from '../images/furniture.jpg';
import grocery_img from '../images/grocery.jpeg';
import chat_img from '../images/chat.webp';
import wings_img from '../images/wings.jpeg';
import nba_img from '../images/nba.png';

import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

const Project = () => {
    return (
        <div className="projects">
            <ul className="project-ul flex">
                <li className="project-li grid">
                    <label className='project-label'>Projects</label>
                    <div className='project-profile'>
                        <div className='project-img-wrapper'>
                            <img className='project-img' src={nba_img} alt=""/>
                            <h1 className='project-name'>Sports App</h1>
                        </div> 
                        <div className='project-btns flex'>
                            <button className='demo-btn' 
                                onClick={()=>window.open("https://sports-app-prod-936d59e14ad7.herokuapp.com/")}
                            >Try Demo</button>
                            <button className='code-btn'
                                onClick={()=>window.open('https://github.com/qijieguan/Sports_App')}
                            >Source Code</button>
                        </div>  
                    </div>
                
                    <div className='project-content'>
                        <div className='project-difficulty paragraph flex'>
                            <h1>Specifications
                                <AiOutlineClose size={25} color="red" style={{margin: ' 0 0 3px 5px'}}/>
                            </h1>
                            <span>
                                Integrate a real time API to enrich the application with essential data on the sport teams and players.
                            </span>

                            <span>Design a theme layout to demostrate data visualization and readability of web content</span>
                        </div>
                        <div className='project-solution paragraph flex'>
                            <h1>Implementations
                                <AiOutlineCheck size={25} color="green" style={{margin: ' 0 0 3px 5px'}}/>
                            </h1>
                            <span>
                                The process involved continuous testing and data analysis of similar APIs.
                                It took consideration in data usability and api requests limit.
                            </span>
                            <span>
                                The design solution was completed through identifying UI trends and content organization.
                                The site navigation enabled quick accessiblity of different layers of data and web content.  
                            </span>
                        </div>
                        <div className='project-tech'>
                            <h1>Technologies</h1>
                            <ul>
                                <li>React</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                                <li>Express</li>
                                <li>Node</li>
                                <li>Fantasy Stats Api (Tank01)</li>
                            </ul>
                        </div>
                    </div>
                </li>
                <div className='line'/>
                
                <li className="project-li grid">
                    <div className='project-profile'>
                        <div className='project-img-wrapper'>
                            <img className='project-img' src={travel_img} alt=""/>
                            <h1 className='project-name'>Travel App</h1>
                        </div> 
                        <div className='project-btns flex'>
                            <button className='demo-btn' 
                                onClick={()=>window.open("https://travel-app-prod-5e426aff57d6.herokuapp.com/")}
                            >Try Demo</button>
                            <button className='code-btn'
                                onClick={()=>window.open('https://github.com/qijieguan/Travel_App')}
                            >Source Code</button>
                        </div>  
                    </div>
                
                    <div className='project-content'>
                        <div className='project-difficulty paragraph flex'>
                            <h1>Specifications
                                <AiOutlineClose size={25} color="red" style={{margin: ' 0 0 3px 5px'}}/>
                            </h1>
                            <span>
                                Implement flight searching for airlines, ticket prices, and route details. The system will
                                aggregate real time data from a workable flight API.
                            </span>
                        </div>
                        <div className='project-solution paragraph flex'>
                            <h1>Implementations
                                <AiOutlineCheck size={25} color="green" style={{margin: ' 0 0 3px 5px'}}/>
                            </h1>
                            <span>
                                The implementation underwent continuous testing and analysis of multiple API services.
                            </span>
                            <span>
                                The analysis involved making over 500 requests to ensure the chosen flight API
                                would provide necessary data.  
                            </span>
                        </div>
                        <div className='project-tech'>
                            <h1>Technologies</h1>
                            <ul>
                                <li>React</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                                <li>Express</li>
                                <li>Node</li>
                                <li>Trip Advisor Api</li>
                            </ul>
                        </div>
                    </div>
                </li>
                <div className='line'/>

                <li className="project-li grid">
                    <div className='project-profile'>
                        <div className='project-img-wrapper'>
                            <img className='project-img' src={chat_img} alt=""/>
                            <h1 className='project-name'>Message App</h1>
                        </div> 
                        <div className='project-btns flex'>
                            <button className='demo-btn' 
                                onClick={()=>window.open("https://message-app-prod.herokuapp.com/")}
                            >Try Demo</button>
                            <button className='code-btn'
                                onClick={()=>window.open('https://github.com/qijieguan/Message_App')}
                            >Source Code</button>
                        </div>  
                    </div>
                    <div className='project-content'>
                        <div className='project-difficulty paragraph flex'>
                            <h1>Specifications
                                <AiOutlineClose size={25} color="red" style={{margin: ' 0 0 3px 5px'}}/>
                            </h1>
                            <span>
                                Develop a system to store media content. 
                                Images and texts will be sorted and assigned in 
                                separate storages.
                            </span>

                            <span>
                                Execute a frontend design for content presentation. 
                                The task requires advanced HTML and CSS experience to
                                build website design.
                            </span>
                        </div>
                        <div className='project-solution paragraph flex'>
                            <h1>Implementations
                                <AiOutlineCheck size={25} color="green" style={{margin: ' 0 0 3px 5px'}}/>
                            </h1>

                            <span>
                                Images and texts were maintained in a database and cloud API. 
                                Javascript functions and file management helped 
                                image conversion for cloud storage.
                            </span>
                            <span>
                                A frontend design was built from exploring visual concepts and  
                                social media layouts. The execution required advanced
                                usage of HTML, CSS, and Javascript.
                            </span>
                        </div>
                        <div className='project-tech'>
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
                        </div>
                    </div>
                </li>
                <div className='line'/>

                <li className="project-li grid">
                    <div className='project-profile'>
                        <div className='project-img-wrapper'>
                            <img className='project-img' src={wings_img} alt=""/>
                            <h1 className='project-name'>Food App</h1>
                        </div> 
                        <div className='project-btns flex'>
                            <button className='demo-btn' 
                                onClick={()=>window.open("https://food-app-prod.herokuapp.com/")}
                            >Try Demo</button>
                            <button className='code-btn'
                                onClick={()=>window.open('https://github.com/qijieguan/Food_App')}
                            >Source Code</button>
                        </div>
                    </div>
                    <div className='project-content'>
                        <div className='project-difficulty paragraph flex'>
                            <h1>Specifications
                                <AiOutlineClose size={25} color="red" style={{margin: ' 0 0 3px 5px'}}/>
                            </h1>
                            <span>
                                Develop a slideshow that slides products and loops over from the start again.
                            </span>
                            <span>
                                Build a map that locates nearby wing locations based on address query.
                            </span>           
                        </div>
                        <div className='project-solution paragraph flex'>
                            <h1>Implementations
                                <AiOutlineCheck size={25} color="green" style={{margin: ' 0 0 3px 5px'}}/>
                            </h1>
                            <span>
                                A basic slideshow was implemented as a base template. 
                                The solution applied loop logic for both scrolling   
                                and sliding products.
                            </span>
                            <span>
                                The Google Map service provided geolocation data of the world. 
                                The solution integrated various Google Map APIs
                                to fulfill the map functions.
                            </span>  
                        </div>
                        <div className='project-tech'>
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
                        </div>
                    </div>
                </li>
                <div className='line'/>

                <li className="project-li grid">
                    <div className='project-profile'>
                        <div className='project-img-wrapper'>
                            <img className='project-img' src={grocery_img} alt=""/>
                            <h1 className='project-name'>E-Grocer App</h1>
                        </div>  
                        <div className='project-btns flex'>
                            <button className='demo-btn' 
                                onClick={()=>window.open("https://e-grocer-app.herokuapp.com/")}
                            >Try Demo</button>
                            <button className='code-btn'
                                onClick={()=>window.open('https://github.com/qijieguan/E_Grocer_App')}
                            >Source Code</button>
                        </div>
                    </div>
            
                    <div className='project-content'>
                        <div className='project-difficulty paragraph flex'>
                            <h1>Specifications
                                <AiOutlineClose size={25} color="red" style={{margin: ' 0 0 3px 5px'}}/>
                            </h1>
                            <span>
                                Handle data management and presentation using the Ag-Grid 
                                tool. The tabled data requires additional functions to update cart data globally to the 
                                user.
                            </span>
                            <span>
                                Develop backend with knowledge of database language to update users and their assigned cart data.
                            </span>
                        </div>
                        <div className='project-solution paragraph flex'>
                            <h1>Implementations
                                <AiOutlineCheck size={25} color="green" style={{margin: ' 0 0 3px 5px'}}/>
                            </h1>
                            <span>
                                Built custom functions to display cart data. Changes to cart 
                                item triggered Javascript code to handle cart data on both 
                                frontend and backend. 
                            </span>
                            <span>
                                In-depth testing and analysis of database queries were conducted. 
                                The query sequenced data object properties to match user and cart information.
                            </span>
                        </div>
                        <div className='project-tech'>
                            <h1>Technologies</h1>
                            <ul>
                                <li>Angular</li>
                                <li>HTML</li>
                                <li>SCSS</li>
                                <li>Typescript</li>
                                <li>Express</li>
                                <li>Node</li>
                            </ul>
                        </div>
                    </div>
                </li>
                <div className='line'/>
                
                <li className="project-li grid">
                    <div className='project-profile'>
                        <div className='project-img-wrapper'>
                            <img className='project-img' src={furniture_img} alt=""/>
                            <h1 className='project-name'>E-Commerce App</h1>
                        </div>
                        <div className='project-btns flex'>
                            <button className='demo-btn' 
                                onClick={()=>window.open("https://e-commerce-app-prod.herokuapp.com/")}
                            >Try Demo</button>
                            <button className='code-btn'
                                onClick={()=>window.open('https://github.com/qijieguan/ECommerce_App')}
                            >Source Code</button>
                        </div>
                    </div>
                    
                    <div className='project-content'>
                        <div className='project-difficulty paragraph flex'>
                            <h1>Specifications
                                <AiOutlineClose size={25} color="red" style={{margin: ' 0 0 3px 5px'}}/>
                            </h1>
                            <span>
                                Create an interactive design for users.
                                The design will focus on creating visual elements such as 
                                interactive animations.
                            </span>
                        </div>
                        <div className='project-solution paragraph flex'>
                            <h1>Implementations
                                <AiOutlineCheck size={25} color="green" style={{margin: ' 0 0 3px 5px'}}/>
                            </h1>
                            <span>
                                A UI design was built by adding scrolling animations 
                                to visual presentation. Through using a tracking API,
                                CSS animations were applied to visual elements scrolling into the screen.
                            </span>
                        </div>

                        <div className='project-tech'>
                            <h1>Technologies</h1>
                            <ul>
                                <li>React</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                                <li>Express</li>
                                <li>Node</li>
                            </ul>
                        </div>
                    </div>  
                </li>
            </ul>
        </div>
    )
}

export default Project;