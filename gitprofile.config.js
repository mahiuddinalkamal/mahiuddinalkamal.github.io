// gitprofile.config.js

const config = {
  github: {
    username: 'mahiuddinalkamal', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 14, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['mahiuddinalkamal'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'mahiuddinalkamal',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://mahiuddinalkamal.com',
    phone: '+49-1789291398',
    email: 'contact@mahiuddinalkamal.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1jlNQmLwhklelKkmQFW60ZFdeVX9d3RnA/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'Spring Boot',
    'TypeScript',
    'Python',
    'C#',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'SAP S/4 HANA',
    'Cloud Foundry',
    'Docker',
    'Kubernetes',
    'Terraform',
    'Git',
    'Jenkins',
    'GitHub Actions',
    'AWS', 
    'Azure', 
    'GCP', 
    'SAP BTP',
    'Jira',
    'Confluence',
    'Blackduck', 
    'SonarCube', 
    'Fortify',
  ],
  experiences: [
{
      company: 'SAP SE, Germany',
      position: 'Developer Associate at SAP cDCM',
      from: 'April 2023',
      to: 'Present',
      companyLink: 'https://sap.com',
    },
     {
      company: 'SAP SE, Germany',
      position: 'Developer Associate at SAP Health',
      from: 'February 2022',
      to: 'March 2023',
      companyLink: 'https://sap.com',
    },
    {
      company: 'T-Systems MMS GmbH, Germany',
      position: 'Master Thesis Student',
      from: 'October 2021',
      to: 'January 2022',
      companyLink: 'https://t-systems-mms.com',
    },
    {
      company: 'T-Systems MMS GmbH, Germany',
      position: 'Software Engineer (Part-time)',
      from: 'February 2021',
      to: 'September 2021',
      companyLink: 'https://t-systems-mms.com',
    },
    {
      company: 'Millennium Information Solution Limited, Bangladesh',
      position: 'Assistant Software Engineer',
      from: 'February 2019',
      to: 'October 2017',
      companyLink: 'https://mislbd.com',
    },
    ],
  certifications: [
    {
      name: 'Cloud Native Developer (Java)',
      body: 'Issued By SAP',
      year: 'December 2022',
      link: 'https://www.credly.com/badges/b6133b7d-3525-4689-b426-682b515ee46d/linked_in_profile'
    },
    {
      name: 'Software Architecture: Domain Driven Design',
      body: 'Issued By LikedIn',
      year: 'April 2022',
      link: 'https://www.linkedin.com/learning/certificates/eb5136b66b53190cdea0aef645d2eecee09bf24072b03d8bd9980607d6aec605'
    },
  ],
  education: [
    {
      institution: 'TU DRESDEN, Germany',
      degree: 'Masters in Distributed Systems Engineering',
      from: 'Ocober 2019',
      to: 'February 2022',
    },
    {
      institution: 'Chittagong University of Engineering & Technology, Bangladesh',
      degree: 'B.Sc. in Computer Science & Engineering',
      from: 'May 2012',
      to: 'March 2017',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Easy Transport',
      description:
        'A fully automated ticketing system in respective to our locale transport (e.g.: Bus, Train, etc.) using RFID cards eliminating the need of a ticket checker. The cards can be recharged in the recharge points and an android app is used to manage the arduino module attached to the door of a vehicle. Passengers can travel from one place to another just by swiping the card near to the Arduino module and the fare will be automatically calculated & deducted in real-time',
    },
    {
      title: 'StreetGoods (An Adaptive App)',
      description: 'An adaptive app to provide a nice platform to the users of exchanging giveaway items. The app is smart and adaptive meaning it always listens for the contexts from the user and act accordingly to suit the user need.'
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'bumblebee',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,
};

export default config;
