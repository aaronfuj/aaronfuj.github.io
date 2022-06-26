import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Aaron Fujimoto', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Aaron Fujimoto',
  subtitle: ' ',
  cta: 'Get to know me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile_skim_portrait.png',
  paragraphOne:
    'Hello! My name is Aaron Fujimoto and I have had several Software Engineering related titles over the years. ' +
    'Ultimately, I enjoy using technology to solve problems.',
  paragraphTwo:
    'My experiences range from designing large scale on-premise systems to User Experience in Mobile/Web Apps and everywhere in between.',
  paragraphThree:
    'Away from the keyboard, I enjoy skimboarding and cooking. I have two cats. Yes, that is important.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    title: 'Local Surf Report (Oahu)',
    info:
      'A mobile friendly website for Hawaii Surf Reports, Forecasts, and Tide Charts using free data from NOAA',
    info2: '',
    url: 'https://surf.aaronfujimoto.com',
    repo: 'https://github.com/aaronfuj/oahu-surf-report', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'surf_news_network_mocks.png',
    title: 'Surf News Network (Android App)',
    info:
      'An Android App for Hawaii Surf Reports, Forecasts, and Tide Charts to allow less time on your phone and more time at the beach',
    info2: '',
    url: 'https://play.google.com/store/apps/details?id=com.fujimoto.hsf',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'hawaii_power_ballot_screenshot.png',
    title: 'Hawaii Power Ballot',
    info: 'A robust guide to who and what will be on the 2018 General Election ballot',
    info2: 'A collaborative project with friends to aid for the 2016 and 2018 Hawaii Elections',
    url: 'http://www.hawaiipowerballot.com/',
    repo: 'https://github.com/axelson/hawaii-power-ballot', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'contest_scoreboard_screenshot.png',
    title: 'Contest Scoreboard',
    info: 'A real-time, live scoring software to replace traditional pen and paper for contests',
    info2:
      'Used as part of DB Skimboards Chambers, Exile Oktoberfest, and smaller Hawaii skim contests',
    url: 'https://contest-scoreboard.herokuapp.com/',
    repo: 'https://github.com/aaronfuj/contest_scoreboard', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'aaronfuj@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'envelope',
      url: 'mailto:aaronfuj@gmail.com',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/aaronfujimoto/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/aaronfuj',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
