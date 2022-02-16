import recipe_img from './images/recipe.jpg';
import movie_img from './images/movie.jpg';
import shop_img from './images/shop.jpeg';
import schedule_img from './images/schedule.jpg';
import group_img from './images/group.jpg';
import food_img from './images/food.jpg';
import chat_img from './images/chat.webp';
import { Link } from 'react-router-dom';

const Home = () => {

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
            <div className="projects">
                <h1 style={fontStyle}>Projects</h1>
                <ul className="project-ul">
                    <li className="project-li" onClick={() => window.open("https://still-peak-27529.herokuapp.com/")}>
                        <img className='project-li-img' src={chat_img} alt=""></img>
                        <div className='project-li-name'>Chat App</div>
                    </li>
                    <li className="project-li" onClick={() => window.open("https://secret-hamlet-60850.herokuapp.com/")}>
                        <img className='project-li-img' src={group_img} alt=""></img>
                        <div className='project-li-name'>Q&A App</div>
                    </li>
                    <li className="project-li" onClick={() => window.open("https://desolate-thicket-47298.herokuapp.com/")}>
                        <img className='project-li-img' src={shop_img} alt=""></img>
                        <div className='project-li-name'>Shopping App</div>
                    </li>
                    <li className="project-li" onClick={() => window.open("https://enigmatic-spire-34436.herokuapp.com/")}>
                        <img className='project-li-img' src={schedule_img} alt=""></img>
                        <div className='project-li-name'>Schedule App</div>
                    </li>
                    <li className="project-li" onClick={() => window.open("https://protected-meadow-96612.herokuapp.com/")}>
                        <img className='project-li-img' src={movie_img} alt=""></img>
                        <div className='project-li-name'>Movie App</div>
                    </li>
                    <li className="project-li" onClick={() => window.open("https://cryptic-beyond-98060.herokuapp.com/")}>
                        <img className='project-li-img' src={recipe_img} alt=""></img>
                        <div className='project-li-name'>Recipe App</div>
                    </li>
                </ul>
                <h1 style={fontStyle}>To Be Deployed</h1>
                <div className="project-li" onClick={() => window.open("https://github.com/qijieguan/Foods_App/")}>
                    <img className='project-li-img' src={food_img} alt=""></img>
                    <div className='project-li-name'>Food App [Android]</div>
                </div>
            </div>
        </div>
    );
};

const fontStyle = {
    margin: '50px 0 30px 10%', 
    width: '100%', 
    fontSize: '32px', 
    fontFamily: 'fantasy',  
    textAlign: 'left'
}

export default Home;