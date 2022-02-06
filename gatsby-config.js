module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://sumaiyasaima05.github.io/`,
    // Your Name
    name: 'Sumaiya Saima Sultana',
    // Main Site Title
    title: `Sumaiya Saima  | AI Research Engineer`,
    // Description that goes under your name in main bio
    description: `AI Research Engineer`,
    // Optional: Twitter account handle
    //author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/SumaiyaSaima05`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/sumaiyasaima/`,
    // Content of the About Me section
    about: `Hi! I am Sumaiya Saima.I am an AI research Engineer proficient in Deep Learning and 
    Machine Learning based research and implementations for AI product development with agile methodologies. 
    Currently I am deplyoyed at AIST from Hiperdyne Corporation and my primary focus here is quality evaluation and standardization of the agile AI development process. 
    My work includes requirement engineering , problem domain analysis,surveying and implementing
    state-of-the art ML technologies, ML modeling, robustness analysis of various ML products etc.
    I have a Bachelor's degree focused in Mechanical Engineering from Bangladesh University of Engineering and Technology. `,
    
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Literature Reviews',
        description:
          'A big part of my job is to survey papers from different domains of Artificial Intelligence.The following link contains brief litearture reviews of some of the domains',
        link: 'https://github.com/SumaiyaSaima05/Portfolio/tree/master/Literature%20reviews',
      },
      {
        name: 'Problem solving using ML',
        description:
          'Check out the problems I solved using ML ',
        link: 'https://github.com/SumaiyaSaima05/Portfolio/tree/master/Problem%20solving%20using%20AI',
      },
      {
        name: 'Undergraduate works',
        description:
          'I was a Robotics Enthusiastic in my undergrad years.Check out the brief summaries of the projects I did following my passion ',
        link: 'https://github.com/SumaiyaSaima05/Portfolio/tree/master/Undergrad%20works',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Hiperdyne Corporation',
        description: 'Artificial Intelligence Research Engineer, July 2019 - Present',
        link: 'https://hiperdyne.com/',
      },
      {
        name: 'Hiperdyne Corporation',
        description: 'Artifical Inteligence Trainee, November 2018 - April 2019',
        link: 'https://hiperdyne.com/',
      },
      //{
        //name: 'Hooli',
        //description: 'Full-Stack Developer, May 2015 - December 2017',
        //link: 'https://github.com/RyanFitzgerald/devfolio',
      //},
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Python, C++, SQL, Ruby on Rails',
      },
      {
        name: 'Databases',
        description: ' MySQL',
      },
      {
        name: 'Other',
        description:
          'TensorFlow ,Git, Jupyter',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sumaiyasaima`,
        short_name: `sumaiyasaima`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.jpg`,
      },
    },
  ],
};
