/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

const greeting = {
  username: "Bruce Bolt",
  title: "Hi, I'm Bruce",
  subTitle: emoji(
    "I'm an experienced senior backend developer and technical lead. Currently working with Ruby on Rails, with previous experience in Python and Perl."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

const socialMediaLinks = {
  github: "https://github.com/brucebolt",
  linkedin: "https://www.linkedin.com/in/brucebolt/",
  gmail: "website-contact@brucebolt.com",
  display: true // Set true to display this section, defaults to false
};

export {
  greeting,
  socialMediaLinks,
};
