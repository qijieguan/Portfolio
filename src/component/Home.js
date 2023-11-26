import Intro from './Intro.js';
import Tech from './Tech.js';
import Project from './Project.js';

const Home = () => {
    return(
        <div className="home">
            <Intro/>
            <Tech/>
            <Project/>
        </div>
    );
};

export default Home;