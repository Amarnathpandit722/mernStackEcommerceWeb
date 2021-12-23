import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/amarpandit189";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/amarpandit189/image/upload/v1640083042/avatar/IMG_20190831_153309_hutmyd.jpg"
              alt="Founder"
            />
            <Typography>Amar Nath Pandit</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
             This Web App Basically Ecommerce Web Application ony Learning Purpose
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a              href="https://www.youtube.com/channel/UCMqmjFROUytDFDxMSjSk8Qw"    target="blank"            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com/amarpandit189" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>

<a href="https://www.linkedin.com/in/panditamarnath189" target="blank">
              <LinkedInIcon className="linkedinSvgIcon" />
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;