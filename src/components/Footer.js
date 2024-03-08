import lopsum from './lopsum.PNG';
import './Footer.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketball} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () =>{
    return (
        <>
        <div className="footer">
            <div className="contents">
            <img src={lopsum} alt=""  className="lopsum" />
            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.</span>
            <div className="anchors">
                <ul>
                    <li>About</li>
                    <li>Careers</li>
                    <li>History</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className="icons" >
                <li className='iconli'><FontAwesomeIcon icon={faGithub} /></li>
                <li className='iconli'><FontAwesomeIcon icon={faInstagram} /></li>
                <li className='iconli'><FontAwesomeIcon icon={faFacebook} /></li>
                <li className='iconli'><FontAwesomeIcon icon={faBasketball} /></li>
                <li className='iconli'><FontAwesomeIcon icon={faTwitter} /></li>
            </div>
            </div>

        </div>
        </>
    );
}

export default Footer;