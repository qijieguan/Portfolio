import flower_img from './images/flowers.jpg';
import recipe_img from './images/recipe.jpg';
import movie_img from './images/movie.jpg';
import shop_img from './images/shop.jpeg';
import schedule_img from './images/schedule.jpg';
import group_img from './images/group.jpg';
import food_img from './images/food.jpg';
import chat_img from './images/chat.png';

const Home = () => {

    return(
        <div className="home" id="home">
            <div className="overlay"/>
            <div className="profile">
                <img src={flower_img} className="profile-image" alt=""/><br/>
                <span style={fontStyle1}>Qi Jie Guan</span><br/>
                <div style={{fontSize: '24px', width: '70%', color: 'blueviolet'}}>A front-end developer/UI Designer.  
                Striving to design impactful websites and applications.</div><br/><br/> 
            </div>
            <div className="projects">
                <h1 style={fontStyle2}>Projects</h1>
                <ul className="project-ul">
                <li className="project-li" onClick={() => window.open("https://still-peak-27529.herokuapp.com/")}>
                        <img className='project-li-img' src={chat_img} alt=""></img>
                        <div className='project-li-name'>Chat App</div>
                    </li>
                    <li className="project-li" onClick={() => window.open("https://desolate-thicket-47298.herokuapp.com/")}>
                        <img className='project-li-img' src={shop_img} alt=""></img>
                        <div className='project-li-name'>Shopping App</div>
                    </li>
                    <li className="project-li" onClick={() => window.open("https://enigmatic-spire-34436.herokuapp.com/")}>
                        <img className='project-li-img' src={schedule_img} alt=""></img>
                        <div className='project-li-name'>Schedule App</div>
                    </li>
                    <li className="project-li" onClick={() => window.open("https://secret-hamlet-60850.herokuapp.com/")}>
                        <img className='project-li-img' src={group_img} alt=""></img>
                        <div className='project-li-name'>Q&A App</div>
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
                <h1 style={fontStyle2}>To Be Deployed</h1>
                <div className="project-li" onClick={() => window.open("https://github.com/qijieguan/Foods_App/")}>
                    <img className='project-li-img' src={food_img} alt=""></img>
                    <div className='project-li-name'>Food App [Android]</div>
                </div>
            </div>
        </div>
    );
};

const fontStyle1 = {
    fontSize: '50px',
    fontFamily: 'fantasy',
    textShadow: '1px 1px grey',
}

const fontStyle2 = {
    margin: '50px 0 20px 20px', 
    width: '80%', 
    fontSize: '20px', 
    fontFamily: 'fantasy',  
    textAlign: 'left'
}

export default Home;