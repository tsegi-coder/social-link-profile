import React from 'react';
import Header from './Header';
import LinkSection from './LinkSection';

function SocialLinkProfile() {
  return (
    <div className="Social_link_Profile">
    <div className="container">
      <Header />
      <ul className="link-list">
      <LinkSection linkUrl="https://github.com/your-github-profile" linkName="GitHub" />
      <LinkSection linkUrl="https://www.your-website.com" linkName="FrontedMentor" />
      <LinkSection linkUrl="https://www.linkedin.com/in/jessica-ranall/" linkName="LinkedIn" />
       <LinkSection linkUrl="https://twitter.com/your-twitter-handle" linkName="Twitter" />
      <LinkSection linkUrl="https://www.instagram.com/your-instagram-handle/" linkName="Instagram" />
      </ul>
      </div>
    </div>
  );
}

export default SocialLinkProfile;
