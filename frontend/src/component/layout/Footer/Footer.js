import React from 'react'
import appstore from '../../../images/app-store.png';
import playstore from '../../../images/playstore.png';
import './Footer';
import './Footer.css'


const Footer = () => {
           return (
            <footer id="footer">
                <div className="leftFooter">
                <h4>Blog Our Site</h4>
            <img src={playstore} alt="Work in Progress" />
                <img src={appstore} alt="NewBiew Comming" />             
                </div>
                <div className="midFooter">
                    <h2>Easy To Use</h2>
<p>Copyright 2021 &copy; AmarNath Pandit</p>
                </div>
<div className="rightFooter">
    <h4> Follow Us on </h4>
        <a href="http://instagram/amarpandit189">Instagram</a>
            <a href="http://Facebook.com/amarpandit189">Facebook</a>
 <a href="http://mobile/twitter.com/A_N_PANDIT189">Twitter</a>
   

</div>


            </footer>









        )
}

export default Footer;
