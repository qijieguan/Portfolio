import flower_img from './images/flowers.jpg';
import shop_img from './images/shop.png';
import schedule_img from './images/schedule.jpg'

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
                    <li className="project-li" onClick={() => window.open("https://desolate-thicket-47298.herokuapp.com/")}>
                        <img className='project-li-img' src={shop_img} alt=""></img>
                        <div className='project-li-name'>Shopping App</div>
                    </li>
                    <li className="project-li" onClick={() => window.open("https://enigmatic-spire-34436.herokuapp.com/")}>
                        <img className='project-li-img' src={schedule_img} alt=""></img>
                        <div className='project-li-name'>Schedule App</div>
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