import '../styles/intro.css';
import { BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const Intro = () => {

    const linkedIn_url = "https://www.linkedin.com/in/qi-jie-guan-002924201/";
    const profile_url = "https://cdn.pixabay.com/photo/2023/01/26/08/21/business-7745314_1280.png";

    const scrollToElement = (query) => {
        let el = document.getElementsByClassName(query)[0];
        console.log(el)
        setTimeout(() => { el?.scrollIntoView({block: 'nearest', behavior: 'smooth'}); }, 500)
    }

    return (
        <div className='intro flex'>
            <div className='side-nav flex'>
                <div className='icon-wrapper flex'>
                    <MdEmail className='icon email'/>
                    <span className='side-nav-link'>qijieguan7@gmail.com</span>
                </div>
                <div className='icon-wrapper flex'>
                    <BsLinkedin className='icon linkedin'/>
                    <span className='side-nav-link'>{linkedIn_url}</span>
                </div>
                <div className='icon-wrapper flex'>
                    <IoLocation className='icon location'/>
                    <span className='side-nav-link'>Los Angeles County, CA</span>
                </div>
                <div className='icon-wrapper flex'>
                    <FaPhoneAlt className='icon phone'/>
                    <span className='side-nav-link'>(626) 757-2356</span>
                </div>
            </div>
            <div className='intro-content-wrapper flex'>
                <div className='intro-content flex'>
                    <h1>Qi Jie Guan</h1>
                    <span>A Web Developer and Problem Solver</span>
                    <span>
                        I build websites through visual element presentation, API integration, and user experiences.
                    </span>
                    <div className='intro-buttons flex'>
                        <button onClick={() => {scrollToElement('project-ul')}}>My Projects</button>
                        <button onClick={() => {scrollToElement('project-label')}}>My Skills</button>
                    </div>
                </div>
                
                <div className='intro-profile flex'>
                    <img src={profile_url} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Intro;