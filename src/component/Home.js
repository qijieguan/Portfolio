import flower_img from './images/flowers.jpg';
import movie_img from './images/movie.jpg';
import shop_img from './images/shop.png';
import schedule_img from './images/schedule.jpg';
import topic_img from './images/topic.jpg';
import food_img from './images/food.jpg';

const Home = () => {

    return(
        <div className="home" id="home">
            <div className="intro">
                <div className="profile-image">
                    <img src={flower_img} alt=""/>
                </div><br/>
                <span style={fontStyle1}>Qi Jie Guan</span><br/>
                <div style={{fontSize: '24px', width: '70%', color: 'blueviolet'}}>A front-end developer/UI Designer.  
                Striving to design impactful websites and applications.</div><br/><br/> 
            </div>
            <div className="projects">
                <div style={fontStyle2}>Projects</div>
                <ul className="project-ul">
                    <li className="project-li" onClick={() => window.open("https://protected-meadow-96612.herokuapp.com/")}>
                        <img className='project-li-img' src={movie_img} alt=""></img>
                        <div className='project-li-name'>Movie App</div>
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
                        <img className='project-li-img' src={topic_img} alt=""></img>
                        <div className='project-li-name'>Q&A App [In Progress] </div>
                    </li>
                </ul>
                <div style={Object.assign({marginTop: '20%'},fontStyle2)}>To Be Deployed</div>
                <ul className="project-ul">
                    <li className="project-li" onClick={() => window.open("https://github.com/qijieguan/Foods_App/")}>
                        <img className='project-li-img' src={food_img} alt=""></img>
                        <div className='project-li-name'>Food App [Android]</div>
                    </li>
                </ul>
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
    margin: '50px 0 0 20px', 
    width: '80%', 
    fontSize: '20px', 
    fontFamily: 'fantasy',  
    textAlign: 'left'
}

export default Home;